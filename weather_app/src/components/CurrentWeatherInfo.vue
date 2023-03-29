<script setup>
   defineProps({
      cityName: {
        type: String,
        required: true
      }
    })
</script>

<template>
<div class="current-info bolder" v-if="isLoading">Loading...</div>
    <div class="current-info  bolder" v-else-if="error">{{ error }}</div>
    <div class="current-info"  v-else>
      <h1>{{Math.round(weatherData.main.temp)}}°</h1>
      <h2>{{weatherData.name}}<p class="location-coords"><i class="fa-solid fa-location-dot fa-sm"></i>&nbsp;{{ weatherData.coord.lat.toFixed(3)}} {{weatherData.coord.lon.toFixed(3)}} - {{Math.round(weatherData.wind.speed)}} km/h <i :class="'fa-solid fa-location-arrow fa-rotate-' + Math.round(weatherData.wind.deg / 90) * 90 % 360"></i></p></h2>
      <div>
        <img :src="'/icons/' + weatherData.weather[0].icon + '.png'" draggable="false">
        <p>{{weatherData.weather[0].main}}</p>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        weatherData: null,
        isLoading: true,
        error: null,
      };
    },
    mounted() {
      this.axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&lang=pl&units=${import.meta.env.VITE_UNITS}&appid=${import.meta.env.VITE_API_KEY}`)
        .then((response) => {
          if(response.status == 200){
            this.weatherData = response.data;
          }else{
            this.error = "Error while pulling! Server gave wrong code response!"
          }
        })
        .catch(({response}) => {this.error = response.data.message.charAt(0).toUpperCase() +  response.data.message.slice(1) +"!";})
        .finally(() => {this.isLoading = false;});
      },
  };
  </script>