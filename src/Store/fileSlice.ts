import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Certificate {
  certificationName: string;
  issuer: string;
  file: File;
  date: string;
}

interface FileState {
  certificates: Certificate[];
}

const initialState: FileState = {
  certificates: [],
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    addFile: (state, action: PayloadAction<Certificate>) => {
      if (state.certificates.length < 5) {
        state.certificates.push(action.payload);
      }
    },
    removeFile: (state, action: PayloadAction<number>) => {
      state.certificates.splice(action.payload, 1);
    },
  },
});

export const { addFile, removeFile } = fileSlice.actions;
export default fileSlice.reducer;