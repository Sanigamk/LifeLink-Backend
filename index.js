
import express from 'express';
import mongoose from 'mongoose';
import adminRouter from "./router/admin.js"
import hospitalRouter from "./router/hospital.js"
import collegeRouter from "./router/college.js"
import usersRouter from "./router/users.js"
import donorRouter from "./router/blooddonor.js"
import cors from 'cors'
const app = express();
app.use('/uploads', express.static('uploads'));
mongoose.connect("mongodb://localhost:27017/AWHMca")
.then((res)=>{console.log(`mongodb connected host:${res.connection.host}`)})

app.use(express.json())
app.use(cors())
// -------------------------

// api
app.use('/user',adminRouter)
app.use('/hospital',hospitalRouter)
app.use('/college',collegeRouter)
app.use('/users',usersRouter)
app.use('/blooddonor',donorRouter)




// -----------------

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));