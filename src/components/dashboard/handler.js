import { MESSAGES, CODES } from '../../utils/constants';
import { errorHandler } from '../../utils/errorHandler';
import { Car, Floor, Block, Parking_Lot } from '../../../models/index'

import express from 'express';

export async function getAllCars(request, response) {
    try {
        const getCars = await Car.findAll({});
        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.CAR.FETCH,
            data: getCars,
        });
    } catch (error) {
        errorHandler(error, response);
    }
}

export async function getTotalCars(request, response) {
    try {
        const getCars = await Car.findAll({});

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.CAR.FETCH,
            Total_Cars: getCars.length,
        });
    } catch (error) {
        errorHandler(error, response);
    }
}

export async function getTotalFloors(request, response) {
    try {
        const getFloors = await Floor.findAll({});

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.FLOOR.FETCH,
            Total_Floors: getFloors.length,
        });
    } catch (error) {
        errorHandler(error, response);
    }
}

export async function getTotalBlocks(request, response) {
    try {
        const getBlocks = await Block.findAll({});

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.BLOCK.FETCH,
            Total_Blocks: getBlocks.length,
        });
    } catch (error) {
        errorHandler(error, response);
    }
}

export async function getTotalParkingLots(request, response) {
    try {
        const getParkingLots = await Parking_Lot.findAll({});

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.PARKING_LOT.FETCH,
            Total_Parking_Lot: getParkingLots.length,
        });
    } catch (error) {
        errorHandler(error, response);
    }
}

export async function getCarRecords(request, response) {

 const { name, company, number_plate, color } = request.query;
    try {
        const getCarData = {};
        if (name) getCarData.carName = name;
        if (company) getCarData.carCompanyName = company;
        if (color) getCarData.carColor = color;
        if (number_plate) getCarData.numberPlate = number_plate;


        const result = await Car.findAll({
            where: getCarData
        })

        return response.status(CODES.SUCCESS).send({
            success: true,
            // message: MESSAGES.FLOOR.FETCH,
            data: result
        });
    } catch (error) {
        errorHandler(error);
    }

}

export async function getBlockCapacity(request, response) {
    try {
        const id = request.params.id;
        const data = await Block.findOne({
            where: {
                id: id
            }
        })

        const slotAvailibility = data.dataValues.available;
        const total_capacity = data.dataValues.total_Capacity;
        const current_capacity = (data.dataValues.current_Capacity);
        const available_capacity = total_capacity - current_capacity

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.BLOCK.FETCH,
            data: {
                is_slot_available: slotAvailibility,
                total_capacity: total_capacity,
                current_capacity: current_capacity,
                available_capacity: available_capacity,
            }
        });
    } catch (error) {
        console.log(error);
        errorHandler(error);
    }
}

export async function getFloorCapacity(request, response) {

    try {
        const id = request.params.id;
        const data = await Floor.findOne({
            where: {
                id: id
            }
        })

        const slotAvailibility = data.dataValues.available;
        const total_capacity = data.dataValues.totalCapacity;
        const current_capacity = (data.dataValues.currentCapacity);
        const available_capacity = total_capacity - current_capacity

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.FLOOR.FETCH,
            data: {
                is_slot_available: slotAvailibility,
                total_capacity: total_capacity,
                current_capacity: current_capacity,
                available_capacity: available_capacity,
            }
        });
    } catch (error) {
        console.log(error);
        errorHandler(error);
    }


}

export async function getParkingLotCapacity(request, response) {

    try {
        const id = request.params.id;
        const data = await Parking_Lot.findOne({
            where: {
                id: id
            }
        })

        const slotAvailibility = data.dataValues.available;
        const total_capacity = data.dataValues.total_Capacity;
        const current_capacity = (data.dataValues.current_Capacity);
        const available_capacity = total_capacity - current_capacity

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.PARKING_LOT.FETCH,
            data: {
                is_slot_available: slotAvailibility,
                total_capacity: total_capacity,
                current_capacity: current_capacity,
                available_capacity: available_capacity,
            }
        });
    } catch (error) {
        console.log(error);
        errorHandler(error);
    }


}

export async function getAll(request, response) {
    try {
        
        const id = request.params.id;
       

        const allData = await Parking_Lot.findAll({
            where: {
                id: id,
            },
            include: [
                {
                    model: Block,
                },
            ],
        });
        console.log("Data", allData);

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.PARKING_LOT.FETCH,
            data:  allData
        });
    } catch (error) {
        errorHandler(error, response);
    }
}
