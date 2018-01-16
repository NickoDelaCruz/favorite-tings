$(document).ready(function(){
  $("#favForm").submit(function(event) {
    $("#favList").empty();
    var favMovie = $("input#favMovie").val();
    var favVape = $("input#favVape").val();
    var favTeam = $("input#favTeam").val();

    var favArray = [favMovie, favVape, favTeam];

    $("#favList").append("<li>"+favArray[0]+"</li>");
    if(favVape === "Pax Era"){
      $("#favList").append("<li><img url='https://imgur.com/a/syDM6'></li>");
    }else{
      $("#favList").append("<li>"+favArray[1]+"</li>");
    }

    $("#favList").append("<li>"+favArray.pop[2]+"</li>");

    event.preventDefault();
 });

});
