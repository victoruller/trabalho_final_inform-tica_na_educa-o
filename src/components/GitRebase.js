function GitRebase() {
    return (
        <div>
            <h1>Git Rebase</h1>
            <p>
                O comando git rebase é usado para integrar mudanças de um branch em outro, movendo a base de um branch para outro ponto. 
                Ao contrário do git merge, que cria um commit de merge, o rebase "reaplica" os commits de um branch em cima de outro, criando um histórico linear.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git checkout feature-branch        # Muda para o branch 'feature-branch'
                    <br />
                    $ git rebase main                    # Reaplica os commits de 'feature-branch' em cima do 'main'
                    <br />
                    $ git rebase --interactive HEAD~3    # Rebase interativo para modificar os últimos 3 commits
                </code>
            </pre>
        </div>
    )
}

export default GitRebase;
