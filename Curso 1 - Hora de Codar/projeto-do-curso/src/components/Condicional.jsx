import { useState } from "react"

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmal] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmal(email)
    }

    function limparEmail() {
        setUserEmal('')
    }

    return (
        <div>
            <h2>Cadastre o seu email</h2>

            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
                <button onClick={enviarEmail}>Enviar-email</button>
                {userEmail && 
                    (<div>
                        <p>o email do usuario é : {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional
