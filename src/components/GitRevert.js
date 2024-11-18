function GitRevert() {
    return (
        <div>
            <h1>Git Fetch</h1>
            <p>
                O comando git fetch é usado para buscar alterações de um repositório remoto 
                para o repositório local. Ele baixa os commits, branches e tags do repositório remoto 
                sem fazer a mesclagem dessas mudanças no seu branch atual. Isso permite que você veja 
                o que foi atualizado no repositório remoto antes de integrá-lo ao seu trabalho local.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git fetch                        # Baixa as atualizações do repositório remoto sem mesclar
                    <br />
                    $ git fetch origin main            # Baixa as atualizações do branch 'main' do repositório 'origin'
                    <br />
                    $ git fetch --all                 # Baixa todas as atualizações de todos os repositórios remotos
                </code>
            </pre>
        </div>
    )
}

export default GitRevert;
