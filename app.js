const localStorageKey = 'to-do-list-bl'

function jaExiste() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-new-task').value
    let exists     = values.find(x => x.nome == inputValue)

    return !exists ? false : true
    
}

function newTask() {
    let input = document.getElementById('input-new-task')
    if (!input.value) {
        alert('Digite uma task para inserir em sua lista!')
    } 
    else if(jaExiste())
    {
        alert('Essa task já existe!')
    }
    
    else{
        
        //incremento para o localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            nome: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        mostrarValor()
    }
    input.value = ''

}

function mostrarValor() {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        let list = document.getElementById('to-do-list')
        list.innerHTML = ''        
        for (let i = 0; i < values.length; i++) {
            list.innerHTML += `
                <li>${values[i]['nome']}<button id='btn-ok' onclick='removeItem("${values[i]['nome']}")' >        <img src="/imgs/Check (2).svg" alt="">
</button></li>`
        }

        }
    mostrarValor()

    function removeItem(data){
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        values.find((data) => values.nome == data)
         values.splice(data,1)
         localStorage.setItem(localStorageKey, JSON.stringify(values))

         mostrarValor()
        }
        mostrarValor()


var button = document.getElementById('input-new-task');
  button.addEventListener('keypress', function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      newTask();
    }
  });



