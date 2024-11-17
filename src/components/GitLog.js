function GitLog() {
    return (
        <div>
            <h1>Git Log</h1>
            <p>
                O comando git log é usado para visualizar o histórico de commits 
                em um repositório Git. Ele exibe informações detalhadas sobre cada commit, 
                incluindo autor, data e mensagem de commit.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git log                         # Mostra o histórico de commits completo
                    <br />
                    $ git log --oneline              # Exibe o histórico em uma única linha por commit
                    <br />
                    $ git log -3                     # Mostra os três commits mais recentes
                </code>
            </pre>
        </div>
    )
}

export default GitLog;
