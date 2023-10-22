import React from 'react';
import "./input.css"
const Input = () => {
    return (
        <div className='pt-1'>
            <div className='d-flex justify-content-between  mx-3 my-4 align-items-center'>
                <input type="text" className='form-control2 input-todo' placeholder='write your next task' />
                <button className='btn-increase btn1 rounded-circle' >+</button>
            </div>

            <div className='Todo-Task card'>
                <div className='card-body Todo-Task px-4 d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <div className='rounded-circle circle-todo'></div>
                        <div className='Todo-Task-Titr'>Task 1</div>
                    </div>
                    <div className='d-flex align-items-center Todo-Task-Icon'>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <div className='mx-2'></div>
                    <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Input;
