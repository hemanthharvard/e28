<template>
  <div id="favorites-page">
    <ul>
      <li v-for="note in filteredNotes" :key="note._id">
        <note-card :label="note.title" v-bind:note="note"></note-card>
      </li>
    </ul>
  </div>
</template>

<script>
import NoteCard from "@/components/NoteCard.vue";
export default {
  name: "FavoritesPage",
  data() {
    return {};
  },
  mounted() {
    this.loadNotes();
  },
  components: {
    "note-card": NoteCard,
  },
  methods: {
    loadNotes() {
      this.$store.dispatch("loadNotes");
    },
  },
  computed: {
    filteredNotes() {
      return this.$store.getters.getFavoriteNotes();
    },
  },
};
</script>

<style scoped>
#favorites-page {
  padding: 2%;
}
#favorites-page > ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
}
#favorites-page > ul > li {
  padding: 2%;
  min-width: 315px;
  height: 30%;
  width: 30%;
}
</style>