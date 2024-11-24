import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import navItems from "./navItems";
import AuthenticationButton from "@/auth0Components";
import { useAuth0 } from "@auth0/auth0-react";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { user, isAuthenticated } = useAuth0();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 0) {
      // Prevent negative scroll values
      return;
    }

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-50 transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex h-16 items-center px-4">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <img src="/KunstHavnLogo.png" alt="KunstHavn" className="h-8 w-8" />
          <span className="text-2xl font-bold">KunstHavn</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.href}
                className=" text-base text-popover-foreground hover:text-gray-900"
              >
                {item.name}
              </Link>
              {item.subItems && (
                <div className="absolute -left-16 mt-0 w-48 rounded-md text-sm  shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition ease-out duration-200">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {item.subItems.map((subItem) => (
                      <HashLink
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {subItem.name}
                      </HashLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              src={isAuthenticated ? user?.picture : "/profile-silluette.jpg"}
            />
            <AvatarFallback>U</AvatarFallback>
            <Link to="/profile" className="absolute inset-0">
              <span className="sr-only">Go to profile</span>
            </Link>
          </Avatar>
          <AuthenticationButton />
        </div>
        <div className="md:hidden ml-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <React.Fragment key={item.name}>
                    <Link to={item.href} className="text-lg font-medium">
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <div className="ml-4 flex flex-col space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="text-sm text-gray-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))}
                <AuthenticationButton />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
