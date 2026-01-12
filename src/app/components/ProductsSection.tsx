import { useState, useMemo } from 'react';
import { Heart, Eye, ShoppingCart, Grid3x3, LayoutGrid, ChevronLeft, ChevronRight, Repeat, X } from 'lucide-react';
import * as Slider from '@radix-ui/react-slider';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

const allProducts = [
  {
    id: 1,
    name: 'Heritage Wall Mount Premium',
    category: 'Wall Mount Mandirs',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29qYSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTczNDcyMTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 15,
    brand: 'Ellira Heritage',
    inStock: true,
    description: 'Elegant wall-mounted mandir with intricate carvings and premium finish, perfect for modern homes.'
  },
  {
    id: 2,
    name: 'Divine Lotus Mandir',
    category: 'Traditional Mandirs',
    price: 28500,
    image: 'https://images.unsplash.com/photo-1744893679733-1cf3c7837982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b29kZW4lMjBtYW5kaXJ8ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 10,
    brand: 'Ellira Heritage',
    inStock: true,
    description: 'Beautiful lotus-inspired design symbolizing purity and divine grace, handcrafted with precision.'
  },
  {
    id: 3,
    name: 'Kanak (Pakhi Concept Pooja Mandir)',
    category: 'Designer Mandirs',
    price: 110500,
    image: 'https://images.unsplash.com/photo-1657938169455-19011c99cf46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFrd29vZCUyMHRlbXBsZSUyMGhvbWV8ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Ellira Premium',
    inStock: true,
    description: 'Exquisite bird motif design representing freedom and spirituality, crafted for discerning devotees.'
  },
  {
    id: 4,
    name: 'Dwaar (Exclusive Wooden Mandir with Jali)',
    category: 'Traditional Mandirs',
    price: 68750,
    image: 'https://images.unsplash.com/photo-1761415454040-518ca1d2e2e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwcmF5ZXIlMjBhbHRhcnxlbnwxfHx8fDE3NjYyMTkyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Ellira Heritage',
    inStock: true,
    description: 'Traditional doorway design with intricate jali work, symbolizing the gateway to divine realms.'
  },
  {
    id: 5,
    name: 'Temple of Light - Crystal Series',
    category: 'Modern Mandirs',
    price: 89500,
    image: 'https://images.unsplash.com/photo-1604307612848-fcb357b1360c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwb29qYSUyMHJvb218ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 12,
    brand: 'Ellira Premium',
    inStock: true,
    description: 'Contemporary design featuring crystal accents that catch light beautifully, creating a serene atmosphere.'
  },
  {
    id: 6,
    name: 'Sacred Geometry Mandir',
    category: 'Designer Mandirs',
    price: 76500,
    image: 'https://images.unsplash.com/photo-1626977990625-18e01e4cfe7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFrJTIwd29vZCUyMGNhcnZpbmd8ZW58MXx8fHwxNzY2MjE5MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Ellira Heritage',
    inStock: true,
    description: 'Inspired by ancient sacred geometry, this mandir combines mathematical precision with spiritual symbolism.'
  },
  {
    id: 7,
    name: 'Royal Teak Mandir',
    category: 'Luxury Mandirs',
    price: 145000,
    image: 'https://images.unsplash.com/photo-1732575877312-c47d5d2d60d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMHdvb2QlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY2MjE5MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 8,
    brand: 'Ellira Premium',
    inStock: true,
    description: 'Premium teak wood mandir with gold accents, perfect for royal pooja rooms and grand spaces.'
  },
  {
    id: 8,
    name: 'Miniature Temple Collection',
    category: 'Compact Mandirs',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1744893679733-1cf3c7837982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b29kZW4lMjBtYW5kaXJ8ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Ellira Heritage',
    inStock: true,
    description: 'Compact yet detailed mandir perfect for apartments, offices, or travel. Full functionality in small size.'
  },
  {
    id: 9,
    name: 'Floral Elegance Mandir',
    category: 'Designer Mandirs',
    price: 52500,
    image: 'https://images.unsplash.com/photo-1604307612848-fcb357b1360c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwb29qYSUyMHJvb218ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 10,
    brand: 'Ellira Heritage',
    inStock: true,
    description: 'Delicate floral carvings inspired by traditional Indian motifs, bringing nature\'s beauty into your sacred space.'
  },
  {
    id: 10,
    name: 'Zen Harmony Collection',
    category: 'Modern Mandirs',
    price: 67500,
    image: 'https://images.unsplash.com/photo-1626977990625-18e01e4cfe7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFrJTIwd29vZCUyMGNhcnZpbmd8ZW58MXx8fHwxNzY2MjE5MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Ellira Premium',
    inStock: true,
    description: 'Minimalist design inspired by Zen philosophy, creating peaceful spaces for meditation and prayer.'
  },
  {
    id: 11,
    name: 'Grand Temple Structure',
    category: 'Luxury Mandirs',
    price: 225000,
    image: 'https://images.unsplash.com/photo-1657938169455-19011c99cf46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFrd29vZCUyMHRlbXBsZSUyMGhvbWV8ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 5,
    brand: 'Ellira Signature',
    inStock: true,
    description: 'Magnificent temple structure with multiple levels, perfect for large family homes and community centers.'
  },
  {
    id: 12,
    name: 'Portable Pooja Kit',
    category: 'Travel Mandirs',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29qYSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTczNDcyMTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Ellira Heritage',
    inStock: true,
    description: 'Complete portable pooja kit with foldable mandir, ideal for travel, offices, and temporary spaces.'
  },
];

const brands = [
  { name: 'Poojaghar', count: 2 },
  { name: 'Elite Craft', count: 5 },
  { name: 'Divine Woods', count: 3 },
];

export function ProductsSection() {
  const { addToCart } = useCart();
  const [priceRange, setPriceRange] = useState([0, 177870]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [stockStatus, setStockStatus] = useState({
    onSale: false,
    inStock: false,
    onBackorder: false,
  });
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState<typeof allProducts[0] | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleWishlist = (productId: number) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
    toast.success(wishlist.includes(productId) ? 'Removed from wishlist' : 'Added to wishlist');
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      
      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
      
      // Stock status filter
      if (stockStatus.onSale && !product.discount) return false;
      if (stockStatus.inStock && !product.inStock) return false;
      if (stockStatus.onBackorder && product.inStock) return false;
      
      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'latest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filtered;
  }, [priceRange, selectedBrands, stockStatus, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toast.success('Added to cart successfully!');
  };

  return (
    <section className="py-24 bg-[#0F0F1E]">
      <div className="container mx-auto px-6">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="w-72 flex-shrink-0 space-y-8">
            {/* Price Filter */}
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#25253C] border border-[#C9A961]/20 p-8 shadow-lg shadow-[#C9A961]/5">
              <h3 className="text-[#F8F6F1] font-['Playfair_Display'] text-xl mb-6 border-b border-[#C9A961]/20 pb-4">Filter By Price</h3>
              
              <Slider.Root
                value={priceRange}
                onValueChange={setPriceRange}
                max={177870}
                step={100}
                className="relative flex items-center select-none touch-none w-full h-5 mb-6"
              >
                <Slider.Track className="bg-[#25253C] relative grow rounded-full h-[3px]">
                  <Slider.Range className="absolute bg-[#C9A961] rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-5 h-5 bg-[#C9A961] rounded-full hover:bg-[#D4B574] focus:outline-none focus:ring-2 focus:ring-[#C9A961]/50" />
                <Slider.Thumb className="block w-5 h-5 bg-[#C9A961] rounded-full hover:bg-[#D4B574] focus:outline-none focus:ring-2 focus:ring-[#C9A961]/50" />
              </Slider.Root>

              <div className="flex justify-between items-center mb-4">
                <span className="text-[#8E8E93] text-sm">Price: ₹{priceRange[0]} — ₹{priceRange[1]}</span>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="bg-[#1A1A2E] border border-[#C9A961]/10 p-6">
              <h3 className="text-[#F8F6F1] font-['Playfair_Display'] text-xl mb-6">Filter By Brand</h3>
              
              <div className="space-y-3">
                {brands.map((brand) => (
                  <label key={brand.name} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand.name)}
                        onChange={() => handleBrandToggle(brand.name)}
                        className="w-4 h-4 bg-[#25253C] border border-[#C9A961]/30 rounded checked:bg-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/50"
                      />
                      <span className="text-[#8E8E93] group-hover:text-[#C9A961] transition-colors text-sm">
                        {brand.name}
                      </span>
                    </div>
                    <span className="text-[#8E8E93] text-xs">{brand.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#25253C] border border-[#C9A961]/20 p-8 shadow-lg shadow-[#C9A961]/5">
              <h3 className="text-[#F8F6F1] font-['Playfair_Display'] text-xl mb-6 border-b border-[#C9A961]/20 pb-4">Stock Status</h3>
              
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={stockStatus.onSale}
                    onChange={(e) => setStockStatus(prev => ({ ...prev, onSale: e.target.checked }))}
                    className="w-4 h-4 bg-[#25253C] border border-[#C9A961]/30 rounded checked:bg-[#C9A961]"
                  />
                  <span className="text-[#8E8E93] group-hover:text-[#C9A961] transition-colors text-sm">On sale</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={stockStatus.inStock}
                    onChange={(e) => setStockStatus(prev => ({ ...prev, inStock: e.target.checked }))}
                    className="w-4 h-4 bg-[#25253C] border border-[#C9A961]/30 rounded checked:bg-[#C9A961]"
                  />
                  <span className="text-[#8E8E93] group-hover:text-[#C9A961] transition-colors text-sm">In stock</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={stockStatus.onBackorder}
                    onChange={(e) => setStockStatus(prev => ({ ...prev, onBackorder: e.target.checked }))}
                    className="w-4 h-4 bg-[#25253C] border border-[#C9A961]/30 rounded checked:bg-[#C9A961]"
                  />
                  <span className="text-[#8E8E93] group-hover:text-[#C9A961] transition-colors text-sm">On backorder</span>
                </label>
              </div>
            </div>

            {/* Premium Banner Ad */}
            <div className="bg-gradient-to-br from-[#25253C] via-[#1A1A2E] to-[#25253C] border border-[#C9A961]/30 p-8 rounded-lg shadow-lg shadow-[#C9A961]/10 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#C9A961]/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#C9A961]/5 rounded-full blur-lg"></div>

              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1732575877312-c47d5d2d60d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMHdvb2QlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY2MjE5MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Special offer"
                  className="w-full h-40 object-cover rounded-lg mb-6 shadow-lg"
                />
                <div className="text-center">
                  <h4 className="text-[#F8F6F1] font-['Playfair_Display'] text-xl mb-3">Exclusive Heritage Collection</h4>
                  <p className="text-[#C9A961] text-lg mb-2 font-medium">Up to 25% Off</p>
                  <p className="text-[#C7C7CC] text-sm mb-6">Limited time offer on premium handcrafted mandirs</p>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#C9A961] to-[#D4B574] text-[#0F0F1E] hover:shadow-[0_0_20px_rgba(201,169,97,0.3)] hover:scale-105 transition-all duration-300 text-sm font-semibold uppercase tracking-wide rounded-sm">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>

            {/* Recently Viewed */}
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#25253C] border border-[#C9A961]/20 p-6 rounded-lg">
              <h3 className="text-[#F8F6F1] font-['Playfair_Display'] text-lg mb-4">Recently Viewed</h3>
              <div className="space-y-3">
                {allProducts.slice(0, 3).map((product) => (
                  <div key={product.id} className="flex items-center gap-3 p-2 hover:bg-[#25253C] rounded transition-colors cursor-pointer group">
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[#F8F6F1] text-sm truncate group-hover:text-[#C9A961] transition-colors">{product.name}</p>
                      <p className="text-[#C9A961] text-xs">₹{product.price.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="bg-gradient-to-br from-[#25253C] to-[#1A1A2E] border border-[#C9A961]/20 p-6 rounded-lg">
              <h3 className="text-[#F8F6F1] font-['Playfair_Display'] text-lg mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                <div className="border-b border-[#C9A961]/10 pb-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C9A961] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-[#C7C7CC] text-sm italic">"Exceptional craftsmanship and divine beauty"</p>
                  <p className="text-[#8E8E93] text-xs mt-1">- Priya S., Mumbai</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C9A961] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-[#C7C7CC] text-sm italic">"Perfect for our family prayers"</p>
                  <p className="text-[#8E8E93] text-xs mt-1">- Rajesh P., Ahmedabad</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12 bg-gradient-to-r from-[#1A1A2E] via-[#25253C] to-[#1A1A2E] border border-[#C9A961]/20 p-6 shadow-lg shadow-[#C9A961]/5">
              <div className="flex items-center gap-2 text-[#8E8E93] text-sm">
                <span>Showing {((currentPage - 1) * itemsPerPage) + 1}–{Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} results</span>
              </div>

              <div className="flex items-center gap-4">
                {/* Items per page */}
                <div className="flex items-center gap-2">
                  <span className="text-[#8E8E93] text-sm">Show:</span>
                  {[9, 12, 18, 24].map((count) => (
                    <button
                      key={count}
                      onClick={() => {
                        setItemsPerPage(count);
                        setCurrentPage(1);
                      }}
                      className={`px-2 py-1 text-sm ${
                        itemsPerPage === count
                          ? 'text-[#C9A961] border-b border-[#C9A961]'
                          : 'text-[#8E8E93] hover:text-[#C9A961]'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>

                {/* View Mode */}
                <div className="flex gap-2 border-l border-[#C9A961]/20 pl-4">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${
                      viewMode === 'grid' ? 'text-[#C9A961]' : 'text-[#8E8E93] hover:text-[#C9A961]'
                    }`}
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${
                      viewMode === 'list' ? 'text-[#C9A961]' : 'text-[#8E8E93] hover:text-[#C9A961]'
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#25253C] text-[#F8F6F1] border border-[#C9A961]/20 px-4 py-2 text-sm focus:outline-none focus:border-[#C9A961]"
                >
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="latest">Sort by latest</option>
                  <option value="price-low">Sort by price: low to high</option>
                  <option value="price-high">Sort by price: high to low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 mb-12 ${
              viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            }`}>
              {paginatedProducts.map((product) => (
                <div key={product.id} className="group bg-[#1A1A2E] border border-[#C9A961]/10 hover:border-[#C9A961]/30 transition-all duration-300">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#25253C]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="absolute top-4 left-4 bg-[#C9A961] text-[#0F0F1E] px-3 py-1 text-xs font-semibold rounded-full">
                        -{product.discount}%
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={() => toast.info('Compare feature coming soon!')}
                        className="w-10 h-10 bg-[#1A1A2E] border border-[#C9A961]/30 rounded-sm flex items-center justify-center hover:bg-[#C9A961] hover:text-[#0F0F1E] transition-all text-[#C9A961]"
                        title="Compare"
                      >
                        <Repeat className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="w-10 h-10 bg-[#1A1A2E] border border-[#C9A961]/30 rounded-sm flex items-center justify-center hover:bg-[#C9A961] hover:text-[#0F0F1E] transition-all text-[#C9A961]"
                        title="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`w-10 h-10 bg-[#1A1A2E] border border-[#C9A961]/30 rounded-sm flex items-center justify-center hover:bg-[#C9A961] hover:text-[#0F0F1E] transition-all ${
                          wishlist.includes(product.id) ? 'bg-[#C9A961] text-[#0F0F1E]' : 'text-[#C9A961]'
                        }`}
                        title="Add to Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E] via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="p-5">
                    <p className="text-[#C9A961] text-xs uppercase tracking-wider mb-2">{product.category}</p>
                    <h3 className="text-[#F8F6F1] font-['Playfair_Display'] text-lg mb-3 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[#C9A961] font-['Inter'] text-lg">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                      {!product.inStock && (
                        <span className="text-red-500 text-xs">Out of Stock</span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      className="w-full px-4 py-2.5 bg-[#C9A961] text-[#0F0F1E] hover:bg-[#D4B574] transition-colors text-sm uppercase tracking-wide flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 border border-[#C9A961]/30 text-[#8E8E93] hover:bg-[#C9A961] hover:text-[#0F0F1E] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 border transition-all ${
                      currentPage === page
                        ? 'bg-[#C9A961] text-[#0F0F1E] border-[#C9A961]'
                        : 'border-[#C9A961]/30 text-[#8E8E93] hover:bg-[#C9A961] hover:text-[#0F0F1E]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 border border-[#C9A961]/30 text-[#8E8E93] hover:bg-[#C9A961] hover:text-[#0F0F1E] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setQuickViewProduct(null)}>
          <div className="bg-[#1A1A2E] max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-square">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <button onClick={() => setQuickViewProduct(null)} className="absolute top-4 right-4 text-[#8E8E93] hover:text-[#C9A961]">
                <X className="w-6 h-6" />
              </button>
              <p className="text-[#C9A961] text-sm uppercase tracking-wider mb-2">{quickViewProduct.category}</p>
              <h2 className="font-['Playfair_Display'] text-[#F8F6F1] text-3xl mb-4">{quickViewProduct.name}</h2>
              <p className="text-[#C9A961] text-2xl mb-6">₹{quickViewProduct.price.toLocaleString('en-IN')}</p>
              <p className="text-[#8E8E93] mb-6">Handcrafted with premium materials, this mandir combines traditional design with modern aesthetics.</p>
              <button
                onClick={() => {
                  handleAddToCart(quickViewProduct);
                  setQuickViewProduct(null);
                }}
                className="w-full px-8 py-4 bg-[#C9A961] text-[#0F0F1E] hover:bg-[#D4B574] transition-colors text-sm uppercase tracking-wide flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
