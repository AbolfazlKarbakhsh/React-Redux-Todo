import React, { useEffect } from 'react';
import { Type } from './todo-type';
import { act } from 'react-dom/test-utils';


const tasks = [
        {
            id: 1,
            taskName: "Learn React in Tommarow",
            taskState: false,
            taskEdit: false
        }
]

const TodoReducer = (state = [...tasks], action) => {
    switch (action.type) {

        case Type.TodoAdd: {
            return [
                ...state ,
                {
                    id: action.id,
                    taskName: action.taskName,
                    taskState: action.taskState,
                    taskEdit: action.taskEdit
                }
            ]
        }

        case Type.TodoDelete: {
            return state.filter(item => item.id != action.id)
        }

        case Type.TodoEdit: {

        }

        case Type.TodoState: {

        }

        default: {
            return state
        }
    }
}

export default TodoReducer;
