import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { RootState } from "../store";

// const initialState = {
//   user: typeof window !== 'undefined' ? localStorage.getItem('user') || null : null,
//   token: typeof window !== 'undefined' ? localStorage.getItem('token') || null : null,
// };

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      const expirationTime = Date.now() + 3600000; // One hour expiration time
      
      localStorage.setItem('token', accessToken);
      localStorage.setItem('tokenExpiration', expirationTime.toString());
      localStorage.setItem('user', user);

      state.user = user;
      state.token = accessToken;
      return state;
    },
    logOut: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
      localStorage.removeItem('user');
      state.user = null;
      state.token = null;
    },
  },
});

export function useAuth() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const tokenExpiration = typeof window !== 'undefined' ? localStorage.getItem('tokenExpiration') : null;
    const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null;

    
    useEffect(() => {
      if (token && tokenExpiration && Date.now() > parseInt(tokenExpiration)) {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpiration');
          document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          localStorage.removeItem('user'); // Remove user when token has expired
        }
      }
    }, [token, tokenExpiration]);
  
    return { token:token ,user:user};
  }

export const {setCredentials,logOut} = authSlice.actions

export const selectCurrentUser = (state: RootState) => state.auth.user; 
export const selectCurrentToken = (state: RootState) => state.auth.token;


export default authSlice.reducer;