const connection = require("../database");

/**
 * Retrieves all tasks from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
function getTasks(req, res) {
  connection.query("SELECT * FROM tasks", (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error." });
    }
    res.json(results);
  });
}

module.exports = {
  getTasks,
};
