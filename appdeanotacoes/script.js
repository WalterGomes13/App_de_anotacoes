const input = document.getElementById('input');
const botao = document.getElementById('botao');
const lista = document.getElementById('listaNotas');

botao.addEventListener('click',(e)=>{
  e.preventDefault();
  const texto = input.value;
  if(texto!=''){
    const li = document.createElement('li');
    li.innerHTML = `<span>${texto}</span><button id='delete'>X</button>`;
    lista.appendChild(li);

    li.querySelector('#delete').addEventListener('click',()=>{
      li.remove();
    });
    
    input.value = '';
  } else{
    alert('Campo de texto em branco!');
  }
})