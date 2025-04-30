
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/data/articles';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroCarouselProps {
  articles: Article[];
}

const HeroCarousel = ({ articles }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // 7 seconds between auto-transitions
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (transitioning) return;
    
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
      setTransitioning(false);
    }, 500); // Match this to the CSS transition duration
  };

  const prevSlide = () => {
    if (transitioning) return;
    
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? articles.length - 1 : prevIndex - 1));
      setTransitioning(false);
    }, 500); // Match this to the CSS transition duration
  };

  if (!articles.length) return null;

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg">
      {/* Carousel Container */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-mother-comfort/20">
        {articles.map((article, index) => (
          <div 
            key={article.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="relative h-full">
              {/* Background Image */}
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
              
              {/* Content */}
              <div className="relative h-full flex items-center justify-center p-4">
                <div className="max-w-3xl text-center text-white">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 drop-shadow-lg transform transition-transform duration-700 translate-y-0 opacity-100">
                    {article.title}
                  </h2>
                  <p className="text-base md:text-lg mb-6 text-white/90 transition-all duration-700 delay-100">{article.excerpt}</p>
                  <div className="flex flex-wrap justify-center items-center gap-2 mb-6 transition-all duration-700 delay-200">
                    <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {article.category}
                    </span>
                    <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {article.readingTime}
                    </span>
                  </div>
                  <Link
                    to={`/articles/${article.id}`}
                    className="inline-block bg-mother-dark hover:bg-mother-dark/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white hover:scale-105 p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mother-dark z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-mother-dark" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white hover:scale-105 p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mother-dark z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-mother-dark" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {articles.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentIndex 
                ? 'bg-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.8)]' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => {
              if (!transitioning) {
                setTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setTransitioning(false);
                }, 500);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
