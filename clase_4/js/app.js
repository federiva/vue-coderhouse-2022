import { tableDefinitions } from "../components/tableDefinitions.js";

const app = new Vue({
  el: "#app",
  data: {
    title: "Ejercicio Clase IV",
    tableData: tableDefinitions,
  },
  methods: {
    incrementar: function() {
      this.contador = this.contador + 1
      this.claseOperacion = "bi bi-arrow-up"
    },
    decrementar: function() {
      this.contador = this.contador - 1
      this.claseOperacion = "bi bi-arrow-down"
    }
  },
  computed: {

  }
})
