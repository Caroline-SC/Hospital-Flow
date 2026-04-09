import React from 'react';

import { User, Lock, PlusSquare } from 'lucide-react';

function LoginPage() {
    return (
        <div className="container">
            <div className="card">
                <div className="logo">
                    <PlusSquare className="icon"/>
                    <h1 className="title">HospStok</h1>
                </div>

                <h2 className="Subtitle">Acesse o Sistema</h2>
                <p className="text">O <strong>HopStok</strong> contribui para o retorno financeiro das instituições de saúde ao reduzir desperdícios e melhorar o controle de medicamentos.</p>
            </div>
        </div>
    )
}
export default LoginPage