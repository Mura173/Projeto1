import { prisma } from "../libs/prisma.ts";
import { buscarProntuario } from "./usuarios.ts";

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