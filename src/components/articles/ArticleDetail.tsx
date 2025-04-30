
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Article, getArticleById, getAuthorById } from '@/data/articles';
import PageLayout from '../layout/PageLayout';
import Sidebar from '../layout/Sidebar';

const ArticleDetail = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = getArticleById(articleId || '');
  const author = article ? getAuthorById(article.author) : undefined;

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Mother's Day Tribute`;
    }
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold mb-4">Article Not Found</h1>
            <p className="mb-6">Sorry, the article you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/"
              className="inline-block px-6 py-3 bg-mother-dark text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Article Header */}
      <div className="relative h-[300px] md:h-[400px] bg-gray-200">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto -mt-20 md:-mt-32 relative z-10 bg-white p-6 md:p-8 rounded-lg shadow">
          <span className="category-badge mb-4">
            {article.category}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
            {author && (
              <span className="flex items-center gap-2">
                <img 
                  src={author.imageUrl} 
                  alt={author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{author.name}</span>
              </span>
            )}
            <span>{new Date(article.date).toLocaleDateString()}</span>
            <span>{article.readingTime}</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Article Content */}
          <div className="md:col-span-2">
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-serif font-bold text-xl mb-4">Share this article</h3>
              <div className="flex gap-4">
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <Sidebar author={author} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ArticleDetail;
