import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import { Button } from 'reactstrap';

// sections for this page

const Contratos = () => {
    const printDiv = () => {
        var divToPrint = document.getElementById('areaToPrint');
        let newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
    };

    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <h1 style={{ textAlign: 'center', color: '#000', padding: '10px'}}>
                        Contrato Representante Comercial Autônomo e Pessoa Jurídica
                    </h1>
                    <div style={{ textAlign: 'center' }}>
                        <Button onClick={() => printDiv()} color="primary">
                            Imprimir Contrato
                        </Button>
                    </div>
                    <div 
                        style={{ 
                            width: '100%', 
                            display: 'block', 
                            marginBlockStart: '1em', 
                            marginBlockEnd: '1em', 
                            marginInlineStart: '0', 
                            marginInlineEnd: '0' 
                        }}
                        id='areaToPrint'
                    >
                        <p style={{ padding: '15px', paddingLeft: '25px', paddingRight: '50px', textAlign: 'justify', color: '#000', fontSize: '20px'}}>
                            Pelo presente instrumento particular de Contrato de Representação Comercial que entre si fazem, de um lado ...................................................................................................................... representante comercial, brasileiro, casado/solteiro,
                            CNPJ nº........................................................, portador da cédula de identidade RG nº ............................................................................
                            CPF nº..............................................................................com domicilio em........................................................................................,.......
                            Estado .................................... à rua.................................................................................., nº........., complemento..................................
                            Registro no CORE nº..............................................., expedida pelo Conselho Regional dos Representantes Comerciais do Estado............................., doravante denominado simplesmente REPRESENTANTE e, do outro lado, a empresa O SÓCIO BR – Produtos e Serviços Inovadores EIRELI, sociedade comercial com sede na cidade de São Paulo, Estado de São Paulo, sito à rua Bom Sucesso 407 – Tatuapé – CEP 03305-000, neste ato representada pelo seu sócio gerente Antonio de Freitas Filho, inscrita no cadastro geral de contribuintes sob nº 28.398.851/0001-53, aqui denominada simplesmente REPRESENTADA, resolvem regular suas relações de representação comercial segundo as cláusulas e condições seguintes: <br /> 
                            <b>CLÁUSULA PRIMEIRA</b> - A REPRESENTADA confere ao REPRESENTANTE a representação comercial dos artigos de sua produção, de modo a permitir-lhe que promova a venda nas condições estipuladas no presente contrato. Os produtos representados serão os seguintes: Todos os produtos contidos nos sites <b><a style={{ color: '#000' }} href=" www.democraciadopovo.com.br">www.democraciadopovo.com.br</a> <a style={{ color: '#000' }} href="www.lojavirtualreal.com.br">www.lojavirtualreal.com.br</a> e <a style={{ color: '#000' }} href="www.revistapropria.com.br">www.revistapropria.com.br</a></b> <br/> 
                            <b>CLÁUSULA SEGUNDA</b> - O presente contrato terá prazo indeterminado de duração. <br/>
                            <b>CLÁUSULA TERCEIRA</b> - O REPRESENTANTE desempenhará suas atividades de representação comercial promovendo a venda dos produtos da REPRESENTADA, em zona livre do território brasileiro, sem exclusividade, sendo permitido à REPRESENTADA nele negociar diretamente ou por interposta pessoa, bem como nomear outro ou mais representantes vinculado à sua empresa. <br/> 
                            <b>CLÁUSULA QUARTA</b> - O REPRESENTANTE terá autonomia em suas atividades de representação comercial, não havendo subordinação ou horário de trabalho específico e o mesmo não ficará sujeito à direção e fiscalização da REPRESENTADA. <br/> 
                            <b>CLÁUSULA QUINTA</b> - O REPRESENTANTE, a titulo de retribuição receberá comissões correspondentes a cada produto calculadas sobre o valor das vendas realizadas por seu intermédio. Junta-se a este contrato, por opção do REPRESENTANTE, as cópias autenticadas onde constam, nos referidos sites, os preços de cada produto e suas correspondentes comissões. O REPRESENTANTE haverá as comissões logo que os compradores efetuarem os respectivos pagamentos ou na medida em que o façam parceladamente. A REPRESENTADA manterá conta aberta, em nome do REPRESENTANTE, relativa ao movimento das comissões, obrigando-se a pagar, até o dia quinze de cada mês o saldo apurado no último dia do mês vencido. (Artigo 32, § 1º). <br/> 
                            <b>CLÁUSULA SEXTA</b> - As comissões serão devidas no caso de produtos deixados em consignação em revendedores, somente quando estes revenderem todas ou parte das unidades consignadas. No caso de o revendedor devolver parte, ou todas as unidades consignadas, não serão devidas as comissões destas. As unidades devolvidas pelo revendedor poderão ser consignadas pelo Representante a outro revendedor selecionado, ao seu critério. Bem como Painéis (PDV), Banners, revistas, livros e cartazes fornecidos aos revendedores, como material de apoio às vendas.<br/> 
                            <b>CLÁUSULA SÉTIMA</b> - Nenhuma retribuição será devida ao REPRESENTANTE, se a falta de pagamento resultar da insolvência do comprador, bem como se o negócio vier a ser por ele desfeito, ou for sustada a entrega da mercadoria por ser duvidosa a liquidação (Artigo 33, § 1º).<br/> 
                            <b>CLÁUSULA OITAVA</b> – Ficará ao cargo do REPRESENTANTE, no caso de ser ele pessoa física inscrito regularmente no CORE (Conselho Regional dos Representantes Comerciais no Estado) e na Prefeitura de sua cidade no CCM (Cadastro de Contribuinte Municipal), os recolhimentos do INSS (Instituto Nacional do Seguro Social), o IRPF (Imposto de Renda Pessoa Física) e o ISS (Imposto Sobre Serviços). No caso de o REPRESENTANTE for pessoa jurídica, fica ao seu cargo todos os recolhimentos de impostos devidos de sua empresa. <br/> 
                            <b>CLÁUSULA NONA</b> - O REPRESENTANTE poderá exercer suas atividades para outra empresa, ou efetuar negócio em seu nome por conta própria, desde que não se trate de atividade que resulte concorrência à REPRESENTADA (Artigo 41). <br/>
                            <b>CLÁUSULA DÉCIMA</b> - O REPRESENTANTE fica obrigado a fornecer à REPRESENTADA, quando lhe forem solicitadas, informações sobre o andamento dos negócios a seu cargo, devendo dedicar-se à REPRESENTADA promovendo os seus produtos (Artigo 28).<br/>
                            <b>CLÁUSULA DÉCIMA PRIMEIRA</b> - Salvo autorização expressa, não poderá o REPRESENTANTE, conceder abatimentos, descontos ou dilações, nem agir em desacordo com as instruções, contidas nos sites da REPRESENTADA (Artigo 29).<br/>
                            <b>CLÁUSULA DÉCIMA SEGUNDA</b> - As despesas necessárias ao exercício normal da representação, ora concedida, ligadas à condução de mostruários, fretes etc., correm por conta do REPRESENTANTE, e as que se referirem a frete de mercadorias devolvidas, fiscalização, propaganda etc. serão de responsabilidade da REPRESENTADA, inclusive os impostos sobre elas incidentes. O frete para a entrega dos produtos feitos pelos clientes, ficam a cargo destes. <br/> 
                            <b>CLÁUSULA DÉCIMA TERCEIRA</b> - O REPRESENTANTE se responsabiliza pela conservação e manutenção do mostruário e materiais de apoio às vendas que lhe é entregue pela REPRESENTADA, dela recebido conforme descritos em notas fiscais. <br/> 
                            <b>CLÁUSULA DÉCIMA QUARTA</b> - A rescisão, sem motivo do presente contrato pela REPRESENTADA, fora dos casos previstos no Artigo 35 da Lei nº 4.886, de 8 de dezembro de 1.965, dará ao REPRESENTANTE o direito ao aviso prévio de 30 (trinta) dias (Artigo 34) e uma indenização de 1/12 (um doze avos) do total das comissões auferidas durante o tempo em que foi exercida a representação nos termos do Artigo 27, letra "j", da Lei nº 8.420, de 8 de maio de 1.992 que deu nova redação à Lei nº 4.886/65. <br/> 
                            <b>CLÁUSULA DÉCIMA QUINTA</b> - A base de cálculo da indenização prevista na cláusula 14ª e no Artigo 27, letra "j", da Lei 4.886/65, será corrigida monetariamente com base na variação do Índice Nacional de Preços ao Consumidor (IBGE); (Artigos 33, 34 e 46).<br/> 
                            <b>CLAUSULA DÉCIMA SEXTA</b> - O fato de o REPRESENTANTE dever dedicar-se à representação com zelo e lealdade, de modo a expandir os negócios a seu cargo, de prestar colaboração excepcional a pedido da REPRESENTADA, com encargos ou atribuições diversos dos previstos neste contrato (Artigo 28 e 38, da Lei nº 4.886/65), não desclassifica a relação de representação comercial em relação ao emprego.<br/> 
                            <b>CLÁUSULA DÉCIMA SÉTIMA</b> - É facultado ao REPRESENTANTE comercial sacar duplicata de prestação de serviços, para cobrança das comissões (Artigo 32, parágrafo 3º), observando-se as exigências da Lei 5474/68, Artigo 20 e seguinte; <br/> 
                            <b>CLÁUSULA DÉCIMA OITAVA</b> - Os casos omissos serão regulados pelos preceitos da Lei nº 4.886, de 9 de dezembro de 1.965, com a nova redação da Lei nº 8.420/92, pelo Código Comercial e pelos princípios gerais de Direito. Fica eleito o foro do domicilio do REPRESENTANTE, de acordo com o Artigo 39 da Lei 8.420 de 8 de maio de 1.992, para discussão dos termos do presente contrato e cobrança dos valores dele derivados. <br/> 
                            E por estarem assim justos e contratados, REPRESENTADA e REPRESENTANTE firmam o presente instrumento em 2 (duas) vias de igual teor, perante as testemunhas que com elas subscrevem abaixo, para que produza todos os efeitos de Direito.
                        </p>
                        <p style={{ padding: '15px', textAlign: 'justify', color: '#000', fontSize: '20px'}}>
                            Local e data: __/__/____
                        </p>
                        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'row'}}>
                            <p style={{ color: '#000' }}>
                                REPRESENTADA___________________________
                            </p>
                            <p style={{ color: '#000' }}>
                                TESTEMUNHAS___________________________
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p style={{ color: '#000' }}>
                                REPRESENTADA___________________________
                            </p>
                            <p style={{ color: '#000' }}>
                                TESTEMUNHAS___________________________
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

Contratos.propTypes = {
    classes: PropTypes.object
};

export default Contratos;
