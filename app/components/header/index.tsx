import Image from "next/image";
import ButtonHeader from "./ButtonHeader";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow">
      <header className="hidden md:block w-full bg-amber-600 text-white px-6 py-4">
        <div className="flex items-center justify-between text-2xl">
          <div className="flex gap-3">
            <Image src={"/logo.png"} width={30} height={30} alt="logo niteroi"></Image>
            <ButtonHeader texto="Início" caminho="" />
          </div>
          <nav className="flex gap-8">
            <ButtonHeader texto="Cadastro" caminho="cadastro" />
            <ButtonHeader texto="Equipamentos" caminho="equipamentos" />
          </nav>
        </div>
      </header>

      <nav className="
        fixed bottom-0 left-0 w-full h-16 bg-amber-600 bg-linear-to-b text-white 
        flex justify-around items-center md:hidden
        border-t border-gray-700
      ">
        <ButtonHeader mobile caminho="" icon="home" />
        <ButtonHeader mobile caminho="equipamentos" icon="tool" />
        <ButtonHeader mobile caminho="cadastro" icon="plus" />
      </nav>
    </div>
  );
}
