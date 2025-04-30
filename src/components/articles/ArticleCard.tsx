
import { Link } from 'react-router-dom';
import { Article } from '@/data/articles';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="article-card overflow-hidden transition-all duration-300 transform hover:translate-y-[-5px]">
      <div className="relative">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="category-badge">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="font-serif text-xl font-bold mb-2 line-clamp-2 text-mother-dark">{article.title}</h3>
        <p className="text-gray-600 mb-3 line-clamp-2 text-base leading-relaxed">{article.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{new Date(article.date).toLocaleDateString()}</span>
          <span>{article.readingTime}</span>
        </div>
        <Button variant="action" asChild>
          <Link to={`/articles/${article.id}`}>
            Read More
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ArticleCard;
