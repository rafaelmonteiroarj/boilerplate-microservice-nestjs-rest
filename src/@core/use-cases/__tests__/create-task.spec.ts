import { InMemoryTaskRepository } from '@test/repositories/in-memory-task-repository';
import makeTask from '@test/factories/task-factory';
import { CreateTask } from '@core/use-cases/create-task';

describe('Create New Task', () => {
  it('should be able to create a new task', async () => {
    const taskRepository = new InMemoryTaskRepository();
    const createTask = new CreateTask(taskRepository);
    const taskFactory = makeTask();

    const task = await createTask.execute(taskFactory);

    expect(task).toBeTruthy();
    expect(taskRepository.tasks[0]).toEqual(task);
    expect(taskRepository.tasks).toHaveLength(1);
  });
});
