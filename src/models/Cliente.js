import ClienteDAO from "../DAO/ClienteDAO.js";
import ClienteSchema from "./schema/ClienteSchema.js";

class Cliente{
    constructor(NOME, IDADE, GENERO, CPF, AUTORIZACAO){
        this.NOME = NOME;
        this.IDADE = IDADE;
        this.GENERO = GENERO;
        this.CPF = CPF;
        this.AUTORIZACAO = AUTORIZACAO;
    }

    //pegaTodosClientes = async ()=>{
        //try {
           //return await this.dao.pegaTodosClientes();
        //} catch (error) {
            //throw error;
        //}
    //}

    //pegaUmCliente = async (id)=>{
        //try {
            //await this._verificaCliente(id);

            //return await this.dao.pegaUmCliente(id);
        //} catch (error) {
           // throw error;
        //}
    //}

    //insereCliente = async (portfolio)=>{
       // try{
           // const novoCliente = new ClienteSchema(Cliente.nome, Cliente.idade, Cliente.genero, Cliente.cpf, Cliente.clienteid)
            //return await this.dao.insereCliente(novoCliente);
        //} catch (error) {
           // throw error;
        //}
    //}

    //deletaCliete = async (id)=>{
        //try{
           //await this._verificaCliente(id);

            //return await this.dao.deletaCliente(id);
        //} catch (error) {
           // throw error;
        //}
    //}

    //atualizaCliente = async (id, cliente)=>{
        //try {
            //await this._verificaCliente(id);

            //const clietneAtualizado = new ClienteSchema(Cliente.nome, Cliente.idade, Cliente.genero, Cliente.cpf, Cliente.clienteid)

           // return await this.dao.atualizaCliente(id, clietneAtualizado);
        //} catch (error) {
           // throw error;
        //}
    //}

    //_verificaCliente = async (id)=>{
       // const resposta = await this.dao.pegaUmCliente(id);
       // if(resposta.length === 0){
           // throw new Error(`Cliente de id ${id} não existe`);
       // }
    //}
}

export default Cliente