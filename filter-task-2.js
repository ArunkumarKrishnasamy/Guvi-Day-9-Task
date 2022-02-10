// c.Print the following details name, capital, flag using forEach function
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();

request.onload = function(data){
    if(request.status==200){
        let c=JSON.parse(this.responseText);     
        c.forEach((e) => {
            console.log(e.name.common, e.capital,e.flags.png)
        });
    }
    else{
        console.error("request not success")};
} ;
request.onerror = function(){
    console.log("Error");
};

// d.Print the total population of countries using reduce function
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();
request.onload = function(data){
    if(request.status==200){
        let c=JSON.parse(this.responseText);     
    let total=  c.map((e)=>e.population).reduce((a,e)=>{      
                           return a + e
                         });
        console.log(total);
    }
    else{
        console.error("request not success")};
} ;
request.onerror = function(){
    console.log("Error");
};

//e.Print the country which uses US Dollars as currency.
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();
request.onload = function(data){
    if(request.status==200){
        let c=JSON.parse(this.responseText); 
        console.log(c);    
    let countries= c.map((e)=>e.currencies).filter((e)=> e==="USD");
    console.log(countries);  
    }
    else{
        console.error("request not success")};
} ;
request.onerror = function(){
    console.log("Error");
};
