
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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8">Explore by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                selectedCategory === category.id ? 'ring-4 ring-mother-dark' : 'hover:shadow-lg'
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="aspect-square relative">
                <img 
                  src={category.imageUrl} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <h3 className="text-white text-lg md:text-xl font-medium text-center">{category.name}</h3>
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
