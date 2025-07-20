import { Product } from "./types";
import { data } from "../../../data/data"; // استورد البيانات الوهمية

export const getProduct = async (): Promise<Product[]> => {
  // أعد البيانات الوهمية بدل Firestore
  return data as Product[];
};
