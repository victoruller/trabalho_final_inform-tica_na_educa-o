import '../App.css';
import '../styles/home.css'
import '../styles/references.css'
import Header from '../components/Header';

function References() {
    return(
        <div className="home_div">
            <Header />
            <div className='section_main_text a'>
                <h3>Referências</h3>
                <ul>
                    <li>
                        <a href="https://git-scm.com/" target="_blank">Documentação Oficial do Git</a>
                    </li>
                    <li>
                        <a href="https://learn.microsoft.com/en-us/training/modules/intro-to-git/" target="_blank">Microsoft Learn: Introduction to Git</a>
                    </li>
                    <li>
                        <a href="https://learngitbranching.js.org/?locale=en_US" target="_blank">Learn Git Branching</a>
                    </li>
                    <li>
                        <a href="https://roadmap.sh/git-github" target="_blank">roadmap.sh: git-github</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default References;