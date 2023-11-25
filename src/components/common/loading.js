import React, { Component } from "react";
// import "./LoadingComponent.css";

class LoadingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.language !== prevProps.language) {
            this.setState({ isLoading: true });
            this.timeoutId = setTimeout(() => {
                this.setState({ isLoading: false });
            }, 1000);
        }
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        return this.state.isLoading ? (
            <div className="preloader">
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        ) : null;
    }
}

export default LoadingComponent;
