import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./todo/TodoSlice";

const store = configureStore({
  reducer: {
    todos: TodoSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;