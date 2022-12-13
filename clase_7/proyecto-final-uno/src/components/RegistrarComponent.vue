<template>
<div class="register-wrapper row justify-content-center">
    <div class="col-12">
        <h3>Registrar</h3>
    </div>
    <div class="col-12 g-3">
        <div class="col-auto">
            <label for="input-nombre" class="col-form-label">Nombre</label>
        </div>
        <div class="col-auto">
            <input type="user" id="input-nombre" class="form-control"
                v-model="nombre" @keyup="validateFields">
        </div>
    </div>
    <div class="col-12 g-3">
        <div class="col-auto">
            <label for="input-apellido" class="col-form-label">Apellido</label>
        </div>
        <div class="col-auto">
            <input type="user" id="input-apellido" class="form-control"
                v-model="apellido" @keyup="validateFields">
        </div>
    </div>
    <div class="col-12 g-3">
        <div class="col-auto">
            <label for="input-email" class="col-form-label">E-mail</label>
        </div>
        <div class="col-auto">
            <input type="email" id="input-email" class="form-control"
                v-model="email" @keyup="validateFields">
        </div>
    </div>
    <div class="col-12 g-3">
        <div class="col-auto">
            <label for="input-password" class="col-form-label">Clave</label>
        </div>
        <div class="col-auto">
            <input type="password" id="input-password" class="form-control"
                v-model="password" @keyup="validateFields">
        </div>
    </div>
    <div class="col-12 g-3">
        <div class="col-auto">
            <label for="input-repeat" class="col-form-label">Repetir Clave</label>
        </div>
        <div class="col-auto">
            <input type="password" id="input-repeat" class="form-control"
                v-model="repeatedPassword" @keyup="validateFields">
        </div>
    </div>
    <div class="col-12 g-3">
        <a class="btn btn-primary btn-sm" href="#" role="button" :class="submitButtonClass">Registrarse</a>
    </div>
</div>
</template>
  
<script>

  export default {
    name: 'registrar-usuario',
    data: function() {
        return {
            nombre: null,
            apellido: null,
            email: null,
            password: null,
            repeatedPassword: null,
            isValidPassword: false,
            validInput: false,
            submitButtonClass: "disabled",
            isValidSubmit: false,
        }
    },
    methods: {
        validateFields: function() {
            this.isValidSubmit = this.email
                && this.nombre
                && this.apellido
                && this.password
                && this.repeatedPassword
                && this.password === this.repeatedPassword
            this.submitButtonClass =  this.isValidSubmit ? "" : "disabled"
        }
    }
  }
</script>
  
<style scoped>
.register-wrapper {
    padding: 2rem;
    width: 30%;
    border: 1px solid black;
    margin: 2rem;
    border-radius: 5px;
}
</style>
  