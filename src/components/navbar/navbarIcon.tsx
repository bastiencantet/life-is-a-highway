import Link from "next/link";

interface NavbarIconLinkProps {
    icon: React.ReactNode;
    href: string;
    title?: string;
    hoverTitle?: string;
}

export function NavbarIconLink({ icon, href, title, hoverTitle }: NavbarIconLinkProps) {
    return (
        <Link href={href} className="flex items-center gap-2 text-gray-900 dark:text-gray-100" title={hoverTitle}>
            {icon}
            {title ? <span>{title}</span> : null}
        </Link>
    );
}

