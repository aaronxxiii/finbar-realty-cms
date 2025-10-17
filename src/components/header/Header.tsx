import * as React from "react"
import { Link } from "gatsby"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface NavigationItem {
  label: string
  href: string
}

interface HeaderProps {
  siteTitle?: string
}

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

function NavigationLinks({ className = "", onLinkClick }: { className?: string; onLinkClick?: () => void }) {
  return (
    <nav className={className}>
      <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              activeClassName="text-primary"
              onClick={onLinkClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Header({ siteTitle = "Finbar Realty" }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleMobileMenuClose = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Site Title */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-200"
            >
              {siteTitle}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationLinks />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">{siteTitle}</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <NavigationLinks onLinkClick={handleMobileMenuClose} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
