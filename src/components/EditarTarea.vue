<script>
import { mapState, mapActions } from "vuex";
import _ from 'lodash'

export default {
  computed: {
    ...mapState("invoice", {
      tarea: (state) => _.cloneDeep(state.tarea),
    }),
  },
  methods: {
    ...mapActions("invoice", ["setTarea", "updateTarea"]),
  },
  created() {
    this.setTarea(this.$route.params.id);
  },
};
</script>

<template>
  <div class="col-xl-9 m-5 col-lg-8">
    <div>
      <div class="card">
        <div class="card-header border-0">
          <div class="row g-4">
            <div class="col-sm-auto">
              <div>
                <form @submit.prevent="updateTarea(tarea)">
                  <div class="row">
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label">First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your firstname"
                          v-model.trim="tarea.firstname"
                        />
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label">Last Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your lastname"
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
                        <label for="address1ControlTextarea" class="form-label">Address</label>
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
                        <select id="ForminputState" class="form-select" v-model.trim="tarea.state">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>