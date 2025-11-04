import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean{
        const request: Request = context.switchToHttp().getRequest();
        const isAuthorized = request.headers.authorization === 'secret';
        if(!isAuthorized) {
            throw new UnauthorizedException();
        }
        return isAuthorized;
    }
}