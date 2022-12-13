<template>
    <div classW="hello">
      <h3>Ecosystem</h3>
      <carro-productos v-bind:data="data"></carro-productos>
      <div class="row p-4">
          <div class="col-2" v-for="producto of data" :key="producto.id">
              <div class="card text-left">
                  <img class="card-img-top imagen-producto" :src="producto.imagen" alt="">
                  <div class="card-body">
                      <h4 class="card-title">{{ producto.nombre }}</h4>
                      <p class="card-text">{{ producto.info }}</p>
                      <p class="card-text">{{ producto.precio | formatearPrecio(producto.precio) }}</p>
                  </div>
                  <div class="card-footer text-muted">
                      <a class="btn btn-primary" href="#" role="button">Comprar</a>
                  </div>
              </div>
          </div>
      </div>
      
    </div>
  </template>
  
  <script>
  import CarroProductos from './CarroComponent.vue';
  
  export default {
    name: 'listado-productos',
    props: {
      msg: String
    },
    data: function () {
      return {
          data: [
              {
                  id: 1,
                  precio: 100,
                  marca: "cuchuflin",
                  nombre: "Cuchuflin Plus",
                  info: "Ultra guardián",
                  imagen: "https://i.pinimg.com/600x315/f1/df/dd/f1dfdda94f87aa15489ca239c1d71a89.jpg",
              },
              {
                  id: 2,
                  precio: 20,
                  marca: "pepe",
                  nombre: "Pepito",
                  info: "Mi muñeco pepito",
                  imagen: "https://http2.mlstatic.com/D_NQ_NP_669127-MLA49715508549_042022-V.jpg",
              },
          ],
      }
    },
    components: {
      CarroProductos
    },
    filters: {
      formatearPrecio: (precio) => {
          if (!precio) {
              return ''   
          } else {
              return `$ ${precio}`
          }
      },
    }
  }
  </script>
  
  <style scoped>
  .imagen-producto {
      width: auto;
      height: 200px;
  }
  </style>
  