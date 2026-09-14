function ResumoCompra({ produtos, onFinalizar }) {
    const total = produtos.reduce(
        (soma, produto) => soma + produto.preco * produto.quantidade,
        0,
    )

    return (
        <aside className="resumo-compra">
            <h2>Resumo da Compra</h2>

            <p>
                Total: <strong>R$ {total.toFixed(2)}</strong>
            </p>

            <button type="button" onClick={onFinalizar}>
                Finalizar compra
            </button>
        </aside>
    )
}

export default ResumoCompra
