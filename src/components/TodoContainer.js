import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";

function TodoContainer(props) {
  const [inputvalue, setInputValue] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log(inputvalue);
    props.dispatch(addTodo(inputvalue));
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
        </div>
      </form>
    </div>
  );
}

export default connect()(TodoContainer);
