import { adicionarAvaliacao, adicionarOrientacao, adicionarQueixa, adicionarSinal } from "../model/prontuarios.ts";
import type { TNovaAvaliacao, TNovaOrientacao, TNovaQueixa, TNovoSinal } from "../types/types.ts";
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

export async function validarQueixa(id_paciente: number, queixa: string) :  Promise<{status: number, message: string | TNovaQueixa}> {

    if (!id_paciente || isNaN(id_paciente) || id_paciente <= 0 ||
        !queixa || queixa.length > 100 || queixa.trim() === "" || queixa === undefined) 
    {
            return {
                status: ERROR_REQUIRED_FIELDS.status_code,
                message: ERROR_REQUIRED_FIELDS.message
            }
    }

    let adicionar_queixa : TNovaQueixa | false = await adicionarQueixa(id_paciente, queixa);
    
    if (!adicionar_queixa) {
        return {
            status: 500,
            message: "Erro ao adicionar queixa"
        }
    }

    else{
        return {
            status: 201,
            message: adicionar_queixa
        }
    }

}

export async function validarSinal(id_paciente: number, sinal: string, escala: number) :  Promise<{status: number, message: string | TNovoSinal}> {

    if (!id_paciente || isNaN(id_paciente) || id_paciente <= 0 ||
        !sinal || sinal.length > 50 || sinal.trim() === "" || sinal === undefined ||
        !escala || isNaN(escala) || escala < 0 || escala > 10) 
    {
            return {
                status: ERROR_REQUIRED_FIELDS.status_code,
                message: ERROR_REQUIRED_FIELDS.message
            }
    }

    let adicionar_sinal : TNovoSinal | false = await adicionarSinal(id_paciente, sinal, escala);
    
    if (!adicionar_sinal) {
        return {
            status: 500,
            message: "Erro ao adicionar sinal"
        }
    }

    else{
        return {
            status: 201,
            message: adicionar_sinal
        }
    }
}

export async function validarAvaliacao(id_paciente: number, avaliacao: string) :  Promise<{status: number, message: string | TNovaAvaliacao}> {

    if (!id_paciente || isNaN(id_paciente) || id_paciente <= 0 ||
        !avaliacao || avaliacao.length > 300 || avaliacao.trim() === "" || avaliacao === undefined) 
    {
            return {
                status: ERROR_REQUIRED_FIELDS.status_code,
                message: ERROR_REQUIRED_FIELDS.message
            }
    }

    let adicionar_avaliacao : TNovaAvaliacao | false = await adicionarAvaliacao(id_paciente, avaliacao);
    
    if (!adicionar_avaliacao) {
        return {
            status: 500,
            message: "Erro ao adicionar avaliacao"
        }
    }

    else{
        return {
            status: 201,
            message: adicionar_avaliacao
        }
    }
}