import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommentsService } from './comments.service';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get(':decisionId')
  list(@Param('decisionId') decisionId: string) {
    return this.commentsService.list(decisionId);
  }
}
