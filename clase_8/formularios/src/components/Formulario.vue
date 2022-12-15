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
                        </field-messages>
                    </validate>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-12 mb-3">
                    <label for="tipos-retiro">Entrega</label>
                    <div id="tipos-retiro">
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="tipo-delivery" v-model="datos.tipo" name="tipo" required>
                        <label class="form-check-label" for="tipo-delivery">
                            Delivery
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="tipo-takeaway" v-model="datos.tipo" name="tipo" required>
                        <label class="form-check-label" for="tipo-takeaway">
                            Takeaway
                        </label>
                    </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-12 mb-3">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>{{ defaultData.selectDefault }}</option>
                        <option v-for="(comida, index) in defaultData.comidas" :value="comida" :key="index">{{comida}}</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-12 mb-3">
                    <div class="d-grid">
                        <button class="btn btn-primary" type="button">Hacer pedido</button>
                    </div>
                </div>
            </div>
        </vue-form>
    </div>

</template>
  
<script>
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
            },
            formstate: {}
        };
    },
    methods: {
        onSubmit: function () {
            if (this.formstate.$invalid) {
                // alert user and exit early
                return;
            }
            // otherwise submit form
        }
    },
    computed: {
        nombre() {
            console.log(this.nombre)
            return ""
        },
        mostrarErrores() {
            let misErrores = this.errores.join(" ");
            return misErrores;
        }
    },

}
</script>
  
<style scoped>

</style>
  