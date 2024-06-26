import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
    async({ token, newUserName }) =>{
        const response= await fetch("http://localhost:3001/api/v1/user/profile", {
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ userName: newUserName.username })
        });
        if (!response.ok){
            throw new Error('Error');
        }
        return newUserName;
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem('token') || null,
        userInfo: null,
        status: null,
        error: null
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.userInfo = null;
            state.status = null;
            state.error = null;
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            console.log("token", state.token);
            console.log("payload:", action.payload);
            state.token = action.payload.body.token;
            localStorage.setItem('token', action.payload.body.token);
        });
        builder.addCase(loginAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });



        builder.addCase(signUp.fulfilled, (state) => {
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



        builder.addCase(updateUserName.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.userInfo.body.userName = action.payload.username;
            console.log("state username", state.userInfo.body.userName);
            console.log("action payload: ", action.payload);
        });
        builder.addCase(updateUserName.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
})


// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { logout } = userSlice.actions
export default userSlice.reducer