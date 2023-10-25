import React, { useEffect, useState } from 'react';
import HeaderTodo from './headerTodo';
import Input from './input';
import 'animate.css';


const Main = () => {
    const [preloader, setPreloder] = useState(
        <div className='proloader'>
            <div className='d-flex align-items-center justify-content-center h-100'>
                <h1 className='Titr-React font9 mx-2 proloader-animaite'>REDUX<span>TODO</span></h1>
            </div>
        </div>
    )

    useEffect(()=>{
        setTimeout(()=>{
            setPreloder("")
        },3500)
    },[])

    return (
        <div className=''>

            {
                preloader
            }

            <HeaderTodo />
            <Input />
        </div>
    );
}

export default Main;
