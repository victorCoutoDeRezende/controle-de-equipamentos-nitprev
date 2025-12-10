import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { Equipamento } from "@/models/Equipamento";

export interface EquipamentoProps {
  equip: Equipamento;
  children?: React.ReactNode;
  onDelete?: (id: number) => void;
}

export default function Equip({equip, children, onDelete}: EquipamentoProps) {
  return (
    <div className="flex w-full flex-col gap-6 p-4 hover:transition hover:duration-300 hover:ease-in-out" key={equip.id}>
      <Item
        variant="outline"
        className="
          hover:text-amber-700
          hover:cursor-pointer hover:duration-500
          flex flex-col
          sm:flex-row sm:items-center sm:justify-between
          gap-4
          p-4
        "
      >
        <ItemContent className="w-full">
          <ItemTitle className="text-xl sm:text-2xl">
            {equip.tipo}
          </ItemTitle>

          <ItemDescription
            className="
              flex flex-col sm:flex-row
              gap-2 sm:gap-8
              text-sm sm:text-base
              flex-wrap
            "
          >
            {<div>Marca: {equip.marca}</div>}
            {equip.serie && <div>Nº de série: {equip.serie}</div>}
            {<div>Setor: {equip.setor}</div>}
            {equip.ip && <div>IP: {equip.ip}</div>}
            {equip.atribuido && <div>Atribuído a: {equip.atribuido}</div>}
            {children}
          </ItemDescription>
        </ItemContent>

        <ItemActions className="w-full sm:w-auto">
          <Button
            variant="outline"
            size="default"
            onClick={() => onDelete?.(equip.id)}   // ⬅️ chama a função recebida
            className="hover:bg-[#FF0000] hover:opacity-80 hover:border-2 hover:text-white hover:cursor-pointer hover:transition-colors hover:duration-500 w-full sm:w-40 h-12 font-bold"
          >
            Excluir
          </Button>

        </ItemActions>
      </Item>
    </div>
  )
}
