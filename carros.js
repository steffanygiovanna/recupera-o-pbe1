const con = ('../controllers/controllers').con;

const create = (req, res) => {
    let carros_id = req.body.carros_id;
    let marca_veiculo = req.body.marca_veiculos;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiculo  = req.body.fabricacao_veiculo;
    let  cliente_id = req.body. cliente_id;

let query = 'INSERT INTO carros (carros_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id) VALUES'
query += `('${carros_id}', '${marca_veiculo}', '${modelo_veiculo}', '${ano_veiculo}', '${fabricacao_veiculo}', '${cliente_id}');`;
con.query (query, (err, result) => {
    if (err) {
        res.status(500).json(err)
    } else {
        res.status(201).json(result)
    }
})
}

const update = (req, res) => {
     const {carros_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiuclo, cliente_id} = req.body;
     const query = `UPDATE carros SET carros_id =?, marca_veiculo =?, modelo_veiculo =?, ano_veiculo =?, fabricacao_veiculo =?, cliente_id =? WHERE carros_id`;
    con.query('SELECT * FROM carros', (err, result) => {
        if(err){
            res.status(500).json(err);
        } else {
             res.json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM carros', (err, result) => {
        if(err){
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    })
}


const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE * FROM carros WHERE id = '${id}'`, (err, result) => {
        if(err){
             res.status(400).json(err).end();
        } else {
             res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    update,
    deletar
};