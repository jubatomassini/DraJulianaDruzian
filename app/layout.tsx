import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
import {
  GoogleTagManagerNoScript,
  GoogleTagManagerScript,
} from "@/components/GoogleTagManager";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["200", "300", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.defaultTitle,
    template: site.titleTemplate,
  },
  description: site.description,
  keywords: [
    "reumatologista",
    "reumatologia",
    "tratamento de artrite",
    "doenças autoimunes",
    site.cityUf,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: site.defaultTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultTitle,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f5f1ed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <GoogleTagManagerScript />
      </head>
      <body className="font-sans font-extralight min-h-full overflow-x-clip bg-background text-foreground">
        <GoogleTagManagerNoScript />
        <JsonLd />
        <SiteHeader />
        <div className="pt-[calc(4rem+env(safe-area-inset-top,0px))] sm:pt-[calc(4.25rem+env(safe-area-inset-top,0px))]">
          {children}
        </div>
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
