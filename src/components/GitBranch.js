function GitBranch() {
    return(
        <div>
            <h1>Git Branch</h1>
            <p>
                O comando git branch é usado para gerenciar ramos (branches) em um repositório Git. 
                Ele permite listar, criar e excluir branches. Branches são úteis para isolar o desenvolvimento de novas funcionalidades sem afetar o código principal.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git branch                        # Lista os branches existentes
                    <br />
                    $ git branch nova-feature           # Cria um novo branch chamado 'nova-feature'
                    <br />
                    $ git branch -d branch-antigo       # Exclui um branch chamado 'branch-antigo'
                </code>
            </pre>
        </div>
    )
}

export default GitBranch;