import React, {Component} from 'react';
import {connect} from 'react-redux';
import ErrorPage from '../../pages/errorPage/ErrorPage';
import Wrapper from '../../components/Wrapper';

interface IState {
  error: { message: string; } | null;
}

interface ErrorBoundaryProps {
  dispatch: any;
  children: React.ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, IState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {error: null};
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { error: {message: error.message} };
  }

  render() {
    return this.state.error ?
      <Wrapper>
        <ErrorPage message={this.state.error.message} />
      </Wrapper>
      : this.props.children;
  }
}

export default connect()(ErrorBoundary);