interface Aluno {
nome: string;
idade: number;
matriculado: boolean;
}

interface Carro {
marca: string;
ano: number;
preco: number;
}

interface Config {
tema: string;
notificacoes: boolean;
volume: number;
}


const aluno: Aluno = {
nome: "Maria",
idade: 22,
matriculado: true
};
const carro: Carro = {
marca: "Toyota",
ano: 2020,
preco: 85000.00
};
const config: Config = {
tema: "escuro",
notificacoes: true,
volume: 80
};