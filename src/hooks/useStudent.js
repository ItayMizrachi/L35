import { useState } from 'react';

export const useStudent = () => {
    const KEY_LOCAL = "students_ar";

    const [students_ar, setStudentsAr] = useState(localStorage[KEY_LOCAL] ? JSON.parse(localStorage[KEY_LOCAL]) : [
        { name: "koko", id: 1 },
        { name: "moshe", id: 2 },
    ])

    const addStudent = (_newItem) => {
        saveLocal([_newItem, ...students_ar]);
    }

    const removeStudent = (_idDel) => {
        let filter_ar = students_ar.filter(item => item.id != _idDel)
        saveLocal(filter_ar)
    }

    const saveLocal = (_newState) => {
        setStudentsAr(_newState);
        localStorage.setItem(KEY_LOCAL, JSON.stringify(_newState));
    }

    return { students_ar, addStudent, removeStudent }
}
