---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<script>
var data = {{ site.data.audiofiles | jsonify }};
var baseurl = "{{ site.baseurl }}";
</script>

{% assign categories = "" | split: "|" %}
{% for file in site.data.audiofiles %}

  {% assign my_cats = file.Categories | split: "," %}

  {% for cat in my_cats %}
    {% assign c = cat | trim %}
    {% assign categories = categories | push: c %}
  {% endfor %}

{% endfor %}

{% assign categories = categories | uniq | sort %}


<div id="gallery-nav">

<ul id="cat_menu">
{% for category in categories %}<li><a href='#' data-cat="{{category}}" class='btn btn-secondary category'>{{category}}</a></li>{% endfor %}
<li><a href='#' data-cat="all" class='btn btn-secondary category active'>All</a></li>
</ul>

</div>
<div id="gallery" style="flex-wrap:wrap;"></div>


{% for file in site.data.audiofiles %}
<div class="modal fade" id="exampleModal{{file.ID}}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
      <div class="modal-footer"></div>
    </div>
  </div>
</div>
{% endfor %}

<audio src="#" id="audioplayer"></audio>
<script src="{{ "/assets/js/kiosk.js" | relative_url }}"></script>



