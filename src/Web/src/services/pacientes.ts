import { get, post } from "./api"
import type { PacienteListItem, PacienteCompleto } from "../types"

export async function listarPacientes(): Promise<PacienteListItem[]> {
    const res = await get<{ data: PacienteListItem[] }>("/pacientes")
    return res.data
}

export async function buscarPaciente(id: number): Promise<PacienteCompleto> {
    const res = await get<{ data: PacienteCompleto }>(`/paciente/${id}`)
    return res.data
}

export async function adicionarOrientacao(id_paciente: number, orientacao: string): Promise<void> {
    await post<unknown>(`/adicionarOrientacao/${id_paciente}`, { orientacao })
}

export async function adicionarQueixa(id_paciente: number, queixa: string): Promise<void> {
    await post<unknown>(`/adicionarQueixa/${id_paciente}`, { queixa })
}

export async function adicionarSinal(id_paciente: number, sinal: string,escala: number): Promise<void> {
    await post<unknown>(`/adicionarSinal/${id_paciente}`, { sinal, escala })
}

export async function adicionarAvaliacao(id_paciente:number , avaliacao: string): Promise<void> {
    await post<unknown>(`/adicionarAvaliacao/${id_paciente}`, { avaliacao })
}
