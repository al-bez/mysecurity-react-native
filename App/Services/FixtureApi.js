const create = () => {
  return {
    // Functions return fixtures
    generateToken: () => {
      return {
        ok: true,
        data: require('../Fixtures/getToken.json')
      }
    },
    login: () => {
      return {
        ok: true,
        data: require('../Fixtures/login.json')
      }
    },
    loginConfirmation: () => {
      return {
        ok: true,
        data: require('../Fixtures/loginConfirmation.json')
      }
    }
  }
}

export default {
  create
}
