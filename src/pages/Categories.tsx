
import { useState } from 'react';
import { getArticlesByCategory } from '@/data/articles';
import PageLayout from '@/components/layout/PageLayout';
import ArticleCard from '@/components/articles/ArticleCard';

const categories = [
  'Stories',
  'Health',
  'Inspiration',
  'All'
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const articles = selectedCategory === 'All'
    ? getArticlesByCategory('Stories')
      .concat(getArticlesByCategory('Health'))
      .concat(getArticlesByCategory('Inspiration'))
    : getArticlesByCategory(selectedCategory);

  return (
    <PageLayout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">Categories</h1>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-mother-dark text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.length > 0 ? (
              articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-gray-600">There are currently no articles in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Categories;
