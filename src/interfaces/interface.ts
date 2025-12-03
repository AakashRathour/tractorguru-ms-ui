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

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "fill" | "border";
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  leftImage?: string;
  rightImage?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
  loading?: boolean;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  label?: string;
  error?: string;
  required?: boolean;
  variant?: "border" | "border-bottom";
}

export interface InputProps {
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  label?: string;
  error?: string;
  required?: boolean;
  variant?: "border" | "border-bottom";
  leftIcon?: string;
  rightIcon?: string;
  name?: string;
}

export interface SecondaryNavItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}

export interface SecondaryNavProps {
  items: SecondaryNavItem[];
  visibleItemsDesktop?: number;
  visibleItemsMobile?: number;
  className?: string;
}

export interface TwoSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
}

// Breadcrumbs Interfaces
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

// QuickLinks Interfaces
export interface QuickLinkItem {
  label: string;
  url: string;
}

export interface QuickLinksSection {
  title: string;
  links: QuickLinkItem[];
}

export interface QuickLinksProps {
  sections: QuickLinksSection[];
}

// FAQ Interfaces
export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items: FaqItem[];
}

// Chips Interfaces
export interface ChipItem {
  label: string;
  href: string;
}

export interface ChipsProps {
  items: ChipItem[];
}

// SectionWrapper Interfaces
export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface SectionWrapperProps {
  id?: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headingSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  viewAll?: {
    icon?: boolean;
    label?: string;
    href?: string;
  };
  tabs?: TabItem[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}
