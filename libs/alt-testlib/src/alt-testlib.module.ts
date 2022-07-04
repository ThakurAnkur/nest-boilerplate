import { Module } from '@nestjs/common';
import { AltTestlibService } from './alt-testlib.service';

@Module({
  providers: [AltTestlibService],
  exports: [AltTestlibService],
})
export class AltTestlibModule {}
