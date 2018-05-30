//smooth scroll implementation
$(document).ready(function(){

    $("#video-SB1").hide();
    $("#video-SB2").hide();
    $("#video-SB3").hide();
    $("#video-SB4").hide();
    $("#video-SB5").hide();
    $("#video-SB6").hide();


    //enter button smooth scroll
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


    //top nav bar smooth scroll
    $("#top-nav-bar .nav-link").click(function(e){

        //don't jump
        e.preventDefault();

        //enter button is this
        var scrollTo = $(this).attr('href');
      //  console.log($(scrollTo).offset().top);

       $("html, body").animate({
            scrollTop: $(scrollTo).offset().top - $("#top-nav-bar").height() - 3
                   },1000);
    });

    var prevSelected = "SB0";
    //button click for videos
    $("#SB-Bottom .btn-group button").click(function(e){

        e.preventDefault();

        //get id of clicked button
        var clicked = $(this).attr('id');

        //format access strings
        var strHIDE = "#video-" + prevSelected;
        var strSHOW = "#video-" + clicked;

        //hide and show:
        $(strHIDE).hide();
        $(strSHOW).show();

        //format for next 
        prevSelected = clicked;

    });


});

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
            updateStats("<li>It is estimated that over half of all bulky waste could be reused.</li>\n <li>Furniture and furnishings compose approximately 42% of bulky waste. </li>\n <li>There are 9.8 million tons of furniture waste added to landfills per year. </li> "); 
            updateImpact("<li>As you can see, the vast majority of furniture is disposed of in a landfill, while some of it is burned.</li> \n <li>Much of this furniture is still usable. </li>\n<li> Billions of dollars in usable furniture and materials are forfeited each year to the landfill. </li>\n <li>By selling gently used furniture to friends or neighbors, we can reduce the environmental impact.</li>"); 
            break;
        }
        case "Cookware": {
            updateCharts("images/pans.jpg", "images/steel.jpg", "images/metalStats.png", "images/placeholder_chart.png"); 
            updateStats("<li>The rate of recycling for metals has increased drastically. </li>\n <li>A large percentage of metal products are made of recycled metals, including 40% of steel products.</li>\n <li> Throwing away an aluminum wastes the equivalent of that can filled with gasoline.</li>"); 
            updateImpact("<li>Cookware is normally composed of metals such as iron, steel and aluminum that are easily repurposed (bottom left).</li>\n <li>Our rate of recycling metals is increasing (top right), and recycling cookware responsibly can further this progress.</li>"); 
            break;
        }
        case "Lights": {
            updateCharts("images/lights.png", "images/lightGraph.jpg", "images/bulbRecycling.jpg", "images/placeholder_chart.png"); 
            updateStats("<li>It is estimated that 670 million lightbulbs are put into the environment annually.</li>\n <li> At this rate, up to 4 tons of mercury could be unsafely released into the environment. </li>" ); 
            updateImpact("<li>Lightbulbs that are not disposed of properly can release Mercury into the environment.</li> \n <li> Mercury can have many harmful effects, such as contaminating water supplies and poisoning fish that we eat. </li> \n<li> 'Old' incandescent lightbulbs cannot be recycled and must be disposed of in the trash. </li>"); 
            break;
        }
        case "Boxes": {
            updateCharts("images/boxes.jpg", "images/box2.png", "images/box3.png", "images/box1.jpg"); 
            updateStats("<li>We are fairly good at recycling cardboard boxes, with 89.5% of corrugated cardboard recycled each year.</li><li> Recycling cardboard takes only 75% of the energy that it takes to create new cardboard.</li>"); 
            updateImpact("<li>Each ton of cardboard recycled saves 17 trees.</li>\n <li> Each ton of cardboard recycled also prevents up to a ton of CO2 from entering the atmosphere and saves up to 7000 gallons of water.</li>"); 
            break; 
        }
        case "School-Supplies": {
            updateCharts("images/papers.jpg", "images/paper1.gif", "images/papergraph.jpg", "images/finalpaper.jpg"); 
            updateStats("<li>Paper accounts for 26% of the total Municipal Solid Waste (MSW).</li>\n <li>The rate of paper recovery has risen to 66% in the past few years.</li> \n <li> In the United States, paper is used at a rate of 660 pounds per year per capita.</li> "); 
            updateImpact("<li> The abundant use of paper products has caused the area of  natural pine forests in the Southeastern U.S.A. to decline by have in the last 50 years. </li> \n <li> Pulp and paper accounted for 20% of toxic waste released into the air last year.</li>"); 
            break; 
        }
        case "Cleaning": {
            updateCharts("images/cleaning.jpg", "images/cleaning1.jpg", "images/cleaner-chart.jpg", "images/cleaning4.jpg"); 
            updateStats("<li>Cleaning products, along with other household products like paints and glues, annually release as many Volatile Organic Compounds (VOCs) into the air as vehicles. </li> \n <li>APproximately 5% of raw oil is turned into consumer products, such as cleaning products. </li>"); 
            updateImpact("<li>An abundance of VOC's in the atmosphere can cause breathing problems for some people. </li> \n <li> Additional research is being performed on the effect of VOC's on both humans and the ecosystem.</li>"); 
            break; 
        }
    }
}

// Changes the four charts in the "Environmental Impact" section. Automatically formats from strings containing relative paths to chart image file 
function updateCharts(c1, c2, c3, c4) {
    document.getElementById("chart1").innerHTML = '<img src=' + c1 + ' alt="Relevant chart" style="display: block; margin-left:auto; margin-right:auto;">'; 
    document.getElementById("chart2").innerHTML = '<img src=' + c2 + ' alt="Relevant chart" style="display: block; margin-left:auto; margin-right:auto;">'; 
    document.getElementById("chart3").innerHTML = '<img src=' + c3 + ' alt="Relevant chart" style="display: block; margin-left:auto; margin-right:auto;">'; 
    document.getElementById("chart4").innerHTML = '<img src=' + c4 + ' alt="Relevant chart" style="display: block; margin-left:auto; margin-right:auto;">'; 
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

function showMovingHelp(categ){
	switch(categ) {
        case "Tools": {
        	updateMovingHelp('Tools');
        	break;
    	}
    	case "Boxes": {
        	updateMovingHelp('Boxes');
        	break;
    	}
    	case "Furniture": {
        	updateMovingHelp('Furniture');
        	break;
    	}
    	case "Services": {
        	updateMovingHelp('Services');
        	break;
    	}
    	case "People": {
        	updateMovingHelp('People');
        	break;
    	}
    	case "Time": {
        	updateMovingHelp('Time');
        	break;
    	}
    	case "More": {
        	updateMovingHelp('More');
        	break;
    	}
	}
}

function updateMovingHelp(text){
	document.getElementById("movingHelp").innerHTML = text;
	}
function updateMovingHelpHeader(text){
	document.getElementById("movingTitle").innerHTML = text;
	}