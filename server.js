import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import session from 'express-session';
import passport from './src/services/passport/passport_local';
import morgan from 'morgan';
import cors from 'cors';
import { magenta, yellow } from 'colorette';
import routes from './src/routes';

const app = express();

// Configure session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
const whitelist = []; // if empty then allowing all
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.length === 0 || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(morgan('combined'));

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `${magenta('Server is running on port:')}${yellow(port)} ${magenta(
      'in',
    )} ${yellow(process.env.NODE_ENV)} ${magenta('mode')} `,
  );
});
