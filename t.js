(function($) {
  $(document).ready(function() {
    $('#myselect option').each(function() {
      $(this).html('<img src="https://seneweb.senegence.com/media/3029/sheer-berry.jpg">' + $(this).html());
    })
  });
})(jQuery);
