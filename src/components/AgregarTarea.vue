<script>
import { mapActions } from "vuex";
const shortid = require("shortid");
export default {
  data() {
    return {
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
  },
  methods: {
    ...mapActions("invoice", ["setTareas"]),
    procesarFormulario() {
      this.tarea.id = shortid.generate();
      console.log(this.tarea);
      this.setTareas(this.tarea);
      this.tarea = {
        id: "",
        firstname: "",
        lastname: "",
        company: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
      };
    },
  },
};
</script>

<template>
  <div>{{ tarea }}</div>
  <form @submit.prevent="procesarFormulario">
    <div class="row">
      <div class="col-6">
        <div class="mb-3">
          <label for="firstNameinput" class="form-label">First Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your firstname"
            id="firstNameinput"
            v-model.trim="tarea.firstname"
          />
        </div>
      </div>
      <!--end col-->
      <div class="col-6">
        <div class="mb-3">
          <label for="lastNameinput" class="form-label">Last Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your lastname"
            id="lastNameinput"
            v-model.trim="tarea.lastname"
          />
        </div>
      </div>
      <!--end col-->
      <div class="col-12">
        <div class="mb-3">
          <label for="compnayNameinput" class="form-label">Company Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter company name"
            id="compnayNameinput"
            v-model.trim="tarea.company"
          />
        </div>
      </div>
      <!--end col-->
      <div class="col-6">
        <div class="mb-3">
          <label for="phonenumberInput" class="form-label">Phone Number</label>
          <input
            type="tel"
            class="form-control"
            placeholder="+(245) 451 45123"
            id="phonenumberInput"
            v-model.trim="tarea.phone"
          />
        </div>
      </div>
      <!--end col-->
      <div class="col-6">
        <div class="mb-3">
          <label for="emailidInput" class="form-label">Email Address</label>
          <input
            type="email"
            class="form-control"
            placeholder="example@gamil.com"
            id="emailidInput"
            v-model.trim="tarea.email"
          />
        </div>
      </div>
      <!--end col-->
      <div class="col-12">
        <div class="mb-3">
          <label for="address1ControlTextarea" class="form-label"
            >Address</label
          >
          <input
            type="text"
            class="form-control"
            placeholder="Address 1"
            id="address1ControlTextarea"
            v-model.trim="tarea.address"
          />
        </div>
      </div>
      <!--end col-->
      <div class="col-6">
        <div class="mb-3">
          <label for="citynameInput" class="form-label">City</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your city"
            id="citynameInput"
            v-model.trim="tarea.city"
          />
        </div>
      </div>
      <!--end col-->
      <div class="col-6">
        <div class="mb-3">
          <label for="ForminputState" class="form-label">State</label>
          <select
            id="ForminputState"
            class="form-select"
            v-model.trim="tarea.state"
          >
            <option selected>Choose...</option>
            <option>Coahuila</option>
            <option>Nuevo Leon</option>
            <option>Queretaro</option>
          </select>
        </div>
      </div>
      <!--end col-->
      <div class="col-lg-12">
        <div class="text-end">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->
  </form>
</template>