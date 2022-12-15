<template>
    <div class="table-wrapper">
        <h3 class="table-header">Lista de Pedidos</h3>
        <hr>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Comida</th>
                </tr>
            </thead>
            <tbody>
                <tr scope="col" v-for="(row, index) of data" :key="index">
                    <td class="nombre">{{ row.nombre }}</td>
                    <td class="email">{{ row.email }}</td>
                    <td class="entrega">{{ row.tipo }}</td>
                    <td class="comida">{{ row.comida }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
    
<script>
export default {
    name: 'tabla-pedidos',
    props: {
        data: Array,
    },
    methods: {
    },
}
</script>
<style scoped>
table {
    width: 100%;
}

tr th {
    width: 25%;
}
</style>
    