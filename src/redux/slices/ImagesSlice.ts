import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./Store";
import { IImage, IMediaItem } from "@/lib/Interfaces/ImgInterface";
import { AddImageMethod, getImagesMethod } from "@/lib/api/img";

interface IState {
  images: IMediaItem[];
  isLoading: boolean;
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

const initialState: IState = {
  images: [],
  isLoading: false,
  meta: {
    total: 0,
    page: 1,
    limit: 5,
    totalPages: 1,
  },
};

export const AddImageAction = createAsyncThunk(
  "img/addImage",
  async (data: IImage, thunkAPI) => {
    try {
      const res = await AddImageMethod(data);
      if (res.status !== "success") {
        return thunkAPI.rejectWithValue(res.message);
      }
      return res;
    } catch (err) {
      if (err instanceof Error) return thunkAPI.rejectWithValue(err.message);
      return thunkAPI.rejectWithValue(
        "An error occurred. Please try again later."
      );
    }
  }
);

export const getImagesAction = createAsyncThunk(
  "img/getImages",
  async ({ page = 1, limit = 5 }: { page?: number; limit?: number }) => {
    const res = await getImagesMethod({ page, limit });
    return res;
  }
);

const ImgSlice = createSlice({
  name: "img",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // todo => add images
    builder.addCase(AddImageAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(AddImageAction.fulfilled, (state, action) => {
      state.images.push(action.payload.data);
      state.isLoading = false;
    });
    builder.addCase(AddImageAction.rejected, (state) => {
      state.isLoading = false;
    });

    // todo => get all images
    builder.addCase(getImagesAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getImagesAction.fulfilled, (state, action) => {
      state.images = action.payload.data;
      state.meta = action.payload.meta;
      state.isLoading = false;
    });
    builder.addCase(getImagesAction.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {} = ImgSlice.actions;
export const imgSelector = (state: RootState) => state.img;
export default ImgSlice.reducer;
