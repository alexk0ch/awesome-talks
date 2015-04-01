module.exports = function(app) {
  var express = require('express');
  var talksRouter = express.Router();

  var mockData = [
    {id: 11, title: 'Ember in Action'},
    {id: 12, title: 'Title 2'},
    {id: 13, title: 'Title 3'}
  ];

  talksRouter.get('/', function(req, res) {
    res.send({
      'talks': mockData
    });
  });

  talksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  talksRouter.get('/:id', function(req, res) {
    res.send({
      'talks': mockData[req.params.id]
    });
  });

  talksRouter.put('/:id', function(req, res) {
    res.send({
      'talks': {
        id: req.params.id
      }
    });
  });

  talksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/talks', talksRouter);
};
