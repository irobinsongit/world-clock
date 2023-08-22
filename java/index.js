function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngeles = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngeles.format("Do [of] MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngeles.format(
    "h:mm:ss[<small>] A [</small>]"
  );

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("Do [of] MMMM YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss[<small>] A [</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
  <div class="city">
    <div class="flex">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("Do [of] MMMM YYYY")}</div>
    </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    " A "
  )}</small></div>
        </div>
        `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
