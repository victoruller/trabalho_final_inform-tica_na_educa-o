function GitPull() {
    return(
        <div>
            <h1>Git Pull</h1>
            <p>
                O comando git pull é usado para buscar e integrar mudanças 
                de um repositório remoto para o branch local. 
                Ele é uma combinação de git fetch e git merge, trazendo as atualizações 
                e mesclando-as automaticamente.
            </p>
            <h2>Exemplo de uso</h2>
            <pre className="pre">
                <code className="code">
                    $ git pull origin main              # Puxa e mescla as mudanças do branch 'main' do repositório 'origin'
                    <br />
                    $ git pull                          # Puxa e mescla as mudanças do branch remoto configurado como padrão
                </code>
            </pre>

        </div>
    )
}

export default GitPull;