import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

export const loginAsync = createAsyncThunk(
    'login',
    async(data) => {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Error');
        }
        const token = await response.json();
        return token;
    }
)

export const signUp = createAsyncThunk(
    'signUp',
    async(data) => {
        const response= await fetch("http://localhost:3001/api/v1/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Error');
        }
        return('Thank you for signing up with us! Your account has been successfully created.');
    }
)

export const getUserInfo = createAsyncThunk(
    'getUserInfo',
    async(token) => {
        const response = await fetch("http://localhost:3001/api/v1/user/profile" , {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Error');
        }
        const userInfo= await response.json();
        return userInfo;
    }
)

export const updateUserName= createAsyncThunk(
    'updateUserName',
    async(token, newUserName) =>{
        const response= await fetch("http://localhost:3001/api/v1/user/profile", {
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(newUserName)
        });
        if (!response.ok){
            throw new Error('Error');
        }
        return ('Username updated successfully')
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        userInfo: null,
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.token = action.payload;
        });
        builder.addCase(loginAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });



        builder.addCase(signUp.fulfilled, (state, action) => {
            state.status = 'succeeded';
        });
        builder.addCase(signUp.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });



        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.userInfo = action.payload;
        });
        builder.addCase(getUserInfo.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });



        builder.addCase(updateUserName.fulfilled, (state) => {
            state.status = 'succeeded';
        });
        builder.addCase(updateUserName.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
})


// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer