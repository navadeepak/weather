function giveinp(){
    var loc=document.getElementById("input-location").value;
    document.getElementById("main-div").style="height:500px;transition:all .5s;";
    document.getElementById("weather-content").style="display:flex;";
    document.getElementById("hum-img").style="transform: translateY(0px);transition: all 3s;";
    document.getElementById("wind-img").style="transform: translateY(0px);transition: all 3s;";
    document.getElementById("errorloc").style="display:none;";
    var far;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=7750cce04f7d34e90eeb0f675c4b4ae5`)
    .then(response => response.json())
    .then(msg => {
        
        var tem=document.getElementById("deg-chng").innerHTML=msg.main.temp;
        document.getElementById("humidity-value").innerHTML=msg.main.humidity;
        document.getElementById("wind-value").innerHTML=msg.wind.speed;
        var discript= document.getElementById("entered-location-revail").innerHTML=msg.weather[0].description;
        // var img_loc_ch=document.getElementById("crnt-weather").src;
        // console.log(img_loc_ch);
        // switch (discript){
        //     case "scattered clouds":
        //         img_loc_ch="cloudy-day-1.svg";
        //         alert("crt");
        //         break;
        // }
        // console.log(msg);
        // function conv(){
        //     far=(tem * 9/5) + 32;
        //     document.getElementById("deg-chng").innerHTML=Math.round(far);
        // }
        // conv();
    })
    .catch(err => {
        document.getElementById("main-div").style="height:10vh;";
        document.getElementById("weather-content").style="display:none;";
        document.getElementById("errorloc").style="display:flex;";
        console.log(err);
    })

}
// document.getElementById("deg-chng").innerHTML=msg.main.temp;