
import { useState } from 'react';
import { getFeaturedArticles, getRecentArticles } from '@/data/articles';
import PageLayout from '@/components/layout/PageLayout';
import HeroCarousel from '@/components/home/HeroCarousel';
import CategorySection from '@/components/home/CategorySection';
import ArticleCard from '@/components/articles/ArticleCard';
import Sidebar from '@/components/layout/Sidebar';

const categories = [
  {
    id: 'stories',
    name: 'Stories',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'health',
    name: 'Health',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'inspiration',
    name: 'Inspiration',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'all',
    name: 'All Articles',
    imageUrl: '/placeholder.svg'
  }
];

const Index = () => {
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getRecentArticles();
  const [filteredCategory, setFilteredCategory] = useState<string>('all');
  
  const filteredArticles = filteredCategory === 'all' 
    ? recentArticles 
    : recentArticles.filter(article => 
        article.category.toLowerCase() === filteredCategory
      );

  const handleCategorySelect = (category: string) => {
    setFilteredCategory(category);
  };

  return (
    <PageLayout>
      <HeroCarousel articles={featuredArticles} />
      
      <CategorySection 
        categories={categories} 
        onSelectCategory={handleCategorySelect}
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
            {filteredCategory === 'all' 
              ? 'Recent Articles' 
              : `${filteredCategory.charAt(0).toUpperCase() + filteredCategory.slice(1)} Articles`
            }
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Articles */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                  ))
                ) : (
                  <p className="col-span-2 text-center py-12 text-gray-500">
                    No articles found in this category.
                  </p>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
