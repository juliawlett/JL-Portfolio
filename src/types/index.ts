export interface Project {
  slug: string;
  title: string;
  client: string;
  category: "Serviços & B2B" | "Luxo & Varejo" | "Gastronomia & Lazer" | "Saúde & Bem-Estar";
  pageType:
    | "Landing page de alta conversão"
    | "Site institucional de autoridade"
    | "Landing page com filtro interativo"
    | "Landing Page de Alta Conversão"
    | "Site Institucional de Autoridade"
    | "Landing Page com Filtro Interativo";
  url: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: {
    pageSpeed: string;
    loadTime: string;
    highlights: string[];
  };
  technologies: string[];
  whatsappMessage: string;
  featured: boolean;
  image: string;
  imageMobile?: string;
}

export interface Plan {
  id: string;
  name: string;
  priceBase: number;
  pricePromo: number;
  prefix?: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface CarePlan {
  title: string;
  priceTogether: number;
  priceLater: number;
  description: string;
  features: string[];
}

export interface SiteConfig {
  profile: {
    name: string;
    title: string;
    badge: string;
    email: string;
    whatsapp: string;
    whatsappFormatted: string;
    location: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
  promo: {
    isActive: boolean;
    badgeText: string;
    bannerText: string;
    urgencyNotice: string;
  };
  stats: Array<{
    label: string;
    value: string;
    description: string;
    badge?: string;
    highlight?: string;
  }>;
  plans: Plan[];
  carePlan: CarePlan;
  projects: Project[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}
