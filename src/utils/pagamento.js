export function limparNumeroCartao(numero) {
    return numero.replace(/\s|-/g, '')
}

export function cartaoEhTentativaDeGolpe(numero) {
    const numeroLimpo = limparNumeroCartao(numero)

    if (numeroLimpo.length !== 16) {
        return false
    }

    return numeroLimpo
        .split('')
        .every((digito) => digito === numeroLimpo[0])
}