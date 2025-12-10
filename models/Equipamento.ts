import { pool } from "@/database/pool"

export interface Equipamento {
  id: number
  serie: string,
  setor: string,
  ip: string,
  atribuido: string,
  tipo: string,
  marca: string
}

interface CreateEquipamentoParams{
  serie: string,
  setor: string,
  ip: string,
  atribuido: string,
  tipo: string,
  marca: string
}

export async function getEquipamentosAtuais(){
  const result = await pool.query(`
    SELECT id, serie, setor, ip, atribuido, tipo, marca
    FROM equipamentos ORDER BY setor;
    `)

  const equipamentos: Equipamento[] = result.rows
  return equipamentos
}

export async function createEquipamento(params: CreateEquipamentoParams){
  await pool.query('INSERT INTO equipamentos(serie, setor, ip, atribuido, tipo, marca) VALUES ($1, $2, $3, $4, $5, $6);', [params.serie, params.setor, params.ip, params.atribuido, params.tipo, params.marca])
}

export async function deleteEquipamento(id: number){
  await pool.query('DELETE FROM equipamentos WHERE id = $1', [id])
}

export async function countEquipamento(tipo: string){
  const result = await pool.query(
    'SELECT COUNT(*) FROM equipamentos WHERE tipo = $1',
    [tipo]
  );
  return Number(result.rows[0].count);
}

export async function countAllEquipamentos() {
  const result = await pool.query('SELECT COUNT(*) FROM equipamentos');
  return Number(result.rows[0].count);
}
