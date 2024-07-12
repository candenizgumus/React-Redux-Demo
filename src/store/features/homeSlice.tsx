import { createSlice } from "@reduxjs/toolkit"

//1- InitialState değerleri
const initialState = {
    
}

// 2- Fetch işlemleri için AsynchThunk



// 3- Slice için oluşturma parametreleri
const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {},
    extraReducers: () => {} 
})

export default homeSlice.reducer