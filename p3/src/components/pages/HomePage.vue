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
import NoteCard from "@/components/NoteCard.vue";
export default {
  name: "HomePage",
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
      this.$store.dispatch("authUser");
      this.$store.dispatch("loadNotes");
    },
  },
  computed: {
    notes() {
      return this.$store.state.notes;
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
  min-width: 315px;
  height: 30%;
  width: 30%;
}
</style>