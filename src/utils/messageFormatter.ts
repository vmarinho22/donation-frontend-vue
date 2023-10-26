import axios from 'axios'

export const messageFormatter = {
  axiosReturn: (t: (key: string) => string, error: unknown) => {
    let message = t('genericMessages.errors.generic')

    if (axios.isAxiosError(error)) {
      switch (error.response?.status) {
        case 401:
          message = t('pages.login.errors.invalidCredentials')
          break
        case 400:
          message = error.response?.data.message
          break
        default:
          message = t('genericMessages.errors.generic')
          break
      }
    }
    return message
  }
}
