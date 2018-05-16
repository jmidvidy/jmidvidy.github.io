function search(){
 	var ans = document.getElementById("search").value;
 	document.getElementById("Place").innerHTML = ans;
 	if (ans ==  "couch") {
 		document.getElementById("Place").innerHTML = "<img src=\"couch.jpg\" alt=\"Couch\"><br> <br> For a couch, we suggest the following: <li> Check your local Large item disposal servies </li> <li> Try selling to a friend</li> <li> Try putting it on Craigslist </li>";

 	}
 	if (ans ==  "refrigerator" || ans ==  "fridge") {
 		document.getElementById("Place").innerHTML = "<img src=\"fridge.jpg\" alt=\"Fridge\"><br> <br> For a fridge, we suggest the following: <li> Take it with you if possible </li> <li> Try selling to a friend</li> <li> Sell to a used appliance store </li>";

 	}
 	if (ans ==  "notebook" || ans ==  "notebooks") {
 		document.getElementById("Place").innerHTML = "<img src=\"papers.jpg\" alt=\"Paper\"><br> <br> For Notebooks, we suggest the following: <li> If over half the notebook is unused, save it <br> for another class. </li> <li> If the course material is important to you, <br> keep it! </li> <li> Recycle Recycle Recycle! </li>";

 	}
 }


 function showInfo(item){
 	document.getElementById('RIRight-text').innerHTML = item
 }


