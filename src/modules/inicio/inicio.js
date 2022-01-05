import axios from "axios";

export default {
  namespaced: true,
  state: {
    article: {},
    personaltotal: {},
    peticiontoken:""
  },
  mutations: {
    getdatainicio(state, data) {
      state.personaltotal = data;
    },
    setArticle(state, data) {
        state.article = data;
      },
  },
  actions: {
    
    setArticle: async function({ commit }, dataArticle) {
      commit("setArticle", dataArticle.data);
    },
    getPersonaltotal: async function({ commit }) {
      this.peticiontoken = localStorage.getItem("token");
      let configuracion = { headers: { tokenautorizado: `Bearer ${this.peticiontoken}` } };
      let data = null;

      // debugger;
      await axios
        .get("getDatosInicio", configuracion)
        .then(function(response) {
            console.log(response.data.usuarios[0]);
          data = response.data.usuarios[0];
          commit("getdatainicio", data);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getArticle: async function({ commit }, dataArticle) {
        let header = { Token: dataArticle.token };
        let configuracion = { headers: header };
        let data = null;
        // debugger;
        await axios
          .get(`article/query?id=${dataArticle.id}`, configuracion)
          .then(function(response) {
            data = { data: response.data };
            commit("setArticle", data);
          })
          .catch(function(error) {
            console.log(error);
          });
      },
    
  },
};
