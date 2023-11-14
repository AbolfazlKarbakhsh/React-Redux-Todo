import { Type } from './todo-type';


// exampel task  object 
const initialTask = [
    {
        id: 1,
        taskName: "Example Task",
        taskState: false,
        taskEdit: false
    }
];

// ?getStorage For Chack is null or Undifind
let storage = localStorage.getItem("task");

if (storage === null || JSON.parse(storage)[0] == undefined) {
    localStorage.setItem("task", JSON.stringify(initialTask));
}

// ?Re Set Storage When Null Or HasDatas
storage = localStorage.getItem("task");


let tasks = JSON.parse(storage);



const TodoReducer = (state = [...tasks], action) => {
    switch (action.type) {

        case Type.TodoAdd: {
            return [
                ...state,
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
            return state.map(item => {
                if(item.id == action.id){
                   return { ...item , taskName:action.value}
                }else{
                    return {...item}
                }
            })
        }

        case Type.TodoState: {
            return state.map(item => {
                if(item.id == action.id){
                   return { ...item , taskState:!item.taskState }
                }else{
                    return {...item}
                }
            })
        }

        default: {
            return state
        }


    }
}

export default TodoReducer;
