const API_BASE_URL = "http://127.0.0.1:8000";

export const signupUser = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/users/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail || "Signup failed");
    }

    return data;
};