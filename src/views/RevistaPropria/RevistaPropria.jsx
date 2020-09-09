import React, { useState } from 'react';

import Banner from '../../components/banner/banner.jsx';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import TabelaDePrecosPara4EmpresasEComissoes from './sections/TabelaDePrecosPara4EmpresasEComissoes.jsx';
import TabelaDePrecosPara8EmpresasEComissoes from './sections/TabelaDePrecosPara8EmpresasEComissoes.jsx';
import TabelaDePrecosPara12EmpresasEComissoes from './sections/TabelaDePrecosPara12EmpresasEComissoes.jsx';
import RevistaPropriaImage from '../../assets/images/12.png';
import RevistaPropriaImage2 from '../../assets/images/13.png';
import ScrollToTopOnMount from '../../components/Scroll/scrollToTop';
import Formulario from './sections/Formulario.jsx';
import TabelaDePreco6 from '../Candidatos/sections/tabelaDepreco6.jsx';
import TabelaDePreco7 from '../Candidatos/sections/tabelaDePreco7.jsx';
import TabelaDePreco8 from '../Candidatos/sections/tabelaDePreco8.jsx';
import { Button } from 'reactstrap';

function RevistaPropria() {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        if (show == true) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    return (
        <div>
            <ScrollToTopOnMount />
            <Header />
            <Banner />
            <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }} >REVISTA PRÓPRIA</h2>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '15px' }}>
                <div style={{ width: '150vh', height: '100%', fontFamily: 'Batang', fontSize: '20px' }}>
                    <p style={{ color: 'red', textAlign: 'justify' }}>
                        São publicações em revistas que possuem conteúdo inteiramente relacionado a cada ramo de atividade, com informações úteis aos
                        leitores e consumidores. Ausente de anúncios de concorrentes, a batizamos de Revista Própria. Neste modelo de revista, o impacto
                        positivo causado pela exposição da empresa nas quatro capas é considerável e o custo é menor do que um pequeno anúncio interno,
                        em muitas revistas do mercado editorial. É um processo de produção mais econômico comparado ao modelo das publicações
                        independentes, pois estas absorvem custos com a produção de conteúdo, seleção das matérias institucionais, artes finais,
                        revisão ortográfica, diagramação, produção gráfica e, no caso da revista Panfleto em Revista, entra também no custo, a distribuição dos exemplares. <br />
                        Outra vantagem do nosso modelo de Revista Própria é a de que, o custo da impressão gráfica entra na faixa de preço mínimo, mesmo para pequena quantidade de exemplares.
                        Confira os modelos de sua...
                    </p>
                </div>
            </div>
            <h2 style={{ textAlign: 'center', paddingTop: '10px', color: '#FF0000', fontFamily: 'Batang' }}>
                REVISTA PRÓPRIA
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <img src={RevistaPropriaImage} style={{ maxWidth: '100%' }} alt="Revista Própria" />
                <img src={RevistaPropriaImage2} style={{ maxWidth: '100%' }} alt="Revista Própria" />
            </div>
            <h2 style={{ textAlign: 'center', paddingTop: '10px', color: '#000', fontFamily: 'Calibri (Corpo)' }}>
                Atenção profissional em vendas!
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '150vh', height: '100%', fontFamily: 'Batang', fontSize: '20px', border: '2px solid red' }}>
                    <p style={{ textAlign: 'justify', color: '#000', padding: '3px 30px 3px 30px' }}>
                        O SÓCIO BR está preparando um site exclusivo para a REVISTA PRÓPRIA. <br />
                        Existem mais de uma centena de ramos de atividades comerciais, de serviços e profissionais liberais para você oferecer todas essas edições da REVISTA PRÓPRIA. São mais de 5 milhões de empresas no Brasil a procura de se fazerem conhecidas do consumidor e vender mais.
                        A revista PANFLETO EM REVISTA para o setor corporativo está completamente elaborada e você e O SÓCIO BR já podem começar a ganhar dinheiro com ela. Os preços dos exemplares e comissões de vendas são os mesmos para a revista PANFLETO EM REVISTA dos candidatos a prefeito e vereador da Democracia do Povo. Veja um modelo corporativo abaixo. <br /><br />
                        O seu cadastro neste site Democracia do Povo é válido para você iniciar as apresentações a quantos ramos de atividades desejar e a fazer os pedidos por aqui mesmo, enquanto não preparamos definitivamente o site www.revistapropria.com.br <br /><br />
                        Conforme tabela de preços abaixo, as empresas poderão constatar que o custo do Sistema Cooperado de Panfletagem é muito menor que os custos de panfletagem independente, composto pela produção de conteúdo, seleção das matérias institucionais, artes finais, revisão ortográfica, diagramação, produção gráfica e a distribuição. <br /><br />
                        A distribuição dos exemplares pelo Sistema Cooperado de Panfletagem é feita do seguinte modo: metade da quantidade dos exemplares é dividida entre os participantes da edição para distribuição interna e a outra metade é distribuída porta-a-porta por distribuidores contratados pelo O SÓCIO BR, por intermédio do profissional em vendas. Exemplo: Em uma edição com 4 empresas participantes para compra de 2.000 exemplares, 250 exemplares são entregues a cada participante, totalizando 1.000 exemplares (metade). A distribuição da outra metade, que corresponde a 1.000 exemplares é feita externamente. <br /><br />
                        Você poderá fechar uma edição da revista Panfleto em Revista com 4, 8 ou 12 empresas que não sejam concorrentes entre si.<br /><br />
                        Uma mesma empresa poderá participar com mais de uma página por edição.<br /><br />
                        Uma mesma empresa poderá participar simultaneamente das edições com 4, 8 ou 12 empresas.<br /><br />
                        A escolha das 4 capas de cada edição da revista Panfleto em Revista é feita por ordem de fechamento do pedido pelo comprador da empresa participante. Caso uma determinada empresa faça absoluta questão de anunciar em uma das 4 capas e esta já estiver comprometida com outra empresa, você poderá abrir outra edição para colocá-la na capa desejada.<br /><br />
                        O conceito de Revista Própria é o de exclusividade dos participantes de suas edições. Por essa razão as empresas que entrarem, em uma mesma edição da revista Panfleto em Revista não poderão ser concorrentes e as atividades não poderão se correlacionar.
                    </p>
                </div>
            </div>
            <h1>inserir revista</h1>
            <h2 style={{ textAlign: 'center', paddingTop: '10px', color: '#000' }}>
                TABELA DE PREÇOS PARA <strong style={{ color: 'red' }}>4</strong> EMPRESAS E COMISSÕES
            </h2>
            <TabelaDePrecosPara4EmpresasEComissoes />
            <h2 style={{ textAlign: 'center', paddingTop: '10px', color: '#000' }}>
                TABELA DE PREÇOS PARA <strong style={{ color: 'red' }}>8</strong> EMPRESAS E COMISSÕES
            </h2>
            <TabelaDePrecosPara8EmpresasEComissoes />
            <h2 style={{ textAlign: 'center', paddingTop: '10px', color: '#000' }}>
                TABELA DE PREÇOS PARA <strong style={{ color: 'red' }}>12</strong> EMPRESAS E COMISSÕES
            </h2>
            <TabelaDePrecosPara12EmpresasEComissoes />
            <br />

            <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }}>
                Dados para contratação da transportadora de sua preferência
                    </h2>
            <p style={{ textAlign: 'center', paddingTop: '20px', color: '#000', fontFamily: 'Batang' }}>Faça a simulação neste site: <a href="https://cargobr.com/">cargobr.com</a></p>
            <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#000264', fontFamily: 'Batang' }}>
                Edição com 4 Participantes
                    </h2>
            <TabelaDePreco6 />
            <br />
            <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#000264', fontFamily: 'Batang' }}>
                Edição com 8 Participantes
                    </h2>
            <TabelaDePreco7 />
            <br />
            <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#000264', fontFamily: 'Batang' }}>
                Edição com 12 Participantes
                    </h2>
            <TabelaDePreco8 />
            <br />
            <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                <Button onClick={handleClick} style={{ color: 'yellow', backgroundColor: '#003d03' }}>
                    Preencha o formulario e faça seu pedido
                </Button>
                {show == true ? <Formulario /> : undefined}
            </div>
            <br /><br />

            <Footer />
        </div>
    )
};

export default RevistaPropria;