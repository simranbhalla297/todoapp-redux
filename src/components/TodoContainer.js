import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function TodoContainer(props) {
  const todoList = useSelector((state) => state.todo);

  console.log(todoList);
  const dispatch = useDispatch();
  const [inputvalue, setInputValue] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log(inputvalue);
    dispatch(addTodo(inputvalue));
    setInputValue("");
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleClick}>
        <div>
          <input
            type="text"
            value={inputvalue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button type="submit">Submit</button>

          {todoList.map((list, id) => {
            return (
              <div key={list.id}>
                <h1>{list.id}</h1>
                <p>{list.message}</p>
                <button
                  onClick={function () {
                    handleDelete(list.id);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default connect()(TodoContainer);
