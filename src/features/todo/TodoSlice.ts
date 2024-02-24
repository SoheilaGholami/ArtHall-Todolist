import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { InitialStateType, TodoType } from "../../Types/TodoType";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/todos");

      return response.data;
    } catch (error:any| string) {
      return rejectWithValue(error.message);
    }
  }
);

export const addAsyncTodo = createAsyncThunk(
  "todos/addAsyncTodo",
  async (
    { title, category, description, excerpt,date, isCompleted }: TodoType,
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post("/todos", {
        title,
        id: Date.now(),
        description,
        excerpt,
        category,
        isCompleted,
        date: date,
      });
      return response.data;
    } catch (error: any|string) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleAsyncTodo = createAsyncThunk(
  "todos/toggleAsyncTodo",
  async (payload: TodoType, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/todos/${payload.id}`, {
        isCompleted: !payload.isCompleted,
      });
      return response.data;
    } catch (error: any|string) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: InitialStateType = {
  todos: [],
  loading: false,
  error: "",
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodos.pending, (state) => {
        state.loading = true;
        state.todos = [];
        state.error = "";
      })
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = "";
      })
      
      .addCase(addAsyncTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAsyncTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })

      .addCase(toggleAsyncTodo.fulfilled, (state, action) => {
        const selectedTodo = state.todos.find(
          (todo) => todo.id === Number(action.payload.id)
        );
        if (selectedTodo) {
          selectedTodo.isCompleted = !selectedTodo.isCompleted;
        }
      });
  },
});

export default todoSlice.reducer;
