var xhr=new XMLHttpRequest();
var method='GET';
var url="https://restcountries.com/v3.1/all";
xhr.open(method,url);
xhr.onload=function()
{
   // if(xhr.status===200)
   // {
    var response=JSON.parse(this.responseText);
    console.log("Total country:", response.length);
    var population=response.reduce((acc, cur)=>acc+cur.population,0);

    
            console.log("Total of Population: ",population);

}
xhr.send();