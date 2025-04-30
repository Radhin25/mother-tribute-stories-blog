
import { Link } from 'react-router-dom';
import { Article, Author, getAuthorById, getRecentArticles } from '@/data/articles';

interface SidebarProps {
  author?: Author;
  recentArticles?: Article[];
}

const Sidebar = ({ author, recentArticles: propRecentArticles }: SidebarProps) => {
  const recentArticles = propRecentArticles || getRecentArticles().slice(0, 3);

  return (
    <aside className="space-y-8">
      {/* Author Profile Section */}
      {author && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-serif font-bold mb-4">About the Author</h3>
          <div className="flex flex-col items-center">
            <img
              src={author.imageUrl}
              alt={author.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h4 className="font-medium">{author.name}</h4>
            <p className="text-sm text-gray-600 mt-2 text-center">{author.bio}</p>
            
            {/* Social Links */}
            {author.social && (
              <div className="flex gap-3 mt-4">
                {author.social.facebook && (
                  <a href={author.social.facebook} className="text-gray-500 hover:text-mother-dark">
                    <span className="sr-only">Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                )}
                {author.social.instagram && (
                  <a href={author.social.instagram} className="text-gray-500 hover:text-mother-dark">
                    <span className="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                )}
                {author.social.twitter && (
                  <a href={author.social.twitter} className="text-gray-500 hover:text-mother-dark">
                    <span className="sr-only">Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-serif font-bold mb-4">Subscribe to our Newsletter</h3>
        <p className="text-sm text-gray-600 mb-4">Get the latest motherhood insights and stories delivered to your inbox.</p>
        <form className="space-y-3">
          <div>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mother-dark focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-mother-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Recent Articles */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-serif font-bold mb-4">Recent Articles</h3>
        <div className="space-y-4">
          {recentArticles.map((article) => (
            <div key={article.id} className="group">
              <Link to={`/articles/${article.id}`} className="block group">
                <h4 className="font-medium group-hover:text-mother-dark transition-colors">{article.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-500">{new Date(article.date).toLocaleDateString()}</span>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{article.category}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
