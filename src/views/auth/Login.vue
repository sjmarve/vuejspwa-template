<template>
<div class="content has-text-centered hero is-large is-danger">
  <div class="hero-body" style="padding-top: 5rem">
  <h1 class="is-title is-bold">Login</h1>

  <div class="columns is-vcentered">
    <div class="column is-6 is-offset-3">
      <div class="box">
        <div v-if="error" style="color:red; word-wrap:break-word;" class="has-text-left">
          {{ error.message }}
          <ul class="error-messages">
            <li v-for="fault in validationErrors">{{ fault }}</li>
          </ul>
        </div>
        <form v-on:submit.prevent="login">
          <label class="label">Username</label>
          <p class="control">
            <input v-model="data.body.username" class="input" type="text" placeholder="email@example.org or 0790123456">
          </p>
          <label class="label">Password</label>
          <p class="control">
            <input v-model="data.body.password" class="input" type="password" placeholder="password">
          </p>

          <p class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="data.rememberMe">
              Remember me
            </label>
          </p>

          <hr>
          <p class="control has-text-centered">
            <button type="submit" class="button is-danger"><i class="fa fa-unlock"></i>&nbsp;Sign In</button>
            <router-link class="button is-default" to="/">Cancel</router-link>

          </p>

        </form>

      </div>
      <p><router-link class="button" to="/">Account recovery</router-link></p>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  data () {
    return {
      data: {
        body: {
          username: null,
          password: null
        },
        rememberMe: false
      },
      error: null
    }
  },
  mounted () {
    if (this.$auth.redirect()) {
      console.log('Redirect from: ' + this.$auth.redirect().from.name)
    }
    // Can set query parameter here for auth redirect or just do it silently in login redirect.
  },
  computed: {
    validationErrors() {
      if(this.error.errors){
        return  Object.entries(this.error.errors).reduce(
          (errors, value) => {
            const catName = value.shift().toUpperCase();
            return errors.concat(value.shift().map(msg => `${catName}: ${msg}`));
          }
        , []);
      }
    }
  },
  methods: {
    login () {
      var redirect = this.$auth.redirect()
      this.$auth.login({
        headers: {
          'Content-Type': 'application/json'
        },
        data: this.data.body,
        rememberMe: this.data.rememberMe,
        redirect: {name: redirect ? redirect.from.name : 'Home'},
        success (res) {
          console.log('Auth Success')
          // console.log('Token: ' + this.$auth.token())
          // console.log(res)
        },
        error (err) {
          if (err.response) {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(err.response.status)
            // console.log(err.response.data)
            // console.log(err.response.headers)
            this.error = err.response.data;
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', err.message)
          }
          //console.log(err.config)
        }
      })
    }
  }
  // filters: {
  //   json: function (value) {
  //     console.log(value)
  //     return value
  //   }
  // }

}
</script>

<style lang="scss" scoped>
.error-messages {
    font-size: 0.5em;
    margin-top: 0;
}

.is-title {
    text-transform: capitalize;
}
</style>
