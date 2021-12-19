const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();
const faker = require("faker");

const quantity = process.argv[2] ? parseInt(process.argv[2]) : 9;

async function seed() {
  await db.$executeRawUnsafe("DELETE FROM course; VACUUM;");
  await Promise.all(
    getCourses().map((course) => {
      return db.course.create({ data: course });
    })
  );
}

seed();

function getCourses() {
  return [...Array(quantity).keys()].map(() => ({
    name: faker.lorem.words(6),
    description: faker.lorem.sentence(),
  }));
}
