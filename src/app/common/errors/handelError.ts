import {NotFoundError} from './not-found-error';
import {BadInput} from './bad-input';
import {AppError} from './app-error';

export class HandelError {

  private static isError = false;

  static printErrorMessage(error: AppError): string {
    let errorMessage: string | undefined = '';
    if (error instanceof NotFoundError) {
      errorMessage = 'Not Found Error! ' + error.error;
      this.isError = true;
    } else if (error instanceof BadInput) {
      errorMessage = 'Bad Input! ' + error.error;
      this.isError = true;
    } else {
      errorMessage = error.error;
      this.isError = true;
    }
    return errorMessage as string;
  }

  static getIsErrorFlag(): boolean {
    return this.isError ;
  }
}
