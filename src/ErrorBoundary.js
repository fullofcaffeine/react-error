import {Component} from 'react';
class ErrorBoundary extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
    });

    // Sentry code here
    //
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
