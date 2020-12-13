import { ADD_TODO, DELETE_TODO } from "./types";

let todoID = 0;
export const addTodo = (message) => ({
  type: ADD_TODO,
  payload: { id: ++todoID, message },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
//action creators
