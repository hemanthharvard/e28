import {
    createStore,
    createLogger
} from 'vuex';
import {
    default as axios
} from "@/common/app.js";

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            notes: [],
            username: null,
            password: null
        }
    },
    mutations: {
        setNotes(state, payload) {
            state.notes = payload;
        },
        setUser(state, payload) {
            state.username = payload;
        },
        setPassword(state, payload) {
            state.password = payload;
        }
    },
    actions: {
        async loadNotes(context) {
            const response = await axios.post("listNotes", {
                username: this.$store.state.username
            });
            context.commit('setNotes', response.data ? response.data.data : []);
        },
        async validateUser(context) {
            const response = await axios.post("validateUser", {
                username,
                password
            });
            if (response.status === "success") {
                context.commit('setUser', response.data.username);
                context.commit('setPassword', response.data.password);
            }
        },
        async logoutUser(context) {
            const response = await axios.post("logout");
            if (response.data.success) {
                context.commit("setUser", null);
                context.commit("setPassword", null);
            }
        }
    },
    getters: {
        getFavoriteNotes: (state) => () => {
            return state.notes.filter((note) => {
                return note.isFavorite;
            });
        }
    }
})