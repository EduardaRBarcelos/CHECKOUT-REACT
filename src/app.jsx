import { Routes, Route } from 'react-router-dom'

import Carrinho from './pages/carrinho'
import Pagamento from './pages/pagamento'
import Sucesso from './pages/sucesso'
import Falha from './pages/falha'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Carrinho />} />
            <Route path="/pagamento" element={<Pagamento />} />
            <Route path="/sucesso" element={<Sucesso />} />
            <Route path="/falha" element={<Falha />} />
        </Routes>
    )
}

export default App