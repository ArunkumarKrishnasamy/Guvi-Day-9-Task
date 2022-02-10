//a.Get all the countries from Asia continent /region using Filter function
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()

request.onload = function(data){
    if(request.status==200){
        let c=JSON.parse(this.responseText);     
        let d=c.filter((e)=> e.region==="Asia").map((e)=>{
            console.log(e.name.common)})
    }
    else{
        console.error("request not success")};
} ;
request.onerror = function(){
    console.log("Error");
};

// b.Get all the countries with a population of less than 2 lakhs using Filter function
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()

request.onload = function(data){
    if(request.status==200){
        let c=JSON.parse(this.responseText);     
        let d=c.filter((e)=> e.population<200000).map((e)=>{
            console.log(e.name.common);})
    }
    else{
        console.error("request not success")};
} ;
request.onerror = function(){
    console.log("Error");
};