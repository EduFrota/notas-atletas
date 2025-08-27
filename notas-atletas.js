class Competicao {
    constructor(objAtletas) {
        this.objAtletas =  objAtletas;
        console.log(objAtletas);
    }

    obterMeedia(listAtletas) {  
      for (let i = 0; i < this.objAtletas.length; i++) {
         listAtletas = this.objAtletas[i]
         let nome = listAtletas.nome;  
         let notas = listAtletas.notas;
         let notasCalculo = notas;
         notasCalculo.sort((a, b) => a - b);
         let notasValidas = notasCalculo.slice(1, 4);
         let somaNotas = notasValidas.reduce((soma, nota) => soma + nota, 0);
         
        let mediaNota = somaNotas/notasValidas.length;
        

        console.log(`Atleta: ${nome}`);
        console.log(`Notas Obtidas: ${notas.join(',')}`);
        console.log(`Média : ${mediaNota}`);      
          
      }
    }
  }

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

let novaCompeticao = new Competicao(atletas) ;
novaCompeticao.obterMeedia();




