import pool from "../db/pg.js";

export const getAllUsers = (req, res) => {
  pool
    .query("SELECT * FROM users")
    .then((data) => res.status(200).json({ user: data.rows }))
    .catch((err) => console.log(err));
};

export const createNewUser = (req, res) => {
  const { first_name, last_name, department, email, image_url } = req.body;
  pool
    .query(
      "INSERT INTO users (first_name, last_name, department, email, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [first_name, last_name, department, email, image_url]
    )
    .then((data) => res.status(201).json(data.rows[0]))
    .catch((err) => res.status(500).json(err));
};

export const getSingleUser = (req, res) => {
  const { id } = req.params;

  pool
    .query("SELECT * FROM users WHERE id=$1", [id])
    .then((data) => {
      if (data.rowCount == 0) {
        res.status(404).send("There is no user matching this ID");
      } else {
        res.status(200).json(data.rows[0]);
      }
    })
    .catch((err) => res.status(500).json("user not found"));
};

export const updateSingleUser = (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, department, email } = req.body;
  pool
    .query(
      "UPDATE users SET first_name=$1, last_name=$2, department=$3, email=$4 WHERE id=$5 RETURNING*;",
      [first_name, last_name, department, email, id]
    )
    .then((data) => {
      if (data.rowCount == 0) {
        res.status(404).send("There is no user matching this ID");
      } else {
        res.status(200).json(data.rows[0]);
      }
    })
    .catch((err) => res.status(500).json(err));
};

export const deleteSingleUser = (req, res) => {
  const { id } = req.params;
  pool
    .query("DELETE FROM users WHERE id=$1", [id])
    .then((data) => {
      if (data.rowCount == 0) {
        res.status(404).send("There is no user matching this ID");
      } else {
        res.status(200).send("User successfully deleted.");
      }
    })
    .catch((err) => res.status(500).json(err));
};
