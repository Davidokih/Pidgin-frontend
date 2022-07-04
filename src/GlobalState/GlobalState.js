import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  bio: null,
  testPost: [],
  // newPost: [],
  // post: []
  saved: [],
  definition: [],
};

const Global = createSlice({
  name: "registerUser",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.user = payload;
    },

    createbio: (state, { payload }) => {
      state.bio.push(payload);
    },

    createPost: (state, { payload }) => {
      state.testPost = payload;
    },

    removePost: (state, { payload }) => {
      state.testPost = state.testPost.filter((el) => el._id !== payload._id);
    },
    updatePost: (state, { payload }) => {
      const check = state.testPost.findIndex((el) => el._id === payload._id);

      if (check >= 0) {
        state.testPost[ check ].QTY += 1;
      } else {
        state.changePost.push({ ...payload, QTY: 1 });
      }
    },

    createDefinition: (state, { payload }) => {
      state.definition.push(payload);
    },

    addSaved: (state, { payload }) => {
      const check = state.saved.findIndex((el) => el._id === payload._id);

      if (check >= 0) {
        state.saved[ check ].QTY += 1;
      } else {
        state.saved.push({ ...payload, QTY: 1 });
      }
    },

    removeSaved: (state, { payload }) => {
      state.saved = state.saved.filter((el) => el._id !== payload._id);
    },

    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { createUser, signOut, createbio, createPost, addSaved, removeSaved, createDefinition, updatePost, removePost } = Global.actions;

export default Global.reducer;
