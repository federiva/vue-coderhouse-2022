const app = new Vue({
  el: "#app",
  data: {
    title: "Ejercicio Clase II",
    contador: 0,
    claseOperacion: "bi bi-chevron-bar-contract"
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