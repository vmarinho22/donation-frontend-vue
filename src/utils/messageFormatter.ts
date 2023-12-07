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
        case 500: 
          try {
            message = error.response?.data.message
            const errorData = JSON.parse(error.response?.data.message)
            if (errorData.every((error: any) => 'code' in error)) {
              message = t('genericMessages.errors.wrongInputValues')
            } else {
              message = t('genericMessages.errors.generic')
            }
          } catch {
            message = t('genericMessages.errors.generic')
          }
          break;
        default:
          message = t('genericMessages.errors.generic')
          break
      }
    }
    return message
  }
}
