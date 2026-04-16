import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/footer";
import { keywords } from "@/constants/seo";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Paulo Victor | Desenvolvedor Fullstack",
    template: "%s | Paulo Victor",
  },

  description:
    "Portfólio de Paulo Victor, desenvolvedor Fullstack especializado em React, Next.js e Node.js. Explore projetos, experiências e entre em contato.",

  keywords: keywords,
  authors: [{ name: "Paulo Victor", url: "https://paulo-victor.vercel.app" }],

  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://paulo-victor.vercel.app",
    siteName: "Paulo Victor | Portfolio",
    title: "Paulo Victor | Desenvolvedor Fullstack",
    description:
      "Portfólio de Paulo Victor, desenvolvedor Fullstack. Projetos, experiências e contato.",
    images: [
      {
        url: "../public/img/me-optimized.webp", // 1200x630
        width: 1200,
        height: 630,
        alt: "Paulo Victor - Desenvolvedor Fullstack",
      },
    ],
  },

  // Twitter/X Cards
  twitter: {
    card: "summary_large_image",
    title: "Paulo Victor | Desenvolvedor Fullstack",
    description:
      "Portfólio de Paulo Victor, desenvolvedor Fullstack. Projetos, experiências e contato.",
    images: ["../public/img/me-optimized.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
