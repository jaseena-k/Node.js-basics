const express = require("express")
const Joi = require("joi")
const app = express()
app.use(express.json())

const courses = [
    { id: 1, name: 'mernstack' },
    { id: 2, name: 'webdevelopment' },
    { id: 3, name: 'datascience' }
]

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/api/courses', (req, res) => {
    res.send(courses)
})
app.post('/api/courses', (req, res) => {
    console.log("success", req.body)

   const {error} = validateCourse(req.body)
   console.log("error  : ", error);
   
      if (error)
         res.status(400).send(error.details[0].message)
        
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(400).send("The given  id is not found")
   
    const {error} = validateCourse(req.body)
      if (error) return res.status(400).send(error.details[0].message)

    course.name =req.body.name;
    res.send(course)

})

function validateCourse(course){
    // console.log("validator : ",course);
    
    const schema ={
        name: Joi.string().min(3).required()
    }
    console.log("validated");
     
    return Joi.validate(course,schema)
    
}

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("The given  id is not found")
     res.send(course)
})

app.delete('/api/courses/:id',(req,res)=>{

const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(400).send("The given  id is not found")
   const index = courses.indexOf(course)
    courses.splice(index,1)
    res.send(course)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`port number is ${port}..`))
