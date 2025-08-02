import { PrismaClient } from '../../prisma/generated/client/index.js'

// Simple singleton pattern to avoid TypeScript issues
let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
} else {
    if (!(globalThis as any).prisma) {
        (globalThis as any).prisma = new PrismaClient()
    }
    prisma = (globalThis as any).prisma
}

export const client = prisma