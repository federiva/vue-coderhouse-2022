<template>
    <div id="app">
        <img class="logo" alt="Vue logo" src="../public/coderhouse.jpeg">
        <div class="container-fluid mt-4">
            <div class="row">
                <div class="col-sm-12">
                    <h4>Realice un nuevo pedido</h4>
                </div>
                <div class="col-sm-12">
                    <formulario-input></formulario-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormularioInput from './components/Formulario.vue';

export default {
    name: 'App',
    components: {
        FormularioInput,
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.logo {
    height: 60px;
}
</style>
