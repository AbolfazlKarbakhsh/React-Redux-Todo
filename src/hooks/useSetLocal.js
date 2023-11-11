import React, { useEffect, useState } from 'react';

const useLocal = (value) => {
    const [task, setTask] = useState([]);

    useEffect(() => {
        const storage = localStorage.getItem("task")

        if(storage === null){
            localStorage.setItem("task", JSON.stringify(...value))
        }
        setTask(storage)

    },[])
    

    return [task, setTask]
}

export default useLocal;









