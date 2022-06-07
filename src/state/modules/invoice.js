import router from '@/router'

export const state = {
  tareas: [],
  tarea: {
    id: "",
    firstname: "",
    lastname: "",
    company: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
  },
};

export const getters = {
  tareas: (state) => state.tareas,
};

export const mutations = {
  //POST
  set(state, payload) {
    state.tareas.push(payload);
  },
  //DELETE
  delete(state, payload) {
    state.tareas = state.tareas.filter((item) => item.id !== payload);
  },
  //GET
  tarea(state, payload) {
    state.tarea = state.tareas.find((item) => item.id === payload);
  },
  //UPDATE
  update(state, payload) {
    state.tareas = state.tareas.map((item) => (item.id === payload.id ? payload : item));
  },
};

export const actions = {
  //POST
  setTareas({ commit }, tarea) {
    commit("set", tarea);
  },
  //DELETE
  deleteTarea({ commit }, id) {
    commit("delete", id);
  },
  //GET
  setTarea({ commit }, id) {
    commit("tarea", id);
  },
  //UPDATE
  updateTarea({ commit }, tarea) {
    commit("update", tarea);
    router.push("/");
  },
};
