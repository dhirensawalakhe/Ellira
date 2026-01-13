import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-[#0F0F1E] flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <AlertTriangle className="w-16 h-16 text-[#C9A961] mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-[#F8F6F1] mb-4">
              Something went wrong
            </h1>
            <p className="text-[#8E8E93] mb-8">
              We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
            </p>
            <div className="space-y-4">
              <Button
                onClick={this.handleRetry}
                className="bg-[#C9A961] hover:bg-[#D4B574] text-[#0F0F1E] px-6 py-3"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0F0F1E] px-6 py-3"
              >
                Go Home
              </Button>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="text-[#C9A961] cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-[#8E8E93] bg-[#1A1A2E] p-4 rounded overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
