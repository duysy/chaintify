import axios from "axios";
import common from "./common";
type TCreate = {
  formData: any;
};
export async function create({ formData }: TCreate) {
  try {
    const response = await common.post("/music/upload/", formData);
    return response.data;
  } catch (error) {}
}
