import React, { useState } from 'react';
import "./input.css"
import { useDispatch, useSelector } from 'react-redux';
import { TodoADD, TodoChangeState, TodoTRASH } from '../../Redux/Todo/todo-action';
import useSetLocal from '../../hooks/useSetLocal';
import { Modal } from 'antd';
const Input = () => {

    const [inputValue, setInputValue] = useState("")
    const [modal1Open, setModal1Open] = useState(false);
    const [TaskUpdate, setTaskUpdate] = useState("");

    const data = useSelector(state => state);
    const dispath = useDispatch()
    useSetLocal(data)


    const handelADD = () => {
        if (inputValue != "" && inputValue.trim() != "") {
            dispath(TodoADD({
                id: Math.random() * 100000,
                taskName: inputValue,
                taskState: false,
                taskEdit: false
            }))
        }

        setInputValue("")
    }


    const handelTrash = (id) => {
        dispath(TodoTRASH(id))
    }

    const handelChangeState = (id) => {
        dispath(TodoChangeState(id))
    }

    const handelAddEnter = (e) => {
        e.key === 'Enter' && handelADD()
    }

    const handelColorInput = (e) => {
        e.target.classList.toggle("onInputChange")
        e.target.nextElementSibling.classList.toggle("del")
    }
    const hanelChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const haneler = (value)=>{
        setTaskUpdate(value)
    }







    return (
        <div className='pt-1'>
            <div className='d-flex justify-content-between  mx-3 my-4 align-items-center'>
                <input type="text" className='form-control2 input-todo' placeholder='write your next task' onKeyDown={handelAddEnter} onChange={hanelChangeInput} value={inputValue} />
                <button className='btn-increase btn1 rounded-circle' onClick={handelADD}>+</button>
            </div>


            {
                data.map((item) => {
                    return (
                        <div className='Todo-Task card mt-3 unload' key={Math.random() * 1000}>
                            <div className='card-body Todo-Task px-4 d-flex justify-content-between'>
                                <div className='d-flex align-items-center position-relative'>
                                    <div className={`rounded-circle circle-todo px-2 ${item.taskState && 'onInputChange'}`} onClick={(e) => {
                                        handelColorInput(e)
                                        handelChangeState(item.id)
                                    }}></div>
                                    <div className={`Todo-Task-Titr ${item.taskState && 'del'}`} >{item.taskName}</div>
                                </div>
                                <div className='d-flex align-items-center Todo-Task-Icon'>
                                    <i className="fa-solid fa-pen-to-square" onClick={() =>{ setModal1Open(true) 
                                    haneler(item.taskName)
                                    }
                                    }></i>
                                    <div className='mx-2'></div>
                                    <i className="fa-solid fa-trash" onClick={() => { handelTrash(item.id) }}></i>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


            <Modal
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
                okText="Edit"
                cancelText=" Cancel"
            >
                <div className='d-flex justify-content-between  mx-3 my-5  align-items-center'>
                    <input type="text" className='form-control2 input-todo input-todo2' placeholder='write your task' defaultValue={TaskUpdate} />
                    <button className='btn-increase btn1 rounded-circle' onClick={handelADD} ><i className="fa-solid fa-pen-to-square" ></i></button>
                </div>
            </Modal>
        </div>
    );
}

export default Input;
