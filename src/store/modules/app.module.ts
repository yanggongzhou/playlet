import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EDevice, IAppStore } from "@/store/store.interfaces";
import { EnumPosition } from "@/typings/home.interface";

export const appSlice = createSlice({
  name: 'app',
  initialState: (): IAppStore => ({
    device: EDevice.mobile,
    position: void 0,
    footerAdVisible: false, // m底部横幅是否显示
  }),
  reducers: {
    setDevice: (state: IAppStore, action: PayloadAction<EDevice>) => {
      state.device = action.payload;
    },
    setPosition: (state: IAppStore, action: PayloadAction<EnumPosition | undefined>) => {
      state.position = action.payload;
    },
    setFooterAdVisible: (state: IAppStore, action: PayloadAction<boolean>) => {
      state.footerAdVisible = action.payload;
    },
  }
});

export const { setDevice, setPosition, setFooterAdVisible } = appSlice.actions;

export const appReducer = appSlice.reducer;
