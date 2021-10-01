 const frasesJson = `
    [   {
            "autor": "Ted Mosby",
            "frase": " Crianças, eu vou contar para vocês uma história incrível. A história de como eu conheci sua mãe."
        },
        {

            "autor": "Barney",
            "frase": " Estou ensinando Ted a viver. E, para sua sorte, tenho espaço para mais um aluno. Pense em mim como Yoda, mas ao invés de ser pequeno e verde, eu uso terno e sou incrível. Eu sou seu bro: Eu sou Broda!"
        },
        {
            "autor": "Marshall",
            "frase": " Ela nunca viu Star Wars? Ted, as únicas pessoas no universo que nunca viram Star Wars são os personagens de Star Wars. E isso porque eles viveram eles, Ted! Isso porque eles viveram Star Wars."
        },
        {
            "autor": "Barney",
            "frase": "Vai ser legen… espere um pouquinho… dário!"
        },
        {
            "autor": "Ted Mosby",
            "frase": " Quando passa das duas da manhã, apenas vá dormir, porque as decisões que você toma depois das duas da manhã são as decisões erradas."
        },
        {
            "autor": "Lily",
            "frase": " Ted, mesmo se ela for casada, é um casamento canadense. É como o dinheiro deles ou o exército. Ninguém leva a sério."
        },
        {
            "autor": "Ted Mosby",
            "frase": "Uma das coisas que vocês vão aprender sobre relacionamentos é que você nunca conhece alguém completamente. Todo mundo tem segredos. Alguns são bons [...] Outros nem tanto."
        },
        {
            "autor": "Ted Mosby",
            "frase": "Crianças, se vocês acham que as únicas opções que têm são engolir toda a sua raiva ou jogá-la na cara de alguém, há ainda uma terceira opção. Você pode abrir mão de tudo isso. E só depois que fizerem isso, é que acabará. E poderão seguir com suas vidas."
        },
        {
            "autor": "Ted Mosby",
            "frase": "Às vezes nossas melhores decisões são aquelas que não fazem o menor sentido."
        },
        {
            "autor": "Barney",
            "frase": "Não é lendário se os seus amigos não estiverem lá para ver."
        },
        {
            "autor": "Barney",
            "frase": "Agora, vamos ser claros. Eu não a amo, ok? Eu só sinto falta dela quando ela não está por perto, eu penso nela o tempo todo e eu nos imagino um dia correndo um em direção ao outro em câmera lenta, e eu estou um colete de camurça marrom."
        },
        {
            "autor": "Barney",
            "frase": "Ser solteiro é como um deserto pós-apocalíptico onde é cada homem por si. Depois de nove anos de cativeiro, essa é minha maior lição pra você."
        },
        {
            "autor": "Barney",
            "frase": "Uma das 24 semelhanças entre as mulheres e os peixes, ambos são atraídos por objetos brilhantes. Você nunca leu meu blog, leu?"
        },
        {
            "autor": "",
            "frase": "- Você disse que ser solteiro seria como uma loja de doces.” — Marshall“ - Eu menti.Ser solteiro é como um deserto pós - apocalíptico onde é cada homem por si.Depois de nove anos de cativeiro, essa é minha maior lição pra você.”—Barney "
        }


    ]
 
 
 `


 function novafrase() {
     const frases = JSON.parse(frasesJson);
     var img = document.createElement("img");
     img.src = "../images/barney.png";


     //Muda a frase sempre que a função é chamada
     var aleatorio = Math.floor(Math.random() * (frases.length));
     document.getElementById('frase').innerHTML = frases[aleatorio].frase;
     document.getElementById('autor').innerHTML = frases[aleatorio].autor;

     //muda a imagem no div da direita de acordo com a frase
     if (frases[aleatorio].autor == "Barney") {
         document.getElementById('img')
     }

 }


 //muda a imagem do background sempre que a função é chamada
 //  var i = Math.floor((Math.random() * (fundo.length)));
 //  document.body.style.backgroundImage = "url('" + fundo[i] + "')";

 //    //muda a imagem no div da direita de acordo com a frase
 //     if (frases[aleatorio] == frases[1]) {
 //     document.getElementById('right').style.background = "url('http://i.imgur.com/vu0S20q.png')";
 //   }