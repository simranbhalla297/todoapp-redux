import { ADD_TODO } from "./types";
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        // that has all the existing state todos
        ...state,
        // but has a new array for the `todos` field
        todos: [
          // with all of the old todos
          ...state.todos,
          { message: action.message, id: action.id },
        ],
      };

    default:
      return state;
  }
};
export default todoReducer;
