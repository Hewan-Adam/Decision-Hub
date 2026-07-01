import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VotesService } from './votes.service';

@ApiTags('Votes')
@Controller('votes')
export class VotesController {
  constructor(private votesService: VotesService) {}

  @Get(':decisionId/summary')
  getSummary(@Param('decisionId') decisionId: string) {
    return this.votesService.getSummary(decisionId);
  }
}
