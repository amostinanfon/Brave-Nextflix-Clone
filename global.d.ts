import client from "./lib/prismadb"
import { prismaClient } from '@prisma/client';

declare global {
    namespace globalThis {
        var prismadb: prismaclient
    }
}