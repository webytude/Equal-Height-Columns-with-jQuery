// =========================
// Call Equal height function
// =========================
jQuery(window).load(function() {
	equalheight('.row .column');
});
jQuery(window).resize(function(){
	equalheight('.row .column');
});

// =========================
// Equal height of Box base design.
// =========================
equalheight = function (container) {
	var currentTallest = 0,
	currentRowStart = 0,
	rowDivs = new Array(),
	jQueryel,
	topPosition = 0;
	jQuery(container).each(function () {
		jQueryel = jQuery(this);
		jQuery(jQueryel).height('auto')
		topPostion = jQueryel.position().top;

		if (currentRowStart != topPostion) {
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = jQueryel.height();
			rowDivs.push(jQueryel);
		}
		else {
			rowDivs.push(jQueryel);
			currentTallest = (currentTallest < jQueryel.height()) ? (jQueryel.height()) : (currentTallest);
		}
		for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}