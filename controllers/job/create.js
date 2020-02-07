/*
===========================================================================

Description:
Creates a new job

Params
- job : Object

===========================================================================
*/

var Jobs = require("../../models/jobs");

exports.index = async (req, res) => {
  console.log(req.body);
  if (!req.body.title || !req.body.description || !req.body.employer) {
    res.status(200).send({
      error: true,
      message: "All fields must be completed"
    });
  } else {
    var job = {
      title: req.body.title,
      description: req.body.description,
      employer: req.body.employer
    };

    Jobs.createJob(job, function(err, job) {
      console.log("controller");
      if (err) res.send(err);

      console.log(res);

      res.status(201).send({
        message: "Created new job"
      });
    });
  }
};
