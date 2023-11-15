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
    placeholder: 'coxinha123',
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
  birthDate: {
    label: 'Data de nascimento',
  },
  sex: {
    label: 'Sexo',
    items: ['Masculino', 'Feminino', 'Outro']
  },
  gender: {
    label: 'Gênero que se identifica',
  },
  weight: {
    label: 'Peso',
    placeholder: '109.4',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'Peso inválido',
    }
  },
  height: {
    label: 'Altura',
    placeholder: '174',
    hint: 'Em centímetros(Ex: 1,74 -> 174)',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'Altura inválido',
    }
  },
  blood: {
    label: 'Tipo sanguíneo',
  },
  hasChronicDiseases: {
    label: 'Possui doenças crônicas?',
  },
  chronicDiseases: {
    label: 'Quais?',
    placeholder: 'Diabetes, Hipertensão, ...',
  },
  hasPreviousSurgeries: {
    label: 'Já fez alguma cirurgia?',
  },
  previousSurgeries: {
    label: 'Quais?',
    placeholder: 'Cirurgia no joelho, ...',
  },
  hasBloodBorneDiseases: {
    label: 'Possui doenças transmissíveis pelo sangue?',
  },
  hasCommunicableDiseases: {
    label: 'Possui doenças transmissíveis?',
  },
  communicableDiseases: {
    label: 'Quais?',
    placeholder: 'HIV, Hepatite, ...',
  },
  hasIst: {
    label: 'Possui IST?',
  },
  ist: {
    label: 'Quais?',
    placeholder: 'Clamídia, Gonorreia, ...',
  },
  useIllicitDrugs: {
    label: 'Usa/Usou recentemente drogas ilícitas recentemente?',
  },
  useInjectingDrugs: {
    label: 'Usa/Usou recentemente drogas injetáveis ilícitas recentemente?',
  },
  hasPracticeUnprotectedSex: {
    label: 'Pratica/praticou sexo desprotegido recentementes?',
  },
  hadPregnancy: {
    label: 'Já esteve grávida?',
  },
  recentlyBreastfed: {
    label: 'Amamentou recentemente?',
  },
  lastBreastfeeding: {
    label: 'Quando foi a última vez que amamentou?',
  },
  notes: {
    label: 'Observações',
    placeholder: 'Tem um detalhe que é...',
  },
  user: {
    label: 'Usuário',
    placeholder: 'email@email.com',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'Usuário inválido',
    }
  },
  rg: {
    label: 'RG',
    placeholder: '12.345.678-9',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'RG inválido',
    }
  },
  registrationNumber: {
    label: 'CRM',
    placeholder: '123456/SP',
    hint: 'número/UF',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'CRM inválido',
    }
  },
  specialty: {
    label: 'Especialidade',
    placeholder: 'Coração',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'Especialidade inválido',
    }
  },
  emergencyTelContact: {
    label: 'Telefone de contato de emergência',
  },
  coren_number: {
    label: 'COREN',
    placeholder: 'SP 123.456-AE',
    hint: 'UF código',
    rules: {
      required: 'Campo obrigatório',
      invalid: 'CORENs inválido',
    }
  },
  preDonation: {
    status: {
      label: 'Status',
      items: {
        starting: 'Iniciando',
        inProgress: 'Em progresso',
        finished: 'Finalizada',
      }
    },
    approval: 'Aprovação',
  },
  responsibleDoctor: 'Médico(a) responsável',
}