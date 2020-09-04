import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import ScrollToTopOnMount from '../../components/Scroll/scrollToTop';

// sections for this page

const RepresentantesCadastrados = () => {
    return (
        <div id="main-wrapper">
            <Header />
              <ScrollToTopOnMount />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <h2 style={{ textAlign: 'center', color: '#000', padding: '20px', display: 'flex', flexWrap: 'unset'}}>
                        Mensagem a quem quer representar a Democracia do Povo
                    </h2>
                    <div style={{ alignItems: 'center'}}>
                        <p style={{ color: '#000', padding: '20px', display: 'flex', textAlign: 'justify'}}>
                            Olá amigo profissional em vendas! <br/>
                            Quer ganhar dinheiro com as eleições?<br/>
                            Apresente a revista Democracia do Povo a mais de 700 mil candidatos a prefeito e vereador. <br/>
                            São potenciais clientes a procura de excelente material publicitário para campanha eleitoral. <br/>
                            www.democraciadopovo.com.br
                        </p>
                        <h3 style={{ textAlign: 'justify', color: '#000', padding: '20px', display: 'flex', flexWrap: 'unset'}}>EM QUEM VOTAR?</h3>
                        <p style={{ color: '#000', padding: '20px', display: 'flex', flexWrap: 'unset'}}>
                            Alternativa I – Projeto a): reeleger prefeitos e vereadores.<br/>
                            Alternativa II – Projeto b): votar em políticos iniciantes.<br/>
                            Alternativa III – Projeto c): votar nos candidatos da Democracia do Povo.<br/>
                            Alternativa IV – votar em nenhuma das três alternativas.<br/>
                            Alternativa V – votar nesta alternativa: permanecer atual sistema político eleitoral.<br/>
                        </p>
                    </div>
                    <p style={{ textAlign: 'justify', color: '#000', padding: '20px', display: 'flex', flexWrap: 'unset'}}>
                        Isso é Democracia do Povo! O cidadão envia projetos às Casas parlamentares, estes selecionam os três melhores e o eleitor vota no de sua escolha. Desta forma, o eleitor, além de votar em políticos, vota em políticas públicas, como a política de geração de 15 milhões de empregos e valorização do salário mínimo para R$4.673,16. 
                        Veja na revista Democracia do Povo, edição principal, com 44 páginas, o projeto do Novo Simples da Pequena Empresa, o qual proporcionará obter maior margem de lucro, crescimento e, consequentemente, realizar as conquistas acima citadas. 
                        Esse projeto poderá ser colocado em prática, votado pelo Congresso Nacional, até mesmo, antes de a Democracia do Povo ser implantada, porém é bem provável que os congressistas dirão: isso não é possível. Esse projeto é inconstitucional. São muitos os motivos que o tornam inviável. A elevação do salário mínimo causa inflação e desabastecimento etc, etc, etc.
                        A Democracia do Povo respeita as pessoas e políticos que votariam na alternativa “V” e que dizem ou somente pensam: “O brasileiro não sabe nem o que é projeto, quanto mais votar em um programa de governo”. “O brasileiro não se interessa por política”. “O povo brasileiro não está preparado para isso, é imaturo, ele não sabe fazer as escolhas corretamente, por isso, precisa ser representado e governado por políticos”. “O eleitor brasileiro ainda não sabe votar, por isso o voto deverá ser obrigatório até que a ‘nossa’ democracia se consolide, que aprenda a exercer a sua cidadania e a cumprir os seus deveres cívicos”.
                        A Democracia do Povo divulgou em sua revista, projetos na área da saúde, segurança pública, mobilidade urbana, educação e muitos outros, que farão com que o Brasil seja uma potência e um país de melhor qualidade de vida no mundo. 
                        Depois de examiná-los e você considerar que essa possibilidade é alcançável poderá encaminhar esta mensagem ao maior número de eleitores possível para que todos escolham a alternativa “III”, projeto c, ao votarem para prefeito e vereador. <br />
                        <br/>
                    </p>
                    <p style={{ color: 'red', textAlign: 'center' }}>Divulgue o site da Democracia do Povo.</p>
                    <p style={{ textAlign: 'center', color: '#000' }}>
                        www.democraciadopovo.com.br
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

RepresentantesCadastrados.propTypes = {
    classes: PropTypes.object
};

export default RepresentantesCadastrados;
