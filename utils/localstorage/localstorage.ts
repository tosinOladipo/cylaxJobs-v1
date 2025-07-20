import { profileType } from "../types";


export const userLocalStorage = (): profileType | undefined => {
  try {
    const data = localStorage.getItem('userInfo');
    if (data === null) return undefined;
    return JSON.parse(data) as profileType;
  } catch (e) {
    return undefined;
  }
};