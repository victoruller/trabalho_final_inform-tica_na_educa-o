import '../App.css';
import '../styles/home.css'
import SideBar from "../components/SideBar";
import Header from '../components/Header';
import React, { useEffect } from 'react';

function Home() {

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
                        <h1>O que é o Git?</h1>
                        </div>
                        <div className='main_text_content'>
                        <p>
                            O Git é um sistema de controle de versão distribuído desenvolvido por Linus Torvalds em 2005, com o objetivo de fornecer uma solução de controle de 
                            código-fonte eficiente, rápida e segura para o desenvolvimento de software. Desde sua criação, o Git se tornou a ferramenta mais popular do mundo para 
                            versionamento de código, sendo utilizado por equipes de desenvolvimento em projetos de todos os tamanhos e complexidades. 
                            Ao contrário de sistemas de controle de versão centralizados, como o Subversion (SVN), o Git distribui uma cópia completa do repositório para 
                            cada desenvolvedor. Isso significa que cada desenvolvedor tem uma versão local do código, com o histórico completo de alterações, 
                            o que permite que ele trabalhe de forma independente e sem depender constantemente de um servidor central. Essa abordagem distribuída melhora a 
                            flexibilidade e a agilidade do desenvolvimento, além de permitir que os desenvolvedores façam alterações no código mesmo quando estão desconectados da internet.
                            <br />
                            No Git, cada alteração realizada no código é registrada como um commit, um snapshot (imagem) completo do projeto naquele momento. 
                            O commit é identificado de forma única por um hash gerado pelo algoritmo SHA-1, que assegura que o histórico do projeto seja seguro e íntegro. 
                            Isso garante que as versões do código sejam preservadas de forma confiável e que qualquer alteração possa ser rastreada ao longo do tempo. 
                            Uma das características mais poderosas do Git é o gerenciamento de branches (ramificações). As branches permitem que desenvolvedores trabalhem em 
                            novas funcionalidades ou correções de bugs de forma isolada, sem afetar o código principal. Isso facilita o desenvolvimento de novas funcionalidades em paralelo,
                            mantendo o código principal (geralmente chamado de master ou main) estável. Quando o trabalho em uma branch é concluído, 
                            ele pode ser integrado ao código principal através do processo de merge. O processo de merge no Git é altamente eficiente. 
                            Caso haja conflitos (ou seja, quando as alterações feitas em diferentes branches afetam as mesmas linhas de código), o Git permite que o desenvolvedor 
                            resolva os conflitos manualmente, garantindo que o código final seja o resultado de uma fusão controlada. Isso permite que as equipes de desenvolvimento 
                            trabalhem de maneira independente, mas ainda assim integrem suas mudanças de forma coesa.
                            <br />
                            Embora o Git seja um sistema distribuído, ele facilita a colaboração por meio de repositórios remotos. 
                            Repositórios remotos são versões do código armazenadas em servidores online, como GitHub, GitLab ou Bitbucket. 
                            Eles atuam como uma central para o código-fonte, onde os desenvolvedores podem compartilhar suas alterações com outras pessoas. 
                            Os comandos push e pull permitem que os desenvolvedores enviem suas alterações para o repositório remoto ou recebam alterações feitas por outros membros 
                            da equipe. O Git também permite o uso de pull requests ou merge requests, onde os desenvolvedores podem submeter suas alterações para revisão antes de 
                            integrá-las ao código principal. Isso ajuda a melhorar a qualidade do código, pois outros membros da equipe podem revisar, comentar e sugerir melhorias 
                            nas mudanças propostas.
                    </p>
                    </div>
                    </section>
                </div>
            </div>
        </div>
        
    )
};

export default Home;