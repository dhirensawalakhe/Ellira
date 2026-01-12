import { X, GitCompare, ShoppingCart } from 'lucide-react';
import { useCompare } from '../contexts/CompareContext';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CompareModal({ isOpen, onClose }: CompareModalProps) {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();

  if (!isOpen) return null;

  const handleAddToCart = (product: typeof compareItems[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toast.success('Added to cart successfully!');
  };

  const specifications = [
    { label: 'Category', key: 'category' as keyof typeof compareItems[0] },
    { label: 'Brand', key: 'brand' as keyof typeof compareItems[0] },
    { label: 'Price', key: 'price' as keyof typeof compareItems[0] },
    { label: 'In Stock', key: 'inStock' as keyof typeof compareItems[0] },
    { label: 'Discount', key: 'discount' as keyof typeof compareItems[0] },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1A1A2E] max-w-7xl w-full max-h-[90vh] overflow-y-auto border border-[#C9A961]/20">
        <div className="p-6 border-b border-[#C9A961]/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GitCompare className="w-6 h-6 text-[#C9A961]" />
              <h2 className="text-2xl font-['Playfair_Display'] text-[#F8F6F1]">
                Compare Products ({compareItems.length})
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={clearCompare}
                className="px-4 py-2 text-[#8E8E93] hover:text-[#C9A961] transition-colors text-sm"
              >
                Clear All
              </button>
              <button
                onClick={onClose}
                className="text-[#8E8E93] hover:text-[#C9A961] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {compareItems.length === 0 ? (
            <div className="text-center py-12">
              <GitCompare className="w-16 h-16 text-[#8E8E93] mx-auto mb-4" />
              <p className="text-[#8E8E93] text-lg">No products to compare</p>
              <p className="text-[#8E8E93] text-sm">Add products to start comparing</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#C9A961]/20">
                    <th className="text-left py-4 px-2 text-[#F8F6F1] font-['Playfair_Display']">Product</th>
                    {compareItems.map((product) => (
                      <th key={product.id} className="text-center py-4 px-2 min-w-[250px]">
                        <div className="relative">
                          <button
                            onClick={() => removeFromCompare(product.id)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors text-xs"
                            title="Remove from compare"
                          >
                            ×
                          </button>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-lg mb-3"
                          />
                          <h3 className="text-[#F8F6F1] font-['Playfair_Display'] text-lg mb-2 line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-[#C9A961] text-xl font-semibold mb-3">
                            ₹{product.price.toLocaleString('en-IN')}
                          </p>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleAddToCart(product)}
                              className="flex-1 px-3 py-2 bg-[#C9A961] text-[#0F0F1E] hover:bg-[#D4B574] transition-colors text-sm flex items-center justify-center gap-1"
                            >
                              <ShoppingCart className="w-4 h-4" />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec) => (
                    <tr key={spec.label} className="border-b border-[#C9A961]/10">
                      <td className="py-4 px-2 text-[#F8F6F1] font-medium">{spec.label}</td>
                      {compareItems.map((product) => (
                        <td key={product.id} className="py-4 px-2 text-center text-[#8E8E93]">
                          {spec.key === 'price' ? (
                            <span className="text-[#C9A961] font-semibold">
                              ₹{product[spec.key]?.toLocaleString('en-IN')}
                            </span>
                          ) : spec.key === 'inStock' ? (
                            <span className={product[spec.key] ? 'text-green-500' : 'text-red-500'}>
                              {product[spec.key] ? 'In Stock' : 'Out of Stock'}
                            </span>
                          ) : spec.key === 'discount' ? (
                            product[spec.key] ? (
                              <span className="text-green-500 font-semibold">-{product[spec.key]}%</span>
                            ) : (
                              <span className="text-[#8E8E93]">No discount</span>
                            )
                          ) : (
                            product[spec.key] || 'N/A'
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="py-4 px-2 text-[#F8F6F1] font-medium">Description</td>
                    {compareItems.map((product) => (
                      <td key={product.id} className="py-4 px-2 text-center text-[#8E8E93] text-sm">
                        {product.description}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
