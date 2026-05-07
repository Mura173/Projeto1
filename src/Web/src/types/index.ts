export interface ExercicioItem {
    id_exercicio: number
    titulo: string
    descricao: string
    orientacoes: string
    exericios_tags: Array<{ tags: { tag: string } }>
    imagens_exercicios: Array<{ link_imagem: string }>
}

export interface PacienteListItem {
    id_paciente: number
    is_ativo: boolean
    usuarios: {
        nome: string
        data_nascimento: string
        telefone: string
    }
    prontuarios: Array<{
        id_prontuario: number
        data_inicio_tratamento: string
        classificacao: string
    }>
}

export interface ProntuarioCompleto {
    id_prontuario: number
    data_inicio_tratamento: string
    classificacao: string
    id_paciente:number
    orientacoes: Array<{
        id_orientacao: number
        orientacao: string
        data_orientacao: string
    }>
    prontuarios_exercicios: Array<{
        exercicios: { id_exercicio: number; titulo: string; orientacoes: string }
    }>
    prontuarios_avaliacoes: Array<{
        avaliacoes: { id_avaliacao: number; avaliacao: string; data_avaliacao: string }
    }>
    prontuarios_sinais: Array<{
        sinais: { id_sinal: number; sinal: string; escala: number }
    }>
    prontuarios_queixas: Array<{
        queixas: { id_queixa: number; queixa: string; data_queixa: string}
    }>
}

export interface PacienteCompleto{
    id_paciente: number
    nome: string
    email: string
    data_nascimento: string
    telefone: string
    prontuario: ProntuarioCompleto[]
}

export interface OrientacaoPayload {
    orientacao: string
    data_orientacao: string
}

export interface QueixaPayload {
    queixa: string
    data_queixa: string
}

export interface SinalPayload {
    sinal: string
    escala: number
}

export interface AvaliacaoPayload {
    avaliacao: string
    data_avaliacao: string
}
