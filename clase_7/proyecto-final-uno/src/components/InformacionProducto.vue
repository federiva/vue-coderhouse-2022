<template>
  <div>
    <div class="row p-4">
        <div class="col-2">
            <div class="card text-left">
                <p>Información del producto</p>
                <img class="card-img-top imagen-producto" :src="producto.imagen" alt="">
                <div class="card-body">
                    <h4 class="card-title">{{ producto.nombre }}</h4>
                    <p class="card-text">Caracteristicas: {{ producto.info }}</p>
                    <p class="card-text">Precio: {{ producto.precio }}</p>
                </div>
                <div class="card-footer text-muted row justify-content-evenly">
                    <a class="btn btn-primary col" href="#" role="button">Comprar</a>
                    <a class="btn btn-secondary col" href="#" role="button">Regresar</a>
                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'informacion-producto',
  props: {
    producto: Object
  },
}
</script>

<style scoped>
.imagen-producto {
    width: auto;
    height: 200px;
}
</style>
