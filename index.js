const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
		dias: 10,
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
		dias: 5,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
		dias: 60,
  }
]

  const filtrarConcluidas = (_tarefas) =>{  
    return _tarefas.filter(tarefa => {
      const { concluida } = tarefa;
      return concluida;
    });
  };

  console.log(filtrarConcluidas(tarefas));

  const filtrarAbaixo30 = () => {
    return tarefas.filter(tarefa => {
      const {concluida, dias} = tarefa;
      return concluida && dias > 30;
    });
  };