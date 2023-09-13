const Usuario = require("../models/usuariosModel");
const jwt = require("jsonwebtoken");

module.exports = class ControllerUsuarios {

    static async UsuarioCreate(req, res) {

        let nome = req.body.nome;
        let email = req.body.email;
        let nascimento = req.body.nascimento;
        let telefone = req.body.telefone;
        let senha = req.body.senha;

        const usuario = {
            nome: nome,
            email: email,
            nascimento: nascimento,
            telefone: telefone,
            senha: senha
        };

        await Usuario.create(usuario);
        res.json({ message: "Usuário cadastrado com sucesso!" });
    }

    static async UsuarioUpdate(req, res) {
        const id_usuario = req.params.id;
        let nome = req.body.nome;
        let email = req.body.email;
        let nascimento = req.body.nascimento;
        let telefone = req.body.telefone;
        let senha = req.body.senha;
        
        const usuario = {
            nome: nome,
            email: email,
            nascimento: nascimento,
            telefone: telefone,
            senha: senha
        };

        await Usuario.update(usuario, { where: { id_usuario: id_usuario } });
        res.json({ message: "Cadastro atualizado com sucesso! Foram atualizados as sequintes informações: ", dados: usuario });
    }

  //TEM QUE REALIZAR MUDANÇAS
  //   static async UsuarioLogin(req, res) {

  //   var nome = req.body.nome;
  //   var email = req.body.email;
  //   var senha = req.body.senha;
    
  //   const dados = {
  //     nome: nome,
  //     email: email,
  //     senha: senha
  //   };
    
  //   const usuario = await Usuario.findOne({
  //     where: {
  //       email: email, senha: senha
  //     }
       
      
  //   }).then((usuario) => {
  //     //esse teste abaixo deve ser feito no seu banco de dados
  //     if (usuario != undefined) {
  //       const id = usuario.id_usuario; //esse id vira do seu banco de dados
  //       const token = jwt.sign({ id }, process.env.GRSTESTE, {
  //         expiresIn: 300 // expira em 5min
  //       });
  //       return res.json({ auth: true, token: token }); //Criação do token
  //     }
  //     else {
  //       res.status(402).json({ message: "Erro ao logar no sistema." });
  //     }
  //   })
  // }
  // // VERIFICA SE O TOKEN FOI CRIADO
  // static async verificaJWT(req, res, next) {
  //   const token = req.headers['x-access-token'];
  //   if (!token) return res.status(401).json({
  //     auth: false, message: 'Nenhum token criado.'
  //   });
  //   jwt.verify(token, process.env.SECRET, function(err, decoded) {
  //     if (err) return res.status(500).json({ auth: false, message: 'Falha na autenticação com o token.' });
  //     // Salva no request para uso posterior
  //     req.userId = decoded.id;
  //     next();
  //   });
  // }        
}