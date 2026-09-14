import { Link } from 'react-router-dom'

function Sucesso() {
    return (
        <main className="pagina pagina-resultado">
            <section>
                <p className="icone-sucesso" aria-hidden="true">
                    ✓
                </p>

                <h1>Compra aprovada!</h1>

                <p>
                    Sua compra foi processada com sucesso.
                </p>

                <p>
                    Obrigado por comprar conosco!
                </p>

                <Link className="botao" to="/">
                    Voltar ao carrinho
                </Link>
            </section>
        </main>
    )
}

export default Sucesso