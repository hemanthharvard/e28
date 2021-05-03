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
        }
    },
    mutations: {
        setNotes(state, payload) {
            state.notes = payload;
        },
        setUsername(state, payload) {
            state.username = payload;
        },
    },
    actions: {
        async loadNotes(context) {
            const response = await axios.post("listNotes", {
                username: context.state.username
            });
            context.commit('setNotes', response.data ? response.data.data : []);
        },
        async authUser(context) {
            const response = await axios.get("authUser");
            if (response.data.status === "success") {
                context.commit('setUsername', response.data ? response.data.data[0].username : []);
            } else {
                context.commit('setUsername', null);
            }
        },
        async logoutUser(context) {
            const response = await axios.get("logoutUser");
            if (response.data.status === "success") {
                context.commit('setUsername', null);
            }
        },
    },
    getters: {
        getFavoriteNotes: (state) => () => {
            return state.notes.filter((note) => {
                return note.isFavorite;
            });
        }
    }
})