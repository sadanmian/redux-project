import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const updateUser2 = createAsyncThunk("users/update", async (user) => {
  const res = await axios.post(
    "http://localhost:8800/api/users/123/update",
    user
  );
  return res.data;
});

// Initial State
const initialState = {
  userInfo: {
    name: "mian",
    email: "mian@gmail.com",
  },
  pending: null,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [updateUser2.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
export const { updateStart, updateSuccess, updateError } = userSlice.actions;
