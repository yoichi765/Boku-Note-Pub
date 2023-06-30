const express = require("express");
const router = express.Router();
const knex = require("../db/knex_kaizaki");

/* GET home page. */
router.get("/", function (req, res, next) {
  const userId = req.query.user_id;
  const username = req.query.user_name;
  const isAuth = Boolean(userId);
  let result; //SQL取得結果格納用
  console.log(`isAuth: ${isAuth}`);

  knex
    .select("*")
    .from("drawer")
    .then((rows) => {
      // 取得したデータを処理する
      console.log(rows); // データを表示する例として、コンソールにログ出力する
      result = rows;
      res.render("posts", {
        title: "Boku-Note",
        username: username,
        isAuth: isAuth,
        result: result,
      });
    })
    .catch((error) => {
      // エラーハンドリング
      console.error(error);
    });
});

module.exports = router;
