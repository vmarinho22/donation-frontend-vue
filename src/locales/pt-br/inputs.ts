export default {
  email: {
    label: 'E-mail',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'E-mail inválido'
    }
  },
  password: {
    label: 'Senha',
    hint: 'Mínimo de 8 caracteres',
    rules: {
      required: 'Campo obrigatório',
      min: 'Mínimo de 8 caracteres'
    }
  },
  confirmPassword: {
    label: 'Confirmar senha',
    hint: 'As senhas devem ser iguais',
  },
  cpf: {
    label: 'CPF',
    hint: '123.456.789-00',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'CPF inválido',
      min: 'O CPF deve ter no mínimo 11 dígitos',
      max: 'O CPF deve ter no máximo 14 dígitos'
    }
  }
}