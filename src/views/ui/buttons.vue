<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";

import "prismjs";
import "prismjs/themes/prism.css";

export default {
  data() {
    return {
      title: "Buttons",
      items: [
        {
          text: "Base UI",
          href: "/",
        },
        {
          text: "Buttons",
          active: true,
        },
      ],
      buttons :[
    {caption: 'Checkbox 1', state: true},
    {caption: 'Checkbox 2', state: false},
    {caption: 'Checkbox 3', state: false},
  ]
    };
  },
  name: "Buttons",
  components: {
    Layout,
    PageHeader,
  },
  mounted() {
    const checkbox = document.getElementsByClassName("code-switcher");
    Array.from(checkbox).forEach((check) => {
      check.addEventListener("change", () => {
        const card = check.closest(".card");
        const preview = card.querySelector(".live-preview");
        const code = card.querySelector(".code-view");
        if (check.checked) {
          // do this
          preview.classList.add("d-none");
          code.classList.remove("d-none");
        } else {
          // do that
          preview.classList.remove("d-none");
          code.classList.add("d-none");
        }
      });
    });
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Default Buttons</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="default" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="default"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use the
              <code>b-button</code> to show the default button style.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <b-button variant="primary" class="waves-effect waves-light"
                  >Primary</b-button
                >

                <b-button
                  variant="secondary"
                  class="dary waves-effect waves-light"
                >
                  Secondary
                </b-button>
                <b-button variant="success" class="ss waves-effect waves-light">
                  Success
                </b-button>
                <b-button variant="info" class="waves-effect waves-light">
                  Info
                </b-button>
                <b-button variant="warning" class="ng waves-effect waves-light">
                  Warning
                </b-button>
                <b-button variant="danger" class="r waves-effect waves-light">
                  Danger
                </b-button>
                <b-button variant="dark" class="waves-effect waves-light">
                  Dark
                </b-button>
                <b-button variant="link" class="waves-effect"> Link </b-button>
                <b-button variant="light" class="waves-effect">
                  Light
                </b-button>
              </div>
            </div>
            <div class="d-none code-view">
              <pre
                class="language-markup"
                style="height: 275px"
              ><code>&lt;!-- Base Buttons --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;btn btn-primary waves-effect waves-light&quot;&gt;Primary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;secondary&quot; class=&quot;waves-effect waves-light&quot;&gt;Secondary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; class=&quot;waves-effect waves-light&quot;&gt;Success&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;info&quot; class=&quot;waves-effect waves-light&quot;&gt;Info&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;warning&quot; class=&quot;waves-effect waves-light&quot;&gt;Warning&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;danger&quot; class=&quot;waves-effect waves-light&quot;&gt;Danger&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;dark&quot; class=&quot;waves-effect waves-light&quot;&gt;Dark&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;light&quot; class=&quot;waves-effect&quot;&gt;Light&lt;/b-button&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Outline Buttons</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="outline-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="outline-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>b-button variant="outline-</code> with the below-mentioned
              variation to create a button with the outline.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <b-button
                  variant="outline-primary"
                  class="waves-effect waves-light"
                >
                  Primary
                </b-button>
                <b-button
                  variant="outline-secondary"
                  class="waves-effect waves-light"
                >
                  Secondary
                </b-button>
                <b-button
                  variant="outline-success"
                  class="waves-effect waves-light"
                >
                  Success
                </b-button>
                <b-button
                  variant="outline-info"
                  class="waves-effect waves-light"
                >
                  Info
                </b-button>
                <b-button
                  variant="outline-warning"
                  class="waves-effect waves-light"
                >
                  Warning
                </b-button>
                <b-button
                  variant="outline-danger"
                  class="waves-effect waves-light"
                >
                  Danger
                </b-button>
                <b-button
                  variant="outline-dark"
                  class="waves-effect waves-light"
                >
                  Dark
                </b-button>
                <b-button variant="outline-light" class="waves-effect">
                  Light
                </b-button>
              </div>
            </div>
            <div class="d-none code-view">
              <pre
                class="language-markup"
                style="height: 275px"
              ><code>&lt;!-- Outline Buttons --&gt;
&lt;b-button variant=&quot;outline-primary&quot; class=&quot;waves-effect waves-light&quot;&gt;Primary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-secondary&quot; class=&quot;waves-effect waves-light&quot;&gt;Secondary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-success&quot; class=&quot;waves-effect waves-light&quot;&gt;Success&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-info&quot; class=&quot; waves-effect waves-light&quot;&gt;Info&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-warning&quot; class=&quot;waves-effect waves-light&quot;&gt;Warning&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-danger&quot; class=&quot;waves-effect waves-light&quot;&gt;Danger&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-dark&quot; class=&quot;waves-effect waves-light&quot;&gt;Dark&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-light&quot; class=&quot;waves-effect&quot;&gt;Light&lt;/b-button&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-21">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Rounded Buttons</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="rounded-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="rounded-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use the
              <code>pill</code> to make a rounded button.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <b-button
                  variant="primary"
                  pill
                  class="waves-effect waves-light"
                >
                  Primary
                </b-button>
                <b-button variant="secondary" pill class="waves-effect">
                  Secondary
                </b-button>
                <b-button
                  variant="success"
                  pill
                  class="waves-effect waves-light"
                >
                  Success
                </b-button>
                <b-button variant="info" pill class="waves-effect waves-light">
                  Info
                </b-button>
                <b-button
                  variant="warning"
                  pill
                  class="waves-effect waves-light"
                >
                  Warning
                </b-button>
                <b-button
                  variant="danger"
                  pill
                  class="waves-effect waves-light"
                >
                  Danger
                </b-button>
                <b-button variant="dark" pill class="waves-effect waves-light">
                  Dark
                </b-button>
                <b-button variant="light" pill class="waves-effect">
                  Light
                </b-button>
              </div>
            </div>
            <div class="d-none code-view">
              <pre
                class="language-markup"
                style="height: 275px"
              ><code>&lt;!-- Rounded Buttons --&gt;
&lt;b-button pill variant=&quot;primary&quot; class=&quot;waves-effect waves-light&quot;&gt;Primary&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;secondary&quot; class=&quot;waves-effect waves-light&quot;&gt;Secondary&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;success&quot; class=&quot;waves-effect waves-light&quot;&gt;Success&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;info&quot; class=&quot;waves-effect waves-light&quot;&gt;Info&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;warning&quot; class=&quot;waves-effect waves-light&quot;&gt;Warning&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;danger&quot; class=&quot;waves-effect waves-light&quot;&gt;Danger&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;dark&quot; class=&quot;waves-effect waves-light&quot;&gt;Dark&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;light&quot; class=&quot;waves-effect&quot;&gt;Light&lt;/b-button&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Soft Buttons</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="soft-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="soft-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>btn-soft-</code> class with the below-mentioned variation to
              create a button with the soft background.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <b-button class="btn btn-soft-primary waves-effect waves-light">
                  Primary
                </b-button>
                <b-button
                  class="btn btn-soft-secondary waves-effect waves-light"
                >
                  Secondary
                </b-button>
                <b-button class="btn btn-soft-success waves-effect waves-light">
                  Success
                </b-button>
                <b-button class="btn btn-soft-info waves-effect waves-light">
                  Info
                </b-button>
                <b-button class="btn btn-soft-warning waves-effect waves-light">
                  Warning
                </b-button>
                <b-button class="btn btn-soft-danger waves-effect waves-light">
                  Danger
                </b-button>
                <b-button class="btn btn-soft-dark waves-effect waves-light">
                  Dark
                </b-button>
              </div>
            </div>
            <div class="d-none code-view">
              <pre
                class="language-markup"
                style="height: 275px"
              ><code>&lt;!-- Soft Buttons --&gt;
&lt;b-button class=&quot;btn-soft-primary waves-effect waves-light&quot;&gt;Primary&lt;/b-button&gt;</code>

<code>&lt;b-button class=&quot;btn-soft-secondary waves-effect&quot;&gt;secondary&lt;/b-button&gt;</code>

<code>&lt;b-button class=&quot;btn-soft-success waves-effect waves-light&quot;&gt;Success&lt;/b-button&gt;</code>

<code>&lt;b-button class=&quot;btn-soft-info waves-effect waves-light&quot;&gt;Info&lt;/b-button&gt;</code>

<code>&lt;b-button class=&quot;btn-soft-warning waves-effect waves-light&quot;&gt;Warning&lt;/b-button&gt;</code>

<code>&lt;b-button class=&quot;btn-soft-danger waves-effect waves-light&quot;&gt;Danger&lt;/b-button&gt;</code>

<code>&lt;b-button class=&quot;btn-soft-dark waves-effect waves-light&quot;&gt;Dark&lt;/b-button&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Gradient Buttons</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="gradient-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="gradient-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>bg-gradient</code>class to create a gradient button.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <b-button
                  variant="primary"
                  class="bg-gradient waves-effect waves-light"
                >
                  Primary
                </b-button>
                <b-button
                  variant="secondary"
                  class="bg-gradient waves-effect waves-light"
                >
                  Secondary
                </b-button>
                <b-button
                  variant="success"
                  class="bg-gradient waves-effect waves-light"
                >
                  Success
                </b-button>
                <b-button
                  variant="info"
                  class="bg-gradient waves-effect waves-light"
                >
                  Info
                </b-button>
                <b-button
                  variant="warning"
                  class="bg-gradient waves-effect waves-light"
                >
                  Warning
                </b-button>
                <b-button
                  variant="danger"
                  class="bg-gradient waves-effect waves-light"
                >
                  Danger
                </b-button>
                <b-button
                  variant="dark"
                  class="bg-gradient waves-effect waves-light"
                >
                  Dark
                </b-button>
                <b-button
                  variant="light"
                  class="bg-gradient waves-effect waves-light"
                >
                  Light
                </b-button>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup"><code>&lt;!-- Gradient Buttons --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Primary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;secondary&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Secondary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Success&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;info&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Info&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;warning&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Warning&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;danger&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Danger&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;dark&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Dark&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;light&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Light&lt;/b-button&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Animation Buttons</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="animation-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="animation-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>bg-animation</code>class to create an animated button.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <b-button
                  variant="primary"
                  class="btn-animation waves-effect waves-light"
                  data-text="Primary"
                >
                  <span>Primary</span>
                </b-button>
                <b-button
                  variant="secondary"
                  class="btn-animation waves-effect waves-light"
                  data-text="Secondary"
                >
                  <span>Secondary</span>
                </b-button>
                <b-button
                  variant="success"
                  class="btn-animation waves-effect waves-light"
                  data-text="Success"
                >
                  <span>Success</span>
                </b-button>
                <b-button
                  variant="info"
                  class="btn-animation waves-effect waves-light"
                  data-text="Info"
                >
                  <span>Info</span>
                </b-button>
                <b-button
                  variant="warning"
                  class="btn-animation waves-effect waves-light"
                  data-text="Warning"
                >
                  <span>Warning</span>
                </b-button>
                <b-button
                  variant="danger"
                  class="btn-animation waves-effect waves-light"
                  data-text="Danger"
                >
                  <span>Danger</span>
                </b-button>
                <b-button
                  variant="dark"
                  class="btn-animation waves-effect waves-light"
                  data-text="Dark"
                >
                  <span>Dark</span>
                </b-button>
              </div>
            </div>
            <div class="d-none code-view">
              <pre
                class="language-markup"
              ><code>&lt;!-- Animation Buttons --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Primary&quot;&gt;&lt;span&gt;Primary&lt;/span&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;secondary&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Secondary&quot;&gt;&lt;span&gt;Secondary&lt;/span&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Success&quot;&gt;&lt;span&gt;Success&lt;/span&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;info&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Info&quot;&gt;&lt;span&gt;Info&lt;/span&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;warning&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Warning&quot;&gt;&lt;span&gt;Warning&lt;/span&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;danger&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Danger&quot;&gt;&lt;span&gt;Danger&lt;/span&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;dark&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Dark&quot;&gt;&lt;span&gt;Dark&lt;/span&gt;&lt;/b-button&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Buttons with Label</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="label-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="label-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>btn-label</code>class to create a button with the label.
            </p>
            <div class="live-preview">
              <div class="row">
                <div class="col-lg-4">
                  <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary btn-label"
                    >
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <i
                            class="ri-user-smile-line label-icon align-middle fs-16 me-2"
                          ></i>
                        </div>
                        <div class="flex-grow-1">Primary</div>
                      </div>
                    </a>
                    <b-button variant="success" class="btn-label">
                      <i
                        class="ri-check-double-line label-icon align-middle fs-16 me-2"
                      ></i>
                      Success
                    </b-button>
                    <b-button variant="warning" class="btn-label">
                      <i
                        class="ri-error-warning-line label-icon align-middle fs-16 me-2"
                      ></i>
                      Warning
                    </b-button>
                  </div>
                </div>
                <!--end col-->
                <div class="col-lg-4">
                  <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                    <b-button variant="primary" class="btn-label" pill>
                      <i
                        class="ri-user-smile-line label-icon align-middle rounded-pill fs-16 me-2"
                      ></i>
                      Primary
                    </b-button>
                    <b-button variant="success" class="btn-label" pill>
                      <i
                        class="ri-check-double-line label-icon align-middle rounded-pill fs-16 me-2"
                      ></i>
                      Success
                    </b-button>
                    <b-button variant="warning" class="btn-label" pill>
                      <i
                        class="ri-error-warning-line label-icon align-middle rounded-pill fs-16 me-2"
                      ></i>
                      Warning
                    </b-button>
                  </div>
                </div>
                <!--end col-->
                <div class="col-lg-4">
                  <div class="d-flex flex-wrap gap-2">
                    <b-button variant="primary" class="btn-label right">
                      <i
                        class="ri-user-smile-line label-icon align-middle fs-16 ms-2"
                      ></i>
                      Primary
                    </b-button>
                    <b-button pill variant="success" class="btn-label right">
                      <i
                        class="ri-check-double-line label-icon align-middle rounded-pill fs-16 ms-2"
                      ></i>
                      Success
                    </b-button>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
            <div class="d-none code-view">
              <pre
                class="language-markup"
                style="height: 275px"
              ><code>&lt;!-- Buttons with Label --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle fs-16 me-2&quot;&gt;&lt;/i&gt; Primary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle fs-16 me-2&quot;&gt;&lt;/i&gt; Success&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;warning&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-error-warning-line label-icon align-middle fs-16 me-2&quot;&gt;&lt;/i&gt; Warning&lt;/b-button&gt;</code>

<code>&lt;!-- Rounded with Label --&gt;
&lt;b-button pill variant=&quot;primary&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle rounded-pill fs-16 me-2&quot;&gt;&lt;/i&gt; Primary&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;success&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle rounded-pill fs-16 me-2&quot;&gt;&lt;/i&gt; Success&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;warning&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-error-warning-line label-icon align-middle rounded-pill fs-16 me-2&quot;&gt;&lt;/i&gt; Warning&lt;/b-button&gt;</code>

<code>&lt;!-- Buttons with Label Right --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;btn-label waves-effect right waves-light&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle fs-16 ms-2&quot;&gt;&lt;/i&gt; Primary&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;success&quot; class=&quot;btn-label waves-effect right waves-light&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle rounded-pill fs-16 ms-2&quot;&gt;&lt;/i&gt; Success&lt;/b-button&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Buttons Sizes</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="size-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="size-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>size="lg"</code> to create a large size button and
              <code>size="sm"</code> to create a small size button.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap align-items-center gap-2">
                <!-- Large Button -->
                <b-button variant="primary" size="lg">
                  Large button
                </b-button>
                <b-button variant="light" size="lg"> Large button </b-button>

                <!-- Small Button -->
                <b-button variant="primary" size="sm">
                  Small button
                </b-button>
                <b-button variant="light" size="sm"> Small button </b-button>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Large Button --&gt;
&lt;b-button variant=&quot;primary&quot; size=&quot;lg&quot;&gt;Large button&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;light&quot; size=&quot;lg&quot;&gt;Large button&lt;/b-button&gt;</code>

<code>&lt;!-- Small Button --&gt;
&lt;b-button variant=&quot;primary&quot; size=&quot;sm&quot;&gt;Small button&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;light&quot; size=&quot;sm&quot;&gt;Small button&lt;/b-button&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Buttons Width</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="width-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="width-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>w-xs,w-sm,w-md,w-lg</code> class to make different sized
              buttons respectively.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <b-button variant="primary" class="w-xs waves-effect waves-light">
                  Xs
                </b-button>
                <b-button variant="danger" class="w-sm waves-effect waves-light">
                  Small
                </b-button>
                <b-button variant="warning" class="w-md waves-effect waves-light">
                  Medium
                </b-button>
                <b-button variant="success" class="w-lg waves-effect waves-light">
                  Large
                </b-button>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Width Button --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;w-xs waves-effect waves-light&quot;&gt;Xs&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;danger&quot; class=&quot;w-sm waves-effect waves-light&quot;&gt;Small&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;warning&quot; class=&quot;w-md waves-effect waves-light&quot;&gt;Medium&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; class=&quot;w-lg waves-effect waves-light&quot;&gt;Large&lt;/b-button&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Buttons Tag</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="tag-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="tag-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>b-button</code> with different HTML elements. (though some
              browsers may apply a slightly different rendering)
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <a
                  class="btn btn-primary waves-effect waves-light"
                  href="#"
                  role="button"
                  >Link</a
                >
                <button
                  class="btn btn-success waves-effect waves-light"
                  type="submit"
                >
                  Button
                </button>
                <input class="btn btn-info" type="button" value="Input" />
                <input class="btn btn-danger" type="submit" value="Submit" />
                <input class="btn btn-warning" type="reset" value="Reset" />
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup"><code>&lt;!-- Tag Button --&gt;
&lt;a class=&quot;btn btn-primary waves-effect waves-light&quot; href=&quot;#&quot; role=&quot;button&quot;&gt;Link&lt;/a&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; class=&quot;waves-effect waves-light&quot; type=&quot;submit&quot;&gt;Button&lt;/b-button&gt;</code>

<code>&lt;input class=&quot;btn btn-info&quot; type=&quot;button&quot; value=&quot;Input&quot;&gt;</code>

<code>&lt;input class=&quot;btn btn-danger&quot; type=&quot;submit&quot; value=&quot;Submit&quot;&gt;</code>

<code>&lt;input class=&quot;btn btn-warning&quot; type=&quot;reset&quot; value=&quot;Reset&quot;&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Buttons Toggle Status</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="toggle-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="toggle-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>data-bs-toggle="button"</code> to toggle a button’s active
              state.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <b-button
                  variant="primary" class="waves-effect waves-light"
                  data-bs-toggle="button"
                  aria-pressed="false"
                >
                  Single toggle
                </b-button>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Toggle Button Status --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;waves-effect waves-light&quot; data-bs-toggle=&quot;button&quot; aria-pressed=&quot;false&quot;&gt;
Single toggle
&lt;/b-button&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Buttons Grid</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="grid-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="grid-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>block</code> class to create a full-width block button.
            </p>
            <div class="live-preview">
              <div class="d-grid gap-2">
                <b-button variant="primary" block>Button</b-button>
                <b-button variant="primary" block>Button</b-button>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Buttons Grid --&gt;
&lt;div class=&quot;d-grid gap-2&quot; &gt;
&lt;b-button variant=&quot;primary&quot;&gt;Button&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Button&lt;/b-button&gt;
&lt;/div&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">
              Checkbox & Radio Buttons
            </h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="checkbox-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="checkbox-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Combine button-like
              <code>checkbox and radio</code>
              <a href="https://getbootstrap.com/docs/5.1/forms/checks-radios/"
                >toggle buttons</a
              >
              into a seamless looking button group.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap align-items-center gap-2">
 <b-button-group>
      <b-button
        v-for="(btn, idx) in buttons"
        :key="idx"
        v-model:pressed="btn.state"
        variant="primary"
      >
        {{ btn.caption }}
      </b-button>
    </b-button-group>

                

                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    checked
                  />
                  <label class="btn btn-outline-secondary mb-0" for="btnradio1"
                    >Radio 1</label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio2"
                  />
                  <label class="btn btn-outline-secondary mb-0" for="btnradio2"
                    >Radio 2</label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio3"
                  />
                  <label class="btn btn-outline-secondary mb-0" for="btnradio3"
                    >Radio 3</label
                  >
                </div>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Checkbox Buttons --&gt;
&lt;b-button-group role=&quot;group&quot; aria-label=&quot;Basic checkbox toggle button group&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck1&quot; autocomplete=&quot;off&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck1&quot;&gt;Checkbox 1&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck2&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck2&quot;&gt;Checkbox 2&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck3&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck3&quot;&gt;Checkbox 3&lt;/label&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;!-- Radio Buttons --&gt;
&lt;b-button-group role=&quot;group&quot; aria-label=&quot;Basic radio toggle button group&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio1&quot; autocomplete=&quot;off&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio1&quot;&gt;Radio 1&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio2&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio2&quot;&gt;Radio 2&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio3&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio3&quot;&gt;Radio 3&lt;/label&gt;
&lt;/b-button-group&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Buttons Group</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="group-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="group-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use the
              <code>-button-group</code> in the parent class to wrap a series
              of buttons.
            </p>
            <div class="live-preview">
              <div class="row">
                <div class="col-sm-6">

                  <b-button-group>
                    <b-button variant="primary">Left</b-button>
                    <b-button variant="primary">
                      Middle
                    </b-button>
                    <b-button variant="primary">Right</b-button>
                  </b-button-group>
                </div>
                <!--end col-->
                <div class="col-sm-6">
                   <b-button-group class="mt-4 mt-sm-0"> 

 <b-button variant="light" class="btn-icon">
                      <i class="ri-align-right"></i>
                    </b-button>
                    <b-button variant="light" class="btn-icon">
                      <i class="ri-align-center"></i>
                    </b-button>
                    <b-button variant="light" class="btn-icon">
                      <i class="ri-align-left"></i>
                    </b-button>
                  </b-button-group>

                
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Buttons Group --&gt;
&lt;b-button-group role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Left&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Middle&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group class=&quot;mt-4 mt-md-0&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;b-button variant=&quot;light&quot; &gt;&lt;i class=&quot;ri-align-right&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot; &gt;&lt;i class=&quot;ri-align-center&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot; &gt;&lt;i class=&quot;ri-align-left&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;/b-button-group&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Icon Buttons</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="icon-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="icon-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>btn-icon</code> class to wrap icon in button
            </p>
            <div class="live-preview">
              <div class="row">
                <div class="col-sm-6">
                  <div class="hstack gap-2">
                    <b-button
                      variant="primary" class="btn-icon waves-effect waves-light"
                    >
                      <i class="ri-map-pin-line"></i>
                    </b-button>
                    <b-button
                      variant="danger" class="btn-icon waves-effect waves-light"
                    >
                      <i class="ri-delete-bin-5-line"></i>
                    </b-button>
                    <b-button
                      variant="success" class="btn-icon waves-effect waves-light"
                    >
                      <i class="ri-check-double-line"></i>
                    </b-button>
                    <b-button
                      variant="light" class="btn-icon waves-effect"
                    >
                      <i class="ri-brush-2-fill"></i>
                    </b-button>
                  </div>
                </div>
                <!--end col-->
                <div class="col-sm-6">
                  <div class="hstack gap-2 mt-4 mt-sm-0">
                    <b-button
                      variant="outline-primary" class="btn-icon waves-effect waves-light"
                    >
                      <i class="ri-24-hours-fill"></i>
                    </b-button>
                    <b-button
                      variant="outline-danger" class="btn-icon waves-effect waves-light"
                    >
                      <i class="ri-customer-service-2-line"></i>
                    </b-button>
                    <b-button
                      variant="outline-success" class="btn-icon waves-effect waves-light"
                    >
                      <i class="ri-mail-send-line"></i>
                    </b-button>
                    <b-button
                      variant="outline-warning" class="btn-icon waves-effect waves-light"
                    >
                      <i class="ri-menu-2-line"></i>
                    </b-button>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Buttons Group --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-map-pin-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button variant=&quot;danger&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button variant=&quot;success&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-check-double-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button variant=&quot;light&quot; class=&quot;btn-icon waves-effect&quot;&gt;&lt;i class=&quot;ri-brush-2-fill&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-primary &quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-24-hours-fill&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button variant=&quot;outline-danger&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-customer-service-2-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button variant=&quot;outline-success&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-mail-send-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button variant=&quot;outline-warning&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-menu-2-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Buttons Toolbar</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="toolbar-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="toolbar-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>btn-toolbar</code> class to combine sets of button groups
              into more complex components.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-3">

<b-button-toolbar>
     <b-button-group class="me-2">
    <b-button variant="light">1</b-button>
                    <b-button variant="light">2</b-button>
                    <b-button variant="light">3</b-button>
                    <b-button variant="light">4</b-button>
    </b-button-group>
     <b-button-group class="me-2">
       <b-button variant="light">5</b-button>
                    <b-button variant="light">6</b-button>
                    <b-button variant="light">7</b-button>
     </b-button-group>
<b-button-group class="me-2">
     <b-button variant="light">8</b-button>
</b-button-group>
</b-button-toolbar>

                
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Buttons Toolbar --&gt;
&lt;b-button-toolbar role=&quot;toolbar&quot; aria-label=&quot;Toolbar with button groups&quot;&gt;
&lt;b-button-group class=&quot;me-2&quot; role=&quot;group&quot; aria-label=&quot;First group&quot;&gt;
&lt;b-button variant=&quot;light&quot;&gt;1&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;2&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;3&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;4&lt;/b-button&gt;
&lt;/b-button-group&gt;
&lt;b-button-group class=&quot;me-2&quot; role=&quot;group&quot; aria-label=&quot;Second group&quot;&gt;
&lt;b-button variant=&quot;light&quot;&gt;5&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;6&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;7&lt;/b-button&gt;
&lt;/b-button-group&gt;
&lt;b-button-group role=&quot;group&quot; aria-label=&quot;Third group&quot;&gt;
&lt;b-button variant=&quot;light&quot;&gt;8&lt;/b-button&gt;
&lt;/b-button-group&gt;
&lt;/b-button-toolbar&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Button Group Sizing</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="group-size-button" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="group-size-button"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Use
              <code>b-button-group size="</code> class with the below-mentioned variation
              to set the different sizes of button groups.
            </p>

            <div class="live-preview">
              <div class="d-flex flex-wrap align-items-center gap-2">

 <b-button-group size="lg" class="mt-2">
          <b-button variant="primary">Left</b-button>
                  <b-button variant="primary">Middle</b-button>
                  <b-button variant="primary">Right</b-button>
      </b-button-group>

     <b-button-group size="lg" class="mt-2">
          <b-button variant="light">Left</b-button>
                  <b-button variant="light">Middle</b-button>
                  <b-button variant="light">Right</b-button>
      </b-button-group>

     <b-button-group size="sm" class="mt-2">
          <b-button variant="secondary">Left</b-button>
                  <b-button variant="secondary">Middle</b-button>
                  <b-button variant="secondary">Right</b-button>
      </b-button-group>

                
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Group Buttons Sizing --&gt;
&lt;b-button-group size=&quot;lg&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Left&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Middle&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;</code> 

<code>&lt;b-button-group size=&quot;md&quot; class=&quot;mt-2&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;b-button variant=&quot;light&quot;&gt;Left&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;Middle&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group size=&quot;sm&quot; class=&quot;mt-2&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;b-button variant=&quot;secondary&quot;&gt;Left&lt;/b-button&gt;
&lt;b-button variant=&quot;secondary&quot;&gt;Middle&lt;/b-button&gt;
&lt;b-button variant=&quot;secondary&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col+-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Vertical Variation</h4>
            <div class="flex-shrink-0">
              <div
                class="form-check form-switch form-switch-right form-switch-md"
              >
                <label for="vertical-variation" class="form-label text-muted"
                  >Show Code</label
                >
                <input
                  class="form-check-input code-switcher"
                  type="checkbox"
                  id="vertical-variation"
                />
              </div>
            </div>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <p class="text-muted">
              Make a set of buttons appear
              <code>vertically</code> stacked .Split button dropdowns are not
              supported here.
            </p>
            <div class="live-preview">
              <div class="row">
                <div class="col-auto">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Button group with nested dropdown"
                  >
                    <b-button variant="primary">1</b-button>
                    <b-button variant="primary">2</b-button>
                    <div class="btn-group" role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        variant="primary"
                        class="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <li>
                          <a class="dropdown-item" href="#">Dropdown link</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">Dropdown link</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!--end col-->
                <div class="col-auto">
                  <div
                    class="btn-group-vertical"
                    role="group"
                    aria-label="Vertical button group"
                  >
                    <b-button class="btn btn-light">Button</b-button>
                    <div class="btn-group" role="group">
                      <b-button
                        variant="light"
                        id="btnGroupVerticalDrop1"
                        
                        class="btn btn-light dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </b-button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop1"
                      >
                        <a class="dropdown-item" href="#">Dropdown link</a>
                        <a class="dropdown-item" href="#">Dropdown link</a>
                      </div>
                    </div>
                    <b-button variant="light">Button</b-button>
                    <b-button variant="light">Button</b-button>
                  </div>
                </div>
                <div class="col-auto">
                  <div
                    class="btn-group-vertical"
                    role="group"
                    aria-label="Vertical radio toggle button group"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      name="vbtn"
                      id="vbtn-radio1"
                      checked
                    />
                    <label class="btn btn-outline-secondary" for="vbtn-radio1"
                      >Radio 1</label
                    >
                    <input
                      type="radio"
                      class="btn-check"
                      name="vbtn"
                      id="vbtn-radio2"
                    />
                    <label class="btn btn-outline-secondary" for="vbtn-radio2"
                      >Radio 2</label
                    >
                    <input
                      type="radio"
                      class="btn-check"
                      name="vbtn"
                      id="vbtn-radio3"
                    />
                    <label class="btn btn-outline-secondary" for="vbtn-radio3"
                      >Radio 3</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Vertical Variation --&gt;
&lt;b-button-group role=&quot;group&quot; aria-label=&quot;Button group with nested dropdown&quot;&gt;
&lt;b-button variant=&quot;primary&quot;&gt;1&lt;/button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;2&lt;/button&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot;&gt;

&lt;b-dropdown right text=&quot;Dropdown&quot; id=&quot;btnGroupDrop1&quot; class=&quot;btn btn-primary&quot;&gt;
&lt;b-dropdown-item&gt;Dropdown link&lt;/a&gt;&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&gt;Dropdown link&lt;/a&gt;&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group vertical role=&quot;group&quot; &gt;
&lt;b-button variant=&quot;light&quot; &gt;Button&lt;/b-button&gt;
&lt;b-button-group role=&quot;group&quot;&gt;
&lt;b-dropdown right text=&quot;Dropdown&quot; id=&quot;btnGroupDrop1&quot; class=&quot;btn btn-light&quot;&gt;
&lt;b-dropdown-item&gt;Dropdown link&lt;/a&gt;&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&gt;Dropdown link&lt;/a&gt;&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;
&lt;b-button variant=&quot;light&quot;&gt;Button&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;Button&lt;/b-button&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group vertical role=&quot;group&quot; aria-label=&quot;Vertical radio toggle button group&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio1&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio1&quot;&gt;Radio 1&lt;/label&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio2&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio2&quot;&gt;Radio 2&lt;/label&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio3&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio3&quot;&gt;Radio 3&lt;/label&gt;
&lt;/b-button-group&gt;</code></pre>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!--end col-->
    </div>
    <!--end row-->
  </Layout>
</template>
