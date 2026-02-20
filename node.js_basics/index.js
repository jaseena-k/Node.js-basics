const express =require('express')
const app = express()
const multer =require('multer')
const path =require('path')

// storage configuration 
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,path.join(__dirname,'uploads'))
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    }
})
const upload = multer({storage})

app.get('/',(req,res)=>{
    res.send('Hi Jasi')
})
app.post('/api/upload',upload.single('file'),(req,res)=>{
    res.json({"data":req.file,"message":"success"})
})
const port =process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})