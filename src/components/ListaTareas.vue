<template>
  <div class="col-xl-20 text-center">
    <div class="card">
      <div class="card-header">
        <h3>Lista de LIBROS</h3>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Autor</th>
              <th>Genero</th>
              <th>Editoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(book, index) in users" :key="index">
              <td>{{ book.name }}</td>
              <td>{{ book.autor }}</td>
              <td>{{ book.genero }}</td>
              <td>{{ book.editora }}</td>
              <td>Edit</td>
              <td>
                <button class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getTodos } from "../state/modules/books";
export default {
  setup() {
    const users = getTodos();
    return { users };
  },
};
</script>
