
import PageLayout from '@/components/layout/PageLayout';
import { authors } from '@/data/articles';

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">About Mother's Day Tribute Blog</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to Mother's Day Tribute Blog, a space dedicated to celebrating mothers and motherhood through heartfelt stories, practical insights, and inspirational content.
            </p>
            
            <p>
              Our mission is to honor the incredible journey of motherhood by sharing diverse experiences, voices, and perspectives. We believe that every mother's story is unique and valuable, and we aim to create a supportive community where these stories can be told and celebrated.
            </p>
            
            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              {authors.map(author => (
                <div key={author.id} className="bg-white p-6 rounded-lg shadow text-center">
                  <img 
                    src={author.imageUrl} 
                    alt={author.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="font-bold text-xl mb-2">{author.name}</h3>
                  <p className="text-gray-600">{author.bio}</p>
                  
                  {/* Social Links */}
                  {author.social && (
                    <div className="flex justify-center gap-4 mt-4">
                      {author.social.facebook && (
                        <a href={author.social.facebook} className="text-gray-500 hover:text-mother-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                      )}
                      {author.social.instagram && (
                        <a href={author.social.instagram} className="text-gray-500 hover:text-mother-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </a>
                      )}
                      {author.social.twitter && (
                        <a href={author.social.twitter} className="text-gray-500 hover:text-mother-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Contact Us</h2>
            <p>
              We'd love to hear from you! Whether you have a story to share, a question to ask, or feedback to give, please don't hesitate to reach out.
            </p>
            
            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mother-dark focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mother-dark focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mother-dark focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mother-dark focus:border-transparent"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-mother-dark text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
