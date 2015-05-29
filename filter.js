/* ------------------------------------------ *\
 	Filter
 	* Filters based on element text content.
 	
\* ------------------------------------------ */
( function(){
	'use strict';

	var App = {

		init: function() {
			this.cacheElements();
			this.bindEvents();
		},

		cacheElements: function() {
			this.$filterApp = $( '.filter' );
			this.$input = this.$filterApp.find( '.filter__input' );
			this.$items = this.$filterApp.find( '.filter__item' );
			this.dataLabel = 'data-filter-item';
			this.matchClass = 'filter-match';
			this.hideClass = 'filter-hidden';
		},

		bindEvents: function() {
			this.$input.on( 'keyup', this.applyFilter.bind( this ) );
		},

		hideItems: function() {
			this.$items.addClass( this.hideClass );
		},

		showMatchedItems: function() {
			$( '.'+this.matchClass ).removeClass( this.hideClass );
		},

		compareInputValue: function( term, array ) {
			var matchCount = 0;

			for ( var i = 0; i < array.length; i++ ) {
				matchCount = helper.charMatcher( term, array[i].textContent.toLowerCase() );
				matchCount >= 1 ? $( array[i] ).addClass( this.matchClass ) : $( array[i] ).removeClass( this.matchClass );
			}
		},

		applyFilter: function( e ) {
			if ( e.target.value !== "" ) {
				this.compareInputValue( e.target.value.toLowerCase(), this.$items );
				this.hideItems();
				this.showMatchedItems();
			} 
			else {
				this.$items.removeClass( this.hideClass );
				$( '.'+this.matchClass ).removeClass( this.matchClass );
			}
		}

	};

	App.init();

})();

$(document).ready( function() {
	// filter();
	// console.log( filter );
} );