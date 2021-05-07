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
      <div
        v-if="this.$store.state.username"
        class="logout-button"
        @click="handleLogout"
      >
        Logout, {{ this.$store.state.username }}
      </div>
    </div>
    <p id="description">
      Note Keeper is your one-stop shop for all your note keeping needs.
    </p>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      /* Store links in an array to maintain order */
      links: ["Home", "Favorites", "Create new note"],

      /* Map links to  the appropriate component */
      paths: {
        Home: "/",
        Favorites: "/favorites",
        "Create new note": "/new",
      },
    };
  },
  mounted() {
    this.authUser();
  },
  methods: {
    authUser() {
      this.$store.dispatch("authUser");
    },
    handleLogout: function () {
      this.$store.dispatch("logoutUser");
      this.$router.push("/login");
    },
  },
};
</script>

<style src='@/assets/css/notes.css'></style>

<style>
#description {
  font-size: 18px;
}
</style>
