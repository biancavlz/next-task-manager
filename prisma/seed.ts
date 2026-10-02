import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const db = new PrismaClient({ adapter });

const tasks = [
  { title: "Learn Next.js", completed: false },
  { title: "Learn TypeScript", completed: true },
  { title: "Learn Prisma", completed: false },
];

async function main() {
  await db.task.deleteMany();
  await db.task.createMany({ data: tasks });
  console.log(`Seeded ${tasks.length} tasks`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
