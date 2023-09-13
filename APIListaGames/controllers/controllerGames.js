const Game = require('../models/gamesModel');

module.exports = class ControllerGames {

        static async GameCreate(req, res) {

            let titulo = req.body.titulo;
            let genero = req.body.genero;
            let dev = req.body.dev;
            let release = req.body.release;
            let plataforma = req.body.plataforma;
            let link = req.body.link;

            const game = {
                titulo: titulo,
                genero: genero,
                dev: dev,
                release: release,
                plataforma: plataforma,
                link: link
            }
            await Game.create(game);
            res.json({ message: "Jogo cadastrado com sucesso!" });
          }
  
  static async GameListar(req,res){
 const id_game = req.params.id;
 if(id_game){
 const game = await Game.findOne({where: {id_game: id_game}});
 res.json(game);
 }else{
 const game = await Game.findAll({raw:true});
 res.json(game);
 }
}
  static async GameUpdate(req, res) {
            const id_game = req.params.id;
            let titulo = req.body.titulo;
            let genero = req.body.genero;
            let dev = req.body.dev;
            let release = req.body.release;
            let plataforma = req.body.plataforma;
            let link = req.body.link;

            const game = {
                titulo: titulo,
                genero: genero,
                dev: dev,
                release: release,
                plataforma: plataforma,
                link: link
            }
           await Game.update(game,{where: {id_game:id_game}});
 res.json({message: "Jogo atualizado com sucesso! Foram atualizados as sequintes informações: ", dados: game});
          }
  static async GameDelete(req,res){
 const id_game = req.params.id;
 await Game.destroy({where:{id_game: id_game}});
 res.json({message: "Jogo excluído com sucesso!"});
 }
    }