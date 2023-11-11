import { createStore }  from "redux";
import TodoReducer from "./Todo/todo-reducer";
export const store = createStore(TodoReducer);


