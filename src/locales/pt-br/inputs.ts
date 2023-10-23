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
  postalCode: {
    label: 'CEP',
    hint: '12345-123',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'CEP inválido',
      min: 'O CEP deve ter no mínimo 9 dígitos',
      max: 'O CEP deve ter no máximo 9 dígitos'
    }
  },
  street: {
    label: 'Endereço',
    placeholder: 'Rua João Pedro',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'Nome inválido',
    }
  },
  hasNumber: {
    label: 'Tem número?'
  },
  number: {
    label: 'Número',
    placeholder: '123',
  },
  complement: {
    label: 'Complemento',
    placeholder: 'Ap 106, bloco 1, ...',
  },
  district: {
    label: 'Bairro',
    placeholder: 'Jardim das Flores',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'Bairro inválido',
    }
  },
  city: {
    label: 'Cidade',
    placeholder: 'São Paulo',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'Cidade inválido',
    }
  },
  state: {
    label: 'Estado',
    placeholder: 'São Paulo',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'Estado inválido',
    }
  },
  uf: {
    label: 'UF',
    placeholder: 'SP',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'UF inválido',
    }
  },
}