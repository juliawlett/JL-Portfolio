import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/data/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = siteConfig.projects.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Projeto não encontrado",
      robots: { index: false, follow: false },
    };
  }

  const url = `https://devjulialeticia.vercel.app/projetos/${params.slug}`;

  return {
    title: `${project.title} · Case de Sucesso`,
    description: project.description,
    authors: [{ name: siteConfig.profile.name }],
    creator: siteConfig.profile.name,
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url,
      title: `${project.title} · Case de Sucesso | Júlia Letícia`,
      description: project.description,
      siteName: `${siteConfig.profile.name} Portfólio`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `Case ${project.title} desenvolvido por Júlia Letícia`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} · Case de Sucesso | Júlia Letícia`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = siteConfig.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://devjulialeticia.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cases",
        item: "https://devjulialeticia.vercel.app/#cases",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://devjulialeticia.vercel.app/projetos/${project.slug}`,
      },
    ],
  };

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.tagline,
    description: project.description,
    image: `https://devjulialeticia.vercel.app${project.image}`,
    author: {
      "@type": "Person",
      name: "Júlia Letícia",
      url: "https://devjulialeticia.vercel.app",
    },
    url: `https://devjulialeticia.vercel.app/projetos/${project.slug}`,
  };

  const otherProjects = siteConfig.projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-200">
      {/* Schemas Estruturados para Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />

      <Navbar />

      <CaseStudyTemplate project={project} otherProjects={otherProjects} />

      <Footer />
    </div>
  );
}
