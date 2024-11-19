function GitAdd() {
    return (
        <div>
            <h1>Git Add</h1>
            <p>
                O comando git add é usado para adicionar alterações no diretório de trabalho à área de stage. 
                Antes de realizar um commit, você precisa "adicionar" os arquivos ou mudanças que deseja incluir no commit. 
                O <code>git add</code> pode ser utilizado para adicionar arquivos específicos, múltiplos arquivos ou até todas as alterações de uma vez.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git add arquivo.txt               # Adiciona 'arquivo.txt' à área de stage
                    <br />
                    $ git add .                         # Adiciona todas as mudanças no diretório atual à área de stage
                    <br />
                    $ git add -A                        # Adiciona todas as alterações, incluindo exclusões de arquivos
                </code>
            </pre>
        </div>
    )
}

export default GitAdd;
