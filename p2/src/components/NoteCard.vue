<template>
  <div id="note-card">
    <div class="star" v-if="!editMode && note.isFavorite">&#9733;</div>
    <div class="star" v-if="!editMode && !note.isFavorite">&#9734;</div>
    <div class="title" v-if="editMode">
      <input type="text" id="title" name="title" :value="note.title" />
    </div>
    <div class="title" v-else>
      <p>{{ note.title }}</p>
    </div>
    <div class="content" v-if="editMode">
      <textarea
        id="content"
        name="content"
        rows="4"
        cols="30"
        :value="note.content"
        maxlength="200"
      >
      </textarea>
    </div>
    <div class="content" v-else>
      <p>{{ note.content }}</p>
    </div>
    <div v-if="editMode">
      <input
        type="checkbox"
        id="favorite"
        name="favorite"
        :checked="note.isFavorite"
      />
      <label for="favorite">Favorite</label>
    </div>
    <div class="button-wrapper">
      <button class="button" @click="handleClick">
        {{ editMode ? "Done" : "Edit" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick: function () {
      this.editMode = !this.editMode;
    },
  },
  data() {
    return {
      editMode: false,
    };
  },
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
  font-size: 30px;
}
.title {
  padding: 5px;
}
.title > p {
  font-weight: bold;
}
#title {
  width: 100%;
}
.content {
  padding: 5px;
}
#content {
  resize: none;
  width: 100%;
}
.button-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 14px;
}
.button {
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
}
.button:hover {
  background-color: #4caf50;
  color: white;
}
</style>