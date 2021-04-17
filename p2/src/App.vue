<template>
  <div>
    <div class="navbar">
      <a class="navbar-logo" href="/">
        <img
          alt="Note Keeper"
          id="logo"
          class="logo"
          src="@/assets/images/note-keeper.png"
        />
        <h1>Note Keeper</h1>
      </a>
      <nav class="navbar-contents">
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
    </div>
    <p id="description">
      Note Keeper is your one-stop shop for all your note keeping needs.
    </p>

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
      links: ["Home", "Favourites", "Create new note"],

      /* Map links to  the appropriate component */
      paths: {
        Home: "/",
        Favourites: "/favourites",
        "Create new note": "/new",
      },
    };
  },
  mounted() {
    this.loadNotes();
  },
  methods: {
    loadNotes() {
      axios.get("listNotes").then((response) => {
        this.notes = response.data.data;
      });
    },
  },
};
</script>

<style src='@/assets/css/notes.css'></style>

<style>
#description {
  font-size: 18px;
  padding-bottom: 3%;
}
</style>
