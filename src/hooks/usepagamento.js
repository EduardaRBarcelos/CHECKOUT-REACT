import { useState } from 'react'

import { cartaoEhTentativaDeGolpe } from '../utils/pagamento'

function usePagamento() {
    const [processando, setProcessando] = useState(false)

    async function processarPagamento(numeroCartao) {
        setProcessando(true)

        await new Promise((resolve) => {
            setTimeout(resolve, 1500)
        })

        const tentativaDeGolpe =
            cartaoEhTentativaDeGolpe(numeroCartao)

        setProcessando(false)

        return !tentativaDeGolpe
    }

    return {
        processando,
        processarPagamento,
    }
}

export default usePagamento