import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const collections = [
  {
    title: 'Keychains',
    items: [
      { name: 'Straw Hat Keychain', price: 12.99, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=60' },
      { name: 'Going Merry Keychain', price: 14.99, image: 'https://images.unsplash.com/photo-1611604548018-d56bbd85d681?w=800&auto=format&fit=crop&q=60' },
      { name: 'Thousand Sunny Keychain', price: 14.99, image: 'https://images.unsplash.com/photo-1590845947376-2638caa89309?w=800&auto=format&fit=crop&q=60' },
      { name: 'Devil Fruit Keychain', price: 11.99, image: 'https://images.unsplash.com/photo-1563290131-a6b9a0e8bea9?w=800&auto=format&fit=crop&q=60' }
    ]
  },
  {
    title: 'Hoodies',
    items: [
      { name: 'Straw Hat Pirates Hoodie', price: 49.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=60' },
      { name: 'Luffy Gear 5 Hoodie', price: 54.99, image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&auto=format&fit=crop&q=60' },
      { name: 'Marine Logo Hoodie', price: 49.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=60' },
      { name: 'Wanted Poster Hoodie', price: 52.99, image: 'https://images.unsplash.com/photo-1572495641004-28421ae29b82?w=800&auto=format&fit=crop&q=60' }
    ]
  },
  {
    title: 'Sweatshirts',
    items: [
      { name: 'Jolly Roger Sweatshirt', price: 39.99, image: 'https://images.unsplash.com/photo-1572495641004-28421ae29b82?w=800&auto=format&fit=crop&q=60' },
      { name: 'Grand Line Map Sweatshirt', price: 42.99, image: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=800&auto=format&fit=crop&q=60' },
      { name: 'Pirate King Sweatshirt', price: 44.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60' },
      { name: 'Thousand Sunny Sweatshirt', price: 41.99, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60' }
    ]
  },
  {
    title: 'T-Shirts',
    items: [
      { name: 'Straw Hat Crew Tee', price: 24.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60' },
      { name: 'Wanted Poster Tee', price: 26.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60' },
      { name: 'Devil Fruit Tee', price: 25.99, image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&auto=format&fit=crop&q=60' },
      { name: 'Grand Line Map Tee', price: 23.99, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=60' }
    ]
  }
];

const CollectionSlider = ({ collection }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-8">
      <h2 className="text-3xl font-bold mb-6 text-[#2DDEED]">{collection.title}</h2>
      <div className="relative group">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={24} />
        </button>
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {collection.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-72 snap-start"
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden group cursor-pointer">
                <div className="relative aspect-w-1 aspect-h-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                  <p className="text-[#2DDEED] font-bold">${item.price}</p>
                  <button className="mt-2 w-full bg-[#2DDEED] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#00EE00] transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const OnePiece = () => {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="relative z-20 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#2DDEED]">
              One Piece Collection
            </h1>
            <p className="text-xl text-gray-200">Set sail with our exclusive pirate-themed merchandise</p>
          </motion.div>
        </div>
      </section>

      {/* Collections */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {collections.map((collection, index) => (
          <CollectionSlider key={index} collection={collection} />
        ))}
      </section>
    </div>
  );
};

export default OnePiece;