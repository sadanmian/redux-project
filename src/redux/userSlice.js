const { createSlice } = require("@reduxjs/toolkit");

// Initial State
const initialState = {
  name: "mian",
  email: "mian@gmail.com",
};

export const userSlice = createSlice({
  // Store name
  name: "user",
  // Initial State
  initialState,
  // Reducers
  reducers: {
    // Action
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}),
    addHello: (state, action) => {
      state.name = "Hello " + action.payload.name;
    },
  },
});

// Export Reducers
export default userSlice.reducer;
// Export Actions
export const { update, remove, addHello } = userSlice.actions;
