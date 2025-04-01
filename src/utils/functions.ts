import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './winston.config';

export type Replace<T, R> = Omit<T, keyof R> & R;

export const logger = WinstonModule.createLogger(winstonConfig);
