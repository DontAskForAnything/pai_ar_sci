<script>
import CurrentWeatherInfo from './components/CurrentWeatherInfo.vue'
import ForecastDaysContainer from './components/ForecastDaysContainer.vue'

export default {components: {CurrentWeatherInfo, ForecastDaysContainer},
data() {
    return {
      cityName : import.meta.env.VITE_CITY
};},
computed: {
    backgroundImageUrl() {
      const dayTimes = ["morning","day","evening","night"]
      const hour = new Date().getHours()
      if (hour >= 6 && hour < 12) {
        // Morning
        return `url('./backgrounds/${dayTimes[0]}.webp')`
      } else if (hour >= 12 && hour < 18) {
        // Day
        return `url('./backgrounds/${dayTimes[1]}.webp')`
      } else if (hour >= 18 && hour < 20) {
        // Evening
        return `url('./backgrounds/${dayTimes[2]}.webp')`
      } else {
        // Night
        return `url('./backgrounds/${dayTimes[3]}.webp')`
      }
    }
  }}
</script>

<template>
<div id="app-container" :style="{ backgroundImage: backgroundImageUrl }">
  <div id="main-part">
    
    <CurrentWeatherInfo :cityName=cityName />

    <ForecastDaysContainer :cityName=cityName />
  </div>
</div>
</template>
