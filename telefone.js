const con = ('../controllers/controllers').con;

const create = (req, res) => {
    let telefone_id = req.body.telefone_id;
    let cliente_id = req.body.cliente_id;
    let numero = req.body.numero;
    let tipo_enum = req.body.tipo_enum;


   let query = 'INSERT INTO telefone (telefone_id, cliente_id, numero, tipo_enum) VALUES'
   query += `('${telefone_id}', '${cliente_id}', '${numero}', '${tipo_enum}');`;
   con.query (query, (err, result) => {
    if(err) {
        res.status(500).json(err)
    } else {
        res.status(201).json(result)
        }
   })
}

const update = (req, res) => {
const {telefone_id, cliente_id, numero, tipo_enum} = req.body;
const query ='UPDATE telefone SET telefone_id =?, cliente_id =?, numero =?, tipo_enum =?, WHERE telefone_id =?';
    con.query(query, [telefone_id, cliente_id, numero, tipo_enum], (err, result) =>{
        if(err){
             res.status(500).json(err)
         } else {
             res.status(201).json(result)
        }
     })
 }

const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if(err){
            res.status(500).json(err)
        } else {
            res.json(result)
        }
    })
}

const deletar = (req, res) => {
     let id = req.params.id;
    con.query(`DELETE * FROM telefone WHERE id = '${id}'`, (err, result) => {
        if(err){
             res.status(500).json(err).end();
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