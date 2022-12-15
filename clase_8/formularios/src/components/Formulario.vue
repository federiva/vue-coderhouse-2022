<template>
    <div class="container">
        <vue-form :state="formstate" @submit.prevent="onSubmit">
            <div class="row justify-content-center">
                <div class="col-sm-12">
                    <validate class="mb-3">
                        <label for="input-nombre" class="form-label">Nombre</label>
                        <input id="input-nombre" class="form-control" type="text" v-model="datos.nombre" name="nombre"
                            required>
                        <field-messages name="nombre">
                            <div><i class="bi bi-check-lg"></i></div>
                            <div slot="required">Nombre es un campo requerido</div>
                        </field-messages>
                    </validate>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-12">
                    <validate class="mb-3">
                        <label for="input-email" class="form-label">Email</label>
                        <input id="input-email" class="form-control" type="email" v-model="datos.email" name="email"
                            required>
                        <field-messages name="email">
                            <div><i class="bi bi-check-lg"></i></div>
                            <div slot="required">El e-mail es un campo requerido</div>
                            <div slot="email">El e-mail no tiene un formato válido</div>
                        </field-messages>
                    </validate>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-12 mb-3">
                    <label for="tipos-retiro">Entrega</label>
                    <div id="tipos-retiro">
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="tipo-delivery" v-model="datos.tipo" name="tipo" value="Delivery">
                        <label class="form-check-label" for="tipo-delivery">
                            Delivery
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="tipo-takeaway" v-model="datos.tipo" name="tipo" value="Takeaway">
                        <label class="form-check-label" for="tipo-takeaway">
                            Takeaway
                        </label>
                    </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-12 mb-3">
                    <select class="form-select" aria-label="Default select example" v-model="datos.comida">
                        <option :value="defaultData.selectDefault" selected>{{ defaultData.selectDefault }}</option>
                        <option v-for="(comida, index) in defaultData.comidas" :value="comida" :key="index">{{comida}}</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-12 mb-3">
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit">Hacer pedido</button>
                    </div>
                </div>
            </div>
        </vue-form>
        <div class="row">
            <hr>
            <tabla-pedidos :data="pedidos"></tabla-pedidos>
        </div>
    </div>

</template>
  
<script>
import TablaPedidos from './TablaPedidos.vue';

export default {
    name: 'FormularioInput',
    data() {
        return {
            defaultData: {
                selectDefault: "Seleccione una comida",
                comidas: ["Pizza", "Lomitos", "Pastas"]
            },
            datos: {
                nombre: null,
                email: null,
                tipo: null,
                comida: "Seleccione una comida",
            },
            formstate: {},
            pedidos: [],
        };
    },
    methods: {
        onSubmit: function () {
            if (this.formstate.$invalid || !this.validInputs()) {
                // alert user and exit early
                alert("Hay errores en el pedido, revisalos y volve a probar.")
                return;
            }
            this.pedidos.push(
                {
                    nombre: this.datos.nombre,
                    email: this.datos.email,
                    tipo: this.datos.tipo,
                    comida: this.datos.comida,
                }
            );
            this.resetForm();
        },
        validInputs: function() {
            return !!this.datos.tipo && !!this.datos.comida && this.datos.comida !== this.defaultData.selectDefault
        },
        resetForm: function() {
            this.datos.nombre = null;
            this.datos.email = null;
            this.datos.tipo = null;
            this.datos.comida = null;
        },  
    },
    computed: {
        nombre() {
            console.log(this.nombre)
            return ""
        },
    },
    components: {
        TablaPedidos,
    }
}
</script>
  
<style scoped>

</style>
  