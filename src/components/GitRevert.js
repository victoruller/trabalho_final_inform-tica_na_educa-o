function GitRevert() {
    return (
        <div>
            <h1>Git Revert</h1>
            <p>
                O comando git revert é usado para desfazer mudanças em um repositório Git criando um novo commit que anula o commit original. 
                Isso permite que você faça uma reversão segura sem perder o histórico de commits. 
                É uma maneira de corrigir erros em um commit sem precisar removê-lo completamente.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git revert HEAD                # Cria um novo commit que anula as últimas mudanças
                    <br />
                    $ git revert commit-id        # Cria um novo commit que anula o commit especificado
                    <br />
                    $ git revert --no-commit HEAD   # Cria o novo commit, mas não faz commit automaticamente
                </code>
            </pre>
        </div>
    )
}

export default GitRevert;
