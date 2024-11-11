import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary' | 'danger';
    href: string;
}

export function LinkButton({ children, disabled = false, className = "", variant = 'primary', href }: ButtonProps) {
    return (
        <Link
            href={href}
            className={`px-4 py-2 rounded-md text-white ${variant === 'primary' ? 'bg-black dark:bg-white dark:text-black' : variant === 'secondary' ? 'bg-gray-500' : 'bg-red-500'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {children}
        </Link>
    );
}
