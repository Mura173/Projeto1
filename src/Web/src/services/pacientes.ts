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

export async function adicionarOrientacao(id_prontuario: number, orientacao: string, data_orientacao: string): Promise<void> {
    await post<unknown>(`/prontuario/${id_prontuario}/orientacao`, { orientacao, data_orientacao })
}
