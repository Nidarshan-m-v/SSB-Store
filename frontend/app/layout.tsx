// app/layout.tsx
import NavBar from "./components/navBar";
import ImageCarousel from "./components/ImageCarousel";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <ImageCarousel />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
