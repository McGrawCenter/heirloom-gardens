---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

{% assign categories = "" | split: "|" %}
{% for file in site.data.audiofiles %}

  {% assign my_cats = file.Categories | split: "," %}

  {% for cat in my_cats %}
    {% assign c = cat | trim %}
    {% assign categories = categories | push: c %}
  {% endfor %}

{% endfor %}

{% assign categories = categories | uniq %}

{% for category in categories %}

<h2>{{category}}</h2>
<div class='gallery-window'>
<div id="gallery">

{% for file in site.data.audiofiles %}

{% assign cats = file.Categories | split: "," %}

{% if file.Shown == "1" %}

{% if cats contains category %}

  <div class="tile">
    <div class='tile-content'>
      <img src="{{ "/assets/images/" | relative_url }}{{ file.Image }}"/>
      <a href="#modal" data-bs-toggle="modal" data-bs-target="#mymodal{{file.ID}}"><img class='play' src="{{ "/assets/images/play.svg" | relative_url }}"/></a>
    </div>
    <div class='tile-title'>{{ file.Title }}</div>
  </div>


{% endif %} 

{% endif %}

{% endfor %}

</div>
</div>

{% endfor %}



{% for file in site.data.audiofiles %}

<div class="modal" tabindex="-1" id="mymodal{{file.ID}}">
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{file.Title}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div style="width:49%">
	<img src="{{ "/assets/images/" | relative_url }}{{ file.Image }}" style="max-width:100%;"/>
        </div>

        <div class='modal-body-info' style="width:49%">
        <p>{{file.Description}}</p>
        <p><img src="{{ "/assets/images/play-circle.svg" | relative_url }}" data-identifier='{{ file.Identifier }}' class='playbutton ' style="height:64px;"/></p>
            
        </div>
      </div>
      <div class="modal-footer">
        <!--<audio src="{{ "/assets/audio/" | relative_url }}{{ file.Audio }}" controls  style="width:100%;"/>-->
      </div>
    </div>
  </div>
</div>

{% endfor %}

<audio src="#" id="audioplayer"></audio>


<script>

jQuery(document).ready(function(){

	jQuery(".playbutton").click(function(e){
	  var audioplayer = jQuery('#audioplayer')[0]; 
	  var file = jQuery(this).attr('data-identifier') + ".mp3";

	  if(jQuery(this).hasClass("playing")) {
	  
	    console.log('pause');

	    jQuery(this).removeClass("playing");
	    jQuery(this).attr("src",'{{ "/assets/images/play-circle.svg" | relative_url }}');
    
	    
	    audioplayer.pause();
	  }
	  else {

	    console.log('play');
    
	    jQuery(this).addClass("playing");
	    jQuery("#audioplayer").attr("src", "https://commons.princeton.edu/media/heirloom-gardens/" + file);
	    jQuery(this).attr("src",'{{ "/assets/images/pause-circle.svg" | relative_url }}');	
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


});


</script>



