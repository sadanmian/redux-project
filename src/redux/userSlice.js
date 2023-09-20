const { createSlice } = require("@reduxjs/toolkit");

// Initial State
const initialState = {
  userInfo: {
    name: "mian",
    email: "mian@gmail.com",
  },
  pending: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
export const { updateStart, updateSuccess, updateError } = userSlice.actions;
