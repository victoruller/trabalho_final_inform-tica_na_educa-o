function GitSwitch() {
    return (
        <div>
            <h1>Git Switch</h1>
            <p>
                O comando git switch foi introduzido para simplificar a troca de branches no Git. 
                Ele permite mudar de um branch para outro de forma mais intuitiva do que o tradicional git checkout. 
                O git switch é utilizado para alternar entre branches existentes ou criar novos branches.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git switch feature-branch        # Muda para o branch 'feature-branch'
                    <br />
                    $ git switch -c nova-feature       # Cria e muda para o branch 'nova-feature'
                    <br />
                    $ git switch -C feature-branch    # Cria o branch 'feature-branch' forçando a mudança, mesmo se ele já existir
                </code>
            </pre>
        </div>
    )
}

export default GitSwitch;
