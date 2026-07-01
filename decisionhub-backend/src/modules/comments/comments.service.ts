import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async list(decisionId: string) {
    return this.prisma.comment.findMany({
      where: { decisionId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
