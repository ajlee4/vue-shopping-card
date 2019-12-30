<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 >
        <v-card class="auth-field">
          <v-card-title>Вход</v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation class="auth-form">
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Имя"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-btn
             
              color="success"
              class="mr-4 validate"
              @click="validate"
            >
            Войти
            </v-btn>
           
          </v-form>
           <router-link to='/register'>
           <span> Регистрация</span>
          </router-link>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Введите имя",
      v => (v && v.length <= 10) || "Имя не должно превышать 10 символов"
    ],
    email: "",
    emailRules: [
      v => !!v || "Введите email",
      v => /.+@.+\..+/.test(v) || "Введите корректный email"
    ],
   
  }),

  methods: {
        ...mapMutations(['setUser']),
    validate() {
      if (this.$refs.form.validate()) {
        const user = {
          name:this.name,
          email:this.email
        }
  this.setUser(user)
        this.$router.push('/')
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
<style lang="scss">
.auth-form {

}
.auth-field {
  margin-top: 80px;
  width: 400px;
    padding: 20px;
  border-radius: 6px;
}
.validate {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
}
</style>
