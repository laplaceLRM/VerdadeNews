/* Função consultaFake faz uma consulta no Google e analisa o resultado para decidir se a afirmativa é fake ou não
*/
function consultaFake () {
    var paginaHTML = '';
    const pergunta = document.querySelector("#fake").value;
    const url = formataURL(pergunta);
    console.log(url);
    
    const paginas = searchGoogle(pergunta);
    console.log(paginas);
 /*
    fetch(url)
  
    // fetch() returns a promise. When we have received a response from the server,
    // the promise's `then()` handler is called with the response.
    .then((response) => {
    // Our handler throws an error if the request did not succeed.
    if (!response.ok) {
      throw new Error(`Erro no servidor: ${response.status}`);
    }
    // Otherwise (if the response succeeded), our handler fetches the response
    // as text by calling response.text(), and immediately returns the promise
    // returned by `response.text()`.
    return response.text();
    })
  // When response.text() has succeeded, the `then()` handler is called with
  // the text, and we copy it into the `poemDisplay` box.
  .then((text) => paginaHTML = text)
  // Catch any errors that might happen, and display a message
  // in the `poemDisplay` box.
  .catch((error) => console.erro(`Could not fetch verse: ${error}`));
*/
    
  if (isFake(paginaHTML) == 2) {
    console.log(paginaHTML);
    respostaFake(fake);
  }
}

function respostaFake(fake) {
  window.location.href="fake.html";

}


function isFake(paginaHTML) {
    return 2;
}
    

/* Função formataURL cria a URL a partir da questão proposta e usando a busca do Google
   Os espaços da sentaça são substituidos por + e 
*/
function formataURL(fake) {
    const questao = fake.replace(/ /g, '+');
    const urlPadrao = 'http://google.com/search/?q=';
    return 'www.uol.com.br';//urlPadrao + questao'';
}

function searchGoogle(Query) {
    // Seta A Variavel Final
    final = {}
    // Faz a Request Com o Cors-Anywhere Para Burlar A CORS-POLICY
    shweb = $.ajax({url: 'https://cors-anywhere.herokuapp.com/' + "https://www.google.com/search?q=" + Query, async: false})
    // Seta A Variavel Que Contem o HTML Da Pagina
    shhtm = stringToHTML(shweb.responseText)
    // Seta A Variavel Shres Com a Class 'LC20lb DKV0Md'
    shres = shhtm.getElementsByClassName('LC20lb DKV0Md')
    // Faz Um Loop Entre Os Links
    for (i = 0; i < shres.length - 1; i++) {
      // Seta O Final
      final[i] = {href: shres[i].parentElement.href, title: shres[i].innerText, desc: shres[i].parentElement.parentElement.parentElement.children.item(1).innerText}
    }
    // Retorna O Valor Final
    return final;
  }
