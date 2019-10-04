const express = require('express');
const app = express();
const studentRoutes = express.Router();

// Require Book model in our routes module
let Student = require('../models/Student');

// Defined store route
studentRoutes.route('/add').post(function (req, res) {

//  console.log('I am in save student');
  let student = new Student(req.body);
  student.save()
    .then(student => {
      res.status(200).json({'Student': 'Book has been assign successfully to student'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
studentRoutes.route('/').get(function (req, res) {
  Student.find(function (err, students){
    if(err){
      console.log(err);
    }
    else {
      res.json(students);
    }
  });
});
/*
// Defined edit route
bookRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
Book.findById(id, function (err, book){
      res.json(book);
  });
});

//  Defined update route
bookRoutes.route('/update/:id').post(function (req, res) {
  Book.findById(req.params.id, function(err, book) {
    if (!book)
      res.status(404).send("Record not found");
    else {
      book.BookName = req.body.BookName;
      book.BookDescription = req.body.BookDescription;
      book.BookPrice = req.body.BookPrice;

      book.save().then(book => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});*/
// Defined delete | remove | destroy route
studentRoutes.route('/delete/:id').get(function (req, res) {
  Student.findByIdAndRemove({_id: req.params.id}, function(err, student){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

module.exports = studentRoutes;
