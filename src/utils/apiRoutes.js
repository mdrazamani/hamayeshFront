const baseURL = process.env.REACT_APP_API_BASE_URL;

function makeQueryString(options) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(options)) {
        params.append(key, value);
    }
    return `?${params.toString()}`;
    // return `?${params.toString()}`;
}

export const makeRoute = (
    apiTitle,
    id = null,
    subTitle = null,
    options = null
) => {
    const path = id ? `/${id}` : "";
    // const queryString = options ? makeQueryString(options) : "";
    const queryString = "";
    const subTitleStr = subTitle ? "/" + subTitle : "";

    return `${apiTitle}${path}${subTitleStr}${queryString}`;
};

export const any = (api) => `${api}`;
