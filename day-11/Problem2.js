// Problem 2: Library System
const library = {
    books: {
        "Atomic Habits": { author: "James Clear", availableCopies: 3 },
        "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 }
    },
    borrowBook: function(bookName) {
        if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
            this.books[bookName].availableCopies--;
        }
    },
    returnBook: function(bookName) {
        if (this.books[bookName]) {
            this.books[bookName].availableCopies++;
        }
    }
};

library.borrowBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies);