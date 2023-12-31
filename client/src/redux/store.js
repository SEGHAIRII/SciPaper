import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducers";

const store = configureStore({
  reducer: { data: rootReducer },
});
export default store