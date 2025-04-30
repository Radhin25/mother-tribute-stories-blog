
import { useEffect } from 'react';
import ArticleDetail from '@/components/articles/ArticleDetail';
import PageLayout from '@/components/layout/PageLayout';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

const ArticlePage = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageLayout>
      <div className="fixed top-16 left-0 right-0 z-30 px-4 py-2 bg-white/80 backdrop-blur-sm">
        <Progress value={readingProgress} className="h-1 bg-mother-light/30" />
      </div>
      <div className="animate-fade-in">
        <ArticleDetail />
      </div>
    </PageLayout>
  );
};

export default ArticlePage;
