import { Link } from 'react-router-dom'

function Falha() {
    return (
        <main className="pagina pagina-resultado">
            <section>
                <h1>Compra não aprovada</h1>

                <p>tentativa de golpe</p>

                <Link className="botao" to="/pagamento">
                    Tentar novamente
                </Link>
            </section>
        </main>
    )
}

export default Falha