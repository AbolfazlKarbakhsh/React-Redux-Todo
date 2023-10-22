import React from 'react';
import "./HeaderTodo.css"
const HeaderTodo = () => {
    return (
        <div class="card">
            <div class="card-body headerTodo px-3 px-sm-5 px-md-5 d-flex justify-content-between align-items-center">

                <div className='TitrTodo'>
                    <h3>Todo Done</h3>
                    <h6>keep it up</h6>
                </div>

                <div className='rounded-circle circleResalt d-flex justify-content-center align-items-center '>
                    <strong> 1 </strong>
                    <strong> / </strong>
                    <strong> 3 </strong>
                </div>

            </div>
        </div>
    );
}

export default HeaderTodo;
