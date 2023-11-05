export default {
  signup: {
    title: 'Vamos começar?',
    subtitle: 'Crie sua conta para começar a salvar vidas.',
    accountCreated: 'Conta criada com sucesso!',
  },
  patient: {
    register: {
      title: 'Finalizar cadastro',
      subtitle: 'Precisamos de mais algumas informações começar a salvar vidas. Juramos que não demora mais que 1 minuto.',
      stepOne: 'Dados básicos',
      stepTwo: 'Ficha médica',
      success: 'Seu cadastro foi finalizado com sucesso!',
    },
    home: {
      title: 'Central do paciente',
      subtitle: 'Veja suas ultimas solicitações, noticias e muito mais...',
      donations: {
        create: 'Solicitar doação',
        hasNoPreDonations: 'Você ainda não possui nenhuma solicitação de doação.',
        table: {
          type: {
            title: 'Tipo',
            blood: 'Sangue',
            milk: 'Leite',
          },
          status: {
            title: 'Status',
            starting: 'Iniciando',
            inProgress: 'Em progresso',
            finished: 'Finalizada',
          },
          approval: {
            title: 'Aprovação',
            true: 'Aprovado',
            false: 'Reprovado',
            review: 'Em análise',
          },
          doctor: 'Médico(a) responsável',
          createdAt: 'Solicitado em',
          actions: 'Ações',
        }
      }
    }
  },
  login: {
    success: 'Olá novamente, {name}!',
    errors: {
      invalidCredentials: 'Credenciais inválidas, verifique seu usuário e senha.',
    }
  },
  admin: {
    home: {
      title: 'Painel administrativo',
      subtitle: 'Aqui você pode gerenciar todos os dados do sistema.',
    },
    doctors: {
      home: {
        title: 'Gerenciamento de médicos(as)',
        subtitle: 'Aqui você pode gerenciar todos os médicos(as) do sistema.',
        table: {
          name: 'Nome',
          email: 'E-mail',
          specialty: 'Especialidade',
          registrationNumber: 'CRM',
          disabled: 'Desativado',
          disabledAt: 'Desativado em',
          creationDate: 'Criado em',
          actions: 'Ações',
        },
      },
      create: {
        success: 'Médico(a) criado(a) com sucesso!',
      }
    },
    nurses: {
      home: {
        title: 'Gerenciamento de enfermeiros(as)',
        subtitle: 'Aqui você pode gerenciar todos os enfermeiros(as) do sistema.',
        table: {
          name: 'Nome',
          email: 'E-mail',
          specialty: 'Especialidade',
          corenNumber: 'COREN',
          disabled: 'Desativado',
          disabledAt: 'Desativado em',
          creationDate: 'Criado em',
          actions: 'Ações',
        },
      },
      create: {
        success: 'Enfermeiro(a) criado(a) com sucesso!',
      },
    },
    actions: {
      disabled: {
        yes: 'Sim',
        no: 'Não',
        notDisabled: 'Não desativado',
      },
    }
  }
}