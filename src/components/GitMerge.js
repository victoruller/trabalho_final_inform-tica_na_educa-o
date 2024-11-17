function GitMerge() {
    return (
        <div>
            <h1>Git Merge</h1>
            <p>
                O comando git merge é usado para unir alterações de diferentes branches.
                Ele mescla o histórico de um branch de origem no branch atual, permitindo combinar
                o trabalho de diferentes linhas de desenvolvimento.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git checkout main               # Muda para o branch 'main'
                    <br />
                    $ git merge nova-feature         # Mescla o branch 'nova-feature' no 'main'
                    <br />
                    $ git merge --no-ff hotfix       # Mescla o branch 'hotfix' com uma mensagem de commit de mesclagem
                </code>
            </pre>
        </div>
    )
}

export default GitMerge;
