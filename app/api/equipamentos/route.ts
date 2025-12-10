import { NextRequest, NextResponse } from "next/server";
import * as Equipamento from "@/models/Equipamento";

// A linha deve estar aqui, no topo do arquivo.
export const dynamic = 'force-dynamic';

let idSequence = 1;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const equipamentos: any[] = [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest){
  try {
    const equipamentos = await Equipamento.getEquipamentosAtuais();
    return NextResponse.json(equipamentos);
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar equipamentos" }, { status: 500 });
   }
}

export async function POST(req: NextRequest){
  const { serie, setor, ip, atribuido, tipo, marca } = await req.json()

  const novoEquipamento = {
    id: idSequence++,
    serie: serie,
    setor: setor,
    ip: ip,
    atribuido: atribuido,
    tipo: tipo,
    marca: marca
  }

  equipamentos.push(novoEquipamento)

  return NextResponse.json(novoEquipamento, {status: 201})
}

export async function PUT(req: NextRequest){
  const {id, serie, setor, ip, atribuido, tipo, marca } = await req.json()

  const equipamentoIndex = equipamentos.findIndex(equipamento => equipamento.id === +id);
  if (equipamentoIndex === -1) {
    return NextResponse.json({ error: 'Equipamento não encontrado' }, { status: 404 });
  }

  if (serie) equipamentos[equipamentoIndex].serie = serie;
  if (setor) equipamentos[equipamentoIndex].setor = setor;
  if (ip) equipamentos[equipamentoIndex].ip = ip;
  if (atribuido) equipamentos[equipamentoIndex].atribuido = atribuido;
  if (tipo) equipamentos[equipamentoIndex].tipo = tipo;
  if (marca) equipamentos[equipamentoIndex].marca = marca;
  
  return NextResponse.json(equipamentos[equipamentoIndex]);
}

export async function DELETE(req: NextRequest){
  const { id } = await req.json()

  const equipamentoIndex = equipamentos.findIndex(equipamento => equipamento.id === +id);
  if (equipamentoIndex === -1) {
   return NextResponse.json({ error: 'Equipamento não encontrado' }, { status: 404 });
  }
 
  const [deletedEquipamento] = equipamentos.splice(equipamentoIndex, 1)
 
  return NextResponse.json({ deletedEquipamento })
}