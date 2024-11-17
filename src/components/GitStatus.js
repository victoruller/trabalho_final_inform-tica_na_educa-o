function GitStatus() {
    return (
        <div>
            <h1>Git Status</h1>
            <p>
                O comando git status é usado para exibir o estado atual do repositório. 
                Ele mostra quais arquivos foram modificados, quais estão prontos para serem 
                commitados e quais não estão sendo rastreados pelo Git.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git status                      # Exibe o status atual do repositório
                    <br />
                    $ git status -s                  # Exibe o status em formato resumido
                </code>
            </pre>
        </div>
    )
}

export default GitStatus;
