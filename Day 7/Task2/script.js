
//create a new object
var xhr=new XMLHttpRequest();
var method='GET';
var url="https://restcountries.com/v3.1/all";
xhr.open(method, url);

//onload
xhr.onload = function(){
if(xhr.status === 200)
    
       var response=JSON.parse(this.responseText);
       console.log(response.length);
       var filterasia=response.filter(function(asia){
        return asia.population<200000;
       }) ;
       console.log("Population of less than 2 lakhs: ", filterasia.length)

      //console.log(filterasia);
      for(var i=0; i<filterasia.length; i++){
        console.log("country Name: ", filterasia[i].name.common);
        console.log("Population Count: ", filterasia[i].population);
        console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.")
      }
 
    }



       

xhr.send();
