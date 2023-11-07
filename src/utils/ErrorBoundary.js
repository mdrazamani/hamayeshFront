// utils/ErrorBoundary.js
import React from "react";

class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI here
            return <h1>An error occurred: {this.state.error.message}</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
