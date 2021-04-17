<template>
  <div id="note-card">
    {{ note }}
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style>
#note-card {
  border-color: #ffdf00;
  border-style: solid;
  padding: 10%;
}
</style>