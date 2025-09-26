import axios from "axios";

const API_URL = 'https://dummyjson.com/recipes';

export async function getAllRecipes() {
    const response = await axios.get(API_URL);
    return response?.data?.recipes;
}