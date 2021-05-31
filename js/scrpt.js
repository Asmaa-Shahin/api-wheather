let search =document.getElementById("search");
let find =document.getElementById("find-item");

let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

 async function searchForcast(a){

let response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);

if(response.ok&&400!=response.status)
{
    let responseData=await response.json();
    
weatherToday(responseData);

tomorrow(responseData);

afterTomo(responseData)
  
}



};
 
function weatherToday(responseData){

    let current=responseData.current;
    let location=responseData.location;
    let date=current.last_updated.replace(" ","T");
    let n =`<div class="d-flex justify-content-between p-2 today w-100 mb-4">
    <span>${days[new Date(date).getDay()]}</span>
    <span>${new Date().getDate()+ months[new Date(date).getMonth()] }</span>
    
    
    </div>
    <span class="p-3">${location.name}</span>
    <h2><span class="pr-5 pl-3 temp text-white">${current.temp_c}<sup>o</sup>c </span> <img src="https:${current.condition.icon}" alt=""width="90"></h2>
    <p class="pl-3 pt-4 sun">${current.condition.text}</p>
    <span class="p-3"><img src="images/icon-umberella.png"alt=""> 20%</span>
    <span  class="pr-3"><img src="images/icon-wind.png"alt=""> ${current.wind_kph}km/h</span>
    <span><img src="images/icon-compass.png"alt=""> ${current.wind_dir}</span>
    
    
    `
    document.querySelector(".today-weather").innerHTML=n;
    
    
    }
    function tomorrow(responseData){
        let forcastDay=responseData.forecast.forecastday;
        let date2=forcastDay[1].date;
            let g=`
            <div class=" p-2 tomo mb-4">
                <span>${days[new Date(date2).getDay()]}</span>
               
              
              
              </div>
             
              <img src="https:${forcastDay[1].day.condition.icon}" alt=""width="90">
              <p class=" font-weight-bold text-white max">${forcastDay[1].day.maxtemp_c}<sup>o</sup>c</p>
              <p class="p-0 ">${forcastDay[1].day.mintemp_c}<sup>o</sup></p>
              <p class="sun">${forcastDay[1].day.condition.text}</p>
            
            
            
            `
            document.querySelector(".tomorow-weather").innerHTML=g;
        }

 function afterTomo(responseData){

    let forcastDay=responseData.forecast.forecastday;
    let date2=forcastDay[2].date;
        let g=`
        <div class=" p-2 tomo mb-4">
            <span>${days[new Date(date2).getDay()]}</span>
           
          
          
          </div>
         
          <img src="https:${forcastDay[2].day.condition.icon}" alt=""width="90">
          <p class=" font-weight-bold text-white max">${forcastDay[2].day.maxtemp_c}<sup>o</sup>c</p>
          <p class="p-0 ">${forcastDay[2].day.mintemp_c}<sup>o</sup></p>
          <p class="sun">${forcastDay[2].day.condition.text}</p>
        
        
        
        `
        document.querySelector(".after-tomo").innerHTML=g;

}

  
searchForcast("cairo")



search.addEventListener("keydown",t=>searchForcast(t.target.value));












// async function search(a){
//     let t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`)
// ;if(t.ok&&400!=t.status)
// {
//     let a=await t.json();
//     displayCurrent(a.location,a.current),
//     displayAnother(a.forecast.forecastday)
// }
// }
//     document.getElementById("search").addEventListener("keyup",a=>{search(a.target.value)});
//     var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     const monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
//     function displayCurrent(a,t)
//     {if(null!=t){
//         var e=new Date(t.last_updated.replace(" ","T"));
//     let n=`<div class="today forecast">\n    <div class="forecast-header"  id="today">\n    <div class="day">${days[e.getDay()]}</div>\n   
//      <div class=" date">${e.getDate()+monthNames[e.getMonth()]}</div>\n    </div> \x3c!-- .forecast-header --\x3e\n   
//       <div class="forecast-content" id="current">\n    <div class="location">${a.name}</div>\n    <div class="degree">\n   
//            <div class="num">${t.temp_c}<sup>o</sup>C</div>\n      \n        <div class="forecast-icon">\n         
//               <img src="https:${t.condition.icon}" alt="" width=90>\n        </div>\t\n    \n    </div>\n  
//                 <div class="custom">${t.condition.text}</div>\n    <span><img src="images/icon-umberella.png" alt="">20%</span>
//                 \n\t\t\t\t\t\t\t\t<span><img src="images/icon-wind.png" alt="">18km/h</span>\n\t\t\t\t\t\t\t\t<span>
//                 <img src="images/icon-compass.png" alt="">East</span>\n   
//                  </div>\n</div>`;document.getElementById("forecast").innerHTML=n}
                
                
//                 }



//                  function displayAnother(a)
//                  {
//                      let t="";
//                      for(let e=1;e<a.length;e++)
//                      t+=`\t<div class="forecast">\n     
//                     <div class="forecast-header">\n            <div class="day">${days[new Date(a[e].date.replace(" ","T")).getDay()]}
//                     </div>\n        </div> \x3c!-- .forecast-header --\x3e\n        <div class="forecast-content">\n       
//                          <div class="forecast-icon">\n                <img src="https:${a[e].day.condition.icon}" alt="" width=48>\n    
//                                  </div>\n            <div class="degree">${a[e].day.maxtemp_c}<sup>o</sup>C</div>\n         
//                                     <small>${a[e].day.mintemp_c}<sup>o</sup></small>\n        
//                                         <div class="custom">${a[e].day.condition.text}
// </div>\n        </div>\n        </div>`;
// document.getElementById("forecast").innerHTML+=t
// }
// search("cairo")





















