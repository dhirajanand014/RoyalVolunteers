import React from 'react';
import { RVFallBackComponent } from './RVFallBackComponent';

export default class RVErrorBoundary extends React.PureComponent {

    state = {
        error: false
    }

    static getDerivedStateFromError(error) {
        return { error: true };
    }

    componentDidCatch(error, errorInfo) {
        // deal with errorInfo if needed
    }

    render() {

        if (this.state.error) {
            return <RVFallBackComponent />;
        }
        return this.props.children;
    }
}
