<template>
  <div id="create-new-note">
    <note-card
      :label="note.title"
      v-bind:note="note"
      v-bind:isNewNote="true"
    ></note-card>
  </div>
</template>
<script>
import NoteCard from "@/components/NoteCard.vue";
export default {
  name: "CreateNewNotePage",
  components: {
    "note-card": NoteCard,
  },
  data() {
    return { note: { title: "", content: "", isFavorite: false } };
  },
};
</script>

<style></style>