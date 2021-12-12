import { createParamDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';
import { request } from 'http';

export const InjectUser = createParamDecorator((data:any, ctx : ExecutionContext)=>{
    const req = ctx.switchToHttp().getRequest()
    req.body.user =  {id:req.user.id}
    return req.body
})
