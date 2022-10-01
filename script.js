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

console.log(myLibrary);
addBookToLibrary(sample);
console.log(myLibrary);
addBookToLibrary(sample2);
console.log(myLibrary);