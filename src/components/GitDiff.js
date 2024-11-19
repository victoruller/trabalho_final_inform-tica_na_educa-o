function GitDiff() {
    return (
        <div>
            <h1>Git Diff</h1>
            <p>
                O comando git diff é usado para exibir as diferenças entre os arquivos no diretório de trabalho e o repositório Git. 
                Ele mostra as alterações feitas que ainda não foram adicionadas ao stage ou comitadas, permitindo que você veja o que mudou antes de fazer o commit.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git diff                        # Mostra as mudanças não comitadas no diretório de trabalho
                    <br />
                    $ git diff --staged               # Exibe as mudanças que foram adicionadas à área de stage
                    <br />
                    $ git diff arquivo.txt            # Exibe as diferenças para um arquivo específico
                </code>
            </pre>
        </div>
    )
}

export default GitDiff;
