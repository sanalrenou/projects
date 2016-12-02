
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
	var streets = $('#street').val();
	var citys = $('#city').val();
	var address = streets + ', ' + citys;
	$greeting.text('so you wanna live at' + address + '?');
	var streetUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address + '';
	$body.append('<img class="bgimg" src="' +streetUrl+ '">');

    // load streetview
	 // load nytimes
	
    // YOUR CODE GOES HERE!
	var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + citys + '&sort=newest&api-
	key=e461521a4c7b47589a33e2031d8157da';
    $.getJSON(url,function(data){
	$nytHeaderElem.text('the article is about' + citys );
	articles =  data.response.docs;
	for(var i = 0;i< articles.length ;i++){
		var article = articles[i];
		$nytElem.append('<li class="article"'>+'<a href = "'+article.web_url+'">'+article.headline.main+'</a>')+
		'<p>'+article.snippet+'</p>'+'</li>');
	};
	})


    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
