//Na forma abaixo, o response.status utiliza o método "send" para retornar, porém
//ele não define o charset UTF-8, e isto pode resultar em problemas na exibição da mensagem.
/*
function status(request, response) {
  response.status(200).send("Sucesso");
}
*/

function status(request, response) {
  response
    .status(200)
    .json({ chave: "Grande é o poder de um megazord, faça acontecer!" });
}

export default status;
