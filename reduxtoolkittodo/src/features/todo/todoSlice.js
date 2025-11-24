import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "Learn Redux Toolkit", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updatetodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, updatetodo } = todoSlice.actions;

export default todoSlice.reducer;
