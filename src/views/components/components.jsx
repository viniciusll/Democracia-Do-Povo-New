import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from 'reactstrap';

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import Revista1 from '../../assets/images/revista 1.png'
import Revista2 from '../../assets/images/revista 2.png'
import ScrollToTopOnMount from '../../components/Scroll/scrollToTop';

// sections for this page


const Components = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        if (show == true) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    return (
        <div id="main-wrapper">
            <ScrollToTopOnMount />
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }} >REVISTA PRÓPRIA</h2>
                    <h1 style={{ textAlign: 'center', paddingTop: '5px', color: '#000bd4', fontFamily: 'cursive' }} >Prefeitos e Vereadores</h1>
                    <p style={{ textAlign: 'center', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }} >
                        Os candidatos a vereador e a prefeito, aqui inscritos, não prometem aquilo que não podem cumprir. Apenas assumem o
                        compromisso de trabalhar para que seja implantada a Democracia do Povo em nosso país, iniciando pelos seus municípios.
                        São nos 5.570 municípios brasileiros, que os problemas e as soluções estão mais próximos dos cidadãos. Por isso venha
                        comigo arregaçar as mangas e executar nós próprios, o que é preciso fazer para contribuir com a melhoria da qualidade
                        de vida individual e coletiva, optando e decidindo pelas melhores e prioritárias medidas políticas, sociais e econômicas
                        para a sua cidade e para o nosso querido Brasil, deixando de esperar pela vontade desses políticos tradicionais vaidosos
                        da riqueza, do poder e do ego, que para os satisfazerem escravizam milhões de trabalhadores com subemprego, baixa
                        remuneração e com leis esdrúxulas como a da Pequena Empresa, com seus altíssimos encargos tributários, fiscais e
                        trabalhistas, que limitam a geração de milhões de empregos.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Revista1} alt="img" className="img-responsive img-thumbnail" style={{ width: '80vh' }} />
                    </div>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Revista2} alt="img" className="img-responsive img-thumbnail" style={{ width: '80vh' }} />
                    </div>
                    <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }} >
                        Veja e leia todas as revistas da Democracia do Povo no menu REVISTAS
                    </h3>
                    <br />
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <Button outline color='primary' onClick={handleClick} >
                            COMO FUNCIONA A DEMOCRACIA DO POVO?
                        </Button>
                    </div>

                    {show == true ?
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                            <div style={{ border: '2px solid green', width: '150vh', height: '100%' }}>
                                <h1 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }}>
                                    Diretriz I da Reforma Política Brasileira <br/>
                                    REGULAMENTO
                                </h1>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    Regulamento com 7 itens, os quais se referem a uma participação direta do eleitor nas decisões governamentais
                                    dos municípios, mas também dos estados e da União.
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    Esse regulamento é parte integrante do projeto para a reforma política e formação da Constituição do eleitor.
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    1 — Os cidadãos, grupo de pessoas ou instituições enviarão ideias em formato de projetos e aperfeiçoamento
                                    de programas e leis às Câmaras Municipais, às Assembleias Legislativas dos Estados, ao Congresso Nacional.
                                    Todos os projetos serão publicados nos sites das Câmaras e dos Poderes Executivos de todo o país e, em um
                                    site a ser criado pelo Tribunal Superior Eleitoral, exclusivo para essa finalidade, e, em todos os sites
                                    que seus proprietários desejarem publicá-los.
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    2 — Os parlamentares, em 30 dias, deverão relacionar nos projetos recebidos as vantagens e desvantagens,
                                    segundo resultado de sua criteriosa análise, sem alterá-los, porém, a Casa Parlamentar poderá apresentar
                                    um projeto, ainda que baseado em projeto enviado pelo cidadão, grupo de pessoas ou instituições.
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    3 — Serão selecionados, por votação dos parlamentares, três projetos e publicados na imprensa e nos sites
                                    citados no item 1. Sendo selecionado o projeto do Parlamento baseado em um dos projetos enviados pelo cidadão,
                                    grupo de pessoas ou instituição, o projeto original será automaticamente um dos três selecionados. Os seis
                                    subsequentes projetos analisados que não forem selecionados entrarão nos campos “reserva de projetos”, dos sites citados.
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    4 — Os projetos que necessitarem dos recursos da arrecadação de impostos já existentes, somente poderão entrar em votação no
                                    Parlamento, caso utilizem igual ou menor valor ao do programa ou lei em vigor. Não poderão criar impostos ou taxas. Os projetos
                                    que necessitarem de recursos financeiros para a sua aplicação na prática, poderão criar contribuições (rateamento) com valores
                                    limitados ao valor total da obra, programa ou investimento, sendo extintas após o prazo para o pagamento predefinido nos projetos.
                                    Essas contribuições deverão ser rateadas entre as pessoas físicas, empresas privadas e instituições participantes, ou envolvidas na
                                    obra, programa ou investimento. Os serviços de manutenção deverão ser autossustentáveis, ou seja, deve-se criar condições para a captação
                                    de recursos financeiros.
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    5 — Os três projetos vencedores na votação dos parlamentares dentro de um prazo de mais 30 dias serão debatidos nos meios de comunicação,
                                    nos órgãos públicos, nas empresas e nas escolas para que a população entenda, discuta e se inteire sobre cada questão pertinente à sua
                                    vida em sociedade.
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    6 — A eleição do projeto será feita por telefone ou internet, com o eleitor teclando ou digitando o número de seu título de eleitor e,
                                    em seguida, escolhendo uma das alternativas a seguir.
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    Alternativas selecionadas pela Câmara e a serem votadas pelo eleitor
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    Alternativa 1 Projeto (a)
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    Alternativa 2 Projeto (b)
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    Alternativa 3 Projeto (c)
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    Alternativa 4. Nenhum dos projetos.
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    Alternativa 5. Permanecer lei, projeto, ou programa atuais
                            </p>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    7 — O eleitor que é contra a modificação em pauta poderá votar na alternativa 5, “permanecer a atual lei, projeto ou programa”.
                                    E o que deseja modificar, mas não concorda ou não está satisfeito com nenhuma das três primeiras alternativas, poderá votar
                                    na alternativa 4, “nenhum dos projetos”. Em sendo vencedora a alternativa 4, o processo de eleição será reiniciado pelo item
                                    3 deste regulamento. A alternativa vencedora, exceto a 4, entrará em vigor imediatamente, após a realização dos trâmites necessários
                                    para a sua implantação e o Poder Executivo sancionará (aprovará, confirmará) e promulgará (publicará oficialmente, tornará aplicável)
                                    a nova lei, com prazo máximo de 30 dias. O trabalho do Poder Executivo será o de colocar os projetos vencedores em prática,
                                    cumprindo prazos determinados nos mesmos, coordenar, administrar e fiscalizar, fazendo com que funcionem adequadamente.
                                    Caso determinada lei esteja, por qualquer motivo, sendo impraticável ou inaplicável pelo Poder Executivo, não poderá sofrer
                                    emendas ou medidas provisórias sob nenhuma hipótese, justificativas ou argumentos. Ou tendo a necessidade de aperfeiçoar
                                    a lei ou programa vencedores ou até mesmo modificá-los completamente, por não estarem funcionando adequadamente, ou por
                                    ter surgido melhor ideia, o Poder Executivo deverá enviar à Câmara um projeto de sua autoria para ser incluído a outros dois
                                    novos projetos contidos na reserva de projetos, respeitando a ordem e as prioridades das questões, para depois serem
                                    votados novamente pelo eleitor. O custo do modelo de Plebiscito proposto é baixíssimo. O desenvolvimento do “sistema automático
                                    de atendimento” deverá ser feito pelo TSE, além da coordenação e execução de todos os plebiscitos, com a participação dos TRE,
                                    e com o apoio voluntário das emissoras de rádio e televisão, as quais já utilizam o sistema de comunicação, por meio do telefone
                                    e internet com o telespectador. Os projetos sendo feitos por quem sofre com os problemas locais de cada área das
                                    atividades econômicas, profissionais, sociais e esportivos serão mais realistas, mais atualizados e mais diversificados.
                                    E, sendo votados pelo eleitor, serão julgados com mais sensatez e coerência, exercerão menor pressão de grupos especuladores
                                    e criminosos e serão tramitados, sancionados e promulgados com maior rapidez.
                            </p>
                                <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }} >
                                    Diretriz I da Reforma Política Brasileira REGULAMENTO
                            </h3>
                                <p style={{ textAlign: 'justify', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '20px', padding: '15px' }}>
                                    <span style={{color: '#000'}}> Dedepê</span> — Talvez, a única possibilidade que os governos
                                    têm para fazer com que parte da arrecadação de impostos
                                    retorne em serviços de boa qualidade à sociedade, é a de
                                    criar mecanismos eficientes na área administrativa das
                                    cidades, estados e do próprio país. Muitos desses
                                    mecanismos já foram criados por especialistas de todos os
                                    segmentos da sociedade e também por quem é vítima das
                                    leis e sistemas injustos.
                                    Inúmeras boas ideias surgem para aperfeiçoar o sistema
                                    da saúde, da segurança, do sistema de ensino e educação,
                                    do transporte, emprego e salários, tributário, político e
                                    outros, mas que o atual sistema político, a democracia
                                    representativa e a inflexibilidade da Constituição Federal
                                    impedem que sejam implantadas.
                                    Se o eleitor pudesse votar em projetos desenvolvidos por
                                    essas pessoas e por qualquer outro cidadão que tiver uma
                                    boa ideia, e não votar somente em candidatos aos cargos
                                    políticos do país, provavelmente, votaria em projetos bem
                                    elaborados, consistentes e satisfatórios à maioria da
                                    população. Para oferecer essa condição ao eleitor é
                                    necessário constar na Constituição Federal uma lei que, na
                                    verdade, já existe - é a Lei do Plebiscito, - aperfeiçoá-la,
                                    estabelecer um REGULAMENTO, descrito em meu site, e
                                    ampliá-la aos âmbitos estadual e federal.
                                    “Apesar dos avanços, a democracia participativa ainda
                                    não se firmou. A participação dos cidadãos nas decisões
                                    políticas, sociais e econômicas tem sido intensificada
                                    apenas na escolha de seus representantes”.
                                    Para que os cidadãos possam trabalhar com mais
                                    facilidade e eficiência pelo seu aperfeiçoamento
                                    individual, alcançando maior especialização e melhor
                                    qualificação, é importante que estejam dentro de um
                                    ambiente organizado e saudável, como nas melhores
                                    empresas para trabalhar, e que participem diretamente
                                    das decisões de reformas dos sistemas governamentais.
                                    A Diretriz I da Reforma Política da Democracia do Povo é
                                    fundamentada na lei do Plebiscito. Essa lei foi instituída
                                    com a intenção de estimular uma participação popular
                                    mais intensa escolhendo-se o melhor caminho para a sua
                                    efetivação que são as instâncias locais de decisão, onde os
                                    problemas e as soluções estão mais próximos dos
                                    cidadãos, ou seja, nos municípios.
                                    O plebiscito está previsto no artigo 14 da Constituição
                                    Federal e regulamentado pela Lei no 9.709, de 18 de
                                    novembro de 1998.
                                    “A lei do plebiscito estabelece que as questões
                                    pertinentes aos municípios poderão ser votadas pelo
                                    eleitor em conformidade com a sua Lei Orgânica”.
                            </p>
                            </div>
                        </div>
                        :
                        undefined
                    }
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
}

Components.propTypes = {
    classes: PropTypes.object
};

export default Components;
