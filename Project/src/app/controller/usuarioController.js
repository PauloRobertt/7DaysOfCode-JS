import repository from "../repository/usuarioRepository.js";

class usuarioController{
    async index(req, res){
        const result = await repository.findall();
        res.json(result);
    }

    async show(req, res){
        const result = await repository.findById(req.params.id);
        res.json(result);
    }

    async store(req, res){
        const result = await repository.create(req.body);
        res.json(result);
    }

    async update(req, res){
        const result = await repository.update(req.params.id, req.body);
        res.json(result);
    }

    async delete(req, res){
        const result = await repository.deletar(req.params.id);
        res.json(result);
    }
}

export default new usuarioController();
