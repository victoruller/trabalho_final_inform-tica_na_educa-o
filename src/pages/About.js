import '../App.css';
import '../styles/home.css'
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import React, { useEffect } from 'react';

function About() {

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
                <div className='home_sub_div'>
                    <SideBar />
                    <section className='section_main_text'>
                        <div className='main_text_head'>
                          <h1>Sobre o Git</h1>
                        </div>
                        <div className='main_text_content'>
                            <p>
                                O Git nasceu em um momento decisivo para o desenvolvimento do kernel Linux, liderado por Linus Torvalds. 
                                Antes de sua criação, a equipe de desenvolvimento utilizava um sistema de controle de versão chamado BitKeeper, 
                                que oferecia uma solução gratuita para projetos open-source. No entanto, em 2005, essa parceria foi interrompida, 
                                e o BitKeeper deixou de ser gratuito para os desenvolvedores do Linux. Essa mudança inesperada trouxe um desafio significativo para a comunidade, 
                                já que não havia outra ferramenta disponível capaz de atender às demandas específicas e intensas de um projeto tão grande e colaborativo quanto o kernel Linux.
                                <br />
                                Diante desse problema, Linus Torvalds decidiu criar sua própria ferramenta de controle de versão. Com objetivos bem definidos, 
                                ele precisava de uma solução que fosse extremamente rápida, eficiente, segura e capaz de gerenciar o enorme volume de contribuições que o kernel Linux 
                                recebia diariamente. Além disso, a nova ferramenta deveria ser confiável o suficiente para preservar a integridade do código e flexível para acomodar 
                                diferentes estilos de trabalho. Em menos de um mês, Linus desenvolveu o Git, uma ferramenta que não apenas atendeu às necessidades do momento, 
                                mas também revolucionou o controle de versão no desenvolvimento de software.
                                <br />
                                O que tornou o Git tão inovador foi sua abordagem distribuída. Diferentemente de sistemas centralizados, como o Subversion (SVN), 
                                o Git permite que cada desenvolvedor tenha uma cópia completa do repositório em sua máquina local, incluindo o histórico completo de alterações. 
                                Essa característica trouxe mais independência aos desenvolvedores, que passaram a poder trabalhar em suas alterações mesmo sem conexão com a internet, 
                                e aumentou a resiliência do processo de desenvolvimento, eliminando a dependência de um único servidor central.
                                <br />
                                Além disso, o Git introduziu conceitos importantes, como o uso de hashes gerados pelo algoritmo SHA-1 para identificar de forma única cada alteração no código. 
                                Isso assegurou um histórico seguro e confiável, no qual cada versão do projeto podia ser rastreada com precisão. 
                                Outro aspecto revolucionário foi a capacidade de criar branches de forma eficiente. As branches permitem que os desenvolvedores trabalhem em novas 
                                funcionalidades ou correções de bugs isoladamente, sem impactar o código principal. Com o processo de merge altamente otimizado, o Git tornou possível a 
                                integração fácil e segura dessas alterações no projeto principal.
                                <br />
                                Desde sua criação, o Git rapidamente ganhou popularidade fora do kernel Linux. Hoje, ele é a ferramenta de controle de versão mais amplamente utilizada no mundo, 
                                sendo um elemento essencial em projetos de todos os tamanhos, desde pequenos experimentos pessoais até gigantescas plataformas corporativas. 
                                Além disso, o Git é a base de plataformas de colaboração como GitHub, GitLab e Bitbucket, que transformaram a maneira como equipes distribuem, revisam e 
                                integram o código.
                                <br />
                                Mais do que uma ferramenta técnica, o Git representa um marco na história do desenvolvimento de software. Ele possibilitou o crescimento exponencial do 
                                movimento open-source, permitindo que desenvolvedores de todo o mundo colaborassem em projetos globais de forma eficiente e organizada. 
                                Seu impacto vai além do código, promovendo práticas de trabalho mais colaborativas, transparentes e ágeis, que continuam a moldar o futuro da tecnologia.
                        </p>
                    </div>
                    </section>
                </div>
            </div>
        </div>
    )
};

export default About;