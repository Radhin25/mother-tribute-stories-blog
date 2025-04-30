
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/data/articles';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroCarouselProps {
  articles: Article[];
}

const HeroCarousel = ({ articles }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? articles.length - 1 : prevIndex - 1));
  };

  if (!articles.length) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-[400px] md:h-[500px] bg-gray-200">
        {articles.map((article, index) => (
          <div 
            key={article.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              
              {/* Content */}
              <div className="relative h-full flex items-center justify-center p-4">
                <div className="max-w-3xl text-center text-white">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">{article.title}</h2>
                  <p className="text-base md:text-lg mb-6">{article.excerpt}</p>
                  <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
                    <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                    <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                      {article.readingTime}
                    </span>
                  </div>
                  <Link
                    to={`/articles/${article.id}`}
                    className="inline-block bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-mother-dark"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-mother-dark"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {articles.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full focus:outline-none ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
