import { Task } from '@core/entities/task.entity';

describe('Book', () => {
  it('should be able to create a book', () => {
    expect(
      new Task({
        title: 'Test',
        description: 'Testing...',
      }),
    ).toBeTruthy();
  });
});
