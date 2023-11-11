import { Type } from "./todo-type";


export const TodoADD = (value) => {
    return {
        type: Type.TodoAdd, ...value
    }
};


export const TodoTRASH = (id) => {
    return {
        type: Type.TodoDelete, id:id
    }
};
