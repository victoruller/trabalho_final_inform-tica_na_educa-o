function GitRemote() {
    return (
        <div>
            <h1>Git Remote</h1>
            <p>
                O comando git remote é usado para gerenciar repositórios remotos em um repositório Git local. 
                Ele permite adicionar, listar, renomear ou remover repositórios remotos. Repositórios remotos são usados 
                para colaborar com outras pessoas, permitindo a troca de mudanças entre repositórios locais e remotos.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git remote add origin https://github.com/usuario/repositorio.git  # Adiciona um repositório remoto chamado 'origin'
                    <br />
                    $ git remote -v                                                    # Lista todos os repositórios remotos configurados
                    <br />
                    $ git remote remove origin                                          # Remove o repositório remoto chamado 'origin'
                </code>
            </pre>
        </div>
    )
}

export default GitRemote;
