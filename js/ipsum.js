var lib = [
  'Profissionais esses que precisam sempre estar inovando, se especializando  e caminhando lado a lado da tecnologia e inovação. ',
  'A empresa se orgulha de ter o privilégio de poder contribuir e contar com o seu crescimento profissional. ',
  'Profissionais que contribuem para o crescimento de um mundo globalizado.',
  'Seja mais criterioso ao avaliar sua carreira. Não se autoflagele com seus pontos fracos.',
  'Afim de incentivar os colaboradores a utilizarem os benefícios concedidos, utilizamos deste para alertar que o não uso dos mesmos acarretará a perda do mesmo.',
  'O que fazer para ser um profissional cobiçado? Primeiro: ser profissional. Segundo: fazer diferente!',
  'Não é de responsabilidade da empresa cadastrar colaboradores. Tomamos essa iniciativa para que de certa forma consigamos incentivar para que todos façam a utilização deste para o seu bem.',
  'Comunicamos que o próximo feriado será gozado normalmente pelos colaboradores, salvo pessoas estratégicas que precisarão estar no Suporte e também no Corporativo para que sejam atendidas as demandas.',
  'Nenhum trabalho dura para sempre. Pra falar a verdade todo trabalho deveria ter validade. A partir do momento que você não se desenvolve, esse fim está próximo do vencimento.',
  'Como é de conhecimento de todos estamos em expansão comercial e estrutural, conquistando novos  clientes, contratando novos profissionais, desenvolvendo e implementando estratégias cada vez mais estratégicas e inovadoras.',
  'Paralelo a esta expansão estamos implementando políticas de gestão pautadas na igualdade e meritocracia, sempre buscando oferecer aos colaboradores de maneira semelhante um ambiente de trabalho e ferramentas para as atividades laborais.',
  'Não estacione sua carreira na zona azul. Paga‑se caro por isso, muito menos entregue sua carreira na mão de um chefe “manobrista”.',
  'Para alcançar este resultado, precisamos criar novos processos e analisar outros que de certa forma estão impactando negativamente nas políticas igualitárias adotas pela empresa. ',
  'Por ser um setor gerencial e que está em contato direto com todos os setores da empresa, é importante comunicar que estrategicamente os colaboradores carecem de colaboração para com o horário de gozo do café da tarde.',
  'O pessoal é quem forma os profissionais que somos.',
  'É possível atrelar o treinamento com o entretenimento, pois quando saímos de uma apresentação arcaica para o lúdico, a assimilação de conteúdo é mais satisfatória! ',
  'As pessoas irão lembrar-se a longo prazo.',
  'Temos que ser sábios o suficiente para tomada de decisão, por mais simples que seja, terá consequências complexas.',
  'Pensar no desenvolvimento e manutenção do colaborador, é garantir o clima organizacional saudável para empresa.',
  'Contamos com a colaboração de todos para que sejam seguidos os procedimentos estratégicos formulados pelo corporativo.',
  'Antes de escolher se você será um profissional generalista ou especialista em sua área defina que profissional você quer ser.',
  'As expectativas de Sucesso são estímulos para continuar, muito embora saibamos que elas sem trabalho duro de nada adiantam.',
  'Com a ingressão de novos colaboradores com uma certa frequência e quantidade, afim de melhorar a nossa comunicação, gostaríamos de contar com a colaboração de todos para que façam a utilização do bom senso para que juntos possamos organizar cada vez melhor o meio corporativo.',
  'Quanto maior o capital humano acumulado através da educação, maior é o diferencial de uma pessoa.',
  'Há situações do dia a dia que colocam em cheque os nossos valores humanos e esses são fundamentais e intocáveis.',
  'Devido a importância de preservar a integridade da identidade visual e profissional da empresa, solicitamos a todos os colaboradores que usem suas credenciais.',
  'Fala-se muito em valores humanos, mas quanto mais se intensifica a busca louca por lucros, menos valor se da a vida humana.',
  'As forças desintegradoras, a falta de valores humanos e princípios éticos e morais, são a causa dos nossos males.',
  'A ética é pura, inocente, singela e fruto dos valores humanos e comportamentais.',
  'Banalizar os valores humanos civilizatórios através do relativismo, é a patologia que nos convence que a mentira que defendemos é a verdade absoluta.',
  'O Gestor deve servir a equipe de colaboradores e não o inverso!',
  'Os campeões foram colaboradores da derrota,os derrotados serão os gerentes da derrota?',
  'Uma grande empresa não é classificada apenas pelo numero de colaboradores mais sim pelo esforço e determinação de cada um.',
  'Chefes autoritários só respeitam colaboradores audaciosos.',
  'A vida é como uma grande firma, a qual despede seus colaboradores e contrata novos.',
  'O segredo do sucesso é tratar seus colaboradores como seres humanos e não como coisas.',
  'Primeiramente sempre devemos pensar nos colaboradores da Empresa, pois sem o motor o carro não se desloca',
  'Meu lema é confiar. Confiar no cliente, nos fornecedores, nos colaboradores, nos amigos e, principalmente, em mim.',
  'Os bons colaboradores nas empresas não estão ameaçados pelas pessoas más, e sim por aquelas que permitem a maldade no ambiente.',
  'A melhor equipe não conta apenas com os melhores colaboradores, mas também com o colaborador certo para a função certa.',
  'A questão essencial não é "o quanto ocupado você está", mas sim "com o que você está ocupado',
  'A auto-confiança em excesso pode ser confundida com arrogância, e confusões não são produtivas.',
  'O resultado do protecionismo será sempre a redução da produtividade do trabalho humano.',
  'Há poucas coisas na vida menos produtivas do que os últimos minutos antes de um feriado prolongado.',
  'Competir é lucrativo para poucos, colaborar é produtivo para muitos.',
  'Gostaria de informar aos colaboradores a importância da ferramenta do LinkedIn, que além de ampliar sua rede de contato profissional, divulgará também a grande força que a empresa vem construindo no mercado uma vez que possui profissionais qualificados buscando trabalhar a nível de excelência.',
  'Utilizar o linkedin é fundamental para o perfil profissional e organizacional da empresa para que estratégias contratuais e promocionais sejam empregadas.',
  'Solicitamos a TODOS os colaboradores que façam uso das ferramentas de comunicação que a empresa dispõe.',
  'Quanto aos  itinerantes, pedimos para que quando estiverem em uma estação de trabalho com o seu computador, que não deixem de abrir e trabalhar com as ferramentas de trabalho que a empresa dispõe.',
  'Siga com confiança em direção aos seus sonhos. Viva a vida que você sempre imaginou.'
];

var numbers = [];


function returnText(numOfParagraphs) {
  var text = '';
  numbers = [];
  var randNumber = 0;

  // Parágrafo
  for(var i = 0; i<numOfParagraphs; i++)
  {
      // Quebra de linha para o próximo parágrafo
      if(text.length)
        text+='\n\n';

      //linhas do parágrafo
      for(var y = 0; y<5; y++)
      {
        randNumber = randomNumber();
        numbers.push(randNumber)

        text+= lib[randNumber] + ' ';
      }
  }

  $("#ipsumText").val(text);
}

function randomNumber() {
  var sort = Math.floor(Math.random() * 50);

  for(var i = 0; i< numbers.length; i++)
    if(numbers[i] === sort)
      sort = randomNumber()

  return sort;
}
