import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import produtos from '../data/produtos'
import usePagamento from '../hooks/usepagamento'
import { limparNumeroCartao } from '../utils/pagamento'

const schemaPagamento = z.object({
    titular: z
        .string()
        .trim()
        .min(1, 'Informe o nome do titular.'),

    cartao: z
        .string()
        .refine(
            (valor) => limparNumeroCartao(valor).length === 16,
            'O cartão deve ter 16 dígitos.',
        )
        .refine(
            (valor) => /^\d[\d\s-]*$/.test(valor),
            'Informe apenas números, espaços ou hífens.',
        ),

    validade: z
        .string()
        .regex(
            /^(0[1-9]|1[0-2])\/\d{2}$/,
            'Use o formato MM/AA.',
        ),

    cvv: z
        .string()
        .regex(/^\d{3}$/, 'O CVV deve ter 3 dígitos.'),
})

function Pagamento() {
    const navigate = useNavigate()

    const { processando, processarPagamento } = usePagamento()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaPagamento),

        defaultValues: {
            titular: '',
            cartao: '',
            validade: '',
            cvv: '',
        },
    })

    const total = produtos.reduce(
        (soma, produto) =>
            soma + produto.preco * produto.quantidade,
        0,
    )

    async function enviarPagamento(dados) {
        const aprovado = await processarPagamento(dados.cartao)

        if (aprovado) {
            navigate('/sucesso')
        } else {
            navigate('/falha')
        }
    }

    return (
        <main className="pagina">
            <header>
                <h1>Pagamento</h1>

                <p>
                    Total da compra: R$ {total.toFixed(2)}
                </p>
            </header>

            <form
                className="formulario-pagamento"
                onSubmit={handleSubmit(enviarPagamento)}
                noValidate
            >
                <div className="campo">
                    <label htmlFor="titular">
                        Nome do titular
                    </label>

                    <input
                        id="titular"
                        type="text"
                        autoComplete="cc-name"
                        {...register('titular')}
                        aria-invalid={Boolean(errors.titular)}
                        aria-describedby="erro-titular"
                    />

                    {errors.titular && (
                        <p id="erro-titular" className="erro">
                            {errors.titular.message}
                        </p>
                    )}
                </div>

                <div className="campo">
                    <label htmlFor="cartao">
                        Número do cartão
                    </label>

                    <input
                        id="cartao"
                        type="text"
                        inputMode="numeric"
                        autoComplete="cc-number"
                        placeholder="0000 0000 0000 0000"
                        {...register('cartao')}
                        aria-invalid={Boolean(errors.cartao)}
                        aria-describedby="erro-cartao"
                    />

                    {errors.cartao && (
                        <p id="erro-cartao" className="erro">
                            {errors.cartao.message}
                        </p>
                    )}
                </div>

                <div className="linha-campos">
                    <div className="campo">
                        <label htmlFor="validade">
                            Validade
                        </label>

                        <input
                            id="validade"
                            type="text"
                            inputMode="numeric"
                            placeholder="MM/AA"
                            {...register('validade')}
                            aria-invalid={Boolean(errors.validade)}
                            aria-describedby="erro-validade"
                        />

                        {errors.validade && (
                            <p
                                id="erro-validade"
                                className="erro"
                            >
                                {errors.validade.message}
                            </p>
                        )}
                    </div>

                    <div className="campo">
                        <label htmlFor="cvv">
                            CVV
                        </label>

                        <input
                            id="cvv"
                            type="text"
                            inputMode="numeric"
                            maxLength="3"
                            autoComplete="cc-csc"
                            {...register('cvv')}
                            aria-invalid={Boolean(errors.cvv)}
                            aria-describedby="erro-cvv"
                        />

                        {errors.cvv && (
                            <p
                                id="erro-cvv"
                                className="erro"
                            >
                                {errors.cvv.message}
                            </p>
                        )}
                    </div>
                </div>

                {processando && (
                    <p role="status" aria-live="polite">
                        Processando compra…
                    </p>
                )}

                <button
                    type="submit"
                    disabled={processando}
                >
                    {processando
                        ? 'Processando compra…'
                        : 'Pagar'}
                </button>
            </form>
        </main>
    )
}

export default Pagamento