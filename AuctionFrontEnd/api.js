const API_URL = "http://localhost:3000/api";   // change if backend uses different port

// AUTH
async function loginUser(data) {
    return fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

async function registerUser(data) {
    return fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

// ITEMS CRUD
async function getAllItems() {
    return fetch(`${API_URL}/items`).then(res => res.json());
}

async function getItem(id) {
    return fetch(`${API_URL}/items/${id}`).then(res => res.json());
}

async function addItem(data, token) {
    return fetch(`${API_URL}/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

async function updateItem(id, data, token) {
    return fetch(`${API_URL}/items/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

async function deleteItem(id, token) {
    return fetch(`${API_URL}/items/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
    }).then(res => res.json());
}
