import "./App.css";
import TodoContainer from "./components/TodoContainer";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <TodoContainer />
      </Provider>
    </>
  );
}

export default App;
