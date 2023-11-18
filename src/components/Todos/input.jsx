import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoADD, TodoChangeState, TodoEdit, TodoTRASH } from '../../Redux/Todo/todo-action';
import useSetLocal from '../../hooks/useSetLocal';
import { Alert, Space, Modal } from 'antd';

import "./input.css"
const Input = () => {

    const [inputValue, setInputValue] = useState("")
    const [modal1Open, setModal1Open] = useState(false);
    const [TaskUpdate, setTaskUpdate] = useState({ task: "", id: null });
    const [Etask, setEtask] = useState({ task: "", id: null })
    const [alert , setAlert] = useState('none')


    const data = useSelector(state => state);
    const dispath = useDispatch()
    useSetLocal(data)





    const handelTrash = (id) => {
        dispath(TodoTRASH(id))
    }



    // ! handel Add Todo
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

    const handelAddEnter = (e) => {
        e.key === 'Enter' && handelADD()
    }

    // ! handel Edit StaTE Todo
    const handelChangeState = (id) => {
        dispath(TodoChangeState(id))
    }
    const handelColorInput = (e) => {
        e.target.classList.toggle("onInputChange")
        e.target.nextElementSibling.classList.toggle("del")
    }
    const hanelChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    // ! Edit Input Handeler

    const handelEdit = (newTask) => {
        if (newTask.task != "" && newTask.task.trim() != "") {
            dispath(TodoEdit(newTask.id, newTask.task))
            setModal1Open(false)
            setAlert('none')

        }else{
            setAlert('block')
        }
    }

    const haneler = (value) => {
        setTaskUpdate({ task: value.task, id: value.id });
    }
    const handelEditNew = (e) => {
        setEtask({ ...Etask, task: e.target.value })
    }
    const handelEditEnter = (e) => {
        e.key === 'Enter' && handelEdit(Etask)
    }
    useEffect(() => {
        setEtask({ task: TaskUpdate.task, id: TaskUpdate.id })
    }, [TaskUpdate])





    useEffect(()=>{
        console.clear()
    },[])



    return (
        <div className='pt-1'>

            <div className='d-flex justify-content-between  mx-3 my-4 align-items-center'>
                <input type="text" className='form-control2 input-todo' placeholder='write your next task' onKeyDown={handelAddEnter} onChange={hanelChangeInput} value={inputValue} />
                <button className='btn-increase btn1 rounded-circle' onClick={handelADD}>+</button>
            </div>


            {
                data.map((item) => {
                    return (
                        <div className='Todo-Task card mt-3 unload mb-2' key={Math.random() * 1000}>
                            <div className='card-body Todo-Task px-4 d-flex justify-content-between'>
                                <div className='d-flex align-items-center position-relative'>
                                    <div className={`rounded-circle circle-todo px-2 ${item.taskState && 'onInputChange'}`} onClick={(e) => {
                                        handelColorInput(e)
                                        handelChangeState(item.id)
                                    }}></div>
                                    <div className={`Todo-Task-Titr ${item.taskState && 'del'}`} >{item.taskName}</div>
                                </div>
                                <div className='d-flex align-items-center Todo-Task-Icon'>
                                    <i className="fa-solid fa-pen-to-square" onClick={() => {
                                        setModal1Open(true)
                                        haneler({ task: item.taskName, id: item.id })
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
                <>
                    <div className='d-flex justify-content-between  mx-3 my-5  align-items-center'>
                        <input type="text" className='form-control2 input-todo input-todo2' placeholder='write your task' value={Etask.task} onChange={handelEditNew} onKeyDown={handelEditEnter} />
                        <button className='btn-increase btn1 rounded-circle' onClick={() => handelEdit(Etask)} ><i className="fa-solid fa-pen-to-square" ></i></button>
                    </div>

                    <Space
                        direction="vertical"
                        style={{
                            width: '100%',display:alert
                        }}
                    >
                          <Alert message="Please Enter The Value !" type="error" showIcon />
                    </Space>
                </>
            </Modal>
        </div>
    );
}

export default Input;
