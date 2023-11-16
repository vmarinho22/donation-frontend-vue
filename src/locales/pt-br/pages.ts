export default {
  home: {
    hint: 'Uma prioridade',
    title: 'Salve vidas doando',
    subtitle: 'leite materno e sangue',
    text: 'As doações são fundamentais para o suprimento de componentes sanguíneos vitais, e para a nutrição de recém-nascidos prematuros e bebês com dificuldades de amamentação',
    security: 'Seus dados estão seguros e não serão compartilhados com ninguém.',
    benefits: {
      security: {
        title: 'Segurança',
        text: 'Seus dados estão seguros e não serão compartilhados com ninguém.',
      },
      speed: {
        title: 'Rapidez',
        text: 'Um processo simples e 100% informatizado',
      },
      gratitude: {
        title: 'Gratidão',
        text: 'Você ajudará a salvar vidas!',
      }
    }
  },
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
          approval: {
            title: 'Aprovação',
            true: 'Aprovado',
            false: 'Reprovado',
            review: 'Em análise',
          },
          doctor: 'Médico(a) responsável',
          createdAt: 'Solicitado em',
          actions: 'Ações',
        },
        type: {
          title: 'Tipo',
          blood: 'Sangue',
          milk: 'Leite',
        },
        status: {
          title: 'Status',
          starting: 'Iniciando',
          in_progress: 'Em progresso',
          finished: 'Finalizada',
        },
      },
      requestDonation: {
        title: 'Realizar nova doação',
        message: 'Ficamos extremamente felizes que você deseja salvar vidas! Antes de continuar, você tem certeza que deseja continuar? Ao confirmar, você concorda que está apto para realizar a doação e que está ciente dos riscos que a doação pode causar. Omitir essa informações pode causar problemas futuros de saúde publica, além de processos judiciais, além do banimento da plataforma.',
        close: 'Fechar',
        confirm: 'Confirmar',
        type: {
          title: 'Tipo de doação',
          blood: 'Sangue',
          milk: 'Leite materno',
        },
        toast: {
          success: 'Solicitação de doação criada com sucesso!',
        }
      }
    },
    preDonation: {
      details: {
        title: 'Detalhes da solicitação',
        subtitle: 'Veja os detalhes da sua solicitação de doação.',
        isEligibility: 'Pode realizar a doação?',
        underAnalysis: 'Em análise',
        true: 'Sim',
        false: 'Não',
        performedNecessaryTests: 'Realizou os testes necessários?',
        testNotes: 'Observações dos testes',
        fullTestLink: 'Teste completo',
        fullTestLinkLabel: 'Abrir teste completo',
        doctor: 'Médico(a) responsável',
        createdAt: 'Solicitado em',
        updatedAt: 'Última atualização',
        hasNoDoctor: 'Nenhum médico(a) responsável ainda',
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
        success: 'Médico(a) criado(a) com sucesso! A senha provisória é: {password}',
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
        success: 'Enfermeiro(a) criado(a) com sucesso! A senha provisória é: {password}',
      },
    },
    actions: {
      disabled: {
        yes: 'Sim',
        no: 'Não',
        notDisabled: 'Não desativado',
      },
    },
    preDonation: {
      patient: 'Paciente',
      hasNoPreDonations: 'Nenhuma solicitação de doação encontrada.',
      table: {
        id: 'ID',
        needsAttention: 'Precisa de atenção',
      },
      details: {
        title: 'Detalhes da solicitação',
        subtitle: 'Veja os detalhes da solicitação de doação.',
        success: 'Solicitação de doação atualizada com sucesso!',
      }
    }
  }
}