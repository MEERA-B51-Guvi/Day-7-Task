var xhr=new XMLHttpRequest();
var method='GET';
var url="https://restcountries.com/v3.1/all";
xhr.open(method, url);
xhr.onload=function(){
    if(xhr.status===200)
    {
        var response=JSON.parse(this.responseText);
        console.log(response.length);
        console.log(response);
        response.forEach((country)=>{
            console.log("***********************************")
            console.log("CountryName: ",country.name.common);
            console.log("CountryCapital: ", country.capital);
            console.log("CountryFlag: ", country.flag);
        
        })
    }
}
xhr.send();