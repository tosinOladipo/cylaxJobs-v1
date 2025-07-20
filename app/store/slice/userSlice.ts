import { userLocalStorage } from '@/utils/localstorage/localstorage';
import { profileType, UserType } from '@/utils/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


type UserState = {
  user: profileType | null
};


const initialState: UserState = {
  user: userLocalStorage() || null
};



export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<profileType>) => {
      state.user = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;