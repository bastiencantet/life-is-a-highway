import {ContentContainer} from "@/components/generic/content/container";
import {Button} from "@/components/generic/buttons/button";
import Link from "next/link";
import {NavbarIconLink} from "@/components/navbar/navbarIcon";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Navbar() {
    return (
        <nav className="bg-gray-100 dark:bg-gray-900 border-b border-gray-600 sticky top-0">
            <ContentContainer>
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-6">
                    <Link href="/" className="text-gray-900 dark:text-gray-100">
                        Home
                    </Link>
                    <Link href="/projects" className="text-gray-900 dark:text-gray-100">
                        Projects
                    </Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <NavbarIconLink icon={<AiFillLinkedin size={25}/>} hoverTitle={'Linkedin'} href={"/"} />
                        <NavbarIconLink icon={<AiFillGithub size={25}/>} hoverTitle={'Github'} href={"/"} />
                        <Button>Contact Me</Button>
                    </div>
                </div>
            </ContentContainer>
        </nav>
    );
}
