import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "PLANIFI - MAAK CORP",
    description: "Affordable SAAS for small abd medium businesses",
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: dark)',
                url: '/logo_white.png',
            },
            {
                media: '(prefers-color-scheme: light)',
                url: '/logo_dark.png',
            },
        ],
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased text-[#E8E6E3]">
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
