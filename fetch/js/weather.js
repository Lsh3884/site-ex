window.addEventListener("load", function () {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=Seoul&limit=5&appid=2f92a12efe38d3cb8e6e56648c67be5d&units=metric")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      this.document.querySelector(".city").textContent = result.name;
      this.document.querySelector(".temp").textContent = result.main.temp;
      this.document.querySelector("#longitude").textContent = result.coord.lon;
      this.document.querySelector("#latitude").textContent = result.coord.lat;
      //   도시 아이디 설정
      // 날씨 및 시간설정
      let dataTime = new Date(result.dt * 1000);
      let DateTime = dataTime.toLocaleString();
      this.document.querySelector("#city-id").textContent = result.id;
      this.document.querySelector("#datetime").textContent = DateTime;
    })
    .catch((error) => console.error("Error:", error));
});
