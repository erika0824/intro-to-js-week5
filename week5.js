//Create a menu app as seen in this week’s video. 
//What you create is up to you as long as it meets the following requirements
//Use at least one array.
//DONE - Use at least two classes
// Your menu should have the options to create, view, and delete elements.


class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    
    describe() {
        return `Title: ${this.title} \n Author: ${this.author} \n`;
    }
}

class Genre {
    constructor(genre) {
        this.genre = genre;
        this.books = []; 
    }
    createBook(book) {
        if(book instanceof Book) {
            this.books.push(book);
        }       else{
            throw new Error(`You can only add an instance of Book. 
            Argument is not an book ${book}`)
    }
  }
  describe() {
    return `Book Genre: ${this.genre} has ${this.books.length} books.\n`;
  }
}


class Menu {
    constructor() {
        this.genres = [];
        this.selectedGenre = null;
}
    start() {
        let selection = this.showMainMenuOptions();
        while(selection != 0) {
            switch(selection) {
                case '1':
                    this.addGenre();
                    break;
                case '2':
                    this.viewGenre();
                    break;
                case '3':
                    this.viewAllGenres();
                    break;
                case '4':
                    this.deleteGenre();
                    break;
                default:
                    selection = 0; 
        }
        //keep looping as long as they don't select 0 or a selection
        selection = this.showMainMenuOptions();
      }  
      alert('Goodbye!'); 
    }

    showMainMenuOptions() {
        return prompt(` 
        0 - Exit
        1 - Add a Genre
        2 - View a Genre
        3 - View all Genres
        4 - Delete a Genre
            `);
    }  

    showGenreMenuOptions(genreType) {
        return prompt(`
        0 - Back
        1 - Add a Book
        2 - Delete a Book
        .................. \n
        ${genreType}
    `);  
    }    


    viewAllGenres() {
        let genreString = '';
        for(let i = 0; i < this.genres.length; i++) {
            genreString  += i + ' - ' + this.genres[i].genre + '\n';
        }
        alert(genreString);
    }
    
    addGenre() {
        //create a variable for the prompt
        let genre = prompt('Please type the genre you would like to add:');
        //push the new genre object to genres
        this.genres.push(new Genre(genre));
    }

    viewGenre() {
        let genreIndex = prompt('Enter index of the genre that you would like to view:');
        if (genreIndex > -1 && genreIndex < this.genres.length) {
            this.selectedGenre = this.genres[genreIndex];
    
            let description = 'Genre: ' + this.selectedGenre.genre + '\n';
            console.log(this.selectedGenre);
            for(let i = 0; i < this.selectedGenre.books.length; i++) {
                description += i + ' - ' + this.selectedGenre.books[i].title
                + ' | ' + this.selectedGenre.books[i].author + '\n';
            }

            let selection = this.showGenreMenuOptions(description);
            switch(selection) {
                case '1':
                    this.addBook();
                    break;
                case '2':
                    this.deleteBook();
                }
            }
        }

    addBook() {
        let title = prompt('Add the title of the book you want to add:');
        let author = prompt('Add the author of this book:');
        console.log(this.selectedGenre);
        
        this.selectedGenre.books.push(new Book(title, author));
    }
        
        

    deleteBook() {
        index = prompt('Enter the index of the book you would like to delete:');
        if(index > -1 && index < this.selectedGenre.genres.length) {
        this.selectedGenre.books.splice(index, 1);
            }
        }
    }
    
let menu = new Menu();
 menu.start();
 





