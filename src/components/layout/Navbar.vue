<template>
  <section class="app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a @click="toggleSidebar({opened: !sidebar.opened})" class="navbar-item is-hidden-tablet" v-show="!sidebar.hidden">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
          <a class="navbar-item" href="/#/">
            School Vault
          </a>
        </div>

        <div class="nv-menu">
          <div class="nv-right">
            <div class="navbar-item">
              <a @click="logout" class="navbar-item">Logout</a>
            </div>
          </div>
        </div>
    </nav>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    show: Boolean
  },

  computed: mapGetters({
    sidebar: 'sidebar'
  }),

  methods: {
    ...mapActions([
      'toggleSidebar'
    ]),
    logout () {
      this.$auth.logout({
        redirect: 'Home',
        makeRequest: false
        // params: {},
        // success: function () {},
        // error: function () {},
        // etc...
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

  .container {
    margin: auto 10px;
  }
  .nv-menu {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .navbar{
    display: flex;
  }
  .nv-right{
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-left: auto;

    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
</style>
