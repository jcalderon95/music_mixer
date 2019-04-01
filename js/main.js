(() => {
	console.log('fired!');

	const   dragArea 	=	document.querySelector('.dragArea');
	const	dropZones    =   document.querySelectorAll('.dropZone');

	function initDrag () {
		 dragArea.querySelectorAll('img').forEach(img => {
		 	img.addEventListener('dragstart', function(e) {
		 		console.log('dragging');
		 		e.dataTransfer.setData("text/plain", this.id);
		 	});
		 });


		dropZones.forEach(zone => {
			zone.addEventListener('dragover', function(e){ 
				e.preventDefault();
				console.log('dragger over me');
				// debugger;

			});
	

			zone.addEventListener("drop", function(e){
				e.preventDefault();
				console.log('dropped on me');

				let data = e.dataTransfer.getData("text/plain");
				// console.log(data);

				let secondClass = this.className.split(" ")[1];
				// console.log(secondClass);

				let audio = document.createElement('audio');

				audio.src = `audio/${secondClass}.wav`;
				console.log(audio);
				

				if (secondClass == data) {
					e.target.appendChild(document.querySelector(`#${data}`));
					document.body.appendChild(audio);
					audio.play();
					audio.loop = true;
					
				}
				else
				{
					return;
				}
			});


		});
	} 		

	initDrag();

})();