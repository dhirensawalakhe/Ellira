import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function Layout({
  children,
  showHeader = true,
  showFooter = true
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0F0F1E] font-['Inter']">
      {showHeader && <Header onCartOpen={() => {}} />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
