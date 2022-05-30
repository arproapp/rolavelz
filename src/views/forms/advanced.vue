<script>
import Toggle from "@vueform/toggle";

import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
  page: {
    title: "Advanced",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Form Advanced",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Form Advanced",
          active: true,
        },
      ],
      value: true,
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      maxlen: "",
      data: "",
      option: "",
      textarea: "",
      defaultNull: null,
      defaultspinval: 1,
    };
  },
  components: {
    Toggle,
    Layout,
    PageHeader,
  },
  mounted() {
    setTimeout(() => {
      this.isData();
    }, 100);
  },
  methods: {
    isData() {
      const plus = document.getElementsByClassName("plus");
      const minus = document.getElementsByClassName("minus");

      if (plus) {
        Array.prototype.forEach.call(plus, (e) => {
          e.addEventListener("click", (event) => {
            let par = event.target.closest(".input-step");
            par.getElementsByClassName("product-quantity")[0].value++;
          });
        });
      }

      if (minus) {
        Array.prototype.forEach.call(minus, (e) => {
          e.addEventListener("click", (event) => {
            let par = event.target.closest(".input-step");
            if (par.getElementsByClassName("product-quantity")[0].value > 0)
              par.getElementsByClassName("product-quantity")[0].value--;
          });
        });
      }
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-0">Form Input Spin</h4>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div>
              <div class="row gy-4">
                <div class="col-sm-6">
                  <div>
                    <h5 class="fs-13 fw-medium text-muted">Default</h5>

                    <div class="input-step">
                      <button type="button" class="minus">–</button>
                      <input
                        type="number"
                        class="product-quantity"
                        value="2"
                        min="0"
                        max="100"
                        readonly
                      />
                      <button type="button" class="plus">+</button>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div>
                    <h5 class="fs-13 fw-medium text-muted">Light</h5>
                    <div class="input-step light">
                      <button type="button" class="minus">–</button>
                      <input
                        type="number"
                        class="product-quantity"
                        value="5"
                        min="0"
                        max="100"
                        readonly
                      />
                      <button type="button" class="plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end row -->

              <div class="mt-4 pt-2">
                <div class="row gy-4">
                  <div class="col-sm-6">
                    <div>
                      <h5 class="fs-13 fw-medium text-muted">
                        Default (Full width)
                      </h5>
                      <div class="input-step full-width">
                        <button type="button" class="minus">–</button>
                        <input
                          type="number"
                          class="product-quantity"
                          value="4"
                          min="0"
                          max="100"
                          readonly
                        />
                        <button type="button" class="plus">+</button>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div>
                      <h5 class="fs-13 fw-medium text-muted">
                        Light (Full width)
                      </h5>
                      <div class="input-step full-width light">
                        <button type="button" class="minus">–</button>
                        <input
                          type="number"
                          class="product-quantity"
                          value="6"
                          min="0"
                          max="100"
                          readonly
                        />
                        <button type="button" class="plus">+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end row -->
              </div>

              <div class="row mt-4 pt-2">
                <h5 class="fs-13 fw-medium text-muted">Colored</h5>
                <div class="d-flex flex-wrap align-items-start gap-2">
                  <div class="input-step step-primary">
                    <button type="button" class="minus">–</button>
                    <input
                      type="number"
                      class="product-quantity"
                      value="6"
                      min="0"
                      max="100"
                      readonly
                    />
                    <button type="button" class="plus">+</button>
                  </div>
                  <div class="input-step step-secondary">
                    <button type="button" class="minus">–</button>
                    <input
                      type="number"
                      class="product-quantity"
                      value="1"
                      min="0"
                      max="100"
                      readonly
                    />
                    <button type="button" class="plus">+</button>
                  </div>
                  <div class="input-step step-success">
                    <button type="button" class="minus">–</button>
                    <input
                      type="number"
                      class="product-quantity"
                      value="3"
                      min="0"
                      max="100"
                      readonly
                    />
                    <button type="button" class="plus">+</button>
                  </div>
                  <div class="input-step step-info">
                    <button type="button" class="minus">–</button>
                    <input
                      type="number"
                      class="product-quantity"
                      value="1"
                      min="0"
                      max="100"
                      readonly
                    />
                    <button type="button" class="plus">+</button>
                  </div>
                  <div class="input-step step-warning">
                    <button type="button" class="minus">–</button>
                    <input
                      type="number"
                      class="product-quantity"
                      value="4"
                      min="0"
                      max="100"
                      readonly
                    />
                    <button type="button" class="plus">+</button>
                  </div>
                  <div class="input-step step-danger">
                    <button type="button" class="minus">–</button>
                    <input
                      type="number"
                      class="product-quantity"
                      value="5"
                      min="0"
                      max="100"
                      readonly
                    />
                    <button type="button" class="plus">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bootstrap MaxLength</h4>

            <label class="mb-1 fw-medium">Default usage</label>
            <p class="text-muted font-13">
              The badge will show up by default when the remaining chars are 10
              or less:
            </p>
            <input
              v-model="maxlen"
              type="text"
              class="form-control"
              :maxlength="10"
            />
            <div v-if="maxlen" class="text-center">
              <p
                class="badge position-absolute"
                :class="{
                  'bg-success': maxlen.length !== 10,
                  'bg-danger': maxlen.length === 10,
                }"
              >
                {{ maxlen.length }} / 10
              </p>
            </div>

            <div>
              <label class="mb-1 mt-3 fw-medium">Threshold value</label>
              <p class="text-muted font-13">
                Do you want the badge to show up when there are 20 chars or
                less? Use the
                <code>threshold</code>
                option:
              </p>
              <input
                v-model="data"
                type="text"
                :maxlength="25"
                class="form-control"
              />
              <div class="text-center">
                <p
                  v-if="data"
                  class="badge position-absolute"
                  :class="{
                    'bg-success': data.length !== 25,
                    'bg-danger': data.length === 25,
                  }"
                >
                  {{ data.length }} / 25
                </p>
              </div>
            </div>

            <div>
              <label class="mb-1 mt-3 fw-medium">All the options</label>
              <p class="text-muted font-13">
                Please note: if the
                <code>alwaysShow</code> option is enabled, the
                <code>threshold</code> option is ignored.
              </p>
              <input
                v-model="option"
                type="text"
                class="form-control"
                :maxlength="25"
              />
              <div class="text-center">
                <p
                  v-if="option"
                  class="badge position-absolute"
                  :class="{
                    'bg-success': option.length !== 25,
                    'bg-danger': option.length === 25,
                  }"
                >
                  You typed
                  {{ option.length }} out of 25 chars available.
                </p>
              </div>
            </div>

            <div>
              <label class="mb-1 mt-3 fw-medium">Textarea</label>
              <p class="text-muted font-13">
                Bootstrap maxlength supports textarea as well as inputs. Even on
                old IE.
              </p>
              <textarea
                v-model="textarea"
                class="form-control"
                :maxlength="225"
                rows="3"
                placeholder="This textarea has a limit of 225 chars."
              ></textarea>
              <div class="text-center">
                <p
                  v-if="textarea"
                  class="badge position-absolute"
                  :class="{
                    'bg-success': textarea.length !== 225,
                    'bg-danger': textarea.length === 225,
                  }"
                >
                  {{ textarea.length }} / 225
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-1">Switch</h4>

            <p class="text-muted font-13">Use <code>@vueform/toggle</code> for below switches.</p>

            <div class="card-body">
              <Toggle v-model="value" class="toggle-red me-2" />
              <Toggle v-model="value1" class="toggle-blue me-2" />
              <Toggle
                v-model="value2"
                class="toggle-primary me-2"
                on-label="On"
                off-label="Off"
              />
              <Toggle v-model="value3" class="toggle-warning me-2" />
              <Toggle v-model="value4" class="toggle-info" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
