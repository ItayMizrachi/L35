import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    links_ar: [{
        name: "Monkeys",
        link: "http://monkeys.co.il",
        id: 1
    }, {
        name: "udemy",
        link: "http://udemy.com",
        id: 2
    }
    ]
}

const linkSlice = createSlice({
    name: "links",
    initialState: initialState,
    reducers: {

    }
})

export default linkSlice.reducer;