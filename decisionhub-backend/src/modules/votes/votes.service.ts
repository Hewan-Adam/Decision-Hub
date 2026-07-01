import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class VotesService {
  constructor(private prisma: PrismaService) {}

  async getSummary(decisionId: string) {
    return this.prisma.vote.groupBy({
      by: ['optionId'],
      where: { decisionId },
      _count: { optionId: true },
    });
  }
}
