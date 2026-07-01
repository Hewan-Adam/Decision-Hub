import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { DecisionsService } from './decisions.service';
import { CreateDecisionDto } from './dto/create-decision.dto';

@ApiTags('Decisions')
@Controller('decisions')
export class DecisionsController {
  constructor(private decisionsService: DecisionsService) {}

  @Get()
  list() {
    return this.decisionsService.list();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.decisionsService.getById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@CurrentUser() user: any, @Body() dto: CreateDecisionDto) {
    return this.decisionsService.create(user.id, dto);
  }
}
