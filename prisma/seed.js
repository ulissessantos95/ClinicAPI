import { PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.usuario.createMany({
        data:[
            { 
                nome: "Roberto",
                email: "ericmara@hotmail.com",
                senha: "123",
                cargo: "coordenador de sistema academico",
            },
        ],
    });
    
}


await prisma.paciente.create({
    data: {
        nome: "Rivelino",
        sexo: "Masculino",
        data_nascimento: new Date("1973-09-16"),
        cpf: "01144478294",
        email: "contato.fudsm@gmail.com",
        telefone: 48996994,
        // consulta: {
        //     create: [
        //         {
        //             motivo: "Dores nas costas",
        //             data_consulta: new Date ("2023-08-23"),
        //             observacao: "Paracetamol, Tadalafila, Dorflex"
        //         }
        //     ]
        // },
        // exame: {
        //     create: [
        //         {
        //             tipo: "Densiometro",
        //             data_exame: new Date("2023-08-25"),
        //             resultado: "deu ruim",
        //             link_arquivo: "url.com.br/exame.pdf",
        //             observacao: ""
        //         }
        //     ]
        // }
    },
});

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });