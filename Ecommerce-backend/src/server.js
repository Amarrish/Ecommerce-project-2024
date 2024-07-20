import conndectDB from './config/DBconnection.js';
import app from './index.js'

const PORT = 5000;
app.listen(PORT, async()=>{
    await conndectDB();
    console.log(`Server is Listen at port ${PORT}`);
})