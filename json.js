// example for  node.js fire
//连接数据库
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'cookbook'
});

connection.connect();

const fs = require('fs');
const jsonFile = './ex.json';//此处为你的json文件
const jsonObj = JSON.parse(fs.readFileSync(jsonFile));
console.log(jsonObj)


const uuidv1 = require('uuid/v1');
console.log(uuidv1()); // test uuid (generated by timestamp)

(async () => {
  for (let w of jsonObj) {
    console.log(w)
    // try {
    //   let addSql = `INSERT INTO cb_detail
    //   (id,classid,name,peoplenum,preparetime,cookingtime,content,pic,tag,material,process)
    //    VALUES(?,?,?,?,?,?,?,?,?,?,?)`;
    //   let addSqlParams = [w.id, w.classid, w.name, w.peoplenum,w.preparetime,w.cookingtime,w.content,w.pic,w.tag,w.material,w.process];
    //   await insert(addSql, addSqlParams);
    // } catch (error) {
    //   console.log(`Error: ${error}`);
    // }
  }
  // console.log('All completed!');
})();

// function insert(addSql, addSqlParams) {
//   return new Promise((resolve, reject) => {
//     try {
//       connection.query(addSql, addSqlParams, function (err, result) {
//         if (err) {
//           console.log('[INSERT ERROR] - ', err.message);
//           reject(err);
//         } else {
//           // console.log('INSERT ID:', result);
//           console.log('INSERT ID:', addSqlParams[0]);
//           resolve();
//         }
//       });
//     } catch (err) {
//       reject(err);
//     }
//   })
// }