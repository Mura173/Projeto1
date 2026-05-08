import { prisma } from "../libs/prisma.ts";
import { buscarProntuario } from "./usuarios.ts";

export async function prescreverExercicio(id_paciente: number, id_exercicio: number) {
    try {
        const prontuario = await buscarProntuario(id_paciente)
        if (!prontuario || prontuario.length === 0) return false

        const id_prontuario = prontuario[0].id_prontuario

        return await prisma.prontuarios_exercicios.create({
            data: { id_prontuario, id_exercicio }
        })
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function adicionarOrientacao(id_paciente: number, orientacao: string) {
    try {
        let prontuario = await buscarProntuario(id_paciente)

        if(!prontuario || prontuario == undefined || prontuario.length == 0) {
            return false
        }        

        const id_prontuario = prontuario[0]?.id_prontuario

        let nova_orientacao = await prisma.orientacoes.create({
            data:{
                orientacao: orientacao,
                data_orientacao: new Date(),
                id_prontuario: id_prontuario as number
            }
        })

        if (!nova_orientacao) {
            return false
        }

        return nova_orientacao

    } catch (error) {
        console.log(error)
        return false
    }
}

export async function adicionarQueixa(id_paciente: number, queixa: string) {
    try {
     let prontuario = await buscarProntuario(id_paciente)

        if(!prontuario || prontuario == undefined || prontuario.length == 0) {
            return false
        }        

        const id_prontuario = prontuario[0]?.id_prontuario

        let nova_queixa = await prisma.queixas.create({
            data:{
                queixa: queixa,
                data_queixa: new Date()
            }
        })

        let vincularQueixa = await prisma.prontuarios_queixas.create({
            data: {
                id_prontuario: id_prontuario as number,
                id_queixa: nova_queixa.id_queixa as number
            }
        })

        if (!nova_queixa) {
            return false
        }

        return nova_queixa

    } catch (error) {
        console.log(error)
        return false
    }
}

export async function adicionarSinal(id_paciente: number, sinal: string, escala: number) {
    try {
     let prontuario = await buscarProntuario(id_paciente)

        if(!prontuario || prontuario == undefined || prontuario.length == 0) {
            return false
        }        

        const id_prontuario = prontuario[0]?.id_prontuario

        let novo_sinal = await prisma.sinais.create({
            data:{
                sinal: sinal,
                escala: escala
            }
        })

        let vincularSinal = await prisma.prontuarios_sinais.create({
            data: {
                id_prontuario: id_prontuario as number,
                id_sinal: novo_sinal.id_sinal as number
            }
        })

        if (!novo_sinal) {
            return false
        }

        return novo_sinal

    } catch (error) {
        console.log(error)
        return false
    }
}

export async function adicionarAvaliacao(id_paciente: number, avaliacao: string) {
     try {
     let prontuario = await buscarProntuario(id_paciente)

        if(!prontuario || prontuario == undefined || prontuario.length == 0) {
            return false
        }        

        const id_prontuario = prontuario[0]?.id_prontuario

        let nova_avaliacao = await prisma.avaliacoes.create({
            data:{
                avaliacao: avaliacao,
                data_avaliacao: new Date()
            }
        })

        let vincularAvaliacao = await prisma.prontuarios_avaliacoes.create({
            data: {
                id_prontuario: id_prontuario as number,
                id_avaliacao: nova_avaliacao.id_avaliacao as number
            }
        })

        if (!nova_avaliacao) {
            return false
        }

        return nova_avaliacao

    } catch (error) {
        console.log(error)
        return false
    }
}