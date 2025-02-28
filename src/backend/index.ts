import excluirCliente from "./cliente/excluirCliente";
import obterTodos from "./cliente/obterTodos";
import salvarCliente from "./cliente/salvarCliente";

// Padrão Facade
export default class Backend {
    static readonly clientes = {
        salvar: salvarCliente,
        obter: obterTodos,
        excluir: excluirCliente,
    };
}
