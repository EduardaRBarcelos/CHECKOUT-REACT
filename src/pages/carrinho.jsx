import { useNavigate } from 'react-router-dom'

import produtos from '../data/produtos'
import ItemCarrinho from '../components/ItemCarrinho'
import ResumoCompra from '../components/ResumoCompra'
import logo from '../assets/img/logo.jpg'

function Carrinho() {
    const navigate = useNavigate()

    function finalizarCompra() {
        navigate('/pagamento')
    }

    return (
        <main className="pagina">
            <img
                className="logo"
                src={logo}
                alt="Checkout - React - Sua loja online"
            />

            <header>
                <h1>Meu carrinho</h1>
                <p>
                    Confira os produtos antes de finalizar sua compra.
                </p>
            </header>

            <section
                className="lista-produtos"
                aria-label="Produtos do carrinho"
            >
                {produtos.map((produto) => (
                    <ItemCarrinho
                        key={produto.id}
                        produto={produto}
                    />
                ))}
            </section>

            <ResumoCompra
                produtos={produtos}
                onFinalizar={finalizarCompra}
            />
        </main>
    )
}

export default Carrinho