function GitCheckout() {
    return(
        <div>
            <h1>Git Checkout</h1>
            <p>
                O comando git checkout é usado para alternar entre branches ou restaurar 
                arquivos em um repositório Git. Ele permite que você mude para outro branch 
                existente ou recupere versões específicas de arquivos.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git checkout nome-do-branch        # Alterna para um branch chamado 'nome-do-branch'
                    <br />
                    $ git checkout -b nova-feature        # Cria e alterna para um novo branch chamado 'nova-feature'
                    <br />
                    $ git checkout arquivo.txt            # Restaura 'arquivo.txt' para o último estado do commit
                </code>
            </pre>
        </div>
    )
}

export default GitCheckout;