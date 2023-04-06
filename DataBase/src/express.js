

const express = require('express');
const cors = require('cors');
const session = require('express-session')
const app = express();
const { error } = require('console');
const TaskModel = require('../models/task.model')

const port = 5000;

app.use(session({secret: 'djasiofhndiodhnigoqh'}));
// evita conflito de requisições
app.use(cors());


app.use(express.json());
app.get('/noticias', (req,res) => {
    res.json([{
        titulo:'uma noticias mutcho cu'
    },
    {
        titulo:'indianos foram encontrados no porão de uma e-girl'
    },
    {
        titulo:"um grupo neo nazista foi preso.'O QUE TEM DE ERRADO EM MATAR JUDEU!!???' diz bola um dos integrantes"
    },
    {
        titulo:"Aluno do Senai realiza um atentado terrorista nos USA e China anunciando 'ESSES MERDAS QUE ME OBRIGAM A LIGAR MEU VENTILADOR NO 3'"
    }
]
    
    )
})

 // pegar bagulho da databse
 app.get('/listaDeAfazeres/:id', async (req,res) =>{
    try{
        const taskList = await TaskModel.find({})
        const task = taskList.filter(task => task.id == req.params.id)[0];
    return res.status(201).json(task)
    }catch(error){
        return res.status(500).send(error.message)
    }
 })
 app.get('/listaDeAfazeres/', async (req,res) =>{
    try{
        
    const task = await TaskModel.find({})
    return res.status(201).json(task)
    }catch(error){
        return res.status(500).send(error.message)
    }
 })
 app.post('/listaDeAfazeres', async(req,res) =>{ //adicionar task
    try{
    const task = await TaskModel.create(req.body)
    res.status(201).json(task)
 }catch( err){
    res.status(500).send(err.message)
    
 }
 });
app.patch("/listaDeAfazeres/:id", async(req,res) =>{
    try{
        const taskList = await TaskModel.find({})
        const taskDB = taskList.filter(task => task.id == req.params.id);
        const {_id}  = (taskDB[0])

        const task = await TaskModel.findByIdAndUpdate(_id,req.body,{new: true})
       res.status(200).json(task) 
    }catch(err){
        console.log(err.message)
        res.status(500).send(error.message)
    }
})

app.listen(port,() =>{
    console.log(`rodando na porta ${port}`)})
