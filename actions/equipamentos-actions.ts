'use server'

import { revalidatePath } from "next/cache";
import * as Equipamento from "@/models/Equipamento"

export async function createEquipamentoAction(formData: FormData){
  const serie = formData.get('serie') as string;
  const setor = formData.get('setor') as string;
  const ip = formData.get('ip') as string;
  const atribuido = formData.get('atribuido') as string;
  const tipo = formData.get('tipo') as string;
  const marca = formData.get('marca') as string;

  if (!setor || !tipo || !marca) {

   console.error("Dados inválidos:", { serie, setor, ip, atribuido, tipo, marca });

   return null;
  }

  await Equipamento.createEquipamento(
   { serie,
    setor,
    ip,
    atribuido,
    tipo,
    marca
   });
  revalidatePath('/')
}

export async function deleteEquipamentoAction(id: number){
  await Equipamento.deleteEquipamento(id)
  revalidatePath('/')
}

