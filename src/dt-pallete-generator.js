
var DARK_CONSTANT = "dark";
var LIGHT_CONSTANT = "light";

var bases = [ {
	name : "50",
	lightTheme : {
		colorConstant : 25,
		isLigher : true
	},
	darkTheme : {
		colorConstant : 30,
		isLigher : false
	},
}, {
	name : "100",
	lightTheme : {
		colorConstant : 20,
		isLigher : true
	},
	darkTheme : {
		colorConstant : 25,
		isLigher : false
	},

}, {
	name : "200",
	lightTheme : {
		colorConstant : 15,
		isLigher : true
	},
	darkTheme : {
		colorConstant : 20,
		isLigher : false
	},
}, {
	name : "300",
	lightTheme : {
		colorConstant : 10,
		isLigher : true
	},
	darkTheme : {
		colorConstant : 15,
		isLigher : false
	},
}, {
	name : "400",
	lightTheme : {
		colorConstant : 5,
		isLigher : true
	},
	darkTheme : {
		colorConstant : 10,
		isLigher : false
	},
}, {
	name : "500",
	lightTheme : {
		colorConstant : 0,
		isLigher : true
	},
	darkTheme : {
		colorConstant : 5,
		isLigher : false
	},
}, {
	name : "600",
	lightTheme : {
		colorConstant : 5,
		isLigher : false
	},
	darkTheme : {
		colorConstant : 5,
		isLigher : true
	},
}, {
	name : "700",
	lightTheme : {
		colorConstant : 10,
		isLigher : false
	},
	darkTheme : {
		colorConstant : 10,
		isLigher : true
	}
}, {
	name : "800",
	lightTheme : {
		colorConstant : 15,
		isLigher : false
	},
	darkTheme : {
		colorConstant : 15,
		isLigher : true
	}
}, {
	name : "900",
	lightTheme : {
		colorConstant : 20,
		isLigher : false
	},
	darkTheme : {
		colorConstant : 20,
		isLigher : true
	}
}, {
	name : "A100",
	lightTheme : {
		colorConstant : 30,
		isLigher : true
	},
	darkTheme : {
		colorConstant : 05,
		isLigher : true
	}
}, {
	name : "A200",
	lightTheme : {
		colorConstant : 35,
		isLigher : true
	},
	darkTheme : {
		colorConstant : 0,
		isLigher : true
	}
}, {
	name : "A400",
	lightTheme : {
		colorConstant : 40,
		isLigher : true
	},
	darkTheme : {
		colorConstant : 05,
		isLigher : false
	}
}, {
	name : "A700",
	lightTheme : {
		colorConstant : 25,
		isLigher : false
	},
	darkTheme : {
		colorConstant : 25,
		isLigher : true
	}
} ]
function lightThemeGenerator(baseCode, contrast) {
	var colors = {};
	for ( var i = 0; i < bases.length; i++) {
		if (bases[i].lightTheme.isLigher == true) {
			colors[bases[i].name] = tinycolor(baseCode).lighten(
					bases[i].lightTheme.colorConstant).toHex();
		} else {
			colors[bases[i].name] = tinycolor(baseCode).darken(
					bases[i].lightTheme.colorConstant).toHex();
		}
	}
	colors["contrastDefaultColor"] = contrast;
	return colors;
}
function darkThemeGenerator(baseCode) {
	var colors = {};
	for ( var i = 0; i < bases.length; i++) {
		if (bases[i].darkTheme.isLigher == true) {
			colors[bases[i].name] = tinycolor(baseCode).lighten(
					bases[i].darkTheme.colorConstant).toHex();
		} else {
			colors[bases[i].name] = tinycolor(baseCode).darken(
					bases[i].darkTheme.colorConstant).toHex();
		}
	}
	colors["contrastDefaultColor"] = DARK_CONSTATANT;

	return colors;
}

function createPrimaryPalleteJSON(hexCode) {
	var pallete = "";
	if (isLighterHexCode(hexCode)) {
		pallete = lightThemeGenerator(hexCode, DARK_CONSTANT);
	} else {
		pallete = lightThemeGenerator(hexCode, LIGHT_CONSTANT);
	}
	return pallete;
}
function isLighterHexCode(hexCode) {
	var color = tinycolor(hexCode);
	return color.isLight();
}
