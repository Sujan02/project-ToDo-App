/*****************
*defining routes *
*controllers     *
******************/


/* requiring express module so that we can use express app*/
const express = require('express');

//requiring bodyparser
const bodyParser = require('body-parser');
//requiring mongoose
const mongoose = require('mongoose');
//module.exports =function(app){
//creating express router to handle routes
const router = express.Router();
//const router = app.Router();


//connect to the database

//dummy data on the server, & will be passed to the todo view
var data = [{item: 'get Milk'}, {item: 'walk dog'}, {item: 'complete certification'}];

//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//HTTP get method to get a list of todo tasks
router.get('/todolists',function(req, res){
  //console.log('listening to get request');
//  res.end();//this will end the request
  //res.send({type: 'GET'});//this will send the response back to the browser with name property
  //res.render('todo');
  //after adding the data outputing interval
  res.render('todo', {todos: data});//'todo' is the view and the array in data is passed to that
});

//Route by ID -- replacing router with app
router.get('/todolists/:id',function(req, res){
  //console.log('listening to get request');
//  res.end();//this will end the request
  res.send({type: 'GET'});//this will send the response back to the browser with name property
});
/*
router.get('/todolists',function(req, res){
  //console.log('listening to get request');
//  res.end();//this will end the request
  res.send({type: 'GET'});//this will send the response back to the browser with name property
});
*/
//add a new todo list task
router.post('/todolists', urlencodedParser ,function(req, res){
  //res.send({type: 'POST'});//this will send the response back to the browser with name property
 data.push(req.body);
 res.json(data);
});

//update existing todo list task
router.put('/todolists/:id',function(req, res){
  res.send({type: 'PUT'});//this will send the response back to the browser with name property
});

//deleting a todo list task
router.delete('/todolists/:item',function(req, res){
  //res.send({type: 'DELETE'});//this will send the response back to the browser with name property
 data = data.filter(function(todo){
   return todo.item.replace(/ /g, '-') !==req.params.item;
 })
 res.json(data);
});


//exporting the routes
module.exports = router;
