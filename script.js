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

Book.prototype.changeReadStatus = function (){
    this.read == true ? false : true;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


// let sample = new Book('Guerra dos Tronos', 'GRRM', 100, true);
// let sample2 = new Book('Tormenta de espadas', 'GRRM', 200, false);
// addBookToLibrary(sample);
// addBookToLibrary(sample2);

// DOM
function getRandomColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}
function getFormInput() {
    const form = document.querySelector('.addcard-form');
    let input = [
        form[0].value,
        form[1].value,
        form[2].value,
        form[3].checked ? true : false
    ];
    return input
}

function makeBook(array){
    return new Book(array[0], array[1], array[2], array[3]);
}

function makeBookCard(book) {

    const bookcard = document.createElement('div');
    bookcard.classList.add('book-card')
    bookcard.style.backgroundColor = getRandomColor();

    const bookDeleteBook = document.createElement('button');
    bookDeleteBook.textContent = 'X';
    bookDeleteBook.classList.add('btn-deletebook');
    bookcard.appendChild(bookDeleteBook);

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
    bookPages.textContent = "Pages: " + book.pages;
    bookPages.classList.add('card-pages')

    const bookRead = document.createElement('button');
    bookRead.textContent = book.read ? 'READED' : 'NOT READED';
    bookRead.classList.add('card-read', 'btn-read')

    bookBottom.append(bookPages, bookRead);
    bookcard.appendChild(bookBottom);

    return bookcard;
}


const bookshelf = document.querySelector('.bookshelf-grid')


function startLibrary() {    
    myLibrary.forEach(book => {
        const bookcard = makeBookCard(book);
        bookshelf.appendChild(bookcard);
    });
}

function resetLibrary() {
    myLibrary = [];
    bookshelf.innerHTML = '';
    startLibrary();
}

function changeRead(e){
    if ( e.textContent === 'READED' ){
        e.textContent = 'NOT READED';
    } else {
        e.textContent = 'READED'
    }
}

function addCardToBookshelf() {
    const array = getFormInput();
    const book = makeBook(array);
    const bookcard = makeBookCard(book);
    bookcard.addEventListener('mouseenter', () => bookcard.firstElementChild.classList.toggle('btn-deletebook-hover'));
    bookcard.addEventListener('mouseleave', () => bookcard.firstElementChild.classList.toggle('btn-deletebook-hover'));
    bookcard.firstElementChild.addEventListener('click', () => bookcard.remove());
    bookcard.lastElementChild.lastElementChild.addEventListener('click', () => changeRead(bookcard.lastElementChild.lastElementChild));
    bookshelf.appendChild(bookcard);
}

// menu button
const startButton = document.querySelector('.btn-add');
startButton.addEventListener('click', () => addCardToBookshelf());
const resetButton = document.querySelector('.btn-reset');
resetButton.addEventListener('click', () => resetLibrary());

startLibrary();






