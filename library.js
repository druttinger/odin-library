
const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = !!pages ? pages : "unknown";
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    }

    this.toggleRead = function(){
        this.read = !this.read;
    }
}

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
    displayLibrary(container);
}

const container = document.createElement('div');
container.className = 'container';
const addButton = document.createElement('button');


function initiate() {

    // Create the "Add Book" button
    addButton.textContent = 'Add Book';
    container.appendChild(addButton);
    
  

    // Create the modal
    const modal = document.createElement('dialog');
    modal.setAttribute('id', 'modal');
    modal.setAttribute('open', '');
    modal.close();
    

    // Create the form
    const form = document.createElement('form');

    // Title input
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Title';
    form.appendChild(titleInput);

    // Author input
    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.placeholder = 'Author';
    form.appendChild(authorInput);

    // Pages input
    const pagesInput = document.createElement('input');
    form.appendChild(pagesInput);

    // Read checkbox
    const readInput = document.createElement('input');
    readInput.type = 'checkbox';
    const readLabel = document.createElement('label');
    readLabel.textContent = 'Read';
    form.appendChild(readLabel);
    form.appendChild(readInput);

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    // Cancel button
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = function() {
        modal.close();
    };
    form.appendChild(cancelButton);

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

    modal.appendChild(form);
    document.body.appendChild(modal);

    addButton.onclick = function() {
        modal.showModal();
    };

    // container.appendChild(addButton);
    document.body.appendChild(container);
    displayLibrary();
}

function displayLibrary() {
    container.innerHTML = ''; // Clear the container

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        const bookInfo = document.createElement('span');
        bookInfo.textContent = book.info();

        const readButton = document.createElement('button');
        readButton.textContent = 'Read';
        readButton.onclick = function() {
            book.toggleRead();
            displayLibrary(container);
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            myLibrary.splice(index, 1);
            displayLibrary(container);
        };

        bookDiv.appendChild(bookInfo);
        bookDiv.appendChild(deleteButton);
        bookDiv.appendChild(readButton);
        container.appendChild(bookDiv);
    });
    container.appendChild(addButton);
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
      