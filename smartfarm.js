
var list = [
	plant1 = {
	name: "potato",
	water: "16.38mL",
	watertime: "Week",
	light: "500-700 µmol m-2 s-1",
	lighttime: "6",
	soil: "5.5",
	grown: "95 days",
	patch: "25",
	img: "https://i5.walmartimages.ca/images/Enlarge/094/507/6000200094507.jpg"
},
plant2 = {
	name: "tomato",
	water: "24.58mL",
	watertime:"Week",
	light: "400-500 µmol m-2 s-1",
	lighttime:"8",
	soil: "6.3",
	grown: "45",
	patch: "6",
	img: "https://media.istockphoto.com/photos/tomato-picture-id174930196?k=6&m=174930196&s=612x612&w=0&h=zvzEyZHpFppgRHkdLuB6AbxQuAFsgA-3NEVbkUSVwVo="
},
plant3 = {
	name: "onion",
	water: "442450.728mL",
	watertime:"Month",
	light: "600-800 µmol m-2 s-1",
	lighttime:"15",
	soil: "6.25",
	grown: "25",
	patch: "77",
	img: "https://media.istockphoto.com/photos/red-onion-slice-picture-id175448479?k=6&m=175448479&s=612x612&w=0&h=USNri9uLcKbsi25EEqiW71439WX0y5weMtDha27BhNs="
},
plant4 = {
	name: "apple",
	water: "15.625mL",
	watertime:"Week",
	light: "400-600 µmol m-2 s-1",
	lighttime:"7", 
	soil: "6.5",
	grown: "2920",
	patch: "4",
	img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?cs=srgb&dl=healthy-apple-fruits-natural-102104.jpg&fm=jpg"
},
plant5 = {
	name: "corn",
	water: "16.3871mL",
	watertime:"Week",
	light: "600-800 µmol m-2 s-1",
	lighttime:"10",
	soil: "6.3",
	grown: "70",
	patch: "105",
	img: "https://secureservercdn.net/160.153.137.218/4b3.e44.myftpupload.com/wp-content/uploads/2009/03/Corn-seedlings-1-300x179.jpg"
},
plant6 = {
	name: "berries",
	water: "55.3063mL",
	watertime:"Day",
	light: "500-600 µmol m-2 s-1",
	lighttime:"3",
	soil: "6.25",
	grown: "61",
	patch: "2",
	img: "https://img-aws.ehowcdn.com/350x235p/photos.demandstudios.com/getty/article/74/195/86513060_XS.jpg"
},
];

var plant = {
	name: "",
	water: "",
	light: "",
	soil: "",
	grown: "",
	patch: ""
}

var lol = []

function clock(){
	var myVar = setInterval(function() {
  	myTimer();
	}, 1000);

	function myTimer() {
  	var d = new Date();
  	document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
}


function timer1(storage){
	var counter = 0;
	if (storage == "Week"){
		counter = 7
	} else if (storage == "Day"){
		counter = 1
	} else if (storage == "Month"){
		counter = 30
	}
	document.getElementById("waterschedule" + (i+1)).innerHTML = "Water Schedule: " + counter + " day(s) left."
		
}

function timer2(storage){
	var counter = 0;
	if (storage == "Week"){
		counter = 7
	} else if (storage == "Day"){
		counter = 1
	} else if (storage == "Month"){
		counter = 30
	}
	document.getElementById("waterschedule" + x).innerHTML = "Water Schedule: " + counter + " day(s) left."
}


function multiple(){
	for(i = 0; i <6; i ++){
		plant.name = prompt("What is the name of the plant " +(i + 1) + "?").toLowerCase();
		for (x = 0; x <6; x++){
			if(plant.name == list[x].name){
				document.getElementById("plant" + (i+1)).innerHTML = "Plant: " + list[x].name
				document.getElementById("patch"+ (i+1)).innerHTML = "#/Patch: " + list[x].patch
				document.getElementById("waterneeded"+ (i+1)).innerHTML = "Water Needed: " + list[x].water
				var storage = list[x].watertime
				timer1(storage)
				document.getElementById("lightneeded"+ (i+1)).innerHTML = "Light Needed: " + list[x].light
				document.getElementById("lightschedule" + (i+1)).innerHTML = "Light Schedule: " + list[x].lighttime + " hour(s) left."
				document.getElementById("soiltype"+ (i+1)).innerHTML = "Soil Type(pH): " + list[x].soil
				document.getElementById("grown"+ (i+1)).innerHTML = "Fully Grown: " + list[x].grown + " day(s) left."
				document.getElementById(i+1).src = list[x].img
			}
		}
	}
}

function one(){
	plant.name = prompt("What is the name of the plant? ").toLowerCase();
	for (i = 0; i <list.length; i ++){
		if (plant.name == list[i].name){
			for (x = 1; x < 7; x ++){
			document.getElementById("plant" + x).innerHTML = "Plant: " + list[i].name
			document.getElementById("patch"+ x).innerHTML = "#/Patch: " + list[i].patch
			document.getElementById("waterneeded"+ x).innerHTML = "Water Needed: " + list[i].water
			var storage = list[i].watertime
			timer2(storage)
			document.getElementById("lightneeded"+ x).innerHTML = "Light Needed: " + list[i].light
			document.getElementById("lightschedule" + x).innerHTML = "Light Schedule: " + list[i].lighttime + " hour(s) left."
			document.getElementById("soiltype"+ x).innerHTML = "Soil Type: " + list[i].soil
			document.getElementById("grown"+ x).innerHTML = "Fully Grown: " + list[i].grown + " day(s) left."
			document.getElementById(x).src = list[i].img
		}
	}
}
}







