import Api from '@/services/Api'

export default {
  addUser (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}
