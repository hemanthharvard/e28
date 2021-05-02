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
            user: null
        }
    },
    mutations: {
        setNotes(state, payload) {
            state.notes = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        async loadNotes(context) {
            const response = await axios.get("listNotes");
            context.commit('setNotes', response.data ? response.data.data : []);
        },
        async authUser(context) {
            const response = await axios.post("authUser");
            if (response.data.authenticated) {
                context.commit('setUser', response.data.user);
            }
        },
        async logoutUser(context) {
            const response = await axios.post("logout");
            if (response.data.success) {
                context.commit("setUser", null);
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