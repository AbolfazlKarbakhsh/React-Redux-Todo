import React, { useEffect, useState } from 'react';

const useSetLocal = (value) => {
    useEffect(() => {
            localStorage.setItem("task", JSON.stringify([...value]))
    },[value])
}



export default useSetLocal;









