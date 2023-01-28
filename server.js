var express = require("express")
var app = express()
var cors = require("cors")

let dbConnect = require("./dbConnect")
let projectRoutes = require("./Routes/projectRoutes");


app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/projects', projectRoutes)
let projectCollection;

//mongoDB connection
// const MongoClient = require('mongodb').MongoClient;

// //add DB connection...
// const uri = 'mongodb+srv://SharonMongoDB:yGWKm5jSJ36QXR2@cluster1.106x6eb.mongodb.net/?retryWrites=true&w=majority'
// const client = new MongoClient(uri, {useNewUrlParser: true})

// insert project...
// const insertProjects = (project,callback) => {
//         projectCollection.insert(project,callback);
//     }

// // get project...
// const getProjects = (callback) => {
//         projectCollection.find({}).toArray(callback);
//     }

// // const createCollection = (collectionName) => {
// //         client.connect((err,db) => {
// //             projectCollection = client.db().collection(collectionName);
// //             if(!err) {
// //                 console.log('MongoDB Connected')
// //             }
// //             else {
// //                 console.log("DB Error: ", err);
// //                 process.exit(1);
// //             }
// //         })
// //     }




 
// app.get('/api/projects',(req,res) => {
//         getProjects((err,result) => {
//             if(err) {
//                 res.json({statusCode: 400, message: err})
//             }
//             else {
//                 res.json({statusCode: 200, message:"Success", data: result})
//             }
//         })
//     })

//     //post api
    //  app.post('/api/projects',(req,res) => {
    //         console.log("New Project added", req.body)
    //         var newProject = req.body;
    //         insertProjects(newProject,(err,result) => {
    //             if(err) {
    //                 res.json({statusCode: 400, message: err})
    //             }
    //             else {
    //                 res.json({statusCode: 200, message:"Project Successfully added", data: result})
    //             }
    //         })
    //  })

    var http = require('http'),
    fs = require('fs'),
    index = fs.readFileSync(__dirname + '/public/index.html');

// Send index.html to all requests
var app = http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

// Socket.io server listens to our app
const io = require('socket.io')(app);

// Send current time to all connected clients
function sendTime() {
    io.emit('time', { time:JSON.stringify('No of users connected right now : '+' '+parseInt(Math.random()*10))});
   
}

// Send current time every 10 secs
setInterval(sendTime, 1000);

// Emit welcome message on connection
io.on('connection',(socket)=>{
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    setInterval(()=>{
     // socket.emit('number', parseInt(Math.random()*10));
      console.log('No of users  :'+parseInt(Math.random()*10));
    }, 10000);
  });



var port = process.env.port || 3000;
app.listen(port,()=>{

    console.log("App listening to: http://localhost:"+port)
    //createCollection("Pets");
})

