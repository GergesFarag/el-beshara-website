import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAdmin } from "@/lib/Interfaces/AdminInterface";
import { getAdminsMethod } from "@/lib/api/admin";
import { RootState } from "./Store";

interface IState {
  admins: IAdmin[];
  isLoading: boolean;
}

const initialState: IState = {
  admins: [],
  isLoading: false,
};

export const getAllAdminsAction = createAsyncThunk(
  "admins/getAllAdmins",
  async () => {
    const res = await getAdminsMethod();
    return res.data;
  }
);

const AdminsSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAdminsAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllAdminsAction.fulfilled, (state, { payload }) => {
      state.admins = payload;
      state.isLoading = false;
    });
    builder.addCase(getAllAdminsAction.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {} = AdminsSlice.actions;
export const adminsSelector = (state: RootState) => state.admins;
export default AdminsSlice.reducer;
