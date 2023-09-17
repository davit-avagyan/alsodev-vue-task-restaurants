<template>
  <div class="modal-auth" @click.self="hideModal">
    <div class="modal-dialog modal-dialog-auth">
      <button
        @click.prevent="hideModal"
        class="close-auth"
      >
        &times;
      </button>
      <form id="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input id="login" type="text">
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input id="password" type="password">
          </label>
        </fieldset>
        <span>* login functionality is not realized so just click to "Войти" to change user auth to true</span>
        <!-- /.modal-body -->
        <div class="modal-footer">
          <div class="footer-buttons">
            <button
              @click="login"
              class="button button-primary button-login" type="submit"
            >
              Войти
            </button>
          </div>
        </div>
      </form>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script setup>
import { useStore } from "vuex"

const authStore = useStore()

const hideModal = () => {
  authStore.dispatch('changeModal')
}

const login = () => {
  authStore.dispatch('login')
}
</script>