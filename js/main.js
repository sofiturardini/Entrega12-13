
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        duration: 100,
        dist:-80,
        shift:5,
        padding: 5,
        numVisible:4,
        indicators:true,
        noWrap: false
    });
  });
