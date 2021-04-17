<template>
  <div id="favourites-page">
    <ul>
      <li v-for="note in notes" :key="note._id">
        <note-card :label="note.title" v-bind:note="note"></note-card>
      </li>
    </ul>
  </div>
</template>

<script>
import NoteCard from "@/components/NoteCard.vue";
export default {
  props: {
    notes: {
      type: Array,
      default: null,
    },
  },
  components: {
    "note-card": NoteCard,
  },
};
</script>

<style scoped>
#favourites-page {
  padding: 2%;
}
#favourites-page > ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
}
#favourites-page > ul > li {
  padding: 2%;
  min-width: 300px;
  height: 30%;
  width: 30%;
}
</style>