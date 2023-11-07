// const path = window.location.pathname;

function parseQueryString(queryString) {
    const params = {};
    const queries = queryString.startsWith("?")
        ? queryString.substring(1)
        : queryString;
    const pairs = queries.split("&");
    for (const pair of pairs) {
        const [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value || "");
    }
    return params;
}

const url = (path) => {
    const sections = path.split("/");
    return {
        path: path,
        slug: sections.at(-1),
        slug1: sections.at(-2),
        queryString: parseQueryString(sections.at(-1)),
    };
};

export default url;
