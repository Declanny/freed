// app/layout.tsx
import './globals.css'; // Your global styles
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';  // Import the Navbar
import Sidebar from '@/components/Sidebar';  // Import the Sidebar

export const metadata = {
  title: 'Freed Fintech',
  description: 'A Next.js Fintech application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <div className="flex">
            {/* Sidebar on the left */}
            <Sidebar />

            {/* Main content area on the right */}
            <div className="flex-1">
              <Navbar />
              <main>{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
