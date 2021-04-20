var req = new XMLHttpRequest()
req.open('GET','https://restcountries.eu/rest/v2/all',true)
req.send()
req.onload = function(){
    var data = JSON.parse(this.response)

    //Asian Countries
    var result = data.filter((country)=>{
        return country.region === 'Asia'
    })
    console.log(result)

    //Population
    var pop = data.filter((country)=> {
        return country.population < 200000
    })
    console.log(pop)

    //name,falg,capital
    data.forEach(country => {
        console.log(country.name + ' :' + country.capital + ' :' + country.flag)
    })

    //total population

    var total = data.reduce((tp, country) => {
        return country.population + tp
    }, 0)
    console.log(total)

    //Currencies
    for (var i in data){
        if (data[i].currencies[0].code === "USD"){
        console.log(data[i].name);
        }
    }
    
}