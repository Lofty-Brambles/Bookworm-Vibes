console.log( "test" );

// Adding footer text

const date = document.querySelector( ".date" );
date.textContent = ( new Date() ).getFullYear();

// Book arrays and interchange

function Book( name, auth, pages, read ) {

	this.name = name;
	this.author = auth;
	this.totalPages = pages;
	this.read = read;

}

const book = new Book("jej");
console.log( book.ask() );