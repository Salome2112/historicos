import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.historicos.create({
    data: {
      name: 'Charles Darwin',
      description: 'Fue un naturalista',
      year: 1809,
    },
  });
  const post2 = await prisma.historicos.create({
    data: {
      name: '	William Shakespeare',
      description: 'Escritor famoso',
      year: 1564,
    },
  });
  const post3 = await prisma.historicos.create({
    data: {
      name: 'Albert Einsten',
      description: 'Fue uno de los padres de la mecanica cuantica ',
      year: 1879,
    },
  });
  const post4 = await prisma.historicos.create({
    data: {
      name: 'Isaac Newton',
      description: 'Matemático, filósofo, alquimista, teólogo y físico inglés ',
      year: 1643,
    },
  });


  console.log({ post1,post2,post3,post4});
}

// Ejecutar la función principal
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Cerrar Prisma Client al final
    await prisma.$disconnect();
  });

