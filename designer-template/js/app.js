$(document).ready(function(){
    $('.menu-button').click(function(){
        $('#top-menu').toggleClass('active');
    })

    $('#submit').click(function(event){
        event.preventDefault();
      });
});