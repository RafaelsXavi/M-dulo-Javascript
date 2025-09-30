/*

*/
let p = document.querySelector('p');
let input = document.querySelector('input');

const contacts = [
{name: 'João', phone: '1234-5678'},
{name: 'Maria', phone: '9876-5432'},
{name: 'Pedro', phone: '4567-8901'},
{name: 'Ana', phone: '6543-2109'},
{name: 'Lucas', phone: '7890-1234'}

];

function search(){

for(const contact of contacts){
    if(contact.name.toLowerCase() === input.value.toLowerCase()){
        p.textContent = `Telefone de ${contact.name}: ${contact.phone}`;
        input.value = '';
        return;
    }
}}
/*
function search(){
    let name = input.value;
    let found = false;
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].name.toLowerCase() === name.toLowerCase()){
            p.textContent = `Telefone de ${contacts[i].name}: ${contacts[i].phone}`;
            found = true;
            break;
        }
    }
    if(!found){
        p.textContent = `Contato não encontrado.`;
    }  
    input.value = '';
}

// Adiciona um listener para o evento 'keyup' no input

input.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        let name = input.value;
        let found = false;
        for(let i = 0; i < contacts.length; i++){
            if(contacts[i].name.toLowerCase() === name.toLowerCase()){
                p.textContent = `Telefone de ${contacts[i].name}: ${contacts[i].phone}`;
                found = true;
                break;
            }                    

        }
        if(!found){
            p.textContent = `Contato não encontrado.`;
        }  
        input.value = '';
    }
});
Estrututra de repetição FOR
 1 - for (inicialização; condição; incremento) {
      // código a ser executado
    }
*/