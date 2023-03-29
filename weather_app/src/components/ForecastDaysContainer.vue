<script setup>
import ForecastDay from './ForecastDay.vue'
defineProps({
  cityName: {
    type: String,
    required: true
  }
})
</script>

<template>

<div class="bolder" v-if="isLoading">Loading...</div>
    <div class="bolder" v-else-if="error">{{ error }}</div>
    <div id="forecast-container" v-else >
        <ForecastDay  v-for="item in this.forecastData"  :weatherData=item />
    </div>
</template>

<script>
  export default {
    data() {
      return {
        forecastData: null,
        isLoading: false,
        error: null,
      };
    },
    mounted() {
      this.axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&lang=pl&units=${import.meta.env.VITE_UNITS}&appid=${import.meta.env.VITE_API_KEY}`)
          .then((response) => {
            if(response.status == 200){
              const timestamps_by_day = {}

              response.data.list.forEach(item => {
                const timestamp = item.dt * 1000
                const date = new Date(timestamp)
                const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`


                if (timestamp > Date.now() && date.getHours() === 12 + response.data.city.timezone /3600 ) {
                  if (!timestamps_by_day[dateString]) {
                    timestamps_by_day[dateString] = {...item, day:date.toLocaleString('en-us', {weekday:'long'})}
                  }
                }
              })

                this.forecastData = Object.values(timestamps_by_day);
          }
          })
          .catch(({response}) => {
            if(response.data.cod != 404)
              this.error = response.data.message.charAt(0).toUpperCase() +  response.data.message.slice(1) +"!";
            else this.error = ""
          
          })
          .finally(() => {this.isLoading = false;});
      },
  };
  </script>