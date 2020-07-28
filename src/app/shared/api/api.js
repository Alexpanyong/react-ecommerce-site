import { API_ENDPOINT_BOOKS } from "../config/config";
import sampleData from "../../data/sampleData.json";

export const fetchBooksData = async () => {
  try {
    const response = await fetch(API_ENDPOINT_BOOKS, {
        mode: "no-cors",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Fetch books data failed, use local sample data --", err);
    return sampleData;
  }
};
