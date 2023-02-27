import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice"
import icecreamReducer from "../features/icecream/icecreamSlice"
import userReducer from "../features/user/userSlice"
import tofeeReducer from '../features/tofee/tofeeSlice'

// const reduxLogger = require("redux-logger");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: icecreamReducer,
    tofee:tofeeReducer,
    user:userReducer
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
