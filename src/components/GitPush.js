function GitPush() {
    return(
        <div>
            <h1>Git Push</h1>
            <p>
                O comando git push é usado para enviar commits do repositório local 
                para um repositório remoto. Ele publica suas alterações em um 
                branch remoto, tornando-as acessíveis para outros colaboradores.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git push origin main             # Envia o branch 'main' para o repositório remoto 'origin'
                    <br />
                    $ git push                         # Envia o branch atual para o repositório remoto configurado como padrão
                    <br />
                    $ git push origin nova-feature     # Envia o branch 'nova-feature' para o repositório remoto 'origin'
                </code>
            </pre>
        </div>
    )
}

export default GitPush;