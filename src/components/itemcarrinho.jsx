function ItemCarrinho({ produto }) {
    const subtotal = produto.preco * produto.quantidade

    return (
        <article className="item-carrinho">
            <div>
                <h2>{produto.nome}</h2>

                <p>
                    Preço unitário: R$ {produto.preco.toFixed(2)}
                </p>

                <p>
                    Quantidade: {produto.quantidade}
                </p>
            </div>

            <strong>
                Subtotal: R$ {subtotal.toFixed(2)}
            </strong>
        </article>
    )
}

export default ItemCarrinho