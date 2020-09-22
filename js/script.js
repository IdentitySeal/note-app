var note = document.getElementById('note_list');
noteData = JSON.parse(localStorage.getItem('noteData')) || [];
console.log (noteData);
console.table(noteData)

function displayAll() {
	var data = '';
	if (noteData.length > 0) {
		for (i = 0; i < noteData.length; i++) {
			data += `<ul><li> ${noteData[i]}<span colspan="2"><center><button class="btn btn-warning" onclick="Edit(${i})"><span class="glyphicon glyphicon-edit"></span> Edit</button> | <button class="btn btn-danger" onclick="Delete(${i})"><span class="glyphicon glyphicon-trash"></span> Delete</button></center></span></li></ul>`;
		}
	}
	note.innerHTML = data;	
};
displayAll();


function Create() {
    var note = document.getElementById('name')
	var name = note.value;

	if (name) {
		noteData.push(name.trim());
		localStorage.setItem('noteData', JSON.stringify(noteData))
		note.value = '';
		displayAll();
	}
	displayAll();
};

function Delete(item) {
	// let names = JSON.parse(localStorage.getItem("names"));

	noteData.splice(item, 1);
	// localStorage.removeItem(names.splice(item, 1),JSON.stringify(names))
	localStorage.setItem("noteData", JSON.stringify(noteData)); //reset the values in the local storage

	displayAll();
	
};

function Edit(item) {
	var note = document.getElementById('edit_name');
	note.value = noteData[item];
	document.getElementById('edit').style.display = 'inline';
	document.getElementById('create').style.display = 'none';
	self = this;
	
	document.getElementById('update').onsubmit = function() {
	var name = note.value;
		if (name) {
			self.noteData.splice(item, 1, name.trim());
			localStorage.setItem('noteData', JSON.stringify(noteData))
			self.displayAll();
			editHider();
			document.getElementById('create').style.display = 'inline';
		}
	}
};
editHider();



function editHider() {
	document.getElementById('edit').style.display = 'none';
	document.getElementById('create').style.display = 'inline';
}
	
	