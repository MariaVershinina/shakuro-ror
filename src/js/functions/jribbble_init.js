function Jribbble_Init() {
  // It's Shakuro's Client Access Token
  $.jribbble.setToken('b0db2ed33cde9de51847a3cab472d59a602b9f8bba2a02af17980eb9ba604ddc');

  $.jribbble.users('Shakuro').shots(/*'debuts',*/ {
    'per_page': 9
    //'timeframe': 'month',
    //'sort': 'views'
  }).then(function(res) {
    var html_high = [];
    res.forEach(function(shot) {
      html_high.push('<li>');
      html_high.push('<a href="' + shot.html_url + '" class="dribble-link-wrapper" target="_blank">');
      html_high.push('<img class="dribble-img" src="' + shot.images.hidpi + '"><div class="dribble-img-border"></div>');
      html_high.push('</a></li> ');
    });
    $('.dribble-block .retina-display').html(html_high.join(''));
    var html_normal = [];
    res.forEach(function(shot) {
      html_normal.push('<li>');
      html_normal.push('<a href="' + shot.html_url + '" class="dribble-link-wrapper" target="_blank">');
      html_normal.push('<img class="dribble-img" src="' + shot.images.normal + '"><div class="dribble-img-border"></div>');
      html_normal.push('</a></li> ');
    });
    $('.dribble-block .default-display').html(html_normal.join(''));
  });
}
