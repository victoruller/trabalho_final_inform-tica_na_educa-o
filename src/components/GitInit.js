function GitInit() {
    return(
        <div>
            <h1>Git Init</h1>
            <p>
                O comando git init é utilizado para iniciar um repositório Git em um diretório vazio ou existente. 
                Ele cria a estrutura de pastas necessárias, incluindo a pasta oculta .git, onde o Git armazena todas as informações de controle de versão. 
                Depois de executar esse comando, o diretório passa a ser um repositório Git, permitindo que você comece a adicionar arquivos, fazer commits e rastrear mudanças.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ mkdir meu-projeto
                    <br />
                    $ cd meu-projeto
                    <br />
                    $ git init
                    <br />
                    Initialized empty Git repository in /caminho/para/meu-projeto/.git/
                </code>
            </pre>
    </div>
    )
}

export default GitInit;