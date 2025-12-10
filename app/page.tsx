import CardComponent from "./components/card";
import { FiCpu, FiMonitor, FiPrinter } from "react-icons/fi";
import { PiComputerTower } from "react-icons/pi";
import { MdOutlineAdfScanner, MdLaptopChromebook } from "react-icons/md";
import { TbDeviceIpadBolt, TbSwitchVertical } from "react-icons/tb";
import { countAllEquipamentos, countEquipamento } from "@/models/Equipamento";

export default async function Home() {
    const iconSize = "size-25 md:size-50"

    const totalEquipamentos = await countAllEquipamentos()
    const qtdComputadores = await countEquipamento("Computador")
    const qtdMonitores = await countEquipamento("Monitor")
    const qtdImpressoras = await countEquipamento("Impressora")
    const qtdScanners = await countEquipamento("Scanner")
    const qtdNobreak = await countEquipamento("Nobreak")
    const qtdSwitches = await countEquipamento("Switches")
    const qtdNotebooks = await countEquipamento("Notebook")

    return (
      <div className="flex place-content-center gap-2 flex-wrap pb-18 md:pb-10 md:mt-20">
        <CardComponent titulo="Equipamentos totais" qtd={totalEquipamentos}><FiCpu className={iconSize}/></CardComponent>
        <CardComponent titulo="Computadores" qtd={qtdComputadores}><PiComputerTower className={iconSize}/></CardComponent>
        <CardComponent titulo="Monitores" qtd={qtdMonitores}><FiMonitor className={iconSize}/></CardComponent>
        <CardComponent titulo="Impressoras" qtd={qtdImpressoras}><FiPrinter className={iconSize}/></CardComponent>
        <CardComponent titulo="Scanners" qtd={qtdScanners}><MdOutlineAdfScanner className={iconSize}/></CardComponent>
        <CardComponent titulo="Nobreaks" qtd={qtdNobreak}><TbDeviceIpadBolt className={iconSize}/></CardComponent>
        <CardComponent titulo="Switches" qtd={qtdSwitches}><TbSwitchVertical className={iconSize}/></CardComponent>
        <CardComponent titulo="Notebooks" qtd={qtdNotebooks}><MdLaptopChromebook className={iconSize}/></CardComponent>
      </div>
    );
}
