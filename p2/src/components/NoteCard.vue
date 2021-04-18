<template>
  <div id="note-card">
    <div class="star" v-if="!editMode && note.isFavorite">&#9733;</div>
    <div class="star" v-if="!editMode && !note.isFavorite">&#9734;</div>
    <div class="title" v-if="editMode">
      <input
        type="text"
        id="title"
        name="title"
        v-model="title"
        maxlength="30"
      />
    </div>
    <div class="title" v-else>
      {{ note.title }}
    </div>
    <div class="content" v-if="editMode">
      <textarea
        id="content"
        name="content"
        rows="6"
        cols="30"
        v-model="content"
        maxlength="200"
      >
      </textarea>
    </div>
    <div class="content" v-else>
      {{ note.content }}
    </div>
    <div v-if="editMode">
      <input
        type="checkbox"
        id="favorite"
        name="favorite"
        v-model="isFavorite"
        true-value="true"
        false-value="false"
      />
      <label for="favorite">Favorite</label>
      <p v-if="!title" class="error-message">Please enter title</p>
      <p v-if="!content" class="error-message">Please enter content</p>
    </div>
    <div class="button-wrapper">
      <button
        class="delete-button"
        @click="handleDeleteClick"
        v-if="!isNewNote && editMode"
      >
        Delete
      </button>
      <button
        class="edit-button"
        @click="handleEditClick"
        v-if="!isNewNote && editMode"
      >
        Done
      </button>
      <button
        class="edit-button"
        @click="handleEditClick"
        v-if="!isNewNote && !editMode"
      >
        Edit
      </button>
      <button
        class="add-button"
        @click="handleAddClick"
        v-if="isNewNote && editMode"
      >
        {{ isAdding ? "Adding..." : "Add" }}
      </button>
    </div>
  </div>
</template>

<script>
import { default as axios } from "@/common/app.js";
export default {
  name: "NoteCard",
  methods: {
    updateCard: async function (data) {
      await axios.put(`updateNote/${this.note._id}`, data);
    },
    addCard: async function (data) {
      await axios.post("newNote", data);
    },
    deleteCard: async function () {
      await axios.delete(`deleteNote/${this.note._id}`);
    },
    handleEditClick: function () {
      if (this.editMode) {
        const data = {
          title: this.title,
          content: this.content,
          isFavorite: this.isFavorite,
        };
        if (this.title && this.content) {
          this.updateCard(data);
          setTimeout(() => this.parentToUpdateNotes(), 1000);
        }
      }
      if (this.title && this.content) {
        this.editMode = !this.editMode;
      }
    },
    handleAddClick: function () {
      const data = {
        title: this.title,
        content: this.content,
        isFavorite: this.isFavorite,
      };
      if (this.title && this.content) {
        this.addCard(data);
        this.isAdding = !this.isAdding;
        setTimeout(() => this.$router.push("/"), 1000);
      }
    },
    handleDeleteClick: function () {
      this.editMode = !this.editMode;
      this.deleteCard();
      setTimeout(() => this.parentToUpdateNotes(), 1000);
    },
    parentToUpdateNotes: function () {
      this.$emit("updateNotes");
    },
  },
  data() {
    return {
      title: this.note.title,
      content: this.note.content,
      isFavorite: this.note.isFavorite,
      editMode: this.isNewNote,
      isAdding: false,
    };
  },
  props: {
    note: {
      type: Object,
      default: null,
    },
    isNewNote: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
#note-card {
  border-color: #ffdf00;
  border-style: solid;
  border-radius: 5px;
  cursor: pointer;
  padding: 5%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
}
#note-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
.star {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: #ffdf00;
  font-size: 20px;
}
.title {
  padding: 5px;
  font-weight: bold;
  margin: 0;
}
#title {
  border-color: blue;
  border-radius: 5px;
  width: 100%;
}
.content {
  padding: 5px;
  margin: 0;
  word-wrap: break-word;
}
#content {
  border-color: blue;
  border-radius: 5px;
  resize: none;
  width: 100%;
}
.button-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 14px;
}
.edit-button {
  border: none;
  border-radius: 5px;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: #ffdf00;
  color: black;
  border: 2px solid #4caf50;
  margin-left: 5%;
}
.edit-button:hover {
  background-color: #4caf50;
  color: white;
}
.delete-button {
  border: none;
  border-radius: 5px;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: #ff0000;
  color: black;
}
.add-button {
  border: none;
  border-radius: 5px;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: #4caf50;
  color: black;
}
.error-message {
  color: #ff0000;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 0;
}
</style>