
 
      var locationAPI = "https://api.wheretheiss.at/v1/satellites/25544";
      
     var interval = setInterval( getData , 1000);
      
      function getData(){
      $.ajax({
        url: locationAPI,
        success: updateLocation
        
      });
      }
       
        function updateLocation(response){

$("#long-value").text(response.longitude);
$("#lat-value").text(response.latitude);
$("#count").text(response.daynum);
          
 $("#velocity").text(response.velocity);
 $("#visibility").text(response.visibility);
 $("#footprint").text(response.footprint);
 $("#altitude").text(response.altitude);
 $("#timestamp").text(response.timestamp);
          
          
    
}
      

