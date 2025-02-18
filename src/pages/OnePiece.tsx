import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import Navbar from '../components/Navbar';



interface Collection {
  title: string;
  items: { name: string; price: number; image: string }[];
}

const CollectionSlider = ({ collection }: { collection: Collection }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  React.useEffect(() => {
    checkScroll();
    sliderRef.current?.addEventListener('scroll', checkScroll);
    return () => sliderRef.current?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-8">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] via-[#4FD1C5] to-[#4ADE80] bg-clip-text text-transparent">
        {collection.title}
      </h2>
      <div className="relative group">
        <AnimatePresence>
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#8B5CF6]/30 hover:bg-[#8B5CF6]/50 p-3 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </motion.button>
          )}
        </AnimatePresence>
        
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {collection.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-72 snap-start"
            >
              <div className="bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-w-1 aspect-h-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#4FD1C5] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-[#4FD1C5] font-bold">${item.price}</p>
                  <button className="mt-3 w-full bg-gradient-to-r from-[#8B5CF6] via-[#4FD1C5] to-[#4ADE80] text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group hero-button">
                    <ShoppingCart size={18} className="transition-transform duration-300 group-hover:scale-110" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#8B5CF6]/30 hover:bg-[#8B5CF6]/50 p-3 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const OnePiece = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Banner */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
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
            className="max-w-4xl mx-auto px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] via-[#4FD1C5] to-[#4ADE80] bg-clip-text text-transparent">
              One Piece Collection
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Set sail with our exclusive pirate-themed merchandise
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-button bg-gradient-to-r from-[#8B5CF6] via-[#4FD1C5] to-[#4ADE80] text-white font-bold py-3 px-8 rounded-full text-lg"
            >
              Explore Collection
            </motion.button>
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