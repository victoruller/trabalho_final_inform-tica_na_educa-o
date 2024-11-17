function GitReset() {
    return (
        <div>
            <h1>Git Reset</h1>
            <p>
                O comando git reset é usado para desfazer mudanças em um repositório Git. 
                Ele pode ser utilizado para mover o ponteiro HEAD e, opcionalmente, modificar 
                a área de stage e o diretório de trabalho. Existem três modos principais: 
                --soft, --mixed e --hard, que determinam 
                o grau de reversão.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git reset --soft HEAD~1        # Remove o último commit, mas mantém as mudanças no stage
                    <br />
                    $ git reset --mixed HEAD~1       # Remove o último commit e tira as mudanças do stage (padrão)
                    <br />
                    $ git reset --hard HEAD~1        # Remove o último commit e todas as mudanças associadas
                </code>
            </pre>
        </div>
    )
}

export default GitReset;
