"use client";

interface FiltroProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    equipamentos: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onFilter: (filters: any) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Filtro({ equipamentos, onFilter }: FiltroProps) {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        onFilter({ [name]: value });
    };

    return (
        <div className="
            flex flex-col gap-4 p-4 text-lg
            md:flex-row md:flex-wrap md:gap-6
        ">
            <div className="flex flex-col w-full md:w-auto">
                <label htmlFor="tipo">Tipo de Equipamento:</label>
                <select 
                    name="tipo" 
                    onChange={handleInputChange}
                    className="border rounded p-2"
                >
                    <option value="">Todos</option>
                    <option value="Computador">Computador</option>
                    <option value="Monitor">Monitor</option>
                    <option value="Impressora">Impressora</option>
                    <option value="Scanner">Scanner</option>
                    <option value="Nobreak">Nobreak</option>
                    <option value="Switch">Switch</option>
                    <option value="Notebook">Notebook</option>
                </select>
            </div>

            <div className="flex flex-col w-full md:w-auto">
                <label htmlFor="marca">Marca:</label>
                <input 
                    name="marca" 
                    placeholder="Marca" 
                    onChange={handleInputChange}
                    className="border rounded p-2"
                />
            </div>

            <div className="flex flex-col w-full md:w-auto">
                <label htmlFor="serie">Nº de Série:</label>
                <input 
                    name="serie" 
                    placeholder="Série" 
                    onChange={handleInputChange}
                    className="border rounded p-2"
                />
            </div>

            <div className="flex flex-col w-full md:w-auto">
                <label htmlFor="setor">Setor:</label>
                <select
                    name="setor"
                    onChange={handleInputChange}
                    className="border rounded p-2 max-h-40 overflow-y-auto"
                >
                    <option value="">Todos</option>
                    <option value="Protocolo">Protocolo</option>
                    <option value="Assistência Social">Assistência Social</option>
                    <option value="Chefia de Gabinete">Chefia de Gabinete</option>
                    <option value="Presidência">Presidência</option>
                    <option value="Contabilidade">Contabilidade</option>
                    <option value="Controle Interno">Controle Interno</option>
                    <option value="Financeiro">Financeiro</option>
                    <option value="Diretoria de Investimentos">Diretoria de Investimentos</option>
                    <option value="Tesouraria">Tesouraria</option>
                    <option value="Administração">Administração</option>
                    <option value="Procuradoria Geral">Procuradoria Geral</option>
                    <option value="Diretoria de Benefícios">Diretoria de Benefícios</option>
                    <option value="Comprev">Comprev</option>
                    <option value="Departamento de Compras">Departamento de Compras</option>
                    <option value="Divisão de Pessoal">Divisão de Pessoal</option>
                    <option value="Diretoria de Informatica">Diretoria de Informatica</option>
                </select>
            </div>

            <div className="flex flex-col w-full md:w-auto">
                <label htmlFor="ip">IP:</label>
                <input 
                    name="ip" 
                    placeholder="IP" 
                    onChange={handleInputChange}
                    className="border rounded p-2"
                />
            </div>

            <div className="flex flex-col w-full md:w-auto">
                <label htmlFor="atribuido">Atribuído a:</label>
                <input 
                    name="atribuido" 
                    placeholder="Atribuído a:"
                    onChange={handleInputChange}
                    className="border rounded p-2"
                />
            </div>
        </div>
    );
}
