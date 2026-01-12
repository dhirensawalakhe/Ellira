import { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  discount?: number;
  brand: string;
  inStock: boolean;
  description: string;
}

interface CompareContextType {
  compareItems: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (id: number) => void;
  clearCompare: () => void;
  isInCompare: (id: number) => boolean;
  compareCount: number;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareItems, setCompareItems] = useState<Product[]>([]);

  const addToCompare = (product: Product) => {
    setCompareItems(prevItems => {
      if (prevItems.length >= 4) {
        // Limit to 4 items for comparison
        return prevItems;
      }
      if (prevItems.find(item => item.id === product.id)) {
        return prevItems; // Already in compare
      }
      return [...prevItems, product];
    });
  };

  const removeFromCompare = (id: number) => {
    setCompareItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCompare = () => {
    setCompareItems([]);
  };

  const isInCompare = (id: number) => {
    return compareItems.some(item => item.id === id);
  };

  const compareCount = compareItems.length;

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        compareCount,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
}
