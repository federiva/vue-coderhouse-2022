<template>
<div class="login-wrapper row justify-content-center">
    <div class="col-12">
        <h3>Ingresar</h3>
    </div>
    <div class="col-12 g-3">
        <div class="col-auto">
            <label for="input-user" class="col-form-label">Usuario</label>
        </div>
        <div class="col-auto">
            <input type="user" id="input-user" class="form-control" aria-describedby="user-help"
                v-model="user">
        </div>
        <div class="col-auto">
            <span id="user-help" class="form-text" v-if="!userIsValid">
                El usuario debe tener una al menos 3 letras y menos de 20
            </span>
        </div>
    </div>
    <div class="col-12 g-3">
        <div class="col-auto">
            <label for="input-password" class="col-form-label">Password</label>
        </div>
        <div class="col-auto">
            <input type="password" id="input-password" class="form-control" aria-describedby="passwordHelpInline"
                v-model="password">
        </div>
        <div class="col-auto">
            <span id="passwordHelpInline" class="form-text" v-if="!passwordIsValid">
                Debe tener una longitud mayor a 8 y menor a 20
            </span>
        </div>
    </div>
    <div class="col-12 g-3">
        <a class="btn btn-primary btn-sm" href="#" role="button" :class="submitButtonClass">Ingresar</a>
    </div>
</div>
</template>
  
<script>

const testLength = (value, min, max) => {
    let testLength;
    if (!value) {
        testLength = false
    } else {
        testLength = value.length >= min && value.length <= max;
    }
    return testLength
}
  export default {
    name: 'ingresar-login',
    data: function() {
        return {
            password: null,
            validInput: false,
            userIsValid: false,
            passwordIsValid: false,
            user: null,
            submitButtonClass: "disabled",
        }
    },
    watch: {
        password: function() {
            this.passwordIsValid = testLength(this.password, 8, 20);
            this.submitButtonClass = this.userIsValid && this.passwordIsValid ? "" : "disabled"
        },
        user: function() {
            this.userIsValid = testLength(this.user, 3, 20);
            this.submitButtonClass = this.userIsValid && this.passwordIsValid ? "" : "disabled"
        },
    },
  }
</script>
  
<style scoped>
.login-wrapper {
    padding: 2rem;
    width: 30%;
    border: 1px solid black;
    margin: 2rem;
    border-radius: 5px;
}
</style>
  