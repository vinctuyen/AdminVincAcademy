import api from '../api'

export default class AuthsService {
  login(data) {
    return api.post(`/auths/v1/login/`, data)
  }

  register(data) {
    return api.post(`/auths/v1/register/`, data)
  }

  forgotPassword(data) {
    return api.post(`/auths/v1/forgot/`, data)
  }

  resetPassword(data) {
    return api.post(`/auths/v1/reset/`, data)
  }

  socialLogin(data) {
    return api.post(`/social/v1/login/${data.type}`, data)
  }
}
