import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/content";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import GlowingDotsBackground from "@/components/Animation";
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.roles[0]}`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${inter.variable} ${jbMono.variable} font-body antialiased bg-paper text-ink dark:bg-ink dark:text-paper`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <GlowingDotsBackground>
            {/* UI */}
            <div className="relative z-10 min-h-screen">
              <Sidebar />

              <div className="hidden lg:block">
                <Navbar />
              </div>

              <main className="min-h-screen lg:pt-0">{children}</main>
            </div>
          </GlowingDotsBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
