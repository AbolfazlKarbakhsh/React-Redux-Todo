import React, { useEffect } from 'react'
import Header from './Todos/headerTodo/header';
import TodoReducer from '../Redux/Todo/todo-reducer';
import useLocal from '../hooks/useLocal';
import Main from './Todos/Main';
import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {

    const dispath = useDispatch()
    const [taskes , setTaskes] = useLocal()

  
 
    return (
        <div className='container mt-3'>
            <Header />
            <div className='mx-0 mx-lg-3 mt-2'>
                <div className='w-lg-100-min w-lg-50 mx-auto  px-lg-0 px-1'>
                    <Main />
                </div>
            </div>

        </div>
    )
}

export default Todos;
