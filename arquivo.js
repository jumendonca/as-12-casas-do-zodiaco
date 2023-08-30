function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const text =  document.querySelector("h5");
    if(valor=="touro"){
        texto.innerHTML = "Aldebaran";
        imagem.setAttribute("src","Aldebaran de Touro.jpg"); 
        text.innerHTML = (" é o Cavaleiro de Ouro da Constelação de Touro ( 牡牛座 タウラス , Taurus) durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte";)
    }

    else if(valor=="sagitário"){
        texto.innerHTML = "Aiolos";
        imagem.setAttribute("src","Aiolos de Sagitário.jpg");
        text.innerHTML = (" Aiolos de Sagitário ( 射手座 サジタリアス のアイオロス, Sajitariasu no Aiorosu?) é o Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia.";)

    }
    
    else if(valor=="aquário"){
        texto.innerHTML = "Camus";
        imagem.setAttribute("src","Camus de Aquário.jpg");
        text.innerHTML = ("Camus de Aquário ( 水瓶座 アクエリアス のカミュ, Akueriasu no Kamyu?) é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";)

    }    
    
    else if(valor=="câncer"){
        texto.innerHTML = "Máscara da Morte";
        imagem.setAttribute("src","Máscara da Morte de Câncer.jpg");
        text.innerHTML = ("Máscara da Morte de Câncer ( 蟹座 キャンサー のデスマスク, Kyansā no Desumasuku?) é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis.";)

    } 
    
    else if(valor=="escorpião"){
        texto.innerHTML = "Milo";
        imagem.setAttribute("src","Milo de Escorpião.jfif");
        text.innerHTML = ("Milo de Escorpião (蠍座のミロ, Sukōpion no Miro) é um dos personagens principais da série Os Cavaleiros do Zodíaco, criada por Masami Kurumada. É muito poderoso, já que foi capaz de devastar a Ilha de Andrômeda em poucos segundos (no mangá, quem devasta a Ilha de Andrômeda é Afrodite de Peixes).";)

    }  
    
    else if(valor=="áries"){
        texto.innerHTML = "Mu";
        imagem.setAttribute("src","Mu de Áries.jpg");
        text.innerHTML = ("Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário.";)

    }  
    
    else if(valor=="gêmeos"){
        texto.innerHTML = "Saga";
        imagem.setAttribute("src","Saga de Gêmeos.jfif");
        text.innerHTML = ("Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo.";)

    }    
    
    else if(valor=="virgem"){
        texto.innerHTML = "Shaka";
        imagem.setAttribute("src","Shaka de Virgem.jpg");
        text.innerHTML = ("Shaka de Virgem está entre os Cavaleiros de Ouro mais populares de Os Cavaleiros do Zodíaco. Conhecido como o Homem Mais Próximo de Deus, ele possui o maior cosmo dentre os 88 Cavaleiros de Atena e se mostrou fundamental para o triunfo dos heróis na Saga de Hades.";)

    }  
    
    else if(valor=="capricórnio"){
        texto.innerHTML = "Shura";
        imagem.setAttribute("src","Shura de Capricórnio.jpg");
        text.innerHTML = ("Um dos principais personagens de Saint Seiya (Os Cavaleiros do Zodíaco), Shura se considera o cavaleiro mais fiel a Athena. Seu golpe principal é Excalibur, no qual concentra seu cosmo numa rajada cortante de energia, como uma espada. Este golpe tem uma intensidade concentrada fortíssima, e sai na velocidade da luz.";)


    }
    else if(valor=="peixe"){
        texto.innerHTML = "afrodite";
        imagem.setAttribute("src","Afrodite de Peixes.jpg");
        text.innerHTML = ("Afrodite de Peixes (魚座ピスケスのアフロディーテ Pisukesu no Afurodite?) é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais. Sua ideia é de que só um poder supremo pode manter a paz e ordem no mundo, mesmo que esse poder provenha do mal. Por isso, mesmo tendo consciência de que o Grande Mestre servia ao mal, acabou obedecendo suas ordens e matando Daidalos, mestre de Shun. Sua atitude pode não ser a mais exemplar para um Cavaleiro, mas seu propósito de manter a paz na Terra é igual ao de qualquer Cavaleiro";)

    }
        else if(valor=="leão"){
        texto.innerHTML = "Aiolia ";
        imagem.setAttribute("src","aiolia.jpg");
        text.innerHTML = ("Aiolia é um dos Doze Cavaleiros de Ouro do século XX, lutando ao serviço de Atena. Ele é o irmão mais novo de Aiolos, o falecido Cavaleiro de Sagitário e candidato a Grande Mestre. Apesar de ter muitas aparições em obras paralelas, sua principal atuação é na série clássica.";)


    }
    else if(valor=="libra"){
    texto.innerHTML = "Dohko ";
    imagem.setAttribute("src","Dohko de Libra.jpg");
    text.innerHTML = ("Dohko de Libra (天秤座の童虎, Raibura no Dōko, Dohko de Libra?) fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries.";)

       
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","cavaleirosc.jpg");
    }
}