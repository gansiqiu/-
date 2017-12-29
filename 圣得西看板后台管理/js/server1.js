var http = require('http');
var fs = require('fs');
var url = require('url');
var queryString = require("querystring");


// 创建服务器
http.createServer( function (request, response) {  
	//跨域请求的解决方法
	response.setHeader("Access-Control-Allow-Origin", "*");
   // 解析请求，包括文件名
  	var pathname = url.parse(request.url).pathname;
   
   // 输出请求的文件名
   	console.log("Request for " + pathname + " received.");
   
  	var arg = url.parse(request.url).query;
   
   	console.log(arg);
   
      //  发送响应数据
    response.end();
      
}).listen(8082);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8082/');
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
 * 
 * */