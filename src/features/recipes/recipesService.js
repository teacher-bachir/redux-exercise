import axios from "./../app/axiosConfig";

const API_URL = '/recipes';

export async function getAllRecipes() {
    const response = await axios.get(API_URL);
    return response?.data?.recipes;
}