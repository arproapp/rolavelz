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
          <button class="btn btn-danger btn-sm" @click="deleteTarea(tarea.id)">
            Eliminar
          </button>
          <router-link
            :to="{ name: 'products-editar', params: { id: tarea.id }}"
            class="btn btn-success"
            ><i class="ri-add-line align-bottom me-1"></i> Add Product
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
    ...mapActions("invoice", ["deleteTarea"]),
  },
};
</script>