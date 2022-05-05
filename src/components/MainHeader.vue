<template>
  <i-navbar>
    <i-navbar-brand href="/">
      {{ name }}
    </i-navbar-brand>
    <i-navbar-collapsible class="_justify-content:flex-end">
      <i-nav>
        <i-nav-item href="/"> Home </i-nav-item>
        <i-nav-item href="/about"> About </i-nav-item>
        <i-nav-item href="/contact"> Contact </i-nav-item>
      </i-nav>
    </i-navbar-collapsible>
  </i-navbar>
</template>

<script setup>
const name = localStorage.name;
</script>

<style></style>
