export class AppError {
  error: string | undefined;
  constructor(public originalError?: any) {

  }
}
