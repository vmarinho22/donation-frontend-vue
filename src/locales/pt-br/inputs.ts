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
  },
  firstName: {
    label: 'Nome',
    placeholder: 'João Pedro',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'Nome inválido',
    }
  },
  lastName: {
    label: 'Sobrenome',
    placeholder: 'Silva',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'Sobrenome inválido',
    }
  },
  socialName: {
    label: 'Nome social',
    placeholder: 'João Pedro',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'Nome inválido',
    }
  },
  phone: {
    label: 'Celular',
    hint: '(00) 12345-1234',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'Celular inválido',
      min: 'O Celular deve ter no mínimo 11 dígitos',
      max: 'O Celular deve ter no máximo 13 dígitos'
    }
  },
}