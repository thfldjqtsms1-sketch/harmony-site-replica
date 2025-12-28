import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Event", path: "/event" },
  ];

  const isHomePage = location.pathname === "/";
  const headerBg = isScrolled || !isHomePage 
    ? "bg-background/95 backdrop-blur-md border-b border-border" 
    : "bg-transparent";
  const textColor = isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className={`font-display text-xl md:text-2xl font-bold tracking-wider ${textColor} transition-colors duration-300`}>
            글로잉
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide ${textColor} hover:text-gold transition-colors duration-300 group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className={`hidden md:flex items-center gap-2 text-sm font-medium ${textColor} hover:text-gold transition-colors duration-300`}>
              <span>Cart</span>
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs">0</span>
            </button>
            <button className={`hidden md:block ${textColor} hover:text-gold transition-colors duration-300`}>
              <User className="w-5 h-5" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${textColor} hover:text-gold transition-colors duration-300`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="block py-2 text-lg font-medium text-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-border">
                <button className="flex items-center gap-2 text-foreground hover:text-gold transition-colors">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Cart (0)</span>
                </button>
                <button className="flex items-center gap-2 text-foreground hover:text-gold transition-colors">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
