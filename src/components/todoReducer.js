import { ADD_TODO, DELETE_TODO } from "./types";
export const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      let newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id != action.payload);
      return newTodos;
    default:
      return state;
  }
};
export default todoReducer;
