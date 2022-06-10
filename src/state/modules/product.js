import router from "@/router";

export const state = {
  products: [],
  product: {
    id: "",
    title: "",
    brand: "",
    seller: "",
    price: "",
    description: "",
    features: [],
    Inventory: [],
  },
};

export const getters = {};

export const mutations = {
  cargar(state, payload) {
    state.products = payload;
  },
  //POST
  set(state, payload) {
    state.products.push(payload);
  },
  //DELETE
  delete(state, payload) {
    state.products = state.products.filter((item) => item.id !== payload);
  },
  //GET
  product(state, payload) {
    if (!state.products.find((item) => item.id === payload)) {
      router.push("/");
      return;
    }
    state.product = state.products.find((item) => item.id === payload);
  },
  //UPDATE
  update(state, payload) {
    state.products = state.products.map((item) => (item.id === payload.id ? payload : item));
    router.push("/");
  },
};

export const actions = {
  //LEER
  async cargarLocalStorage({ commit }) {
    try {
      const res = await fetch("https://arprobackend-default-rtdb.firebaseio.com/products-api.json");
      const dataDB = await res.json();
      const arrayProducts = [];
      for (let id in dataDB) {
        arrayProducts.push(dataDB[id]);
      }
      commit("cargar", arrayProducts);
    } catch (error) {
      console.log(error);
    }
  },
  //POST
  async setProducts({ commit }, product) {
    try {
      await fetch(`https://arprobackend-default-rtdb.firebaseio.com/products-api/${product.id}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
    } catch (error) {
      console.log(error);
    }
    commit("set", product);
  },
  //DELETE
  async deleteProducts({ commit }, id) {
    try {
      await fetch(`https://arprobackend-default-rtdb.firebaseio.com/products-api/${id}.json`, {
        method: "DELETE",
      });
      commit("delete", id);
    } catch (error) {
      console.log(error);
    }
  },
  //GET
  setProduct({ commit }, id) {
    commit("product", id);
  },
  //UPDATE
  async updateProduct({ commit }, product) {
    try {
      const res = await fetch(`https://arprobackend-default-rtdb.firebaseio.com/products-api/${product.id}.json`, {
        method: "PATCH",
        body: JSON.stringify(product),
      });
      const dataDB = await res.json();
      commit("update", dataDB);
    } catch (error) {
      console.log(error);
    }
  },
};
