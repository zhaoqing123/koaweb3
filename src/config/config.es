import path from 'path'
const CONFIG=new Map();
CONFIG.set('port',3000)
CONFIG.set('staticDir',path.join(__dirname,'../../','public'))
CONFIG.set('viewDir',path.join(__dirname,'../../public/','views'))
export default CONFIG