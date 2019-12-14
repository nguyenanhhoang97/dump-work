import store from '~/store'

export default (to, from, next) => {
  if (store.getters['auth/user'].role === 'Admin') {
    next({ name: 'dashboard' })
  } else if (store.getters['auth/user'].role === 'User') {
    next({ name: 'projects' })
  }
}
