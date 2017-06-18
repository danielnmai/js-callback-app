// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require app
//= require_tree .




function changeColors(){
  setInterval(function(){
    setTimeout(function(){
      document.getElementById('first').style.color = 'red';
      setTimeout(function(){
         document.getElementById('second').style.color = 'blue';
         setTimeout(function(){
          document.getElementById('third').style.color = 'green';
          setTimeout(function(){
            document.getElementById('fourth').style.color = 'orange';
            setTimeout(function(){
              document.getElementById('first').style.color = 'orange';
              setTimeout(function(){
                 document.getElementById('second').style.color = 'green';
                 setTimeout(function(){
                  document.getElementById('third').style.color = 'blue';
                  setTimeout(function(){
                    document.getElementById('fourth').style.color = 'red';
                  }, 200);
                 }, 200);        
              },200);
            }, 200);
          }, 200);
         }, 200);        
      },200);
    }, 200);
  }, 1000);
} 

function getData() {
  var foodTrucksId = document.getElementById('foodTrucks');
  $.get('https://data.sfgov.org/resource/jjew-r69b.json', function(response) {
  var htmlString = '';
  for(var i = 0; i < response.length; i++) {  
    htmlString += '<h4>' + response[i].applicant + '</h4>';
  }
  foodTrucksId.innerHTML = htmlString;
  });
}








