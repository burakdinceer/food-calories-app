import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : [
        {id:1,name:'Limonlu Kek',url:'limonlu-kek.jpeg',calories:[
            {id:1,name:'100Gr',calori:352},
            {id:2,name:'1 Paket',calori:154}
        ]},
        {id:2,name:'Donut',url:'donut.jpeg',calories:[
            {id:1,name:'100Gr',calori:403},
            {id:2,name:'1 Paket',calori:170}
        ]},
        {id:3,name:'Efes Pilsen',url:'efes-pilsen.jpeg',calories:[
            {id:1,name:'100Gr',calori:43},
            {id:2,name:'1 Şişe',calori:214}
        ]},
        {id:4,name:'Yulaf',url:'yulaf.webp',calories:[
            {id:1,name:'100Gr',calori:375},
            {id:2,name:'1 Paket',calori:1875}
        ]},
    ],
    filterData: []
}

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
        filterInput:(state,action) => {
            state.filterData = action.payload
        }
    }
})

export const {filterInput} = dataSlice.actions
export default dataSlice.reducer