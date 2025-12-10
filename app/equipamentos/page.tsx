"use client";

import { useState, useEffect, useCallback } from "react";
import Filtro from "@/app/components/Filtro";
import { Equipamento } from "@/models/Equipamento";
import Equip from "./equipamento";
import { deleteEquipamentoAction } from "@/actions/equipamentos-actions";

export default function Equipamentos() {
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);
  const [filteredEquipamentos, setFilteredEquipamentos] = useState<Equipamento[]>([]);

  const fetchEquipamentos = useCallback(async () => {
    try {
      const res = await fetch("/api/equipamentos", { cache: "no-store" });
      if (!res.ok) {
        // Se a resposta da API não for bem-sucedida, loga o erro
        console.error("Falha ao buscar equipamentos:", res.statusText);
        return;
      }
      const data = await res.json();
      setEquipamentos(data);
      setFilteredEquipamentos(data);
    } catch (error) {
      console.error("Erro na requisição de equipamentos:", error);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchEquipamentos();
  }, [fetchEquipamentos]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilter = useCallback((filters: any) => {
    let filtrados = [...equipamentos];

    if (filters.serie) {
      filtrados = filtrados.filter((p) =>
        p.serie.toLowerCase().includes(filters.serie.toLowerCase())
      );
    }
    if (filters.setor) {
      filtrados = filtrados.filter((p) => p.setor.toString() === filters.setor.toString());
    }
    if (filters.ip) {
      filtrados = filtrados.filter((p) =>
        p.ip.toLowerCase().includes(filters.ip.toLowerCase())
      );
    }
    if (filters.atribuido) {
      filtrados = filtrados.filter((p) =>
        p.atribuido.toLowerCase().includes(filters.atribuido.toLowerCase())
      );
    }
    if (filters.tipo) {
      filtrados = filtrados.filter((p) => p.tipo === filters.tipo);
    }
    if (filters.marca) {
      filtrados = filtrados.filter((p) =>
        p.marca.toLowerCase().includes(filters.marca.toLowerCase())
      );
    }

    setFilteredEquipamentos(filtrados);
  }, [equipamentos]); // Adiciona 'equipamentos' como dependência

  const handleDelete = async (id: number) => {
    await deleteEquipamentoAction(id);

    // Remove no estado local
    setEquipamentos(prev => prev.filter(e => e.id !== id));
    setFilteredEquipamentos(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="mb-16 md:mt-15 md:mb-5">
        <Filtro equipamentos={equipamentos} onFilter={handleFilter} />
        {filteredEquipamentos.map((equipamento) => (
            <Equip key={equipamento.id} equip={equipamento} onDelete={(id) => handleDelete(id)}/>
          ))}
    </div>
  )
}
