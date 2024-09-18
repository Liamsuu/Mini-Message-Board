const pool = require("./pool");

async function addData(user, text, added) {
  await pool.query(
    `INSERT INTO messages (username, text, added) 
        VALUES($1, $2, $3);
        `,
    [user, text, added]
  );
}

async function getAllMessages() {
  const messages = await pool.query(`SELECT * FROM messages`);
  return messages.rows;
}

module.exports = {
  addData,
  getAllMessages,
};
