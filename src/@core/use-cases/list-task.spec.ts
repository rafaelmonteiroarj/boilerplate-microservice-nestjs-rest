import { InMemoryTaskRepository } from '@test/repositories/in-memory-task-repository';
import { GetAllTasks } from './list-task';
import makeTask from '@test/factories/task-factory';

describe('Get Many Tasks', () => {
  it('should be able to get all tasks', async () => {
    const taskRepository = new InMemoryTaskRepository();
    const getAllTasks = new GetAllTasks(taskRepository);

    await taskRepository.create(
      makeTask({ title: 'Title 1', description: 'Description 1' }),
    );

    await taskRepository.create(
      makeTask({ title: 'Title 2', description: 'Description 2' }),
    );

    const tasks = await getAllTasks.execute();

    expect(taskRepository.tasks).toEqual(tasks);
    expect(taskRepository.tasks).toHaveLength(2);
    expect(taskRepository.tasks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Title 1',
          description: 'Description 1',
        }),
        expect.objectContaining({
          title: 'Title 2',
          description: 'Description 2',
        }),
      ]),
    );
  });
});
