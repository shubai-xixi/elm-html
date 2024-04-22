/*
window.addEventListener('load',function(){
    const btn
})
*/

const express = require('express');
const app= express();
const  port = 63342;


app.listen(port,() => {
    console.log("cj");
})

let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mysqlsjk",
    database: "elmdb_list"
});

connection.connect((err) => {
    if(err){
        console.error("连接失败:" + err.stack);
        return;
    }
    console.log("连接成功");
});

connection.query("select yzm from customer where telnum='18177459597'",(err,result) => {
    // console.log("连接成功");

    if(err){
        console.error("查询出错：" + err.message);
        return;
    }
    console.log(result);
    yz = result[0].yzm;
});

connection.end();



