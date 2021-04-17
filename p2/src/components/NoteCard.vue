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
  cursor: pointer;
  padding: 10%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
}
#note-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>