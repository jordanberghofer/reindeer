var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
// var combo = "";

var hohohoElement = document.getElementById("reindeer");
// debugger;

// reindeerGames();

// function reindeerGames(combo) {
//     // debugger;
//     for (var i = 0; i < reindeer.length ; i++) {
//        hohohoElement.innerHTML += `<li>$(colors[i] + " " + reindeer[i] " "</li>`;
//        }
// }

var combo = "";

for (var i = 0; i < reindeer.length; i++) {
    combo += " " + colors[i] + "-" + reindeer[i];
}


console.log("combo", combo);