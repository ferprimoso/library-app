let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return (title + ', ' + author + ', ' + pages + ' pages, ' + (this.read ? 'readed': 'not read yet'));
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let sample = new Book('Guerra dos Tronos', 'GRRM', 100, true);
let sample2 = new Book('Tormenta de espadas', 'GRRM', 200, false);




addBookToLibrary(sample);
addBookToLibrary(sample2);


// DOM
function getFormInput() {
    
}



function makeBookCard(book) {

    const bookcard = document.createElement('div');
    bookcard.classList.add('book-card')

    const bookAuthor = document.createElement('span');
    bookAuthor.textContent = book.author
    bookAuthor.classList.add('card-author')
    bookcard.appendChild(bookAuthor);

    const bookTitle = document.createElement('span');
    bookTitle.textContent = book.title
    bookTitle.classList.add('card-bookname')
    bookcard.appendChild(bookTitle);

    const bookBottom = document.createElement('div');
    bookBottom.classList.add('card-bottom');

    const bookPages = document.createElement('span');
    bookPages.textContent = book.pages;
    bookPages.classList.add('card-pages')

    const bookRead = document.createElement('span');
    bookRead.textContent = book.read ? 'READED' : 'NOT READED';
    bookRead.classList.add('card-read')

    bookBottom.append(bookPages, bookRead);
    bookcard.appendChild(bookBottom);

    return bookcard;
}




function startLibrary() {
    const bookshelf = document.querySelector('.bookshelf-grid')
    
    myLibrary.forEach(book => {
        const bookcard = makeBookCard(book);
        bookshelf.appendChild(bookcard);
    });
}

startLibrary(); 


// Buttons



// Side Bar-- maybe use later idk

// const sideBar = document.querySelector('.side-container')
// const startButton = document.querySelector('.btn-add');

// startButton.addEventListener('click', () => sideBar.classList.contains('side-open') ? sideBar.classList.remove('side-open') : sideBar.classList.add('side-open'));

const startButton = document.querySelector('.btn-add');
startButton.addEventListener('click', () => getFormInput())



const cards = document.querySelectorAll('.book-card');
const btnDel = document.querySelectorAll('button');
console.log(btnDel);
cards.forEach(e => e.addEventListener('mouseenter', btnDel.classList.add('btn-deletebook-hover'))); 