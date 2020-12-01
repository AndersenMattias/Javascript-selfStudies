// Bok klassen
class Books {
  constructor(title, pages, year) {
    this.title = title;
    this.pages = pages;
    this.year = year;      
  }

  printBooks() {
    console.log(`Den här boken heter: ${this.title} och ni måste läsa ${this.pages} sidor, boken skrevs år ${this.year}`);
  }

}

// Författare klassen
  class Author {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.books = [];    

    }   

    addBook(title, pages, year){
      this.books.push(new Books(title,pages,year));        
    }

    printZeBooks() {
      console.log(this.books);
    }

    sortByTitle() {
      this.books.sort((a,b) => {
        if(a.title < b.title) {
          return -1;
        }
        if(a.title > b.title){
          return +1;
        }
        return 0;
      });
  }

  sortByYear() {
    this.books.sort((a,b) => {
      if(a.year < b.year) {
        return -1;
      }
      if(a.year > b.year){
        return +1;
      }
      return 0;
    });
  }

}

let autohorOne = new Author("Matt Andersen", 33);

autohorOne.addBook("Kalle Anka", 33, 1934);
autohorOne.addBook("Pippi Långstrump", 112, 1986);
autohorOne.addBook("Bröderna", 14, 2019);

autohorOne.printZeBooks();
autohorOne.sortByTitle()
autohorOne.printZeBooks();

autohorOne.sortByYear();
autohorOne.printZeBooks();











