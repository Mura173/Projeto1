import {compare, hash} from "bcrypt"

export async function CriptografarSenha(senha:string){
    const salt = 10
    const hashSenha = await hash(senha, salt)

    return hashSenha
}

export async function ValidarSenha(senha:string, hashSenha:string) {
    const validarSenha = await compare(senha, hashSenha)

    return validarSenha
}