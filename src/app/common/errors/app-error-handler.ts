import {ErrorHandler} from '@angular/core';

export class AppErrorHandler implements ErrorHandler{
  handleError(error: any): void {
    console.log('OBS! An error accured. ' + error.message) ;
    console.log(error); // should be logged on the server
  }
}
