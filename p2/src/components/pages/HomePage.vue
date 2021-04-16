<template>
  <div id="home-page">
    <p>Note Keeper is your one-stop shop for all your note keeping needs.</p>
    <show-featured v-bind:notes="notes"></show-featured>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style>
</style>