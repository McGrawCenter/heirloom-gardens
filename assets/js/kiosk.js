jQuery(document).ready(function(){

	jQuery(".playbutton").click(function(e){
	  var audioplayer = jQuery('#audioplayer')[0]; 
	  var file = jQuery(this).attr('data-identifier') + ".mp3";

	  if(jQuery(this).hasClass("playing")) {
	  
	    console.log('pause');

	    jQuery(this).removeClass("playing");
	    jQuery(this).attr("src",baseurl+'/assets/images/play-circle.svg');
    
	    
	    audioplayer.pause();
	  }
	  else {

	    console.log('play');
    
	    jQuery(this).addClass("playing");
	    jQuery("#audioplayer").attr("src", "https://commons.princeton.edu/media/heirloom-gardens/" + file);
	    jQuery(this).attr("src",baseurl+'/assets/images/pause-circle.svg');	
	    audioplayer.play();
	  }
	  e.preventDefault();
	  
	});
	
	
	jQuery(".btn-close").click(function(){
	  var audioplayer = jQuery('#audioplayer')[0];
	  audioplayer.load();
	});
	
	
	jQuery(".modal").on("hidden.bs.modal", function () {
	  var audioplayer = jQuery('#audioplayer')[0];
	  audioplayer.load();
	});
	
	
	function tileTemplate(v) {
	  return "<div class='tile'>\
	    <div class='tile-content'>\
	      <img src='"+baseurl+"/assets/images/"+v.Image+"'/>\
	      <a href='#modal' data-bs-toggle='modal' data-bs-target='#exampleModal"+v.ID+"'><img class='play' src='"+baseurl+"/assets/images/play3.svg'/></a>\
	    </div>\
	    <div class='tile-title'>"+v.Title+"</div>\
	  </div>";	
	}
		
	
	function buildGallery(cat) {

	  jQuery("#gallery").empty();
	  if(cat == 'all') {

	  jQuery.each(data, function(i,v){
	       jQuery("#gallery").append(tileTemplate(v));
	  });

	  }
	  else {

	  jQuery.each(data, function(i,v){
	    var cats = v.Categories.split(',');
	    cats = cats.map(s => s.trim()).sort();
	    if(cats.indexOf(cat) >= 0) { 
	       jQuery("#gallery").append(tileTemplate(v));
	    }
	  });

	  }
	}


	jQuery(".category").click(function(e){
	  jQuery(".category").removeClass('active');
	  jQuery(this).addClass('active');
	  var cat = jQuery(this).attr('data-cat');
	  buildGallery(cat);
	  e.preventDefault();
	});

        buildGallery('all');
	
});

