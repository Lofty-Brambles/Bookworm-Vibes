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

const allInputs = document.querySelectorAll( "input" );
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
const read = document.querySelector( "#readon" ).checked;

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
} );

auth.addEventListener( "focusout", () => {
	if ( auth.value.trim() === "" ) {
		authErr.style.display = "block";
	}
} );
auth.addEventListener( "focusin", () => {
	authErr.style.display = "none";
} );

pages.addEventListener( "focusout", () => {
	if ( !(/^[1-9][0-9]*$/).test( pages.value.trim() ) ) {
		pagErr.style.display = "block";
	}
} );
pages.addEventListener( "focusin", () => {
	pagErr.style.display = "none";
} );

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

// Add button functionality

const add = document.querySelector( ".add" );
add.addEventListener( "click", () => {
	if (
		( title.value.trim() !== "" ) &&
		( auth.value.trim() !== "" ) &&
		( (/^[1-9][0-9]*$/).test( pages.value.trim() ) )
	) {
		console.log("works");
	}
} );