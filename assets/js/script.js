const form = document.querySelector('.formAdd')
form.addEventListener('submit', function (ev){
    ev.preventDefault() //não atualiza a página

    let pessoa =  receberValoresDaTabela(form)// dados vindo do formulario

    // let row = document.querySelector('.fullStack') // localizando o cargo 

     let imagemCodificada = converterParaBase64(pessoa.imagem)
     localStorage.setItem('imagem', imagemCodificada) // add imagem no localStorage

     let row
     
     switch (pessoa.time){
        case 'fullStack':
         row = document.querySelector('.fullStack')
         pessoa.corFundo = '#5cb85c'
         break
         case 'frontEnd':
        row = document.querySelector('.frontEnd')
        pessoa.corFundo = '#0275d8'
        break
         case 'backEnd':
        row = document.querySelector('.backEnd')
        pessoa.corFundo = '#f7f45e'
        break
         case 'dataScience':
        row = document.querySelector('.dataScience')
        pessoa.corFundo = '#f75e5e'
        break
         case 'mobile':
        row = document.querySelector('.mobile')
        pessoa.corFundo = '#838382'
        break
         case 'uxEDesign':
        row = document.querySelector('.uxEDesign')
        pessoa.corFundo = '#6becfd'
        break
     }

     row.appendChild(montarCard(pessoa)) //add o card na linha
})

const receberValoresDaTabela = (form) => {
    let pessoa = { //criando uma pessoa com os dados do form
        nome: form.nome.value, // recebendo o nome do form
        cargo: form.cargo.value, // recebendo o cargo do form
        imagem: form.imagem.files[0], // recebendo a imagem do form
        time: form.time.value // recebendo o time do form

    }
    return pessoa
}

function adicionarDescricao(pessoa){
    let nomeDescricao = document.createElement('h4') //Criando um titulo h4 para o nome da pessoa
    nomeDescricao.textContent = pessoa.nome // adicionando o nome da pessoa na tag
    nomeDescricao.style.color = pessoa.corFundo // add cor

    let cargoDescricao = document.createElement('p') //criando um paragrafo p
    cargoDescricao.textContent = pessoa.cargo //add o cargo da pessoa ao paragrafo p
    cargoDescricao.style.color = pessoa.corFundo

    let figcaption = document.createElement('figcaption')// criando um figcaption 
    figcaption.classList.add('text-center') // add um classe de html ao figcaption
    figcaption.appendChild(nomeDescricao) // add o nome dentro do figcaption
    figcaption.append(cargoDescricao) // add o cargo dentro do figcaption
  
    return figcaption
} 
 function montarCard(pessoa){

    let foto = document.createElement('img')

    let figure = document.createElement('figure') //criando uma figure
    figure.classList.add('card') //add classes ao figure
    figure.classList.add('ms-3')
    figure.classList.add('col-md-3')
    figure.style.backgroundImage = 'linear-gradient(to top, white 60%, '+ pessoa.corFundo +' 40%)'
    figure.appendChild(adicionarDescricao(pessoa)) //add figcaption 'descricao' ao figure

    return figure
 }

 //convertendo imagem para texto em base64
 function converterParaBase64(imagem){
    return new Promise(resolve => {
        let reader = new FileReader()
        reader.readAsDataURL(imagem)
        reader.onload = function() {
            let imagemCodificada = reader.result.split(',')[1]
            resolve(imagemCodificada)
        }
    })
 }

 //continua na proxima aula...