(() => {

	//const instruments = ["acoustic", "dj", "drums", "guitar", "headphones", "microphone", "piano", "saxophone", "speaker", "trumpet"];
	const instruments = ["acoustic", "drums", "guitar", "piano", "saxophone", "trumpet"];
	const instrumentAudios = ["acoustic", "drums", "guitar", "piano", "saxophone", "trumpet"];

	// This is a string
	let instrumentsBoard = document.querySelector(".instruments-board"),
		instrumentsAudioBoard = document.querySelector(".instruments-audio-board");

	let dropZone = document.querySelector('.drop-zone')
	// function go in the middle
	function createInstrumentPieces(pictureIndex) {
		//generate puzzle piece for the box
		// debugger;
		instruments.forEach((instrument, index) => {
			let newInstrumentPiece = `<img draggable id="instrument${index}" class="instrument-image" src="images/${instrument}.svg" alt="thumbnail">`;
			instrumentsBoard.innerHTML += newInstrumentPiece;
		});
		instrumentAudios.forEach((instrumentAudio, index) => {
			let newInstrumentAudioPiece = `<audio id="instrument${index}Audio" controls><source src="audio/${instrumentAudio}.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>`;
			instrumentsAudioBoard.innerHTML += newInstrumentAudioPiece;
		});		

		initDrag();
	}

	//Drag and drop funtionality goes here
	function initDrag() {
		instrumentsBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				//e.preventDefault();
				console.log('draggin...');

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}

	//handle dragover and drop
	dropZone.addEventListener("dragover", function(e) {
		e.preventDefault();
		console.log("You dragged over me");
	});	
	dropZone.addEventListener("drop", function(e) {
		e.preventDefault();
		console.log("You drop instruments on me");

		let piece = e.dataTransfer.getData("text/plain");
		if (e.target.tagName !== 'IMG') {
			e.target.appendChild(document.querySelector(`#${piece}`));
			playAudio(`${piece}Audio`);
		}		
	})

	function playAudio(audioId) { 
		const x = document.getElementById(audioId); 
		console.log(x);
	  	x.play(); 
	} 


	function resetInstrumentsBoard() {
	instrumentsBoard.innerHTML = "";

	}
	createInstrumentPieces(0);

})();