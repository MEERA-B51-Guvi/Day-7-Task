var xhr=new XMLHttpRequest();
var method='GET';
var url="https://restcountries.com/v3.1/all";
xhr.open(method, url);
xhr.onload=function()
{
   if(xhr.status===200)
   {
       var response=JSON.parse(this.responseText);
       console.log(response.length);
       var countyData=response.filter(function(asia)
           {
               return asia.region==="Asia";
           });
                
                console.log(countyData);
  }             
}
xhr.send();