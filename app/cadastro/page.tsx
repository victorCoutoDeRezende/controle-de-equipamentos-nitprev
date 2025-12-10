"use client";

import { createEquipamentoAction } from "@/actions/equipamentos-actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Input
} from "@/components/ui/input";
import {
  Label
} from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Cadastro() {
  return (
    <div className="flex justify-center p-4 pb-24 md:p-10 md:pt-24">
      <Card className="w-full max-w-2xl shadow-md">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">
            Cadastrar Novo Equipamento
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form
            action={createEquipamentoAction}
            className="space-y-6"
          >
            <div className="grid gap-2">
              <Label htmlFor="tipo">Tipo de Equipamento</Label>
              <Select name="tipo">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o tipo..." />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Computador">Computador</SelectItem>
                  <SelectItem value="Monitor">Monitor</SelectItem>
                  <SelectItem value="Impressora">Impressora</SelectItem>
                  <SelectItem value="Scanner">Scanner</SelectItem>
                  <SelectItem value="Nobreak">Nobreak</SelectItem>
                  <SelectItem value="Switch">Switch</SelectItem>
                  <SelectItem value="Notebook">Notebook</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="marca">Marca</Label>
              <Input name="marca" id="marca" placeholder="Digite a marca" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="setor">Setor Alocado</Label>
              <Select name="setor">
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto bg-white">
                  <SelectItem value="Protocolo">Protocolo</SelectItem>
                  <SelectItem value="Assistência Social">Assistência Social</SelectItem>
                  <SelectItem value="Chefia de Gabinete">Chefia de Gabinete</SelectItem>
                  <SelectItem value="Presidência">Presidência</SelectItem>
                  <SelectItem value="Contabilidade">Contabilidade</SelectItem>
                  <SelectItem value="Controle Interno">Controle Interno</SelectItem>
                  <SelectItem value="Financeiro">Financeiro</SelectItem>
                  <SelectItem value="Diretoria de Investimentos">Diretoria de Investimentos</SelectItem>
                  <SelectItem value="Tesouraria">Tesouraria</SelectItem>
                  <SelectItem value="Administração">Administração</SelectItem>
                  <SelectItem value="Procuradoria Geral">Procuradoria Geral</SelectItem>
                  <SelectItem value="Diretoria de Benefícios">Diretoria de Benefícios</SelectItem>
                  <SelectItem value="Comprev">Comprev</SelectItem>
                  <SelectItem value="Departamento de Compras">Departamento de Compras</SelectItem>
                  <SelectItem value="Divisão de Pessoal">Divisão de Pessoal</SelectItem>
                  <SelectItem value="Diretoria de Informatica">Diretoria de Informatica</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="serie">Nº de Série (Opcional)</Label>
              <Input name="serie" id="serie" placeholder="Ex: ABC12345" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ip">IP (Opcional)</Label>
              <Input name="ip" id="ip" placeholder="Ex: 192.168.0.10" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="atribuido">Atribuído a Outro Equipamento?</Label>
              <Input
                name="atribuido"
                id="atribuido"
                placeholder="Ex: ABC12345"
              />
            </div>
            <Button type="submit" className="w-full mt-4 border-2 md:hover:bg-emerald-600 md:hover:cursor-pointer">
              Cadastrar Equipamento
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
