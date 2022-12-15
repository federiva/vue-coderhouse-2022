<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-5">
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
</style>
