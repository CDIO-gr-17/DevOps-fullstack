import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";

// Note: These imports assume you have these components from a UI library like shadcn/ui
// If you don't, you'll need to create or import alternatives
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Auctions",
    href: "/auctions",
    subItems: [
      { name: "Current Auctions", href: "/auctions/current" },
      { name: "Upcoming Auctions", href: "/auctions/upcoming" },
      { name: "Past Auctions", href: "/auctions/past" },
    ],
  },
  {
    name: "Support",
    href: "/support",
    subItems: [
      { name: "FAQ", href: "/support/faq" },
      { name: "Contact Us", href: "/support/contact" },
    ],
  },
  { name: "Winners", href: "/winners" },
];

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 w-screen z-50 transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex h-16 items-center px-4">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold">AuctionSite</span>
        </a>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </a>
              {item.subItems && (
                <div className="absolute -left-16 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition ease-out duration-200">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/profile-silluette.jpg" alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Button variant="ghost" className="hidden md:inline-flex">
            Log in
          </Button>
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
                    <a href={item.href} className="text-lg font-medium">
                      {item.name}
                    </a>
                    {item.subItems && (
                      <div className="ml-4 flex flex-col space-y-2">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="text-sm text-gray-600"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))}
                <Button
                  variant="ghost"
                  onClick={() => console.log("Login clicked")}
                >
                  Log in
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
