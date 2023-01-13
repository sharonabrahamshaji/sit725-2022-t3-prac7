var express = require("express");
const projectController = require("../Controller/projectController");
var router = express.Router();

// let client = require("../dbConnect");
// let projectCollection;
let controller = require("../Controller")

// setTimeout(() => {
//     projectCollection = client.mongoClient.db().ollection("Projects");
// }, 2000)

// const insertProjects = (project,callback) => {
//         projectCollection.insert(project,callback);
//     }

// // get project...
// const getProjects = (callback) => {
//         projectCollection.find({}).toArray(callback);
//     }


router.get('/',(req,res) => {
    controller.projectController.createProjects(req, res)
    //     getProjects((err,result) => {
    //         if(err) {
    //             res.json({statusCode: 400, message: err})
    //         }
    //         else {
    //             res.json({statusCode: 200, message:"Success", data: result})
    //         }
    //     })
    })

//     //  get project...
// const getProjects = (callback) => {
//          projectCollection.find({}).toArray(callback);
//      }


    //post api
    router.post('/api/projects',(req,res) => {
        controller.projectController.retrieveProjects(req, res)

        //     console.log("New Project added", req.body)
        //     var newProject = req.body;
        //     insertProjects(newProject,(err,result) => {
        //         if(err) {
        //             res.json({statusCode: 400, message: err})
        //         }
        //         else {
        //             res.json({statusCode: 200, message:"Project Successfully added", data: result})
        //         }
        //     })
        })
        

        module.exports = router;
        