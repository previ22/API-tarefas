const express = require('express')
const app = express()

app.use(express.json())


const atividades = [
    {
        id: 1,
        titulo: "Atividade Matemática",
        descricao: "Fazer as questões de júros compostos e simples.",
        status: "PENDENTE"
    }
]

//Listar todas as atividades
app.get("/atividades", (req, res) => {
    return res.json(atividades)
});


//Listar por id
app.get("/atividades/:id", function (req, res) {
    const id = parseInt(req.params.id)
 
    const atividade = atividades.find(a => a.id == id)
 
    if (atividade) {
        return res.json(atividade)
    } else {
        res.status(404).json("Atividade não encontrada.")
    }
});

//Criar atividade
app.post("/atividades", function (req, res) {
    const titulo = req.body.titulo
    const descricao = req.body.descricao
    const status = req.body.status

 
    if (!titulo) {
        return res.status(400).json("Título obrigatório!")
    }
 
    const novaAtividade = {
        id: atividades.length+1,
        titulo: titulo,
        descricao: descricao,
        status: status
    }
 
    atividades.push(novaAtividade)
 
    return res.status(201).json(novaAtividade)
});

//Deletar tarefa
app.delete("/atividades/:id", function (req, res) {
    const id = parseInt(req.params.id)
 
    const index = atividades.findIndex(p => p.id == id)
 
    const atividadeRemovida = atividades.splice(index, 1)
    return res.status(204).json("Atividade removida com sucesso!")
});

//Atualizar tarefa
app.put("/atividades/:id", function (req, res) {
    const id = parseInt(req.params.id)
    const { titulo, descricao, status } = req.body;

    const tarefa = atividades.find(t => t.id == id);

    if (!tarefa) {
        return res.status(404).json("Trefa não encontrada.")
    }

    if (tarefa.status === "CONCLUÍDA") {
        return res.status(400).json("Não é possivel aterar se a tarefa já foi concluída.")
    }

    if (!titulo) {
        return res.status(400).json("Título é obrigatório!")
    }

    tarefa.titulo = titulo;
    tarefa.descricao = descricao;

    if (status) {
        tarefa.status = status;
    }

    return res.status(200).json(tarefa);

});
















//Monitora / escuta a porta 3000
app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000!")
})