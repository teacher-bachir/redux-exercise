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
        login(state, action) {
            const currentUser = state.users.find(u => u.name === action.payload.name && u.password === action.payload.password);

            if (currentUser) {
                state.currentUser = currentUser;
            } else {
                alert('login failed');
            }
        },
        register(state, action) {
            const currentUser = action.payload;
            const isExists = state.users.some(u => u.email === currentUser.email);

            if (!isExists) {
                state.users.push(action.payload);
                state.currentUser = currentUser;
            } else {
                alert('register failed');
            }
        },
    },
});

export const { login, register } = usersSlice.actions;
export default usersSlice.reducer;
