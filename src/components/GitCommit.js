function GitCommit() {
    return(
        <div>
            <h1>Git Commit</h1>
            <p>O comando git commit é usado para salvar alterações no histórico do repositório. 
                Ele cria um snapshot dos arquivos que foram adicionados à área de stage, 
                permitindo que as mudanças sejam registradas e acompanhadas.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git add arquivo.txt                 # Adiciona 'arquivo.txt' à área de stage
                    <br />
                    $ git commit -m "Mensagem de commit"  # Cria um commit com uma mensagem descritiva
                    <br />
                    $ git commit                          # Abre o editor padrão para escrever uma mensagem de commit
                </code>
            </pre>
        </div>
    )
}

export default GitCommit;