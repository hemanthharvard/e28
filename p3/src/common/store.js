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
        setUsername(state, payload) {
            state.username = payload;
        },
        setPassword(state, payload) {
            state.password = payload;
        }
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
                context.commit('setPassword', response.data ? response.data.data[0].password : []);
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