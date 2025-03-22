import { useState } from "react"

function Form() {
    function cadastrarUser(e) {
        e.preventDefault()
        console.log(`Usuario ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState('rafael')
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro</h1>

            <form onSubmit={cadastrarUser}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form
