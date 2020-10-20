$(document).ready(function () {
  $('.progress_line_done').each(function () { 
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per+"%");
    $this.css("opacity", "1");
  });
});