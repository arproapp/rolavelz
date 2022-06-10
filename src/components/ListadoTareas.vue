<template>
  <table class="table table-nowrap">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Categorías</th>
        <th scope="col">Estado</th>
        <th scope="col">Número</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tarea, index) in tareas" :key="index">
        <th scope="row">{{ tarea.firstname }}</th>
        <td>{{ tarea.lastname }}</td>
        <td>{{ tarea.company }}</td>
        <td>{{ tarea.phone }}</td>
        <td>{{ tarea.email }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="deleteTareas(tarea.id)">Eliminar</button>
          <router-link :to="{ name: 'products-editar', params: { id: tarea.id } }" class="btn btn-warning ml-2 btn-sm">
            Editar
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("invoice", ["tareas"]),
  },
  methods: {
    ...mapActions("invoice", ["deleteTareas"]),
    ...mapActions("invoice", ["cargarLocalStorage"]),
  },
  created() {
    this.cargarLocalStorage();
  },
};
</script>