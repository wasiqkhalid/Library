let myLibrary = [];

function book(title, author, pages, read) {
    //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    display(myLibrary);
}

function display(myLibrary) {
    for(i = 0; i < myLibrary.length; i++) {
        let container = document.getElementById('innerContainer');
        if(container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
    }
    addCards(myLibrary);

}



// Get info from form
const myform = document.getElementById('myform');
myform.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = myform[0].value;
    const author = myform[1].value;
    const pages = myform[2].value;
    const read = myform[3].checked;
    addBookToLibrary(title, author, pages, read);
    myform.reset();

    const form = document.getElementById('form');
    form.classList.toggle('show');
})

// Add book button - Header
const button = document.getElementById('ABbtn');
const form = document.getElementById('form');
button.addEventListener('click', () => {
    form.classList.toggle('show');
});

// Block out eveything while pop up is enabled
const blocker = document.querySelector('.blocker');
blocker.addEventListener('click', () => {
    form.classList.remove('show');
})


// Remove Book
function remove(id){
    myLibrary.splice(id, 1);
    updateDisplay(myLibrary);
}
// Update display after book removal
function updateDisplay(myLibrary) {
    const container = document.getElementById('innerContainer');
    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    addCards(myLibrary);
}

function changeStatus(id) {
    if(myLibrary[id].read == true) {
        myLibrary[id].read = false;
    }else {
        myLibrary[id].read = true;
    }
    updateDisplay(myLibrary);
}


function addCards(myLibrary) {
    for(i = 0; i < myLibrary.length; i++) {
        const container = document.getElementById('innerContainer');
        // Card Div
        const cardDiv = document.createElement('div');
        cardDiv.classList.add("card");
        container.appendChild(cardDiv);
        // Section1 Div
        const section1Div = document.createElement('div');
        section1Div.classList.add("section1");
        cardDiv.appendChild(section1Div);
        // Title Div
        const titleDiv = document.createElement('div');
        titleDiv.classList.add("title");
        section1Div.appendChild(titleDiv);
        titleDiv.textContent = myLibrary[i].title;
        // Section2 Div
        const section2Div = document.createElement('div');
        section2Div.classList.add("section2");
        cardDiv.appendChild(section2Div);
        // CardSection Div
        const cardSection1 = document.createElement('div');
        cardSection1.classList.add("cardSection");
        section2Div.appendChild(cardSection1);
        // Author Divs
        const AuthorText = document.createElement('div');
        cardSection1.appendChild(AuthorText);
        AuthorText.textContent = "Author:";
    
        const AuthorName = document.createElement('div');
        cardSection1.appendChild(AuthorName);
        AuthorName.textContent = myLibrary[i].author;
        // CardSection2 Div
        const cardSection2 = document.createElement('div');
        cardSection2.classList.add("cardSection");
        section2Div.appendChild(cardSection2);
        // Pages Divs
        const PagesText = document.createElement('div');
        cardSection2.appendChild(PagesText);
        PagesText.textContent = "Pages:";
    
        const PagesNum = document.createElement('div');
        cardSection2.appendChild(PagesNum);
        PagesNum.textContent = myLibrary[i].pages;
        // CardSection3 Div
        const cardSection3 = document.createElement('div');
        cardSection3.classList.add("cardSection");
        section2Div.appendChild(cardSection3);
        // Read Divs
        const ReadText = document.createElement('div');
        cardSection3.appendChild(ReadText);
        ReadText.textContent = "Read:";
    
        const BookRead = document.createElement('div');
        cardSection3.appendChild(BookRead);
        BookRead.textContent = myLibrary[i].read;
        // Section3 Div
        const section3Div = document.createElement('div');
        section3Div.classList.add("section3");
        cardDiv.appendChild(section3Div);
        // Buttons
        // Read Button
        const readBtn = document.createElement('button');
        readBtn.classList.add('btn');
        section3Div.appendChild(readBtn);
        readBtn.textContent = "Read";
        readBtn.setAttribute('id', i);
        readBtn.setAttribute('onclick', 'changeStatus(this.id)');

        // Remove Button
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn');
        section3Div.appendChild(removeBtn);
        removeBtn.textContent = "Remove";
        removeBtn.setAttribute('id', i);
        removeBtn.setAttribute('onclick', 'remove(this.id)');
    }
}