import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const counter = atom({
  key: "counter",
  default: 0,
  effects: [persistAtom]
});
