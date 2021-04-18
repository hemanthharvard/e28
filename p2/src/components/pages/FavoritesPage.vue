<template>
  <div id="favourites-page">
    <ul>
      <li v-for="note in filteredNotes" :key="note._id">
        <note-card
          :label="note.title"
          v-bind:note="note"
          v-on:updateNotes="childRequestToUpdateNotes"
        ></note-card>
      </li>
    </ul>
  </div>
</template>

<script>
import { default as axios } from "@/common/app.js";
import NoteCard from "@/components/NoteCard.vue";
export default {
  name: "FavoritesPage",
  data() {
    return {
      filteredNotes: [],
    };
  },
  async mounted() {
    const notes = await this.loadNotes();
    this.filteredNotes = notes.filter((note) => {
      return note.isFavorite;
    });
  },
  components: {
    "note-card": NoteCard,
  },
  methods: {
    async loadNotes() {
      const response = await axios.get("listNotes");
      return response.data ? response.data.data : [];
    },
    async childRequestToUpdateNotes() {
      this.notes = await this.loadNotes();
    },
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
  min-width: 315px;
  height: 30%;
  width: 30%;
}
</style>