// Helper JS
var helper = (function(){

	// Merges two objects.
	function _extend(destination, source) {
	    for (var property in source) {
	        if (source[property] && source[property].constructor && source[property].constructor === Object) {
	            destination[property] = destination[property] || {};
	            _extend(destination[property], source[property]);
	        } 
	        else {
	            destination[property] = source[property];
	        }
	    }
	    return destination;
	};

	// Returns number of consecutively matched characters between two strings.
	function _charMatcher( matcher, matchee ) {
		var array1 = matcher.split( matcher.length > 1 ? '': false ),
			array2 = matchee.split( matchee.length > 1 ? '': false ),
			i = 0,
			leng = matcher.length,
			matchCount = 0;

		function matchCounter() {

			if ( i < leng ) {
				if ( array1[i] === array2[i] ) {
					matchCount = matchCount + 1;
					i = i + 1;
					matchCounter(i);
				}
				else {
					matchCount = 0;
				}

				return matchCount;
			}
		};

		matchCounter();
		return matchCount;
	};

	return {
		extend: _extend,
		charMatcher: _charMatcher
	}

})();
