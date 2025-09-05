import React, { useState } from 'react';
import { Search, Play, Plus, Heart, Download, ShoppingCart } from 'lucide-react';

const ShopPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  // Sample products data
  const products = [
    {
      id: 1,
      title: "The Free Recordings EP",
      artist: "Von Intellekt",
      type: "album",
      price: 15.99,
      image: "https://via.placeholder.com/300x300/1a1a1a/00ffe7?text=The+Free+Recordings",
      preview: true,
      description: "Latest EP featuring lyrical masterpieces",
      tracks: 8,
      duration: "32:45"
    },
    {
      id: 2,
      title: "Curfew Time Freestyle",
      artist: "Von Intellekt",
      type: "single",
      price: 2.99,
      image: "https://via.placeholder.com/300x300/1a1a1a/00ffe7?text=Curfew+Time",
      preview: true,
      description: "The freestyle that got Channel O rotation",
      duration: "4:23"
    },
    {
      id: 3,
      title: "Von Intellekt Hoodie",
      artist: "Von Intellekt",
      type: "merch",
      price: 45.99,
      image: "https://via.placeholder.com/300x300/1a1a1a/00ffe7?text=Hoodie",
      description: "Premium quality hoodie with Von Intellekt branding",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 4,
      title: "The Free Recordings Tee",
      artist: "Von Intellekt", 
      type: "merch",
      price: 25.99,
      image: "https://via.placeholder.com/300x300/1a1a1a/00ffe7?text=T-Shirt",
      description: "Official The Free Recordings label t-shirt",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 5,
      title: "Intellekt Sessions Vol. 1",
      artist: "Von Intellekt",
      type: "album",
      price: 12.99,
      image: "https://via.placeholder.com/300x300/1a1a1a/00ffe7?text=Sessions+Vol1",
      preview: true,
      description: "Acoustic and alternative versions",
      tracks: 6,
      duration: "28:12"
    },
    {
      id: 6,
      title: "Limited Edition Vinyl",
      artist: "Von Intellekt",
      type: "vinyl",
      price: 35.99,
      image: "https://via.placeholder.com/300x300/1a1a1a/00ffe7?text=Vinyl+Record",
      description: "Limited press vinyl of The Free Recordings EP",
      limited: true
    }
  ];

  const tabs = [
    { id: 'all', label: 'All', count: products.length },
    { id: 'album', label: 'Albums', count: products.filter(p => p.type === 'album').length },
    { id: 'single', label: 'Singles', count: products.filter(p => p.type === 'single').length },
    { id: 'merch', label: 'Merch', count: products.filter(p => p.type === 'merch').length },
    { id: 'vinyl', label: 'Vinyl', count: products.filter(p => p.type === 'vinyl').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesTab = activeTab === 'all' || product.type === activeTab;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div className="min-h-screen text-white" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Von Intellekt Store
            </h1>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 transition-colors">
                <Heart size={20} className="text-cyan-400" />
              </button>
              <button className="p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 transition-colors relative">
                <ShoppingCart size={20} className="text-cyan-400" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search albums, singles, merch..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400"
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-black font-medium'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {tab.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === tab.id ? 'bg-black/20' : 'bg-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, 3).map(product => (
              <div key={product.id} className="group relative bg-gray-900/50 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300 border border-gray-800/50 hover:border-cyan-500/30">
                <div className="aspect-square bg-gray-800 rounded-xl mb-4 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {product.preview && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-cyan-500 hover:bg-cyan-600 rounded-full p-3 transform hover:scale-110 transition-transform">
                        <Play size={24} className="text-black ml-1" />
                      </button>
                    </div>
                  )}
                  {product.limited && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Limited
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-cyan-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{product.artist}</p>
                {product.tracks && (
                  <p className="text-gray-500 text-xs mb-2">{product.tracks} tracks • {product.duration}</p>
                )}
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-cyan-400">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-2"
                  >
                    <Plus size={16} />
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Products */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {activeTab === 'all' ? 'All Products' : tabs.find(t => t.id === activeTab)?.label}
            </h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-800/50 rounded-lg text-sm hover:bg-gray-700/50 transition-colors">
                Price: Low to High
              </button>
              <button className="px-4 py-2 bg-gray-800/50 rounded-lg text-sm hover:bg-gray-700/50 transition-colors">
                Newest First
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="group bg-gray-900/30 rounded-xl p-4 hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-cyan-500/30">
                <div className="aspect-square bg-gray-800 rounded-lg mb-3 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {product.preview && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-cyan-500 hover:bg-cyan-600 rounded-full p-2">
                        <Play size={20} className="text-black ml-0.5" />
                      </button>
                    </div>
                  )}
                  {product.limited && (
                    <div className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                      Limited
                    </div>
                  )}
                </div>
                <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-xs mb-2">{product.artist}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-bold text-sm">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-cyan-500 hover:bg-cyan-600 text-black p-1.5 rounded-full transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">No results found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;