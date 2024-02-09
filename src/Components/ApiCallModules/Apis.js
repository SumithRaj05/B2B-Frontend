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
}

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
}

export const GetCategory = async (category_type) => {
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(URL + '/api/products/category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify({
                category_type: category_type
            })
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
}

export const DeleteProduct = async (productId) => {
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(URL + '/api/products/' + productId, {
            method: 'DELETE',
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
}


// ------------------- CART OPERATIONS --------------------

export const AddItem = async (productId) => {
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(URL + '/api/users/cart/add-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify({
                product_id: productId
            })
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
}

export const GetItems = async () => {
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(URL + '/api/users/cart/get-cart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch user data. Status: ${response.status}`);
        }

        const cartData = await response.json();
        console.log(cartData);

        return cartData;
    } catch (error) {
        console.log("Error occurred while fetching user data:", error);
        throw error; // Propagate the error
    }
}

export const UpdateQuantity = async (productId, quantity) => {
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(URL + '/api/users/cart/update-quantity', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify({
                product_id: productId,
                quantity: quantity
            })
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
}

export const DeleteItem = async (productId) => {
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(URL + '/api/users/cart/delete-item', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify({
                product_id: productId
            })
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
}

export const DeleteCart = async () => {
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(URL + '/api/users/cart/clear-cart', {
            method: 'DELETE',
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
}
