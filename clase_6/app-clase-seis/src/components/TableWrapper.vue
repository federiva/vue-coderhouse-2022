<template>
  <div>
    <h1>
        Ejercicio <a href="https://docs.google.com/presentation/d/1ElWRdhoF2hC7zwYvXUZmcEEICYGC4iQxgI-NDOn-Yko/preview#slide=id.gf86d87a152_0_7" target="_blank">Clase 6</a>
    </h1>
    <h3>Tablas</h3>
    <table-component
        :data="tableData.arboles.dataTabla"
        :title="tableData.arboles.tituloTabla"
        :params="tableData.arboles.tablaParams">
    ></table-component>
    <table-component
            :data="tableData.tablas.dataTabla"
            :title="tableData.tablas.tituloTabla"
            :params="tableData.tablas.tablaParams">
          </table-component>
          <table-component
            :data="tableData.principios.dataTabla"
            :title="tableData.principios.tituloTabla"
            :params="tableData.principios.tablaParams">
          </table-component>
  </div>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue';
import { tableDefinitions } from "@/components/tableDefinitions.js";

export default {
  name: 'table-wrapper',
  data: function() {
    return(
        {
            tableData: tableDefinitions
        }
    )
  },
  components: {
    TableComponent
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
