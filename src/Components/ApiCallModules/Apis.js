import { URL } from "../Auth/Auth"

export const GetUser = async () => {
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(URL + '/api/users/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch user data. Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error occurred while fetching user data:", error);
        throw error; // Propagate the error
    }
};

export const GetProduct = async (productId) => {
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(URL + '/api/products/' + productId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch user data. Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error occurred while fetching user data:", error);
        throw error; // Propagate the error
    }
};
