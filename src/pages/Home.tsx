import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import { animeCategories } from '../constants/data';
import { AnimatedListDemo } from '../components/HeroList';

const Home = () => {
  return (
    <div className="pt-24">
      <section className='pt-8  md:pt-5  overflow-x-clip'>
        <div className='container xl:px-20 md:px-10 max-md:px-5'>
          <div className="md:flex items-center">
            <div className='md:w-[478px] 2xl:w-[650px]'>
              <div className="tag">Express Your Love for Anime in Style</div>
              <h1 className='text-5xl md:text-7xl font-bold tracking-tighter gradient-text mt-6'>
                The Ultimate Anime Fashion Destination
              </h1>
              <p className='text-xl text-white tracking-tight mt-6'>
                Discover exclusive anime-inspired apparel, from stylish streetwear to unique collectibles. Elevate your wardrobe with designs inspired by your favorite anime worlds.
              </p>
              <div className="flex gap-1 items-center mt-[30px]">
                <button className='btn btn-primary'>Shop Now</button>
              </div>
            </div>
            <div className="md:h-[648px] flex items-center md:flex-1 2xl:ml-20 relative rounded-lg">
              <AnimatedListDemo />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="section-title mb-10 max-w-[700px] text-center  mx-auto">
          Explore Our Anime Fashion Collections
        </h2>
        <p className="section-description text-center max-w-[900px]  mb-20 mx-auto">
          Discover a fusion of style and fandom with our exclusive anime-inspired fashion collections.
          From iconic designs to modern streetwear, wear your favorite anime with pride!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {animeCategories.map((category, index) => (
            <Link to={category.path} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className={`h-96 ${index % 2 !== 0 && 'mt-20'}`}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: category.color }}
                    >
                      {category.title}
                    </h3>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      Shop Now →
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default Home;
