$(function(){
    var bgimage = new Image();
    bgimage.src="../img/careers.jpg";       
    $(bgimage).load(function(){
  		$('.careers-hero').addClass('visible');
    });
});
