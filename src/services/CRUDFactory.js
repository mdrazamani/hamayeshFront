const apiBaseURL = "http://185.252.86.10:8000/api/v1";

let language =
    localStorage.getItem("language") || process.env.REACT_APP_DEFAULT_LANGUAGE;
window.addEventListener("languageChanged", (event) => {
    language = event.detail;
});

class CRUDFactory {
    static async fetchWrapper(endpoint, options = {}) {
        // اضافه کردن هدر accept-language
        const headers = {
            "Accept-Language": language,
            ...options.headers,
        };

        const response = await fetch(`${apiBaseURL}/${endpoint}`, {
            ...options,
            headers,
        });
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
