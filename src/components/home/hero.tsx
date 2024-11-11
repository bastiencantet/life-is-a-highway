import Image from "next/image";
import {Button} from "@/components/generic/buttons/button";
import {NavbarIconLink} from "@/components/navbar/navbarIcon";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

export function Hero() {
  return (
      <div className={"flex gap-10 h-splitterscreen"}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Hello 👋 I'm Bastien CANTET
          </h1>
            <div className={"flex gap-4 mt-4"}>
                <Button>My Projects</Button>
                <Button>Contact Me</Button>
            </div>
        </div>
        <div className={'flex justify-center items-center'}>
          <Image className={"rounded-full shadow-2xl"} src="https://avatars.githubusercontent.com/u/43909152?v=4" alt={"Bastien Cantet"} width={400} height={400} />
        </div>
      </div>
  );
}
