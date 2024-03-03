# Roleta de Animes - Aficiotaku
![image](https://github.com/yurilimadev/roleta-animes-aficiotaku/assets/108006649/785b7786-5f21-4816-9e4d-2a67e4b1512b)
# Descrição
<p>Se você gosta de animes e programação, acho que você vai curtir esse projeto. Eu queria tenho um instagram no qual eu mostro minha apreciação pela cultura japonesa. 
E fiz uma proposito no canal de ver animes da época que a meus seguidores escolhessem.</p>
<p>Então eles escolheram a década de 90 para esse intuito. Mas, como eu fiquei com preguiça de procurar um aplicativo para escolher aleatoriamente os animes desse período, eu decidi fazer o meu próprio. 
Ao primeiro momento pode ser incoerente, mas eu achei muito legal fazer esse projeto para me divertir com minha audiencia. Eu gostei de fazer e me animei a cada bug que eu conseguia consertar.
Eu não sou muito fã de design, mas já achei bacana esse layout mais simples, porque afinal, eu quero assistir meus animes e produzir conteúdo também. 
</p>

# E ficou funcionando assim:

![Roleta de Animes - Aficiotaku- - Google Chrome 2024-03-03 00-12-33](https://github.com/yurilimadev/roleta-animes-aficiotaku/assets/108006649/38b16f1c-e4d1-4ae0-9960-8c26d4498171)

# Status do Projeto
☑️ Finalizado. Contudo, fiquem a vontade para colaborar :) Mandem uma DM para mim no instagram @aficiotaku 
# Instruções de Instalação
<p>Por enquanto, não pensei em um deploy para que vocês possam usar, mas está nos planos.</p>

# Como Usar
<p>A ideia é carregar um arquivo excel para com os nomes e imagens dos animes que você quer ver e a aplicação vai carregar as imagens de forma aleatória ao clicar no botão de iniciar. E quando você achar que é 
adequado parar, você pode apertar o botão. E recomeçar quantas vezes você quiser.</p>

# Tecnologias Utilizadas

- Google Colab -> Utilizei uma automação com Selenium para extrair as imagens dos animes no site fillow e produzi um dataframe pandas com as informações para utilizar posteriormente com Flask
- VsCode -> Utilizei o framework Flask e uma estrutura básica HTML, CSS e JS para finalizar a criação do projeto. 

# Desafios vencidos

<p>Confesso que o maior desafio para mim não é python, mas sim a linguagem para Web e foi bem mais rápido entender a lógica por trás com Chat GPT. Outro problema que surgiu foi a extração das imagens
com o uso de XPATH e CLASSES das TAGs que continham as imagens, mas achando a classe e TAG corretas foi possível extrair todas as imagens, além disso, outro desafio foi que código selenium não estava
integrando muito bem com TAG wrapped que são basicamente sanfonadas que abrem só depois de determinadas ações como cliques, mas utilizando a dupla try e except o problema foi contornado. </p>

<p>Ah, caso, você esteja lendo esse README vou adorar conversar sobre a possíbilidade de tornar essa aplicação com uma roleta 3D com Flask. Fica aqui o desafio. 😄</p>
