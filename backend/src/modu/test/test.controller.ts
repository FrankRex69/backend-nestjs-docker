import { Controller, Get } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';

@Controller('test')
export class TestController {

    @Public()
    @Get()
    get(): String {       
    return 'test ok!? 1 2';
    }

}
