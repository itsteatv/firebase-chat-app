import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth"
import { auth } from "../firebase"
import { toast } from 'react-toastify';

const initialState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
        },
    },
});

export const signInWithGoogleAsync = createAsyncThunk('signInWithGoogle', async () => {
    try {
        const provider = new GoogleAuthProvider();
        await signInWithRedirect(auth, provider);
    } catch (error) {
        toast.error("An error occurred" + error.message);
    }
});

export const logoutAsync = createAsyncThunk('user/logout', async () => {
    await signOut(auth);
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
export default userSlice.reducer;
