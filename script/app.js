
let msgContainer =  document.querySelector('.msgContainer');
let form = document.querySelector('form');
let inputs = document.querySelectorAll('input')
let button = document.querySelector('button')
let bookListContainer =  document.querySelector('tbody')

const inputsValidity={}

class Books {
    constructor(titre, auteur, annee){
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee
    }
}



form.addEventListener('submit', handleForm)
let booksList =[]



function handleForm(e){
    e.preventDefault();
    inputs.forEach(input => {
        if (input.value !== '') {
            inputsValidity[input.name] = true;
        } else {
            inputsValidity[input.name] = false;
        }    
    });    
    const keys = Object.keys(inputsValidity);
    const failedInputs = keys.filter(keyEl => !inputsValidity[keyEl])
    let errorMsg = `Une des entrée du formulaire n'est pas rempli : ${failedInputs}`;
    
    
    if (failedInputs.length){
        
        msgContainer.textContent = `Veuillez remplir les champs suivants :\n${failedInputs}.`;
        msgContainer.style.backgroundColor = 'red';
        msgContainer.classList.add('active')
        setTimeout(() =>{msgContainer.textContent='',
        msgContainer.classList.remove('active')}
        
        ,3000)
        
    }else {
        let newBook = new Books(inputs[0].value,inputs[1].value, inputs[2].value )
        booksList.push(newBook)
        console.log('Livres ajoutés :', newBook.titre);
        msgContainer.textContent = `Livre ajouté : ${newBook.titre}`
        msgContainer.style.backgroundColor = 'green';
        msgContainer.classList.add('active')
        setTimeout(() =>{msgContainer.textContent='',
        msgContainer.classList.remove('active')}
        
        ,3000)
        
        // Ajout de ligne 
        let row = document.createElement('tr')
        bookListContainer.appendChild(row)
        
        // Ajout de la 1ere colonne 
        let col1 = document.createElement('td')
        col1.textContent = newBook.titre;
        row.appendChild(col1)
        
        // Ajout de la 2eme colonne 
        let col2 = document.createElement('td')
        col2.textContent = newBook.auteur
        row.appendChild(col2)
        
        // Ajout de la 3eme colonne 
        let col3 = document.createElement('td')
        col3.textContent = newBook.annee
        row.appendChild(col3)
        
        // Ajout de la colonne delete 
        let col4 = document.createElement('td')
        col4.innerHTML = '<i class="fa-solid fa-square-xmark deleteBtn"></i>'
        row.appendChild(col4)
        
        let btnDelete = document.querySelectorAll('.deleteBtn')
        for(let i = 0; i< btnDelete.length;i++){
            btnDelete[i].addEventListener('click', deleteRow);
        }
        // let validMsg = `Livre ${newBook.title} enregistré`;

        form.reset();
    }    
}



function deleteRow(){
    confirm('Cette ligne sera supprimée. En etes vous sur?')?
    this.closest('tr').remove():
    console.log('Suppression annulée')
}
