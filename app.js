const express = require('express')
const app = express()
const connectDB = require('./Connection')
const cluster = require('cluster');
const os = require('os')

const PORT = 2000
const cors = require('cors')



if(cluster.isPrimary)
{
    console.log(`Primary ${process.pid} is running`);
    const numCpu = os.cpus().length
    console.log("numCpu",numCpu)

   for(let i = 0;i<=numCpu;i++)
   {
    cluster.fork()
   }
   cluster.on('exit',(worker,code,signal)=>{
    console.log(`Worker ${worker.process.pid} died`);
    console.log("Starting a new worker");
    cluster.fork();
   })
}
else {

    app.use(cors())

app.use(express.json())

const userRoute = require('./Route/UserRoute');

app.use('/api',userRoute)


connectDB()
app.listen(PORT,()=>{
    console.log("Server is start")
})

}

