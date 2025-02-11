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
        <img src="{{ "/assets/images/" | relative_url }}{{ file.Image }}" style="height:500px;"/>
        <div class='modal-body-info'>
        <p>{{file.Description}}</p>
        <div style="padding:56.25% 0 0 0;position:relative;">
<iframe src="https://player.vimeo.com/video/{{file.VimeoID}}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Interview with Shirley Sherrod by Jahasia Jacobs, June 23rd, 2023"></iframe></div>
<script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </div>
  </div>
</div>

{% endfor %}





