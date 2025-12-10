import Link from "next/link";
import { FiHome, FiTool, FiSearch, FiPlus } from "react-icons/fi";

type ButtonHeaderProps = {
  texto?: string;
  caminho: string;
  mobile?: boolean;
  icon?: "home" | "tool" | "search" | "plus";
};

export default function ButtonHeader({ texto, caminho, mobile, icon }: ButtonHeaderProps) {
    const IconComponent =
        icon === "home" ? FiHome :
        icon === "tool" ? FiTool :
        icon === "search" ? FiSearch :
        icon === "plus" ? FiPlus :
        null;

    if (mobile) {
        return (
            <Link href={`/${caminho}`} className=" text-gray-300 hover:text-white transition-all duration-200 
            flex flex-col items-center">
                {IconComponent && <IconComponent size={26} />}
            </Link>
        );
    }

    return (
        <Link href={`/${caminho}`}
        className="relative text-white transition-all duration-300 hover:text-gray-300 after:content-[''] after:absolute
            after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300
            hover:after:w-full">
            {texto}
        </Link>
    );
}
