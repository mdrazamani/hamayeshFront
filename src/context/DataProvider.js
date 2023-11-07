// context/DataProvider.js
import React from "react";
import DataContext from "./DataContext";
import CRUDFactory from "../services/CRUDFactory";

class DataProvider extends React.Component {
    state = {
        data: {},
        loading: {},
        error: {},
    };

    // Helper method to build a query string from an object
    buildQueryString = (params) => {
        const query = Object.entries(params)
            .map(
                ([key, value]) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
            )
            .join("&");

        return query ? `?${query}` : "";
    };

    // Extended fetchData method with pagination and query parameters
    fetchData = async (endpoint, key, queryParams = {}) => {
        this.setState({ loading: { ...this.state.loading, [key]: true } });

        // Include pagination and other query parameters
        const queryString = this.buildQueryString({
            ...queryParams,
        });

        try {
            const data = await CRUDFactory.get(`${endpoint}${queryString}`);
            this.setState({ data: { ...this.state.data, [key]: data } });
        } catch (error) {
            this.setState({ error: { ...this.state.error, [key]: error } });
        } finally {
            this.setState({ loading: { ...this.state.loading, [key]: false } });
        }
    };

    render() {
        return (
            <DataContext.Provider
                value={{ ...this.state, fetchData: this.fetchData }}
            >
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default DataProvider;
