module.exports = function(app) {
  var express = require('express');
  var talksRouter = express.Router();
  var bodyParser = require('body-parser');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  var mockData = [
    {
      id: 1, 
      title: 'Ember in Action', 
      content: [
        "Write dramatically less code with Ember's Handlebars integrated templates that update automatically when the underlying data changes.",
        "Don't waste time making trivial choices. Ember.js incorporates common idioms so you can focus on what makes your app special, not reinventing the wheel.",
        "Ember.js is built for productivity. Designed with developer ergonomics in mind, its friendly APIs help you get your job done—fast."
      ]
    },
    {
      id: 2, 
      title: 'Angular in Action', 
      content: [
        "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.",
        "Other frameworks deal with HTML’s shortcomings by either abstracting away HTML, CSS, and/or JavaScript or by providing an imperative way for manipulating the DOM. Neither of these address the root problem that HTML was not designed for dynamic views."
      ]
    },
    {
      id: 3, 
      title: 'React in Action', 
      content: [
        "Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.",
        "React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native."
      ]
    }
  ];

  talksRouter.get('/', function(req, res) {
    res.send({
      'talks': mockData
    });
  });

  talksRouter.post('/', function(req, res) {
    var newTalk = req.body.talk;
    newTalk.id = mockData.length + 1;
    mockData.push(newTalk);

    console.log(newTalk.content)

    res.send({
      'talks' : newTalk
    })
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
