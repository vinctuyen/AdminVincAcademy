import Cookies from 'js-cookie'

export default class AuthsUtils {
  static isAuthenticated() {
    return !!Cookies.get('is_login')
  }

  static login() {
    Cookies.set('is_login', true, { expires: 1 })
  }

  static logout() {
    Cookies.remove('is_login')
  }
}
