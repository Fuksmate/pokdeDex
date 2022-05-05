<template>
  <i-container>
    <i-row center>
      <i-column xs="12" sm="10" class="main-section">
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
          <SplideSlide v-for="(item, index) in data" :key="index">
            <i-card class="box">
              {{ item.name }}
              <template #footer> Card Footer </template>
            </i-card>
          </SplideSlide>
        </Splide>
      </i-column>
    </i-row>
  </i-container>
</template>

<script setup>
import "@splidejs/vue-splide/css";
import "@splidejs/vue-splide/css/skyblue";
import "@splidejs/vue-splide/css/sea-green";
import "@splidejs/vue-splide/css/core";

import { onMounted, ref } from "vue";
const data = ref([]);

const axios = require("axios");
onMounted(async () => {
  await axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
    data.value = response.data.results;
  });
});
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
