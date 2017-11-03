import * as types from '../../mutation-types'
import lazyLoading from './lazyLoading'

const state = {
  items: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      meta: {
        auth: true,
        icon: 'fa-tachometer'
      },
      component: lazyLoading('dashboard', true)
    },
    {
      path: '/products',
      meta: {
        expanded: false,
        auth: true,
        icon: 'fa-product-hunt',
        label: 'Products'
      },
      component: lazyLoading('products', true),
      children: [
        {
          name: 'Products',
          path: '',
          component: lazyLoading('products/list', false),
        },
        {
          name: 'Add New: Product',
          path: 'add-new',
          component: lazyLoading('products/new', false),
        },
      ]
    },
    {
      name: 'Sales Channel',
      path: '/channels',
      meta: {
        auth: true,
        icon: 'fa-th-large'
      },
      component: lazyLoading('channels', true)
    },
    {
      name: 'SC Agents',
      path: '/agents',
      meta: {
        auth: true,
        icon: 'fa-th'
      },
      component: lazyLoading('agents', true)
    },
    {
      name: 'Admin Users',
      path: '/admin-users',
      meta: {
        auth: true,
        icon: 'fa-users'
      },
      component: lazyLoading('admin-users', true)
    },
    {
      name: 'FAQ Management',
      path: '/faq-management',
      meta: {
        auth: true,
        icon: 'fa-info'
      },
      component: lazyLoading('misc/faq-management', false)
    }
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  mutations
}

