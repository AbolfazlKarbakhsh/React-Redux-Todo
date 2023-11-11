import React, { useEffect, useState } from 'react';
import HeaderTodo from './headerTodo/headerTodo';
import Input from './input';
import useLocal from "../../hooks/useLocal"
import 'animate.css';


const Main = () => {

    const [preloader, setPreloder] = useState(
        <div className='proloader'>
            <div className='d-flex align-items-center justify-content-center h-100'>
                <h1 className='Titr-React font9 mx-2 proloader-animaite'>REDUX<span>TODO</span></h1>
            </div>
        </div>
    )
    useEffect(() => {
        setTimeout(() => {
            setPreloder("")
        }, 1000)
    }, [])

    return (
        <div>

            {
                preloader
            }

            <HeaderTodo />
            <Input />
        </div>
    );
}

export default Main;
