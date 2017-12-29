var http = require('http');
var fs = require('fs');
var url = require('url');
var queryString = require("querystring");
//数据
var dataSourse = [
	{"img": "pic1.jpg","time": "2017.10.1"},{"img": "pic1.jpg","time": "2017.10.2"},
	{"img": "pic1.jpg","time": "2017.10.3"},{"img": "pic1.jpg","time": "2017.10.4"},
	{"img": "pic1.jpg","time": "2017.10.5"},{"img": "pic1.jpg","time": "2017.10.6"},
	{"img": "pic1.jpg","time": "2017.10.7"},{"img": "pic1.jpg","time": "2017.10.8"},
	{"img": "pic1.jpg","time": "2017.10.9"},{"img": "pic1.jpg","time": "2017.10.10"},
	{"img": "pic1.jpg","time": "2017.10.11"},{"img": "pic1.jpg","time": "2017.10.12"},
	{"img": "pic1.jpg","time": "2017.10.13"},{"img": "pic1.jpg","time": "2017.10.14"},
	{"img": "pic1.jpg","time": "2017.10.15"},{"img": "pic1.jpg","time": "2017.10.16"},
	{"img": "pic1.jpg","time": "2017.10.17"},{"img": "pic1.jpg","time": "2017.10.18"},
	{"img": "pic1.jpg","time": "2017.10.19"},{"img": "pic1.jpg","time": "2017.10.20"},//
	{"img": "pic1.jpg","time": "2017.10.21"},{"img": "pic1.jpg","time": "2017.10.22"},
	{"img": "pic1.jpg","time": "2017.10.23"},{"img": "pic1.jpg","time": "2017.10.24"},
	{"img": "pic1.jpg","time": "2017.10.25"},{"img": "pic1.jpg","time": "2017.10.26"},
	{"img": "pic1.jpg","time": "2017.10.27"},{"img": "pic1.jpg","time": "2017.10.28"},
	{"img": "pic1.jpg","time": "2017.10.29"},{"img": "pic1.jpg","time": "2017.10.30"},
	{"img": "pic1.jpg","time": "2017.10.31"},{"img": "pic1.jpg","time": "2017.10.32"},
	{"img": "pic1.jpg","time": "2017.10.33"},{"img": "pic1.jpg","time": "2017.10.34"},
	{"img": "pic1.jpg","time": "2017.10.35"},{"img": "pic1.jpg","time": "2017.10.36"},
	{"img": "pic1.jpg","time": "2017.10.37"},{"img": "pic1.jpg","time": "2017.10.38"},
	{"img": "pic1.jpg","time": "2017.10.39"},{"img": "pic1.jpg","time": "2017.10.40"},
	{"img": "pic1.jpg","time": "2017.10.41"},{"img": "pic1.jpg","time": "2017.10.42"},
	
];

var jsonSourse = new Array; //发送数组
// 创建服务器
http.createServer(function(request, response) {
var jsonData = new Array; //盒子数组
	//跨域请求的解决方法
	response.setHeader("Access-Control-Allow-Origin", "*");

	// 解析请求，包括文件名
	var pathname = url.parse(request.url).pathname;

	var arg = url.parse(request.url).query;

	var offset = queryString.parse(arg).offset; //	offset =>0  20  40	
	var limit = queryString.parse(arg).limit; //	limit =>20  20  20 
//	console.log(offset,limit);
	//string类型转为int类型
	var offsetInt = parseInt(offset);
	var limitInt = Number(limit);
	//         42              0 20 40   
		if(dataSourse.length - offsetInt >= limitInt) {
			console.log("1111");
			for(var i = offsetInt; i < offsetInt + limitInt; i++) {
				//盒子数组
				jsonData.push(dataSourse[i]);
				
	//			console.log(offset+limit);  			offset+limit 2020
			}
		} else {
			console.log("2222" + offsetInt);
			for(var i = offsetInt; i < dataSourse.length; i++) {
				jsonData.push(dataSourse[i]);
				console.log(i,jsonData);
			}
		}

	
	
	//数组序列化为json数据
	jsonSourse = JSON.stringify(jsonData); 
	response.write(jsonSourse);
	//  发送响应数据
	response.end();
}).listen(8081);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');

/*
 * 
 * 
 * 		http://user:pass@host.com:8080/p/a/t/h?query=string#hash
 * 
 * 		href: 解析前的完整原始 URL，协议名和主机名已转为小写  	 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
 * 		protocol: 请求协议，小写   			'http:'
 * 		slashes: 协议的“：”号后是否有“/”		true or false
 * 		host: URL主机名，包括端口信息，小写		'host.com:8080'
 * 		auth: URL中的认证信息				'user:pass'
 * 		hostname: 主机名，小写				'host.com'
 * 		port: 主机的端口号					'8080'
 * 		pathname: URL中路径				'/p/a/t/h'
 * 		search: 查询对象，即：queryString，包括之前的问号“?”		'?query=string'
 * 		path: pathname 和 search的合集						'/p/a/t/h?query=string'
 * 		query: 查询字符串中的参数部分（问号后面部分字符串），或者使用 querystring.parse() 解析后返回的对象		'query=string' or {'query':'string'}
 * 		hash: 锚点部分（即：“#”及其后的部分）	'#hash'
 * 
 * 
 * 
 * */