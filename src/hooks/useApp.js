import { useState } from "react";
const FAV_LOCAL_KEY = "favs_key";

export const useApp = () => {
    const [favs_ar, setFavsAr] = useState(localStorage[FAV_LOCAL_KEY] ? JSON.parse(localStorage[FAV_LOCAL_KEY]) : [{
        name: "monkeys",
        link: "https://monkeys.co.il",
        subject: "general",
        id: 1
    },
    {
        name: "Ai geektime",
        link: "https://www.geektime.co.il/",
        subject: "ai",
        id: 2
    }
    ])

    const addFav = (_newItem) => {
        // setFavsAr([_newItem,...favs_ar]);
        // localStorage.setItem(FAV_LOCAL_KEY,JSON.stringify([_newItem,...favs_ar]))
        saveToLocal([_newItem, ...favs_ar]);
    };

    const delFav = (_idDel) => {
        const temp_ar = favs_ar.filter((item) => item.id != _idDel);
        // setFavsAr(temp_ar);
        // localStorage.setItem(FAV_LOCAL_KEY,JSON.stringify(temp_ar))
        saveToLocal(temp_ar);
    };

    const resetFav = () => {
        if (window.confirm("Are you sure you want to reset")) {
            saveToLocal([]);
            localStorage.removeItem(FAV_LOCAL_KEY);
        }
    };

    const saveToLocal = (_state) => {
        setFavsAr(_state);
        localStorage.setItem(FAV_LOCAL_KEY, JSON.stringify(_state));
    };

    return { favs_ar, addFav, delFav, resetFav };
}
