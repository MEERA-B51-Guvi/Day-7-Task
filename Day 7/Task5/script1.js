console.log("COUNTRY NAME CURRENCY NAME")
var xhr=new XMLHttpRequest();
var method='GET';
var url="https://restcountries.com/v3.1/all";
xhr.open(method,url);
xhr.onload=function()
{
    var response=JSON.parse(this.responseText);
    console.log(response.length);
    for(var i=0; i<response.length; i++)
    {
        if(response[i].currencies !=undefined)
        {
            Object.keys(response[i].currencies).forEach((key)=>
            {
           
                if (key==="USD")
                   {
                    
                    console.log("COUNTRY NAME:", response[i].name.common);
                       console.log("CURRENCY NAME:", response[i].currencies.USD.name);
                       console.log("....................................................")
                   }
           });
       }
   }
}  
xhr.send();
