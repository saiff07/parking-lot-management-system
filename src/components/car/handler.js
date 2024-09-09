import { MESSAGES, CODES } from '../../utils/constants';
import { errorHandler } from '../../utils/errorHandler';
import { Car, Parking_Lot, Block, Floor, Billing } from '../../../models/index';


export async function getCars(request, response) {
    try {

        const list = await Car.findAll({});


        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: list,
        });
    } catch (error) {
        errorHandler(error, response);
    }
}

export async function addCar(request, response) {
    try {
        const data = request.body;
        console.log("Data", data);

        const parking_lot = await Parking_Lot.findOne({
            where: {
                id: data.parkingLotId,
                available: 1,
            },
            attributes: [['id', 'parkingLotId']],
        });

        console.log("Parking _Lot", parking_lot);
        if (parking_lot) {
            const block = await Block.findOne({
                where: {
                    parkingLotId: parking_lot.dataValues.parkingLotId, // First one should be in the db and second one is from above
                    available: 1,
                },
                attributes: [['id', 'blockId']],
            });

            if (block) {
                // data.parkingLotId = parking_lot.dataValues.parkingLotId
                const floor = await Floor.findOne({
                    where: {
                        blockId: block.dataValues.blockId,
                        available: 1,
                    },
                    attributes: [['id', 'floorId']],
                });
                console.log("Success");

                // data.bId = block.dataValues.bId;
                data.floorId = floor.dataValues.floorId;


                console.log(data);
                if (floor) {
                    const car = await Car.create(data);
                    const entryTime = car.createdAt;

                    const bills = await Billing.create({
                        entryTime,
                        numberPlate: car.numberPlate,
                        parkingLotId: data.parkingLotId,
                    }
                    );
                }
                else {
                    return response.status(CODES.VALIDATION_FAILED).send({
                        success: true,
                        message: "Floor Capacity is Full",
                    })
                }

            }
            else {
                return response.status(CODES.VALIDATION_FAILED).send({
                    success: false,
                    message: "Block Capacity is Full",
                })
            }
        }
        else {
            return response.status(CODES.VALIDATION_FAILED).send({
                success: false,
                message: "Parking Lot is Full",
            })
        }

        return response.status(CODES.SUCCESS).send({
            success: true,
            // message: MESSAGES.CAR.SUCCESS,
            data: parking_lot
        })
    } catch (error) {
        console.log(error);
        errorHandler(error, response);
    }
}


function calculateTotalTime(entryTime, exitTime) {
    const entryTimestamp = new Date(entryTime).getTime();
    const exitTimestamp = new Date(exitTime).getTime();
    const timeDifference = exitTimestamp - entryTimestamp;
    const totalHours = timeDifference / (1000 * 60 * 60); // Convert milliseconds to hours
    console.log("Total Hours", totalHours);
    return totalHours;

}

async function calculateTotalBill(total_time, parkingLotId) {

    const parkingLot = await Parking_Lot.findByPk(parkingLotId);
    console.log("parkingLot", parkingLot);

    if (!parkingLot) {
        throw new Error('Parking Lot not found');
    }

    const initialFee = parkingLot.price;
    const hourlyRate = parkingLot.hourRate;

    let totalBill = initialFee;

    if (total_time <= 1) {
        totalBill = initialFee * total_time;
    }

    if (total_time > 1) {
        // Add hourly rate for each extra hour
        totalBill += (total_time - 1) * hourlyRate;
    }

    return totalBill;
}

export async function removeCar(request, response) {
    try {
        // const id = request.params.id;
        const data = request.body;

        // const car = await Car.findByPk(id);
        const car = await Billing.findOne({
            where: {
                numberPlate: data.numberPlate,
            }
        });
        const entry_time = car.createdAt;
        const exit_time = new Date();
        const total_time = calculateTotalTime(entry_time, exit_time);
        console.log("Total Time");

        // const total_bill = await calculateTotalBill(total_time, car.parkingLotId);

        const parkingLot = await Parking_Lot.findOne({
            where: {
                id: car.parkingLotId
            }
        });
        console.log("parkingLot", parkingLot);

        if (!parkingLot) {
            throw new Error('Parking Lot not found');
        }

        const initialFee = parkingLot.price;
        const hourlyRate = parkingLot.hourRate;

        let totalBill = initialFee;

        if (total_time <= 1) {
            totalBill = initialFee * total_time;
        }

        if (total_time > 1) {
            // Add hourly rate for each extra hour
            totalBill += (total_time - 1) * hourlyRate;
        }


        console.log("Total time and bill", total_time, totalBill);

        const updatedData = {
            exitTime: exit_time,
            parkingLotId: car.parkingLotId,
            numberPlate: car.numberPlate,
            bill: totalBill
        }
        const bill_data = await Billing.update(updatedData, {
            where: {
                numberPlate: car.numberPlate
            },
        });

        console.log("billing data", bill_data.dataValues);
        const list = await Car.destroy({
            where: {
                numberPlate: car.numberPlate
            },
            individualHooks: true
        });


        return response.status(CODES.SUCCESS).send({
            success: true,
            message: 'deleted',
            data: list,
        });
    } catch (error) {
        errorHandler(error, response);
    }
}


export async function updateCar(request, response) {
    try {
        // const id = request.user.id;
        const id = request.params.id;
        const data = request.body;
        const updatedData = await Car.update(data, {
            where: {
                id: id,
            },
        });

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: updatedData,

        });
    } catch (error) {
        errorHandler(error, response);
    }
}







