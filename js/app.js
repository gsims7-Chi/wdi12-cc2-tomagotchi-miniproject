// let hunger = 0;
// let energy = 0;
// let age = 0;
// let boredom = 0;
let time = 0
class Tamagochi {
	constructor(name){
		this.name = name;
		this.age = 0;
		this.energy = 0;
		// this.time = 0;
		this.boredom = 0;
		this.hunger = 0;
	}
	// make methods that call each paramater and tracks them
	imHungry() {
	//every interval the variable gets + 1
	 if (time % 2 === 0) {
	 	this.hunger++
	 	console.log(this.hunger)

	 }
	 //makes hunger visable on the dom
	 $('#hunger-score').text('Hunger: ' + this.hunger)
	}
	birthday(){
		//every interval the variable gets + 1
		if (time % 1 === 0) {
	 	this.age++
	 	console.log(this.age)

	 }
	 //makes hunger visable on the dom
	 $('#age').text('years: ' + this.age)
	}

	tired(){
		//every interval the variable gets + 1
		if (time % 2 === 0) {
	 	this.energy++
	 	console.log(this.energy)

	 }
	 //makes hunger visable on the dom
	 $('#energy-score').text('Energy: ' + this.energy)
	}
	bored(){
		//every interval the variable gets + 1
		if (time % 2 === 0) {
	 	this.boredom++
	 	console.log(this.boredom)

	 }
	 //makes hunger visable on the dom
	 $('#boredom-score').text('Boredom: ' + this.boredom)
	}
	evolution1(){
		if (this.age === 15) {
			const $btn = $('<button>')
			//adds to stats so it gets the same css
			const $div = $('<div class="stats">')
			$div.append($btn)
			$('#actions').append($div)
			const $digivolve = $btn.text('Digivolution?')
			$btn.on('click', () => {
				//make a image url variable for easy reading
				const imageURL = "https://vignette.wikia.nocookie.net/digimon/images/7/7f/Angemon_vg.gif/revision/latest?cb=20081231092630"
				$('#sprite').attr('src', imageURL)
				$btn.remove();
			})
		}
	}

	setTimer () {
	 // Start an interval
	 const timer = setInterval(() => {
	   time++
	   console.log(time)
	   patamon.imHungry()
	   patamon.tired()
	   patamon.bored()
	   patamon.birthday()
	   patamon.evolution1()
	   if(this.hunger === 10||this.energy === 10||this.boredom === 10){
	   	 clearInterval(timer)
	   	 console.log('he died')
	   }
	   
	 }, 1000);
	 // setInterval, how do I stop setInterval
	 //we don't unless our Tamagotchi dies
	}
}
const patamon = new Tamagochi('Patamon')
//console.log(patamon)
patamon.setTimer()

$('#eat').on('click', ()=>{
	
	patamon.hunger = 0
})

 $('#sleep').on('click', () => {
 	patamon.energy = 0
 })

$('#play').on('click', () => {
	patamon.boredom = 0
})




































