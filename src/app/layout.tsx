import type { Metadata } from "next";
import "./global.scss";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata: Metadata = {
        title: "KobamKode",
        description: "Mario's Side Quests",
};

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                <html lang="en">
                        <body>
                                <Header />
                                <main className="container">
                                        {children}
                                </main>
                                <footer className="container">
                                        <small>2025 <Link href="/">kobamkode</Link>.</small>
                                </footer>
                        </body>
                </html>
        );
}
