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
        }
    },
    mutations: {
        setNotes(state, payload) {
            state.notes = payload;
        }
    },
    actions: {
        async loadNotes(context) {
            const response = await axios.get("listNotes");
            context.commit('setNotes', response.data ? response.data.data : []);
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