// services/CRUDFactory.js
const apiBaseURL = "http://127.0.0.1:8000/api/v1";

class CRUDFactory {
    static async fetchWrapper(endpoint, options = {}) {
        const response = await fetch(`${apiBaseURL}/${endpoint}`, options);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(
                data.error.message ||
                    `Server responded with a ${response.status} status.`
            );
        }
        return data;
    }

    static get(endpoint) {
        return this.fetchWrapper(endpoint);
    }

    // ... [other CRUD operations]
}
export default CRUDFactory;
