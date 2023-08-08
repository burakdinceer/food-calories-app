import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : [
        {id:1,name:'Limonlu Kek',calories:[
            {id:1,name:'100 Gr',calori:352},
            {id:2,name:'1 Paket',calori:154}
        ]},
        {id:2,name:'Donat',calories:[
            {id:1,name:'100 Gr',calori:403},
            {id:2,name:'1 Paket',calori:170}
        ]},
        {id:3,name:'Efes Pilsen',calories:[
            {id:1,name:'100 Gr',calori:43},
            {id:2,name:'1 Şişe',calori:214}
        ]},
        {id:4,name:'Yulaf',calories:[
            {id:1,name:'100 Gr',calori:375},
            {id:2,name:'1 Paket',calori:1875}
        ]},
    ]
}

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{}
})

export default dataSlice.reducer