import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});
