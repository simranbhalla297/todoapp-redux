import { ADD_TODO } from "./types";

export const addTodo = (message) => ({
  type: ADD_TODO,
  message,
  id: Math.random(),
});
