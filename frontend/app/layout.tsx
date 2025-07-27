// app/layout.tsx
import NavBar from "../components/navBar";
import "./globals.css";
import About from "../components/About";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
