<template>
  <div>
    <img alt="Note Keeper" id="logo" src="@/assets/images/note-keeper.png" />

    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            >{{ link }}
          </router-link>
        </li>
      </ul>
    </nav>

    <router-view
      v-bind:notes="notes"
      v-on:update-notes="loadNotes"
    ></router-view>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  name: "App",
  data() {
    return {
      notes: [],

      /* Store links in an array to maintain order */
      links: ["home", "favourites", "new note"],

      /* Map links to  the appropriate component */
      paths: {
        home: "/",
        products: "/notes",
        "new note": "/note/new",
      },
    };
  },
  mounted() {
    this.loadNotes();
  },
  methods: {
    loadNotes() {
      axios.get("note").then((response) => {
        this.notes = response.data.note;
      });
    },
  },
};
</script>

<style src='@/assets/css/notes.css'></style>

<style>
</style>
