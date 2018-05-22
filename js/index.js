//smooth scroll implementation
$(document).ready(function(){

    $("#enter-button").click(function(e){

        //don't jump
        e.preventDefault();

        //enter button is this
        var scrollTo = $(this).attr('href');
      //  console.log($(scrollTo).offset().top);

       $("html, body").animate({
            scrollTop: $(scrollTo).offset().top
        },1000);
    });


    $(".nav-link").click(function(e){

        //don't jump
        e.preventDefault();

        //enter button is this
        var scrollTo = $(this).attr('href');
      //  console.log($(scrollTo).offset().top);

       $("html, body").animate({
            scrollTop: $(scrollTo).offset().top - 156
        },1000);
    });


});

//intro animation
$(document).ready(function(){
    function onScrollInit( items, trigger ) {
        items.each( function() {
        var osElement = $(this),
            osAnimationClass = osElement.attr('data-os-animation'),
            osAnimationDelay = osElement.attr('data-os-animation-delay');
          
            osElement.css({
                '-webkit-animation-delay':  osAnimationDelay,
                '-moz-animation-delay':     osAnimationDelay,
                'animation-delay':          osAnimationDelay
            });

            var osTrigger = ( trigger ) ? trigger : osElement;
            
            osTrigger.waypoint(function() {
                osElement.addClass('animated').addClass(osAnimationClass);
                },{
                    triggerOnce: true,
                    offset: '80%'
            });
        });
    }

    onScrollInit( $('.os-animation') );
    onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});//]]>  












// Changes information displayed in "Eco-Friendly Solutions" section based on which category the user hovers over. 
function showInfo(item){

    document.getElementById('RIRight-card-header').innerHTML = item;

    var card_text = item + " info";

 //  document.getElementById('RIRight-card-text').innerHTML = card_text;

    if (item ==  'Furniture') {
        document.getElementById('RIRight-card-text').innerHTML = "<img src=\"images/couch.jpg\" alt=\"Couch\"><br> <br> For large furniture, we suggest the following: <li> Check your local Large item disposal servies </li> <li> Try selling to a friend</li> <li> Try putting it on Craigslist </li>";

    }
    if (item ==  'School Supplies') {
        document.getElementById('RIRight-card-text').innerHTML = "<img src= \"images/papers.jpg\" style=\"height:220px;alt=\"Paper\"><br> <br> For Notebooks, we suggest the following: <li> If over half the notebook is unused, save it <br> for another class. </li> <li> If the course material is important to you, <br> keep it! </li> <li> Recycle Recycle Recycle! </li>";

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

// Changes graphs, statistics, and information displayed in "Environmental Impact" section based on which category the user selects 
function showEnvironmentalInfo(item) {
    // TODO: find charts and insert them into the "updateCharts()" lines
    //      Also make the first option the default one displayed on the page 
    // TODO: also update the stats and impact lines with actual information. 
    switch(item) {
        case "Furniture": {
            updateCharts("images/couch.jpg", "images/chairs3.jpg", "images/furniture2.jpg", "images/chairtrashpic.jpg"); 
            updateStats("There are 9.8 million tons of furniture waste added to landfills per year."); 
            updateImpact("As you can see, the vast majority of furniture is disposed of in a landfill,\n while some of it is burned.\n \n Much of this furniture is still usable. \n\n Billions of dollars in usable furniture and materials are forfeited each year to the landfill. \n\nBy selling gently used furniture to friends or neighbors, we can reduce the environmental impact."); 
            break;
        }
        case "Cookware": {
            updateCharts("images/pans.jpg", "images/steel.jpg", "images/metalStats.png", "images/placeholder_chart.png"); 
            updateStats("The rate of recycling for metals has increased drastically. \n\n A large percentage of metal products are made of recycled metals."); 
            updateImpact("Cookware is normally composed of metals such as iron, steel and aluminum that are easily repurposed (bottom left).\n\n Our rate of recycling metals is increasing(top right), and recycling cookware responsibly can further this progress."); 
            break;
        }
        case "Lights": {
            updateCharts("images/lights.png", "images/lightGraph.jpg", "images/bulbRecycling.jpg", "images/placeholder_chart.png"); 
            updateStats("Here are some fascinating statistics, that will deeply change the way you see recycling " + item); 
            updateImpact("The frankly alarming impact of " + item + " on the environment will surely surprise you"); 
            break;
        }
        case "Boxes": {
            updateCharts("images/boxes.jpg", "images/box2.png", "images/box3.png", "images/box1.jpg"); 
            updateStats("We are fairly good at recycling cardboard boxes, with 89.5% of corrugated cardboard recycled each year."); 
            updateImpact("The frankly alarming impact of " + item + " on the environment will surely surprise you"); 
            break; 
        }
        case "School-Supplies": {
            updateCharts("images/papers.jpg", "images/paper1.gif", "images/papergraph.jpg", "images/finalpaper.jpg"); 
            updateStats("Paper accounts for 26% of the total Municipal Solid Waste (MSW).\n The rate of paper recovery has risen to 66% in the past few years."); 
            updateImpact("The frankly alarming impact of " + item + " on the environment will surely surprise you"); 
            break; 
        }
        case "Cleaning": {
            updateCharts("images/cleaning.jpg", "images/cleaning1.jpg", "images/cleaner-chart.jpg", "images/cleaning4.jpg"); 
            updateStats("Here are some fascinating statistics, that will deeply change the way you see recycling " + item); 
            updateImpact("The frankly alarming impact of " + item + " on the environment will surely surprise you"); 
            break; 
        }
    }
}

// Changes the four charts in the "Environmental Impact" section. Automatically formats from strings containing relative paths to chart image file 
function updateCharts(c1, c2, c3, c4) {
    document.getElementById("chart1").innerHTML = '<img src=' + c1 + ' alt="Relevant chart">'; 
    document.getElementById("chart2").innerHTML = '<img src=' + c2 + ' alt="Relevant chart">'; 
    document.getElementById("chart3").innerHTML = '<img src=' + c3 + ' alt="Relevant chart">'; 
    document.getElementById("chart4").innerHTML = '<img src=' + c4 + ' alt="Relevant chart">'; 
}

// changes the statistics displayed in the "Relevant Stats" subsection of the "Environmental Impact" section. Takes raw text and inserts it 
// into the paragraph element. Newlines work as expected
function updateStats(stat_text) {
    document.getElementById("statistic-text").innerHTML = stat_text.replace(/\n/g, "<br>"); 
}

// Changes the information contained in the "Relevant Impact" subsection of the "Environmental Impact" section. Takes raw text and inserts it
// into the paragraph element. Newlines work as expected 
function updateImpact(impact_text) {
    document.getElementById("impact-paragraph").innerHTML = impact_text.replace(/\n/g, "<br>"); 
}