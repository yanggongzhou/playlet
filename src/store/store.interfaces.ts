import { IClipboard } from "@/typings/hive.interfaces";
import { EnumPosition } from "@/typings/home.interface";

export interface IHiveStore {
  clipboard: IClipboard;
  copyText: string;
}

export enum EDevice {
  mobile = 1,
  pc = 2,
}

export interface IAppStore {
  device: EDevice;
  footerAdVisible: boolean;
  position?: EnumPosition;
}
