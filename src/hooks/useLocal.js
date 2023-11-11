import React, { useEffect, useState } from 'react';

const useLocal = () => {
    const [task, setTask] = useState([]);

    useEffect(() => {
        const storage = localStorage.getItem("task")

        if(storage === null){
            localStorage.setItem("task", JSON.stringify([ {
                id: 1,
                taskName: "Example Task",
                taskState: false,
                taskEdit: false
            }]))
        }
        setTask(storage)

    },[])
    

    return [task, setTask]
}

export default useLocal;









