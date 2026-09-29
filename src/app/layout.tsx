import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/config";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const baseUrl = "https://devjulialeticia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.profile.name} · ${siteConfig.profile.title}`,
    template: `%s | ${siteConfig.profile.name}`,
  },
  description:
    "Criação de landing pages e sites de alta performance focados em conversão, design autoral e carregamento instantâneo. Veja cases reais e solicite sua proposta.",
  keywords: [
    "criação de landing pages",
    "desenvolvimento de sites",
    "web designer cuiabá",
    "landing page de alta conversão",
    "site institucional",
    "desenvolvimento web",
    "júlia letícia",
    "devjulia",
    "front-end developer",
    "criação de sites cuiabá",
  ],
  authors: [{ name: siteConfig.profile.name, url: baseUrl }],
  creator: siteConfig.profile.name,
  publisher: siteConfig.profile.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    title: `${siteConfig.profile.name} · Desenvolvimento Web & Landing Pages de Alta Conversão`,
    description:
      "Transformo visitantes em clientes pagantes com sites que unem estética de alto padrão e engenharia de conversão. 1º ano de domínio .com.br incluso como bônus.",
    siteName: `${siteConfig.profile.name} Portfólio`,
    images: [
      {
        url: "/images/new-projects/db-cursos-desktop.png",
        width: 1200,
        height: 630,
        alt: "Portfólio Júlia Letícia - Desenvolvimento Web e Landing Pages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.profile.name} · Sites e Landing Pages Profissionais`,
    description:
      "Sites autorais, ultra-rápidos e focados em resultado para empresas e profissionais.",
    images: ["/images/new-projects/db-cursos-desktop.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema JSON-LD: ProfessionalService / LocalBusiness
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#organization`,
    name: "Júlia Letícia · Desenvolvimento Web",
    url: baseUrl,
    image: `${baseUrl}/images/new-projects/db-cursos-desktop.png`,
    description:
      "Desenvolvimento de landing pages de alta conversão e sites institucionais modernos com foco em resultados para empresas.",
    telephone: "+5565981290370",
    priceRange: "R$ 1.000 - R$ 6.100",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cuiabá",
      addressRegion: "MT",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-15.6014",
      longitude: "-56.0979",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      siteConfig.profile.instagram,
      siteConfig.profile.linkedin,
      siteConfig.profile.github,
    ],
  };

  // Schema JSON-LD: Person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Júlia Letícia",
    alternateName: ["devjulia", "Julia Leticia"],
    jobTitle: "Desenvolvedora Web & UI/UX Designer",
    url: baseUrl,
    sameAs: [
      siteConfig.profile.instagram,
      siteConfig.profile.linkedin,
      siteConfig.profile.github,
    ],
    worksFor: {
      "@id": `${baseUrl}/#organization`,
    },
  };

  // Schema JSON-LD: WebSite
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Júlia Letícia Portfólio",
    description: "Sites e landing pages profissionais para negócios que querem ser escolhidos.",
    publisher: {
      "@id": `${baseUrl}/#person`,
    },
    inLanguage: "pt-BR",
  };

  // Schema JSON-LD: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="//wa.me" />
        {/* Injeção Determinística de JSON-LD Schema.org para Google & Motores IA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('portfolio_theme_v2');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text antialiased min-h-screen selection:bg-brand-100 dark:selection:bg-brand-900/60 selection:text-brand-900 dark:selection:text-white transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
