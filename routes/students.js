const express = require ('express')
const router = express.Router()
const students = require('../Students')

// GET ALL STUDENTS
router.get('/students', (req, res) => {
    res.json(students)
})
// GET ONE STUDENT
router.get('/students/:id', (req, res) => {
    let student = students.filter(student => student.id === parseInt(req.params.id))
    if(student.length === 0){
       res.json({msg: "ther's no user with this ID:" + req.params.id}) 
    }else{
        res.json(student) 
    }
    
})

//DELETTE ONE STUDENT
router.delete('/students/:id', (req, res) => {
    let student = students.filter(student => student.id !== parseInt(req.params.id))
    
        res.json(student) 
})

//ADD NEW STUDENT
router.post('/students', (req, res) => {
    res.json(students.concat(req.body))
})

//EDIT STUDENT
router.put('/students/:id', (req, res) =>{
    res.json(students.map(el => el.id === parseInt(req.params.id) ? {...req.body, id: el.id} :el))
})

module.exports = router