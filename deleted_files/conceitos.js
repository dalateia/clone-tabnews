/*A systax do teste ocorre da seguinte forma:
  test(parametro1, parametro2);
Onde:
1. "test" é o comando de função que o JEST interpreta como teste.
2. "parametro1" será utilizado para nomear o teste
3. "parametro2" é a função de retorno que o teste irá executar

Exemplo abaixo:
*/
test("nome do teste", callbackFunction);
console.log("Esta mensagem está aparecendo?");

function callbackFunction() {} //Aqui a função deve ser declarada.

//  ===== USANDO UM FUNÇÃO ANÔNIMA =====
//O teste também pode ser escrito com uma função anônima da seguinte forma

test("nome do teste", function () {
  console.log("teste com função anônima");
});

//  ===== USANDO UMA ARROW FUNCTION =====

test("espero que 1 seja 1", () => {
  console.log("teste com arrow function");
});

test("espero que 1 seja 1", () => {
  expect(1).toBe(1);
});
