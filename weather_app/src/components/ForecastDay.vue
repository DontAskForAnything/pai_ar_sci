<script setup>
   defineProps({
    weatherData: {
        type: Object,
        required: true
      }
    })
</script>

<template>
  <div class="day">
      <h1>{{weatherData.day}}</h1>
      <img :src="'/icons/' + weatherData.weather[0].icon + '.png'" draggable="false">
      <p>{{Math.round(weatherData.main.temp)}}° - {{Math.round(weatherData.wind.speed)}} km/h<i :class="'fa-solid fa-location-arrow fa-rotate-' + Math.round(weatherData.wind.deg / 90) * 90 % 360"></i></p> 
  </div>
  </template>
