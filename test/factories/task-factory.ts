import { TaskProps, Task } from '@core/entities/task.entity';

type Override = Partial<TaskProps>;

const makeTask = (override: Override = {}, id?: string) => {
  return new Task(
    {
      title: 'Programador de Sucesso',
      description: 'Livro sobre dicas de programação',
      ...override,
    },
    id,
  );
};

export default makeTask;
