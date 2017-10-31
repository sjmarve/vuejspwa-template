<template>
  <section class="app-main" :style="[hiddenSidebarStyle, removeSpacing]">
    <div :class="['container is-fluid is-marginless',  { 'app-content' : $auth.check() }]">
      <levelbar v-if="$auth.check()"></levelbar>
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
        <router-view class="animated"></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
import Levelbar from './Levelbar'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      sidebar: 'sidebar'
    }),
    hiddenSidebarStyle () {
      return this.sidebar.hidden ? { 'margin-left': 0 } : null;
    },
    removeSpacing () {
      return !this.$auth.check() ? { 'padding-top': 'inherit', 'margin-left': 'inherit' } : null;
    }
  },

  components: {
    Levelbar
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/mixins';

.app-main {
  padding-top: 50px;
  margin-left: 180px;
  transform: translate3d(0, 0, 0);

  @include mobile() {
    margin-left: 0;
  }

}

.app-content {
  padding: 20px;
}
</style>
