import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { name: 'user1', email: 'user1@gmail.com', password: 'password1' },
        { name: 'user2', email: 'user2@gmail.com', password: 'password2' },
        { name: 'user3', email: 'user3@gmail.com', password: 'password3' },
    ],
    currentUser: null, // { name, email, password }
};
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
    },
});

export default usersSlice.reducer;
