<template>
  <i-container>
    <i-row center>
      <i-column xs="12" sm="10" class="main-section">
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
          <SplideSlide>
            <i-card class="box">
             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
              <template #footer>
                Card Footer
              </template>
            </i-card>
          </SplideSlide>

          <SplideSlide>
            <i-card class="box">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              <template #footer>
                Card Footer
              </template>
            </i-card>
          </SplideSlide>

          `
        </Splide>
      </i-column>
    </i-row>
  </i-container>
</template>

<script setup>
import '@splidejs/vue-splide/css'
import '@splidejs/vue-splide/css/skyblue'
import '@splidejs/vue-splide/css/sea-green'
import '@splidejs/vue-splide/css/core'

import {onMounted} from "vue"
 
const axios = require("axios")
onMounted(async () => {
  await axios
    .get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
      console.log(response.data.results)
    })
})
</script>

<style>
.main-section {
  height: 80vh;
}
.box {
  margin: 0 auto;
  height: 500px;
  width: 400px;
}
</style>
