
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchExpanded(!searchExpanded);
  };

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container px-4 md:px-6 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-serif font-bold">Mother's Day Tribute</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-mother-dark transition-colors">Home</Link>
          <Link to="/categories" className="font-medium hover:text-mother-dark transition-colors">Categories</Link>
          <Link to="/about" className="font-medium hover:text-mother-dark transition-colors">About</Link>
          <div className="relative flex items-center">
            {searchExpanded ? (
              <div className="flex items-center animate-fade-in">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-48 h-9 pr-9 focus:outline-none rounded-full border-mother-light focus:border-mother-comfort"
                  autoFocus
                />
                <button 
                  className="absolute right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={toggleSearch}
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <button 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors" 
                onClick={toggleSearch}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="container mx-auto p-4">
            <div className="flex justify-end mb-8">
              <button 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors" 
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 text-xl">
              <Link to="/" className="font-medium hover:text-mother-dark transition-colors" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/categories" className="font-medium hover:text-mother-dark transition-colors" onClick={toggleMobileMenu}>Categories</Link>
              <Link to="/about" className="font-medium hover:text-mother-dark transition-colors" onClick={toggleMobileMenu}>About</Link>
              <div className="relative w-full max-w-xs">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full pr-9 focus:outline-none rounded-full border-mother-light"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2" size={18} />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
