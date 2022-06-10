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

};

export const mutations = {
  cargar(state, payload) {
    state.tareas = payload
  },
  //POST
  set(state, payload) {
    state.tareas.push(payload);
  },
  //DELETE
  delete(state, payload) {
    state.tareas = state.tareas.filter(item => item.id !== payload)
  },
  //GET
  tarea(state, payload) {
    if (!state.tareas.find(item => item.id === payload)) {
      router.push('/')
      return
    }
    state.tarea = state.tareas.find(item => item.id === payload)
  },
  //UPDATE
  update(state, payload) {
    state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
    router.push('/')
  },
};

export const actions = {
  //LEER
  async cargarLocalStorage({ commit }) {
    try {
      const res = await fetch('https://arprobackend-default-rtdb.firebaseio.com/tareas-api.json')
      const dataDB = await res.json()
      const arrayTareas = []
      for (let id in dataDB) {
        arrayTareas.push(dataDB[id])
      }
      commit('cargar', arrayTareas)

    } catch (error) {
      console.log(error)
    }
  },
  //POST
  async setTareas({ commit }, tarea) {
    try {
      await fetch(`https://arprobackend-default-rtdb.firebaseio.com/tareas-api/${tarea.id}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarea)
      })
    } catch (error) {
      console.log(error)
    }
    commit('set', tarea)
  },
  //DELETE
  async deleteTareas({ commit }, id) {
    try {
      await fetch(`https://arprobackend-default-rtdb.firebaseio.com/tareas-api/${id}.json`, {
        method: 'DELETE',
      })
      commit('delete', id)
    } catch (error) {
      console.log(error)
    }
  },
  //GET
  setTarea({ commit }, id) {
    commit("tarea", id);
  },
  //UPDATE
  async updateTarea({ commit }, tarea) {
    try {
      const res = await fetch(`https://arprobackend-default-rtdb.firebaseio.com/tareas-api/${tarea.id}.json`, {
        method: 'PATCH',
        body: JSON.stringify(tarea)
      })
      const dataDB = await res.json()
      commit('update', dataDB)
    } catch (error) {
      console.log(error)
    }
  },
};