import { prisma } from '../libs/prisma.ts';
import type { TPaciente } from '../types/types.ts';
import { ERROR_NOT_FOUND } from '../util/messages.ts';

export async function CadastrarPaciente(data: TPaciente) {
    try {
        let usuario = await prisma.usuarios.create({
            data: {
                nome: data.nome,
                email: data.email,
                hash_senha: data.hash_senha,
                data_nascimento: data.data_nascimento,
                telefone: data.telefone
            }
        })

        if (usuario) {
            let paciente = await prisma.pacientes.create({
                data: {
                    id_paciente: usuario.id_usuario,
                    is_ativo: true,
                    primeiro_acesso: true
                }
            })


            if (paciente) {
                let prontuario = await prisma.prontuarios.create({
                    data: {
                        id_paciente: paciente.id_paciente,
                        classificacao: "Leve",
                        data_inicio_tratamento: new Date(),
                    }
                })

                if (prontuario) {

                    return {
                        id_paciente: paciente.id_paciente,
                        nome: usuario.nome,
                        email: usuario.email,
                        hash_senha: usuario.hash_senha,
                        data_nascimento: usuario.data_nascimento,
                        telefone: usuario.telefone,
                        primeiro_acesso: paciente.primeiro_acesso,
                        is_ativo: paciente.is_ativo,
                        prontuario: prontuario
                    }
                }
            }

                else {
                    await prisma.usuarios.delete({
                        where: {
                            id_usuario: usuario.id_usuario
                        }
                    })
                    return false
                }
            }

            else {
                return false
            }
        } catch (error) {
            console.log(error)
            return error
        }
    }

export async function ValidarEmail(email: string) {
        try {
            let testEmail = await prisma.usuarios.findUnique({
                where: {
                    email: email
                }
            })

            if (testEmail) {
                return false
            } else {
                return true
            }

        } catch (error) {
            console.log(error)
            return error
        }
    }

    export async function LoginUsuario(email: string) {
        try {
            let findUser = await prisma.usuarios.findUnique({
                where: {
                    email: email
                }
            })

            if (findUser) {

                return {
                    hash_senha: findUser.hash_senha,
                    id_usuario: findUser.id_usuario
                }
            }
            else {
                return false
            }


        } catch (error) {
            console.log(error)
            return error
        }
    }

    export async function buscarPaciente(id_paciente: number): Promise<TPaciente | false> {
        try {
            let paciente = await prisma.pacientes.findUnique({
                where: {
                    id_paciente: id_paciente
                },
                include: {
                    usuarios: true,
                    prontuarios: {
                        include: {
                            orientacoes: true,
                            prontuarios_exercicios: {
                                include: {
                                    exercicios: true
                                }
                            },
                            prontuarios_avaliacoes: {
                                include: {
                                    avaliacoes: true
                                }
                            },
                            prontuarios_sinais: {
                                include: {
                                    sinais: true
                                }
                            },
                            prontuarios_queixas: {
                                include: {
                                    queixas: true
                                }
                            }
                        }
                    }
                }
            })

            if (paciente) {

                return {
                    id_paciente: paciente.id_paciente,
                    nome: paciente.usuarios.nome,
                    email: paciente.usuarios.email,
                    hash_senha: paciente.usuarios.hash_senha,
                    data_nascimento: paciente.usuarios.data_nascimento,
                    telefone: paciente.usuarios.telefone,
                    prontuario: paciente.prontuarios,
                }
            } else {
                return false
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }

    export async function listarPacientes() {
        try {
            const pacientes = await prisma.pacientes.findMany({
                include: {
                    usuarios: true,
                    prontuarios: {
                        include: {
                            orientacoes: true,
                            prontuarios_exercicios: {
                                include: {
                                    exercicios: true
                                }
                            },
                            prontuarios_avaliacoes: {
                                include: {
                                    avaliacoes: true
                                }
                            },
                            prontuarios_sinais: {
                                include: {
                                    sinais: true
                                }
                            },
                            prontuarios_queixas: {
                                include: {
                                    queixas: true
                                }
                            }
                        }
                    }
                }
            })

            return pacientes

        } catch (error) {
            console.log(error)
            return false
        }
    }

export async function buscarProntuario(id_paciente: number) {
    try {
        let paciente = await prisma.pacientes.findUnique({
            where: {
                id_paciente: id_paciente
            },
            include: {
                prontuarios: {
                    include: {
                        orientacoes: true,
                    }
                }
            }
        })

        if (!paciente) {
            return false
        }

        return paciente.prontuarios
        
    } catch (error) {
        console.log(error)
        return false
    }
}