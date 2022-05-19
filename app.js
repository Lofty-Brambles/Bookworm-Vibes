console.log( "test" );

// Adding footer text

const date = document.querySelector( ".date" );
date.textContent = ( new Date() ).getFullYear();

// Adds book reset with a refresh

const settings = document.querySelector( "#settings" );
settings.addEventListener( "click", () => { location.reload(); } );

// Colour settings

const colorbtns = document.querySelectorAll( "#image > ul li" );
colorbtns.forEach( btn => {
	btn.addEventListener( "click", e => {

		e.currentTarget.className += " active";
		console.log("btn activated");

		colorbtns.forEach( btnd => {
			btnd.className = btnd.className
				.replace( " active", "" );
			console.log("btn deactivated");
		} );

	} );
} );

// Book arrays and interchange

function Book( name, auth, pages, read ) {

	this.name = name;
	this.author = auth;
	this.totalPages = pages;
	this.read = read;

}

const book = new Book("jej");