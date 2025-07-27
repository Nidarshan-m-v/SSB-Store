// app/layout.tsx
import NavBar from "./components/navBar";
import "./globals.css";

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
