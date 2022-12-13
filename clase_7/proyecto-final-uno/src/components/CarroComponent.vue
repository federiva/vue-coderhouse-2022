<template>

<div class="table-wrapper">
    <h3 class="table-header">Carrito de compras</h3>
    <hr>
    <table>
      <thead>
        <tr>
          <th scope="col" class="product-id">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Marca</th>
          <th scope="col">Precio</th>
          <th scope="col">Información</th>
        </tr>
      </thead>
      <tbody>
        <tr scope="col" v-for="(row, index) of data" :key="index">
          <td class="product-id">{{row.id}}</td>
          <td class="product-nombre">{{row.nombre}}</td>
          <td class="product-marca">{{row.marca}}</td>
          <td class="product-precio">{{ row.precio }}</td>
          <td class="product-info">{{row.info}}</td>
        </tr>
      </tbody>
    </table>
    <div class="row">
        <div class="col-12 ">
            <a class="btn btn-secondary btn-sm" href="#" role="button">Regresar</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carro-productos',
  props: {
    data: Array,
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-id {
  display: none;
}
</style>
