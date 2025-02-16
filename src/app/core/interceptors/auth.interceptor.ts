import type { HttpInterceptorFn } from '@angular/common/http';
import { environment } from "../../environments/environment";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${environment.STRAPI_TOKEN}`
    }
  });
  return next(authReq);
};
