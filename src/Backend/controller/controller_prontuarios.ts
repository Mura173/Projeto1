import { adicionarOrientacao } from "../model/prontuarios.ts";
import type { TNovaOrientacao } from "../types/types.ts";
import { ERROR_REQUIRED_FIELDS } from "../util/messages.ts";


export async function validarOrientacao(id_paciente: number, orientacao: string) :  Promise<{status: number, message: string | TNovaOrientacao}> {

    if (!id_paciente || isNaN(id_paciente) || id_paciente <= 0 ||
        !orientacao || orientacao.length > 300 || orientacao.trim() === "" || orientacao === undefined) 
    {
            return {
                status: ERROR_REQUIRED_FIELDS.status_code,
                message: ERROR_REQUIRED_FIELDS.message
            }
    }

    let adicionar_orientacao : TNovaOrientacao | false = await adicionarOrientacao(id_paciente, orientacao);
    
    if (!adicionar_orientacao) {
        return {
            status: 500,
            message: "Erro ao adicionar orientação"
        }
    }

    else{
        return {
            status: 201,
            message: adicionar_orientacao
        }
    }

}