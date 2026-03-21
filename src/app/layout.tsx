import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { geistMono, geistSans } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paulo Victor",
  description: "Portfólio de Paulo Victor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
