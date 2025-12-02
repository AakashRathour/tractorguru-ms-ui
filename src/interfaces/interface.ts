export interface MenuItem {
  id: string;
  title: string;
  href?: string;
  hasDropdown?: boolean;
  hasMegaMenu?: boolean;
  megaMenuType?: string;
  icon?: string;
  categories?: any[];
  brands?: any[];
  newsItems?: any[];
}

export interface HeaderProps {
  menuData: {
    desktopOrder: string[];
    mobileOrder: string[];
    icons: Record<string, string>;
    extraItems: Record<string, MenuItem>;
    menuItems: MenuItem[];
  };
}

export interface FooterProps {
  footerData: {
    logo: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    socialLinks: Array<{
      name: string;
      href: string;
      icon: string;
    }>;
    whatsappChannel: {
      href: string;
      icon: string;
    };
    columns: Array<{
      title: string;
      links: Array<{
        label: string;
        href: string;
      }>;
    }>;
  };
}

export interface HeadingProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  uppercase?: boolean;
  color?: string;
}

export interface ViewAllLinkProps {
  href: string;
  title?: string;
  label?: string;
  icon?: string | false;
  className?: string;
  iconClassName?: string;
  loading?: boolean;
  width?: number;    
  height?: number;    
}

export interface SlideItem {
  img: string;
  link?: string;
}

export interface CarouselProps {
  slides: SlideItem[];
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  infiniteLoop?: boolean;
}