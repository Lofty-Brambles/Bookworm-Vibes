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

		colorbtns.forEach( btnd => {
			btnd.className = btnd.className
				.replace( " active", "" );
		} );
		
		const num = e.currentTarget.className.slice(-1);
		const changes = [ "lighter", "light", "medium",
			"dark", "darker", "medmix", "darmix" ];
		changes.forEach( ele => {
			document.querySelector( ":root" ).style
				.setProperty( `--act-${ ele }`,
					 `var( --set${ num }-${ ele } )` );
		} );

		e.currentTarget.className += " active";
	} );
} );
window.onload = 
	document.querySelector( ".drop-item-1" ).click();

// Adding sidebar for input

const addcard = document.querySelector( ".add-card" );
const inputbar = document.querySelector( ".inputbar" );
addcard.addEventListener( "click", () => {
	inputbar.style.width = "40vw";
} );

// Book arrays and interchange

function Book( name, auth, pages, read ) {

	this.name = name;
	this.author = auth;
	this.totalPages = pages;
	this.read = read;

}

const book = new Book("jej");