import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDecisionDto } from './dto/create-decision.dto';

@Injectable()
export class DecisionsService {
  constructor(private prisma: PrismaService) {}

  async list() {
    return this.prisma.decision.findMany({
      include: {
        category: true,
        author: { select: { id: true, name: true } },
        options: true,
        _count: { select: { votes: true, comments: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getById(id: string) {
    const decision = await this.prisma.decision.findUnique({
      where: { id },
      include: {
        category: true,
        author: { select: { id: true, name: true } },
        options: true,
        comments: true,
        _count: { select: { votes: true, comments: true } },
      },
    });

    if (!decision) {
      throw new NotFoundException('Decision not found');
    }

    return this.prisma.decision.update({
      where: { id },
      data: { views: { increment: 1 } },
    });
  }

  async create(userId: string, dto: CreateDecisionDto) {
    const decision = await this.prisma.decision.create({
      data: {
        title: dto.title,
        description: dto.description,
        categoryId: dto.categoryId,
        authorId: userId,
        tags: dto.tags,
        expirationDate: dto.expirationDate ? new Date(dto.expirationDate) : null,
        options: {
          create: dto.options.map((label) => ({ label })),
        },
      },
      include: {
        options: true,
        category: true,
      },
    });

    return decision;
  }
}
