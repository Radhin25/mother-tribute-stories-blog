
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

interface CategorySectionProps {
  categories: Category[];
  onSelectCategory?: (category: string) => void;
}

const CategorySection = ({ categories, onSelectCategory }: CategorySectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    const newSelected = selectedCategory === categoryId ? null : categoryId;
    setSelectedCategory(newSelected);
    if (onSelectCategory) {
      onSelectCategory(newSelected || 'all');
    }
  };

  return (
    <section className="py-16 bg-mother-gradient/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-4 text-mother-dark">Explore by Category</h2>
        <p className="text-center mb-8 max-w-2xl mx-auto text-gray-600">Discover stories and insights that resonate with the warmth of a mother's love</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover-glow ${
                selectedCategory === category.id 
                ? 'ring-4 ring-mother-dark transform scale-[1.03] shadow-lg' 
                : 'hover:shadow-lg hover:scale-[1.02]'
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="aspect-square relative">
                <img 
                  src={category.imageUrl} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  selectedCategory === category.id
                  ? 'bg-gradient-to-t from-mother-dark/80 via-mother-dark/60 to-mother-dark/40'
                  : 'bg-gradient-to-t from-black/60 to-black/30 hover:from-mother-dark/60 hover:to-mother-dark/30'
                }`} />
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <h3 className="text-white text-lg md:text-xl font-serif font-medium text-center drop-shadow-md">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
