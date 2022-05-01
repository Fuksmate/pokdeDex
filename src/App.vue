<template>
  <i-layout>
    <i-layout-header>
      <MainHeader />
    </i-layout-header>

    <i-layout-content>
      <MainSection />
    </i-layout-content>

    <i-layout-footer>
      Footer
    </i-layout-footer>
  </i-layout>
  <LogIn />
</template>

<script setup>
import LogIn from './components/LogIn.vue'
import MainHeader from './components/MainHeader.vue'
import MainSection from './components/MainSection.vue'
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

<style></style>
