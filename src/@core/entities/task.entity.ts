import { Replace } from '@utils/functions';
import { randomUUID } from 'crypto';

export interface TaskProps {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Task {
  private _id: string;
  private props: TaskProps;

  constructor(
    props: Replace<
      TaskProps,
      {
        createdAt?: Date;
        updatedAt?: Date;
      }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this.props.title;
  }

  public get description(): string {
    return this.props.description;
  }

  public get createdAt(): Date | undefined {
    return this.props.createdAt;
  }

  public get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }
}
