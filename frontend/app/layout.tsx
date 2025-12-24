import { ThemeProvider } from './components/theme-provider';
import { Header } from "./components/Header"; 
import { Footer } from "./components/Footer"; 
import { Toaster } from 'sonner';
import "./globals.css";

export const metadata = {
  title: "Harbatch Advertising",
  description: "Precision advertising and growth solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Notice: No hardcoded bg-white here. 
            The background color is now controlled by your globals.css variables.
          */}
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Toaster position="top-center" richColors />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}