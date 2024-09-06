const repository = require('../repository/usuarioRepository.js')

class usuarioController{
    static async index(req, res){
        const result = await repository.findall();
        res.json(result);
    }

    static async show(req, res){
        const result = await repository.findById(req.params.id);
        res.json(result);
    }

    static async store(req, res){
        const result = await repository.create(req.body);
        res.json(result);
    }

    static async update(req, res){
        const result = await repository.update(req.params.id, req.body);
        res.json(result);
    }

    static async delete(req, res){
        const result = await repository.deletar(req.params.id);
        res.json(result);
    }
}

module.exports = usuarioController;