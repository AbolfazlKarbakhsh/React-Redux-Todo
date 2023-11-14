import React, { useEffect, useState } from 'react';
import "./HeaderTodo.css"
import { useDispatch, useSelector } from 'react-redux';
const HeaderTodo = () => {

    const data = useSelector(state => state);
    const [taskDowm, setTaskDown] = useState(0);

    useEffect(() => {

        setTaskDown(0);
        data.map((item) => {
            if(item.taskState == true){
                setTaskDown(
                  prev => prev + 1
                )
                
            }
        })


    }, [data]);

    return (
        <div className="card">
            <div className="card-body headerTodo px-3 px-sm-5 px-md-5 d-flex justify-content-between align-items-center">

                <div className='TitrTodo'>
                    <h3>Todo Done</h3>
                    <h6>keep it up</h6>
                </div>

                <div className={`rounded-circle circleResalt d-flex justify-content-center align-items-center ${taskDowm == data.length && 'XYanimaite'}`}>
                    <strong> {taskDowm}</strong>
                    <strong> / </strong>
                    <strong> {data.length} </strong>
                </div>

            </div>
        </div>
    );
}

export default HeaderTodo;
