import { i18n } from "../../i18n.config";
import { redirect } from 'next/navigation';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {


    return children;
}