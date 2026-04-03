import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu();
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-300 ${
      isScrolled ? "bg-background/90 backdrop-blur-sm border-b border-border" : ""
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-primary">Nigel</span>
            <span>Ong</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("journey")}
                className="hover:text-primary transition-colors"
              >
                Journey
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Social & Theme Icons */}
            <a
              href="https://github.com/nigel-ong"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-xl hover:text-primary transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/niong"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-xl hover:text-primary transition-colors"
            >
              <FaLinkedin />
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="text-xl hover:text-primary transition-colors"
            >
              {theme === "dark" ? <HiSun /> : <HiMoon />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-xl"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu fixed top-[65px] left-0 right-0 bg-background/90 backdrop-blur-sm w-full md:hidden z-20 p-6 border-t border-border shadow-lg ${
          isMobileMenuOpen ? "open" : ""
        }`}
      >
        <div className="flex flex-col space-y-6 text-lg">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("journey")}
            className="hover:text-primary transition-colors font-medium"
          >
            Journey
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-primary transition-colors font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-primary transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition-colors font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
