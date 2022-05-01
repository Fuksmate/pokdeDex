<template>
  <i-container>
    <i-row center>
      <i-column xs="12" sm="10" class="main-section">
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
          <SplideSlide>
            <i-card class="box">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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

          
        </Splide>
      </i-column>
    </i-row>
  </i-container>
</template>

<script>
import '@splidejs/vue-splide/css'

import '@splidejs/vue-splide/css/skyblue'
import '@splidejs/vue-splide/css/sea-green'

import '@splidejs/vue-splide/css/core'
export default {
  data() {
    return {}
  },
}
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
