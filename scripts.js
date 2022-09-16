 //Declare Empty Array for Book storage
 let myLibrary = []
 
 // Object Constructor Function 
 function Book(Title,Author,Pages,Read){
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
     /*  this.info = function(){
      return (Title + Author + Pages + Read)
    }*/ 
}
// Function for adding book to library
function addBookToLibrary(Title,Author,Pages,Read){
let book = new Book(Title,Author,Pages,Read)
myLibrary.push(book);
displayBooksOnPage();
}
//Function to display library array to cards
function displayBooksOnPage(){
    const books = document.querySelector(".books");
    //Remove all precious cards
    const removeDivs = document.querySelectorAll(".card")
    for(let i=0; i<removeDivs.length; i++){
        removeDivs[i].remove();
    }
    //Variables to help me locate button press upon event listener actiavtion
    let index = 0
    let index2 = 0
    // Loop over the library array and display to cards
    myLibrary.forEach(myLibrary=>{
        const card = document.createElement('div');
        card.classList.add('card');
        // Create remove book buton and add class attribute for each array card
        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove-book-button");
        removeBookButton.setAttribute('id',index);
        index+=1;
        removeBookButton.textContent = "Remove From Library"
        card.appendChild(removeBookButton);
        removeBookButton.addEventListener("click",(e)=>{
            const bookIndex = e.target.id;
            removeBookFromLibrary(bookIndex)
        })
        //Create button to change Read Status
        const changeReadStatus = document.createElement("button");
        changeReadStatus.classList.add("change-Read-button");
        changeReadStatus.setAttribute('id',index2);
        index2+=1;
        changeReadStatus.textContent = "Change Read Status"
        card.appendChild(changeReadStatus);
        changeReadStatus.addEventListener("click",(e)=>{
            const bookIndex = e.target.id;
            changeStatus(bookIndex)
        })
        books.appendChild(card)
        for (let key in myLibrary){
            //console.log(`${key} : ${myLibrary[key]}`);
            const para = document.createElement('p');
            para.textContent = (`${key}: ${myLibrary[key]}`);
            para.setAttribute("id",`${key}`);
            card.appendChild(para);
        }
    })
}
function changeStatus(bookIndex){
if(myLibrary[bookIndex].Read=="Yes"){
    myLibrary[bookIndex].Read='Not Read Yet'
    displayBooksOnPage()
}else{
    myLibrary[bookIndex].Read='Yes'
    displayBooksOnPage()
}}
function removeBookFromLibrary(bookIndex){
    //myLibrary.splice(bookIndex,1)
    console.log(myLibrary.splice(bookIndex,1));
    displayBooksOnPage()
}
// Start Event Listener/display form to add new book to library
const addBookButton = document.querySelector('.add-book-button')
addBookButton.addEventListener("click",DisplayForm);
function DisplayForm(){
    document.getElementById('add-book-form').style.display= '';
}
// Start Event Listener/submit data to library array
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener("click",()=>{intakeFormData()});
//Transform form data into variables
function intakeFormData(){
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = checkReadStatus(document.getElementById("Read"));
    if((Title == "") || (Author=="") || (Pages=="") || (Read=="")){
        return
    }
    addBookToLibrary(Title,Author,Pages,Read);
    document.getElementById("add-book").reset();
}
//Start Event Listener for Reset Button
const ClearButton = document.querySelector(".reset-button");
ClearButton.addEventListener('click',()=>{ClearForm()});
function ClearForm(){
    document.getElementById("add-book").reset();
    console.log("activate")
}
function checkReadStatus(value){
    console.log(value.checked);
    if(value.checked==true){
    return "Yes";
} else {
    return "Not Read yet";
}};

/*addBookToLibrary('Harry Potter','JK Rowling',300,'not Read yet')
addBookToLibrary('Rich Dad Poor Dad','Robert',200,'not Read yet')
addBookToLibrary('Harry Potter','JK Rowling',300,'not Read yet')
addBookToLibrary('Rich Dad Poor Dad','Robert',200,'not Read yet')
addBookToLibrary('Harry Potter','JK Rowling',300,'not Read yet')
addBookToLibrary('Rich Dad Poor Dad','Robert',200,'not Read yet')
console.log("End of Array Code" + myLibrary)
displayBooksOnPage()*/