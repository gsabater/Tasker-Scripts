let requestParams = {
    method: "get",
};

fetch("https://api.openweathermap.org/data/2.5/forecast?id=2512989&units=metric&APPID=a487b5b11bfa1a5521c6ed07b42d503a", requestParams)
.then(response => response.json())
.then(js => {
    //flash(js);

    today = js.list[3];
    // clouds = cloudsToHuman(today.clouds.all);
    // rain = today.rain.3h (rain volume last 3h), sample: 0.055
    // wind = today.wind.speed, sample: 2.81 (metros/segundo) <5 = Gentle Breeze

    s = "Today weather in Palma is " + today.weather[0].description + ". ";
    s = s + "The temperature is " + today.main.temp.toFixed(0) + " degrees";

    flash(s);
say( s, 'com.google.android.tts', 'eng-usa', 'media', 5, 5 )
    exit();
});

/*
function flash(param){
    console.log(param);
    return;
}
*/

function cloudsToHuman(clouds){
// return cloudiness % to text.
}
