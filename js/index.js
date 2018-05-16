  function showInfo(item){

 	document.getElementById('RIRight-card-header').innerHTML = item;

 	var card_text = item + " info";

 //	 document.getElementById('RIRight-card-text').innerHTML = card_text;

if (item ==  'Furniture') {
 	document.getElementById('RIRight-card-text').innerHTML = "<img src=\"images/couch.jpg\" alt=\"Couch\"><br> <br> For large furniture, we suggest the following: <li> Check your local Large item disposal servies </li> <li> Try selling to a friend</li> <li> Try putting it on Craigslist </li>";

 }
 if (item ==  'School Supplies') {
 	document.getElementById('RIRight-card-text').innerHTML = "<img src=\"images/papers.jpg\" style=\"height:220px;alt=\"Paper\"><br> <br> For Notebooks, we suggest the following: <li> If over half the notebook is unused, save it <br> for another class. </li> <li> If the course material is important to you, <br> keep it! </li> <li> Recycle Recycle Recycle! </li>";

 }
if (item ==  'Lights') {
 	document.getElementById('RIRight-card-text').innerHTML = "<img src=\"images/lights.png\" style=\"height:120px;\"alt=\"Lights\"><br> <br> For Lights, we suggest the following: <li> If the lightbulbs have not died, wrap in toilet paper and keep safe in a <br> padded box.</li> <li> If your lightbulbs are LED and contain mercury, they <br> must be treated specially at a recycling plant. </li> <li> Many home supply stores, such as Home Depot, have lightbulb  <br> recycling programs.  Check them out! </li> <li> If all else fails, throw in the trash. </li>";

 }
 if (item ==  'Cookware') {
 	document.getElementById('RIRight-card-text').innerHTML = "<img src=\"images/pans.jpg\" style=\"height:220px;alt=\"Pans\"><br> <br> For Cookware, we suggest the following: <li> If it's not broken or worn out, keep it! </li> <li> If you can't keep it but it's functional, consider <br> donating to a second hand shop. </li> <li> Contact local scrap metal facility </li>";

 }
  if (item ==  'Boxes') {
 	document.getElementById('RIRight-card-text').innerHTML = "<img src=\"images/boxes.jpg\" style=\"height:220px;alt=\"Boxes\"><br> <br> For Boxes, we suggest the following: <li> Stock up on boxes!  They become very useful when it comes <br> time to move. </li> <li> Use old boxes as an easy storage and transport technique. </li> <li> If they can't be used, see if your neighbors need them! <br>They probably do! </li>";

 }
   if (item ==  'Cleaning') {
 	document.getElementById('RIRight-card-text').innerHTML = "<img src=\"images/cleaning.jpg\" style=\"height:220px;alt=\"Boxes\"><br> <br> To prepare your apartment for move out, we suggest: <li> Use environmentally friendly cleaning products. They are effective <br> and environmentally responsible. </li> <li> Use old t-shirts as rags for cleaning mirrors and sinks. </li> <li> Use vinegar and water as a green cleaning solution for your floors. </li>";
}
   if (item ==  'Appliances') {
 	document.getElementById('RIRight-card-text').innerHTML = "<img src=\"images/fridge.JPG\" style=\"height:220px;alt=\"Boxes\"><br> <br> For Appliances, we suggest the following: <li> If you want to keep it but can't take it home, consider renting a storage facility. </li><li> If it works but you aren't keeping it, consider selling <br> or donating to a charitable cause. </li> <li> If broken, check your local guidelines for resources for recycling. </li> ";
}
 }