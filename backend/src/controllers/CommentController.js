const connection = require("../config/database");
const { v4: uuidv4 } = require("uuid");

class CommentController {
  getComment(req, res, next) {
    const sql = `select *   from feedback where idFeedback = ?`;

    connection.query(`${sql}`, [req.params.id], (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }

  postComment(req, res, next) {
    const d = new Date();
    let day = d.getDay();
    let month = d.getMonth();
    let year = d.getFullYear();

    let fullDay = `${year}-${month}-${day}`;

    const id = uuidv4();
    // nhận vào 5 giá trị idFeedback,comment, id
    const sql =
      "INSERT INTO feedback(idFeedback,comment,id,createAt,idUser)  value (?,?,?,?,?)";
    console.log(req.body);
    connection.query(
      `${sql}`,
      [req.body.idFeedback, req.body.comment, id, fullDay, req.body.idUser],
      (err, result) => {
        err ? console.log(err) : res.json(result);
      }
    );
  }
  // connection
  // SELECT feedback.idFeedback,feedback.comment,feedback.ratings,feedback.id,feedback.like,feedback.createAt,user.username  FROM fashion_shop.feedback  INNER JOIN user ON user.idUser = feedback.idUser;
  getComment(req, res, next) {
    const sql =
      "SELECT feedback.idFeedback,feedback.comment,feedback.ratings,feedback.id,feedback.like,feedback.createAt,user.username  FROM fashion_shop.feedback  INNER JOIN user ON user.idUser = feedback.idUser where feedback.idFeedback = ?";
    connection.query(`${sql}`, [req.params.idDetail], (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }
}
module.exports = new CommentController();
