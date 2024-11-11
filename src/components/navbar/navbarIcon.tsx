import Link from "next/link";

interface NavbarIconLinkProps {
    icon: React.ReactNode;
    href: string;
    title?: string;
    hoverTitle?: string;
    newTab?: boolean;
}

export function NavbarIconLink({ icon, href, title, hoverTitle, newTab}: NavbarIconLinkProps) {
    return (
        <Link href={href} className="flex items-center gap-2 text-gray-900 dark:text-gray-100" title={hoverTitle} {...(newTab ? { target: "_blank" } : {})}>
            {icon}
            {title ? <span>{title}</span> : null}
        </Link>
    );
}

