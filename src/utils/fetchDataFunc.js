// FetchDataService.js
import { makeRoute } from "./apiRoutes";

const FetchDataService = async (fetchDataFromContext, options) => {
    const queryParams = {
        page: options.newPage || options.page,
        items_per_page: options.totalPages, // It seems you've named 'pageSize' as 'totalPages', ensure to keep naming consistent
    };
    if (options.api.options) Object.assign(queryParams, options.api.options);

    await fetchDataFromContext(
        makeRoute(
            options.api.apiTitle,
            options.api.id,
            options.api.subTitle,
            options.api.options
        ),
        options.dataName,
        queryParams
    );
};

export default FetchDataService;
