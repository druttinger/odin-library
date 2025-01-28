class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    }

    toggleRead() {
        this.read = !this.read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    push(book) {
        this.books.push(book);
    }

    splice(index) {
        this.books.splice(index, 1);
    }

    displayLibrary(container) {
        container.innerHTML = ''; // Clear the container
    
        this.books.forEach((book, index) => {
            const bookDiv = document.createElement('div');
            const bookInfo = document.createElement('span');
            bookInfo.textContent = book.info();
    
            const readButton = document.createElement('button');
            readButton.textContent = 'Read';
            readButton.onclick = function() {
                book.toggleRead();
                myLibrary.displayLibrary(container);
            };
    
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() {
                myLibrary.splice(index, 1);
                myLibrary.displayLibrary(container);
            };
    
            bookDiv.appendChild(bookInfo);
            bookDiv.appendChild(deleteButton);
            bookDiv.appendChild(readButton);
            container.appendChild(bookDiv);
        });
        container.appendChild(addButton);
    }
   
}

const myLibrary = new Library();

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
    myLibrary.displayLibrary(container);
}

const container = document.getElementById('container');
const addButton = document.getElementById('button');


function initiate() {

    const modal = document.getElementById('modal');
    // Create the form
    const form = document.getElementById('form');
    // Title input
    const titleInput = document.getElementById('title');
    // Author input
    const authorInput = document.getElementById('author');
    // Pages input
    const pagesInput = document.getElementById('pages');
    // Read checkbox
    const readInput = document.getElementById('read');
    // Submit button
    const submitButton = document.getElementById('submit');
    // Cancel button
    const cancelButton = document.getElementById('cancel');
    cancelButton.onclick = function() {
        modal.close();
    };

    form.onsubmit = function(event) {
        event.preventDefault();
        addBookToLibrary(titleInput.value, authorInput.value, 
            parseInt(pagesInput.value), readInput.checked);
        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        readInput.checked = false;
        modal.close();

    };

    addButton.onclick = function() {
        modal.showModal();
    };
}




 

initiate();

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Hunger Games", "Suzanne Collins", 374, true);
addBookToLibrary("Thinking, Fast and Slow", "Daniel Kahneman", 499, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 218, true);
addBookToLibrary("Catch-22", "Joseph Heller", 453, true);
addBookToLibrary("The Alchemist", "Paulo Coelho", 197, true);
addBookToLibrary("The Da Vinci Code", "Dan Brown", 454, true);
addBookToLibrary("The Girl with the Dragon Tattoo", "Stieg Larsson", 465, true);
      