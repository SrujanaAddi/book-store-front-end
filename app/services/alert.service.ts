import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  error(message: string) {
    Swal.fire("Warning", message, 'warning');
  }

  success(message: string) {
    return Swal.fire("Success", message, 'success');
  }

  apiFail(res: any) {
    console.log('ERROR_LOG : ', res);

    Swal.fire( 'Warning..', res?.error?.message || 'Something went wrong, Please check logs.', 'error');
  }
  apiSuccess(res: any) {
    Swal.fire(res?.statusCode, res?.status, 'success');
  }
}
