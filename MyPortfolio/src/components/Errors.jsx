import React from "react";

class Errors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="container text-center mt-5">
                    <h1>Something went wrong</h1>
                    <p>We encountered an unexpected error. Please try again later.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default Errors;
