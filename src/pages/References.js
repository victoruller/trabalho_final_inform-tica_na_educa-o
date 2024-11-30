import '../App.css';
import '../styles/home.css'
import '../styles/references.css'
import Header from '../components/Header';
import React, { useEffect } from 'react';

function References() {

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY; // Pixels rolados
          const docHeight = document.body.scrollHeight - window.innerHeight; // Altura total rolável
          const scrollPercent = scrollTop / docHeight; // Proporção de rolagem (0 a 1)
    
          // Atualiza a posição do background
          const parallaxElement = document.querySelector('.parallax');
          if (parallaxElement) {
            parallaxElement.style.backgroundPositionY = `${scrollPercent * 100}%`;
          }
        };
    
        // Adiciona o evento de rolagem
        window.addEventListener('scroll', handleScroll);
    
        // Remove o evento ao desmontar o componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // [] garante que o efeito só seja executado uma vez ao montar
    

    return(
        <div class="parallax">
            <div className="home_div">
                <Header />
                <section className='section_main_text'>
                    <div className='main_text_content'>
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
                </section>
            </div>
        </div>
    )
};

export default References;