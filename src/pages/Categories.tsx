
import { useState } from 'react';
import { getArticlesByCategory } from '@/data/articles';
import PageLayout from '@/components/layout/PageLayout';
import ArticleCard from '@/components/articles/ArticleCard';
import { Button } from '@/components/ui/button';

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
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-mother-dark">Categories</h1>
          
          {/* Limited number of choices (Hick's Law) */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[120px]"
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Visual progress indicator */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="progress-indicator">
              <div 
                className="progress-value" 
                style={{ 
                  width: `${(articles.length / 
                    (selectedCategory === 'All' ? 
                      getArticlesByCategory('Stories').length + 
                      getArticlesByCategory('Health').length + 
                      getArticlesByCategory('Inspiration').length : 
                      getArticlesByCategory(selectedCategory).length)) * 100}%` 
                }}
              ></div>
            </div>
          </div>
          
          {/* Chunking articles into a grid (Chunking Law) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.length > 0 ? (
              articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-gray-600">There are currently no articles in this category.</p>
                <Button 
                  variant="default" 
                  className="mt-4"
                  onClick={() => setSelectedCategory('All')}
                >
                  View All Categories
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Categories;
