import {AppError} from './app-error';

export class BadInput extends AppError{
  error: string | undefined;

}
