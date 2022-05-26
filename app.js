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

// Adding hover animation for add-book button

const addbutt = document.querySelector( ".add-card" );
const plusSymbol = document.querySelector( ".add-btn" );
addbutt.addEventListener( "mouseover", () => {
	plusSymbol.classList.add( "hover" );
} );
addbutt.addEventListener( "mouseout", () => {
	plusSymbol.classList.remove( "hover" );
} );

// Adding/removing sidebar for input

const addcard = document.querySelector( ".add-card" );
const main = document.querySelector( ".main" );
const inputbar = document.querySelector( ".inputbar" );
addcard.addEventListener( "click", () => {
	inputbar.style.width = "40vw";
	main.style.filter = "blur(5px)";
} );

// Manages focus animations on input fields

const allInputs = document.querySelectorAll( ".input" );
allInputs.forEach( input => {
	input.addEventListener( "focusin", e => {
		e.currentTarget.parentNode
			.querySelector( "label" ).classList
			.add( "active" );
	} );
	input.addEventListener( "focusout", e => {
		const ele = e.currentTarget;
		if ( !ele.value ) {
			ele.parentNode.querySelector( "label" )
				.classList.remove( "active" );
		};
	} );
} );

// Form field validations

const title = document.querySelector( "#title" );
const auth = document.querySelector( "#author" );
const pages = document.querySelector( "#nopag" );
const read = document.querySelector( "#readon" );

const titleErr = document.querySelector( ".title-error" );
const authErr = document.querySelector( ".author-error" );
const pagErr = document.querySelector( ".pag-error" );

title.addEventListener( "focusout", () => {
	if ( title.value.trim() === "" ) {
		titleErr.style.display = "block";
	}
} );
title.addEventListener( "focusin", () => {
	titleErr.style.display = "none";
} ); // For title

auth.addEventListener( "focusout", () => {
	if ( auth.value.trim() === "" ) {
		authErr.style.display = "block";
	}
} );
auth.addEventListener( "focusin", () => {
	authErr.style.display = "none";
} ); // For author

pages.addEventListener( "focusout", () => {
	if ( !(/^[1-9][0-9]*$/).test( pages.value.trim() ) ) {
		pagErr.style.display = "block";
	}
} );
pages.addEventListener( "focusin", () => {
	pagErr.style.display = "none";
} ); // For pages

// Cancel and reset button functionality

const cancelBtn = document.querySelector( ".cancel" );
cancelBtn.addEventListener( "click", () => {
	inputbar.style.width = "0";
	main.style.filter = null;
} );
const reset = document.querySelector( ".reset" );
reset.addEventListener( "click", () => {
	document.querySelectorAll( "label" ).forEach( lab => {
		lab.classList.remove( "active" );
	} );
} );

// The information on books

const bookArray = [];

function Book( title, auth, pages, read ) {
	this.title = title;
	this.author = auth;
	this.pages = pages;
	this.read = read;
}

// Add button functionality

const add = document.querySelector( ".add" );
const warning = document.querySelector( ".warn" );
add.addEventListener( "click", () => {
	if (
		( title.value.trim() !== "" ) &&
		( auth.value.trim() !== "" ) &&
		( (/^[1-9][0-9]*$/).test( pages.value.trim() ) )
	) {

		if ( read.checked ) {
			addBook(
				title.value.trim(),
				auth.value.trim(),
				Number( pages.value.trim() ),
				true
			);
		} else {
			addBook(
				title.value.trim(),
				auth.value.trim(),
				Number( pages.value.trim() ),
				false
			);
		}

		cancelBtn.click();
		reset.click();

	} else {

		let focusout = new Event( "focusout" );

		title.dispatchEvent( focusout );
		auth.dispatchEvent( focusout );
		pages.dispatchEvent( focusout );

	}
} );

function addBook( title, auth, pages, read ) {

	const newBook = new Book( title, auth, pages, read );
	bookArray.push( newBook );

	// Creating elements for the sidebar
	const sidebar = document.createElement( "div" );
	const iconHolder = document.createElement( "div" );
	const borderRight = document.createElement( "div" );
	const borderLeft = document.createElement( "div" );

	const delDiv = document.createElement( "div" );
	const delSpan = document.createElement( "span" );

	// Assigning classes for the sidebar elements

	delSpan.classList.add( "material-icons", "md-48" );
	delSpan.textContent = "delete";
	delDiv.classList.add( "remove" );
	delDiv.appendChild( delSpan );

	sidebar.classList.add( "bar" );
	iconHolder.classList.add( "buttons" );
	iconHolder.append( delDiv );

	borderRight.classList.add( "border-right" );
	borderLeft.classList.add( "border-left" );
	sidebar.append( iconHolder, borderRight, borderLeft );

	// Creating elements for the information on the book details
	const content = document.createElement( "div" );
	const bookHolder = document.createElement( "div" );
	const pageSlot = document.createElement( "div" );
	const readButt = document.createElement( "button" );

	const titleArea = document.createElement( "div" );
	const authArea = document.createElement( "div" );

	// Adding classes and appending the input details
	titleArea.classList.add( "title" );
	authArea.classList.add( "author" );
	titleArea.textContent = title;
	authArea.textContent = auth;

	bookHolder.classList.add( "book" );
	bookHolder.append( titleArea, authArea );
	pageSlot.classList.add( "paging" );
	pageSlot.innerHTML = `Pages: <span class="pages">${pages}</span>`

	readButt.classList.add( "read" );
	content.classList.add( "content" );
	content.append( bookHolder, pageSlot, readButt );

	if ( read ) {
		readButt.textContent = "Read";
		readButt.style.backgroundColor = "#0f0";
	} else {
		readButt.textContent = "Not Read";
		readButt.style.backgroundColor = "#f00"; 
	}

	// Adds an event listener to the read button
	readButt.addEventListener( "click", e => {
		const target = e.currentTarget;
		if ( /Not/.test( target.textContent ) ) {
			target.textContent = "Read";
			target.style.backgroundColor = "#0f0";
		} else {
			target.textContent = "Not Read";
			target.style.backgroundColor = "#f00"; 
		}
	} );

	// Adds event listeners to the edit and delete buttons
	delSpan.addEventListener( "click", e => {} );

	// Finally appending the elements to the main page
	const card = document.createElement( "div" );
	card.classList.add( "card" );
	card.append( sidebar, content );
	const main = document.querySelector( "main" );
	main.appendChild( card );
}

function updateCard() {
	
}