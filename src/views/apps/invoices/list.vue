<script>
import { FileTextIcon ,CheckSquareIcon ,ClockIcon, XOctagonIcon} from "@zhuowenli/vue-feather-icons";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import Swal from "sweetalert2";

import animationData from "@/components/widgets/msoeawqm.json";
import animationData1 from "@/components/widgets/gsqxdxog.json";
import Lottie from "@/components/widgets/lottie.vue";

export default {
  page: {
    title: "Invoice List",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Invoice List",
      items: [
        {
          text: "Velzon",
          href: "/",
        },
        {
          text: "Invoice List",
          active: true,
        },
      ],
       config: {
        mode: "range",
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
      },
      date: null,
       page: 1,
      perPage: 9,
      pages: [],
      value:null,
       searchQuery: null,
        invoiceWidgets : [
    {
        id: 1,
        label: "Invoices Sent",
        percentage: "+89.24 %",
        percentageClass: "success",
        icon: "ri-arrow-right-up-line",
        counter: "559.25",
        badge: "2,258",
        caption: "Invoices sent",
        feaIcon: "file-text",
        decimals: 1,
        prefix: "$",
        suffix: "k"
    },
    {
        id: 2,
        label: "Paid Invoices",
        percentage: "+8.09 %",
        percentageClass: "danger",
        icon: "ri-arrow-right-down-line",
        counter: "409.66",
        badge: "1,958",
        caption: "Paid by clients",
        feaIcon: "check-square",
        decimals: 2,
        prefix: "$",
        suffix: "k"
    },
    {
        id: 3,
        label: "Unpaid Invoices",
        percentage: "+9.01 %",
        percentageClass: "danger",
        icon: "ri-arrow-right-down-line",
        counter: "136.98",
        badge: "338",
        caption: "Unpaid by clients",
        feaIcon: "clock",
        decimals: 2,
        prefix: "$",
        suffix: "k"
    },
    {
        id: 4,
        label: "Cancelled Invoices",
        percentage: "+7.55 %",
        percentageClass: "success",
        icon: "ri-arrow-right-up-line",
        counter: "84.2",
        badge: "502",
        caption: "Cancelled by clients",
        feaIcon: "x-octagon",
        decimals: 1,
        prefix: "$",
        suffix: "k"
    },
        ],
        invoiceList: [
          {
                id: 1,
                invoiceId: "#VL25000351",
                img: require("@/assets/images/users/avatar-2.jpg"),
                name: "Diana Kohler",
                email: "dianakohler@velzon.com",
                country: "Brazil",
                date: "06 Apr, 2021",
                time: "09:58PM",
                amount: "$875",
                status: "Paid",
                statusClass: "success",
            },
            {
                id: 2,
                invoiceId: "#VL25000352",
                img: require("@/assets/images/users/avatar-3.jpg"),
                name: "James Morris",
                email: "jamesmorris@velzon.com",
                country: "Germany",
                date: "17 Dec, 2021",
                time: "1:24AM",
                amount: "$451.00",
                status: "Unpaid",
                statusClass: "warning",
            },
            {
                id: 3,
                invoiceId: "#VL25000353",
                img: require("@/assets/images/users/avatar-4.jpg"),
                name: "Dawn Koh",
                email: "dawnkoh@velzon.com",
                country: "United Kingdom",
                date: "29 Nov, 2021",
                time: "7:20PM",
                amount: "$984.98",
                status: "Paid",
                statusClass: "success",
            },
            {
                id: 4,
                invoiceId: "#VL25000354",
                img: require("@/assets/images/users/avatar-5.jpg"),
                name: "Tonya Noble",
                email: "tonynoble@velzon.com",
                country: "Spain",
                date: "22 Nov, 2021",
                time: "10:20PM",
                amount: "$742.12",
                status: "Cancel",
                statusClass: "danger",
            },
            {
                id: 5,
                invoiceId: "#VL25000355",
                img: require("@/assets/images/users/avatar-6.jpg"),
                name: "David Nichols",
                email: "davidnochols@velzon.com",
                country: "United States of America",
                date: "11 Nov, 2021",
                time: "12:37AM",
                amount: "$2415.00",
                status: "Unpaid",
                statusClass: "warning",
            },
            {
                id: 6,
                invoiceId: "#VL25000356",
                img: require("@/assets/images/users/avatar-7.jpg"),
                name: "Joseph Payten",
                email: "josephpayten@velzon.com",
                country: "France",
                date: "03 Nov, 2021",
                time: "12:29AM",
                amount: "$7451.02",
                status: "Paid",
                statusClass: "success",
            },
            {
                id: 7,
                invoiceId: "#VL25000357",
                name: "Mary Rucker",
                email: "maryrucker@velzon.com",
                country: "United Kingdom",
                date: "27 Oct, 2021",
                time: "01:46PM",
                amount: "$327.36",
                status: "Cancel",
                statusClass: "danger",
            },
            {
                id: 8,
                invoiceId: "#VL25000358",
                name: "Alexis Clarke",
                email: "alexisclarke@velzon.com",
                country: "Spain",
                date: "18 Oct, 2021",
                time: "04:55PM",
                amount: "$879.78",
                status: "Unpaid",
                statusClass: "warning",
            },
            {
                id: 9,
                invoiceId: "#VL25000359",
                img: require("@/assets/images/users/avatar-8.jpg"),
                name: "Ryan Cowie",
                email: "rayancowie@velzon.com",
                country: "France",
                date: "07 Oct, 2021",
                time: "06:33AM",
                amount: "$879.00",
                status: "Refund",
                statusClass: "primary",
            },
            {
                id: 10,
                invoiceId: "#VL25000360",
                img: require("@/assets/images/users/avatar-4.jpg"),
                name: "Christina Maier",
                email: "christinamaier@velzon.com",
                country: "United States of America",
                date: "13 Sep, 2021",
                time: "11:59AM",
                amount: "$1624.18",
                status: "Unpaid",
                statusClass: "warning",
            },
            {
                id: 11,
                invoiceId: "#VL25000361",
                img: require("@/assets/images/users/avatar-2.jpg"),
                name: "Jennifer Winkel",
                email: "jenniferwinkal@velzon.com",
                country: "Brazil",
                date: "15 Aug, 2021",
                time: "01:05PM",
                amount: "$214.67",
                status: "Cancel",
                statusClass: "danger",
            },
            {
                id: 12,
                invoiceId: "#VL25000362",
                name: "Erik Peters",
                email: "erikpeters@velzon.com",
                country: "Mexico",
                date: "07 Aug, 2021",
                time: "07:46PM",
                amount: "$1798.71",
                status: "Active",
                statusClass: "success",
            },
        ],
         defaultOptions: { animationData: animationData },
         defaultOptions1: { animationData: animationData1 },
    };
  },
  components: {
    Layout,
    PageHeader,
    Multiselect,
    lottie: Lottie,
    flatPickr,
    FileTextIcon ,CheckSquareIcon ,ClockIcon, XOctagonIcon
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.invoiceList);
    },
    resultQuery(){
      if(this.searchQuery){
        const search = this.searchQuery.toLowerCase();
      return this.displayedPosts.filter((data)=> {
       return data.invoiceId.toLowerCase().includes(search) ||
    data.name.toLowerCase().includes(search) ||
    data.email.toLowerCase().includes(search) ||
    data.country.toLowerCase().includes(search) ||
    data.date.toLowerCase().includes(search) ||
    data.time.toLowerCase().includes(search) ||
    data.amount.toLowerCase().includes(search) ||
    data.status.toLowerCase().includes(search);
    
      })
      }else{
        return this.displayedPosts;
      }
    }
  },
  watch: {
    invoiceList() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
  methods: {
    deletedata(event){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#f46a6a",
        confirmButtonColor: "#34c38f",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
        this.invoiceList.splice(this.invoiceList.indexOf(event), 1);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });      
    },
    deleteMultiple() {
      let ids_array = [];
      var items = document.getElementsByName("chk_child");
      items.forEach(function (ele) {
        if (ele.checked == true) {
          var trNode = ele.parentNode.parentNode.parentNode;
          var id = trNode.querySelector(".id a").innerHTML;
          ids_array.push(id);
        }
      });
      if (typeof ids_array !== "undefined" && ids_array.length > 0) {
        if (confirm("Are you sure you want to delete this?")) {
			var cusList = this.invoiceList;
			ids_array.forEach(function (id) {
				cusList = cusList.filter(function (orders) {
				return orders.invoiceId != id;
				});
			});
			this.invoiceList = cusList;
			document.getElementById("checkAll").checked = false;
			var itemss = document.getElementsByName("chk_child");
			itemss.forEach(function (ele) {
				if (ele.checked == true) {
					ele.checked = false
					ele.closest("tr").classList.remove("table-active");
				}
			});
        } else {
          return false;
        }
      } else {
        Swal.fire({
          title: "Please select at least one checkbox",
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false,
          showCloseButton: true,
        });
      }
    },
    setPages() {
      let numberOfPages = Math.ceil(this.invoiceList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(invoiceList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return invoiceList.slice(from, to);
    },
  },
  mounted() {
    var checkAll = document.getElementById("checkAll");
    if (checkAll) {
      checkAll.onclick = function () {
        var checkboxes = document.querySelectorAll(
          '.form-check-all input[type="checkbox"]'
        );
        if (checkAll.checked == true) {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
            checkbox.closest("tr").classList.add("table-active");
          });
        } else {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
            checkbox.closest("tr").classList.remove("table-active");
          });
        }
      };
    }
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
      <div class="row">
        <div class="col-xl-3 col-md-6" v-for="(item, index) of invoiceWidgets" :key="index">
            <!-- card -->
            <div class="card card-animate">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="flex-grow-1">
                            <p class="text-uppercase fw-medium text-muted mb-0">{{item.label}}</p>
                        </div>
                        <div class="flex-shrink-0">
                            <h5 :class="`text-${item.percentageClass} fs-14 mb-0`">
                                <i :class="`${item.icon} fs-13 align-middle`"></i> {{item.percentage}}
                            </h5>
                        </div>
                    </div>
                    <div class="d-flex align-items-end justify-content-between mt-4">
                        <div>
                            <h4 class="fs-22 fw-semibold ff-secondary mb-4">{{item.prefix}}{{item.counter}}{{item.suffix}}</h4>
                            <span class="badge bg-warning me-1">{{item.badge}}</span> <span class="text-muted"> {{item.caption}}</span>
                        </div>
                        <div class="avatar-sm flex-shrink-0">
                            <span class="avatar-title bg-light rounded fs-3">
                                <template v-if="item.feaIcon == 'file-text'">
                                    <FileTextIcon class="text-success icon-dual-success"/>
                                </template>
                                <template v-if="item.feaIcon == 'check-square'">
                                    <CheckSquareIcon class="text-success icon-dual-success"/>
                                </template>
                                <template v-if="item.feaIcon == 'clock'">
                                    <ClockIcon class="text-success icon-dual-success"/>
                                </template>
                                <template v-if="item.feaIcon == 'x-octagon'">
                                    <XOctagonIcon class="text-success icon-dual-success"/>
                                </template>
                            </span>
                        </div>
                    </div>
                </div><!-- end card body -->
            </div><!-- end card -->
        </div><!-- end col -->
    </div> <!-- end row-->

      <div class="row">
          <div class="col-lg-12">
              <div class="card" id="invoiceList">
                  <div class="card-header border-0">
                      <div class="d-flex align-items-center">
                          <h5 class="card-title mb-0 flex-grow-1">Invoices</h5>
                          <div class="flex-shrink-0">
                              <button class="btn btn-soft-danger me-1" @click="deleteMultiple">
                                <i class="ri-delete-bin-2-line"></i>
                                </button>
                              <router-link to="/invoices/create" class="btn btn-danger"><i class="ri-add-line align-bottom me-1"></i> Create Invoice</router-link>
                          </div>
                      </div>
                  </div>
                  <div class="card-body bg-soft-light border border-dashed border-start-0 border-end-0">
                      <form>
                          <div class="row g-3">
                              <div class="col-xxl-5 col-sm-12">
                                  <div class="search-box">
                                      <input type="text"
                                       class="form-control search bg-light border-light"
                                          placeholder="Search for customer, email, country, status or something...">
                                      <i class="ri-search-line search-icon"></i>
                                  </div>
                              </div>
                              <!--end col-->
                              <div class="col-xxl-3 col-sm-4">
                                
                                <flat-pickr
                    v-model="date"
                    :config="config"
                    class="form-control bg-light border-light"
                     placeholder="Select date"
                  ></flat-pickr>
                              </div>
                              <!--end col-->
                              <div class="col-xxl-3 col-sm-4">
                                  <div class="input-light">
                                     
  <Multiselect class="form-control"
                          v-model="value"
                          :close-on-select="true"
                          :searchable="true"
                          :create-option="true"
                          :options="[
                            { value: 'all', label: 'all' },
                            { value: 'Unpaid', label: 'Unpaid' },
                            { value: 'Paid', label: 'Paid' },
                            { value: 'Cancel', label: 'Cancel' },
                            { value: 'Refund', label: 'Refund' },
                          ]"
                        />

                                  </div>
                              </div>
                              <!--end col-->
                              
                              <div class="col-xxl-1 col-sm-4">
                                  <button type="button" class="btn btn-primary w-100" onclick="SearchData();"> 
                                      <i class="ri-equalizer-fill me-1 align-bottom"></i> Filters
                                  </button>
                              </div>
                              <!--end col-->
                          </div>
                          <!--end row-->
                      </form>
                  </div>
                  <div class="card-body">
                      <div>
                          <div class="table-responsive table-card">
                              <table class="table align-middle table-nowrap" id="invoiceTable">
                                  <thead class="text-muted">
                                      <tr>
                                          <th scope="col" style="width: 50px;">
                                              <div class="form-check">
                                                  <input class="form-check-input" type="checkbox" id="checkAll" value="option">
                                              </div>
                                          </th>
                                          <th class="sort text-uppercase" data-sort="invoice_id">ID</th>
                                          <th class="sort text-uppercase" data-sort="customer_name">Customer</th>
                                          <th class="sort text-uppercase" data-sort="email">Email</th>
                                          <th class="sort text-uppercase" data-sort="country">Country</th>
                                          <th class="sort text-uppercase" data-sort="date">Date</th>
                                          <th class="sort text-uppercase" data-sort="invoice_amount">Amount</th>
                                          <th class="sort text-uppercase" data-sort="status">Payment Status</th>
                                          <th class="sort text-uppercase" data-sort="action">Action</th>
                                      </tr>
                                  </thead>
                                  <tbody class="list form-check-all">
                                      <tr v-for="(item, index) of resultQuery" :key="index">
                                          <th scope="row">
                                              <div class="form-check">
                                                  <input class="form-check-input" type="checkbox" name="chk_child" value="option1">
                                              </div>
                                          </th>
                                          <td class="id"><router-link to="/invoices/detail" class="fw-medium link-primary">{{item.invoiceId}}</router-link></td>
                                          <td class="customer_name">
                                              <div class="d-flex align-items-center" v-if="item.img">
                                                  <img :src="item.img" alt="" class="avatar-xs rounded-circle me-2" />
                                                  {{item.name}}
                                              </div>
                                              <div v-if="!item.img" class="d-flex align-items-center">
                                              <div class="flex-shrink-0 avatar-xs me-2" >
                                                  <div class="avatar-title bg-soft-success text-success rounded-circle fs-13">
                                                     {{item.name.charAt(0)}}
                                                  </div>
                                                  
                                              </div>
                                              {{item.name}}
                                              </div>
                                          </td>
                                          <td class="email">{{item.email}}</td>
                                          <td class="country">{{item.country}}</td>
                                          <td class="date">{{item.date}} <small class="text-muted">{{item.time}}</small></td>
                                          <td class="invoice_amount">{{item.amount}}</td>
                                          <td class="status"><span :class="`badge badge-soft-${item.statusClass} text-uppercase`">{{item.status}}</span></td>
                                          <td>
                                              <div class="dropdown">
                                                  <button class="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                      <i class="ri-more-fill align-middle"></i>
                                                  </button>
                                                  <ul class="dropdown-menu dropdown-menu-end">
                                                      <li><router-link class="dropdown-item" to="/invoices/detail"><i class="ri-eye-fill align-bottom me-2 text-muted"></i> View</router-link></li>
                                                      <li><a class="dropdown-item"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a></li>
                                                      <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-download-2-line align-bottom me-2 text-muted"></i> Download</a></li>
                                                      <li class="dropdown-divider"></li>
                                                      <li> 
                                                          <a class="dropdown-item remove-item-btn" @click="deletedata(item)">
                                                              <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete
                                                          </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <div class="noresult" style="display: none" :class="{'d-block': resultQuery.length == 0}">
                                  <div class="text-center">
                                      <lottie
                                        class="avatar-xl"
                                        colors="primary:#121331,secondary:#08a88a"
                                        :options="defaultOptions"
                                        :height="75"
                                        :width="75"
                                        />
                                      <h5 class="mt-2">Sorry! No Result Found</h5>
                                      <p class="text-muted mb-0">We've searched more than 150+ Orders We did not find any
                                          orders for you search.</p>
                                  </div>
                              </div>
                          </div>
                        <div class="d-flex justify-content-end mt-3">
                            <div class="pagination-wrap hstack gap-2">
                                <a class="page-item pagination-prev disabled" href="#" v-if="page != 1" @click="page--">
                                    Previous
                                </a>
                                <ul class="pagination listjs-pagination mb-0" ><li  :class="{
                              active: pageNumber == page,
                              disabled: pageNumber == '...',
                            }" v-for="(pageNumber, index) in pages.slice(page-1, page+5)" :key="index" @click="page = pageNumber">
                                <a class="page" href="#" >{{pageNumber}}</a>
                                </li></ul>
                                <a class="page-item pagination-next" href="#" @click="page++" v-if="page < pages.length">
                                    Next
                                </a>
                            </div>
                        </div>
                      </div>
  
                      <!-- Modal -->
                      <div class="modal fade flip" id="deleteOrder" tabindex="-1" aria-labelledby="deleteOrderLabel"
                          aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                  <div class="modal-body p-5 text-center">
                                       <lottie
                                                    class="avatar-xl"
                                                    colors="primary:#405189,secondary:#f06548"
                                                    :options="defaultOptions1"
                                                    :height="90"
                                                    :width="90"
                                                    />
                                      <div class="mt-4 text-center">
                                          <h4>You are about to delete a order ?</h4>
                                          <p class="text-muted fs-15 mb-4">Deleting your order will remove all of
                                              your information from our database.</p>
                                          <div class="hstack gap-2 justify-content-center remove">
                                              <button class="btn btn-link link-success fw-medium text-decoration-none" data-bs-dismiss="modal"><i class="ri-close-line me-1 align-middle"></i> Close</button>
                                              <button class="btn btn-danger" id="delete-record">Yes, Delete It</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--end modal -->
                  </div>
              </div>
              
          </div><!--end col-->
      </div><!--end row-->
    </Layout>
</template>