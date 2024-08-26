import type { PrismaClient } from '@prisma/client';

declare global {
	// Ajoute la propriété `prisma` à l'objet global
	var prisma: PrismaClient | undefined;
}

export {};
