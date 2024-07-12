import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    userList: [],
    isLoading : false,
    indexUser:-1
}

export const fetchGetAllUsers = createAsyncThunk(
    'user/fetchGetAllUsers',
    async () => {
       const response= await fetch('https://dummyjson.com/users')
        .then(res => res.json())
        return response;
        
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setIndexUser: (state, action) => {
            state.indexUser = action.payload
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchGetAllUsers.pending, (state) => {
            state.isLoading = true
        })
        build.addCase(fetchGetAllUsers.fulfilled, (state, action) => {
            state.userList = action.payload.users
            state.isLoading = false
        })
        build.addCase(fetchGetAllUsers.rejected, (state) => {
            state.isLoading = false
        })
    }
})


export const {
    setIndexUser
} = userSlice.actions

export default userSlice.reducer