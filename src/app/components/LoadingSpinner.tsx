import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <Loader2
      className={`animate-spin text-[#C9A961] ${sizeClasses[size]} ${className}`}
    />
  );
}

export function LoadingPage() {
  return (
    <div className="min-h-screen bg-[#0F0F1E] flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-[#F8F6F1] text-lg">Loading...</p>
      </div>
    </div>
  );
}
