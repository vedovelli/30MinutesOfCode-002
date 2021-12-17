const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getCourses().map((course) => {
      return db.course.create({ data: course });
    })
  );
}

seed();

function getCourses() {
  return [
    {
      name: "Curso de Javascript",
      description: `Descrição do curso de Javascript.`,
    },
    {
      name: "Curso de Testes",
      description: `Descrição do curso de Testes.`,
    },
    {
      name: "Curso de Remix 💿",
      description: `Descrição do curso de Remix 💿.`,
    },
  ];
}
