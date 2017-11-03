<template>
  <section class="hero is-danger is-large">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div id="navbarMenuHeroB" class="nv-menu">
            <div class="nv-right">
              <!-- <a class="navbar-item">
                Home
              </a>
              <a class="navbar-item">
                Register
              </a> -->
              <span class="navbar-item">
                <router-link class="button is-info is-inverted" to="/login">
                  <span class="icon">
                    <i class="fa fa-lock"></i>
                  </span>
                  <span>Login</span>
                </router-link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="../assets/logo.png" alt="Vodacom Logo">
        <p class="title">
          Vodacom
        </p>
        <p class="subtitle">
          Sales Channel Partners Backend
        </p>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
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
</style>
