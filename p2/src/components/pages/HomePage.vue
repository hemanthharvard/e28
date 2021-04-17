<template>
  <div id="home-page">
    <ul>
      <li v-for="note in notes" :key="note._id">
        <note-card :label="note.title" v-bind:note="note"></note-card>
      </li>
    </ul>
  </div>
</template>

<script>
import { default as axios } from "@/common/app.js";
import NoteCard from "@/components/NoteCard.vue";
export default {
  name: "HomePage",
  data() {
    return {
      notes: [],
    };
  },
  async mounted() {
    this.notes = await this.loadNotes();
  },
  components: {
    "note-card": NoteCard,
  },
  methods: {
    async loadNotes() {
      const response = await axios.get("listNotes");
      return response.data ? response.data.data : [];
    },
  },
};
</script>

<style scoped>
#home-page {
  padding: 2%;
}
#home-page > ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
}
#home-page > ul > li {
  padding: 2%;
  min-width: 300px;
  height: 30%;
  width: 30%;
}
</style>