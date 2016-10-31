var size = 7;
fieldRender(size);
defineLocation();

var view = {

	displayHit: function(location) {
		var currentLocation = document.getElementById(location);
		currentLocation.setAttribute('class', 'cell-hit');
	},

	displayMiss: function(location) {
		var currentLocation = document.getElementById(location);
		currentLocation.setAttribute('class', 'cell-miss');	
	}

}

var model = {
	boardsize: size,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships: [{ locations: ['06', '16', '26'], hits: ['', '', ''] },
			{ locations: ['24', '34', '44'], hits: ['', '', ''] },
			{ locations: ['10', '11', '12'], hits: ['', '', ''] }],

	fire: function(guess) {

		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
		}
	}		

}

var controller = {
	guesses: 0,

	processGuess: function(guess) {

	}
}

function fieldRender(size) {

	var field = document.getElementById('field');

	for (var i = 0; i < size; i++) {

		var row = document.createElement('tr');
		row.setAttribute('class', 'row');
		field.appendChild(row);

		for (var j = 0; j < size; j++) {

			var cell = document.createElement('td');
			cell.setAttribute('class', 'cell');
			cell.setAttribute('id', (i.toString() + j.toString()));
			cell.appendChild(document.createTextNode('[' + i.toString() + ',' + j.toString() + ']'));
			row.appendChild(cell);			
		}
	}
} 

function defineLocation() {
	
	var cells = document.getElementsByClassName('cell');
		
	for (var i = 0; i < cells.length; i++) {
		
		var cell = cells[i];

		cell.onclick = function() {

			var cellIndex = this.cellIndex;
			var rowIndex = this.parentNode.rowIndex;

			var currentLocation = this.getAttribute('id');
			return currentLocation;
		}

	}	

}

function changeSize() {
	size = prompt();
	var field = document.getElementById('field');
	if(size != '') {
		field.innerHTML = '';  
		fieldRender(size);
	}
}	
	
var btn = document.getElementById('btn');
btn.onclick = function() {
	changeSize();
}


