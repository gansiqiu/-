var http = require('http');
var fs = require('fs');
var url = require('url');
var queryString = require("querystring");
//数据
var dataSourse = [	{"img": "img/background1.jpg","name": "1","size": "1","color": "color1"}, 
					{"img": "img/background1.jpg","name": "1","size": "1","color": "color1"}, 
					{"img": "img/background1.jpg","name": "1","size": "1","color": "color1"}, 
					{"img": "img/background1.jpg","name": "1","size": "1","color": "color1"}, 
					{"img": "img/background1.jpg","name": "1","size": "1","color": "color1"}, 
					{"img": "img/background1.jpg","name": "1","size": "1","color": "color1"}, 
					
					
					{"img": "img/background1.jpg","name": "2","size": "2","color": "color2"},
					{"img": "img/background1.jpg","name": "2","size": "2","color": "color2"},
					{"img": "img/background1.jpg","name": "2","size": "2","color": "color2"},
					{"img": "img/background1.jpg","name": "2","size": "2","color": "color2"},
					{"img": "img/background1.jpg","name": "2","size": "2","color": "color2"},
					{"img": "img/background1.jpg","name": "2","size": "2","color": "color2"},
					
					{"img": "img/background1.jpg","name": "3","size": "3","color": "color3"},
					{"img": "img/background1.jpg","name": "3","size": "3","color": "color3"},
					{"img": "img/background1.jpg","name": "3","size": "3","color": "color3"},
					{"img": "img/background1.jpg","name": "3","size": "3","color": "color3"},
					{"img": "img/background1.jpg","name": "3","size": "3","color": "color3"},
					{"img": "img/background1.jpg","name": "3","size": "3","color": "color3"},
					{"img": "img/background1.jpg","name": "4","size": "4","color": "color4"},
					{"img": "img/background1.jpg","name": "4","size": "4","color": "color4"},
					{"img": "img/background1.jpg","name": "4","size": "4","color": "color4"},
					{"img": "img/background1.jpg","name": "4","size": "4","color": "color4"},
					{"img": "img/background1.jpg","name": "4","size": "4","color": "color4"},
					{"img": "img/background1.jpg","name": "4","size": "4","color": "color4"},
					
					{"img": "img/background1.jpg","name": "5","size": "5","color": "color5"},
					{"img": "img/background1.jpg","name": "5","size": "5","color": "color5"},
					{"img": "img/background1.jpg","name": "5","size": "5","color": "color5"},
					{"img": "img/background1.jpg","name": "5","size": "5","color": "color5"},
					{"img": "img/background1.jpg","name": "5","size": "5","color": "color5"},
					{"img": "img/background1.jpg","name": "5","size": "5","color": "color5"},
					
					{"img": "img/background1.jpg","name": "6","size": "6","color": "color6"},
					{"img": "img/background1.jpg","name": "6","size": "6","color": "color6"},
					{"img": "img/background1.jpg","name": "6","size": "6","color": "color6"},
					{"img": "img/background1.jpg","name": "6","size": "6","color": "color6"},
					{"img": "img/background1.jpg","name": "6","size": "6","color": "color6"},
					{"img": "img/background1.jpg","name": "6","size": "6","color": "color6"},
					
					{"img": "img/background1.jpg","name": "7","size": "7","color": "color7"}, 
					{"img": "img/background1.jpg","name": "7","size": "7","color": "color7"}, 
					{"img": "img/background1.jpg","name": "7","size": "7","color": "color7"}, 
					{"img": "img/background1.jpg","name": "7","size": "7","color": "color7"}, 
					{"img": "img/background1.jpg","name": "7","size": "7","color": "color7"}, 
					{"img": "img/background1.jpg","name": "7","size": "7","color": "color7"}, 
					
					{"img": "img/background1.jpg","name": "8","size": "8","color": "color8"},
					{"img": "img/background1.jpg","name": "8","size": "8","color": "color8"},
					{"img": "img/background1.jpg","name": "8","size": "8","color": "color8"},
					{"img": "img/background1.jpg","name": "8","size": "8","color": "color8"},
					{"img": "img/background1.jpg","name": "8","size": "8","color": "color8"},
					{"img": "img/background1.jpg","name": "8","size": "8","color": "color8"},
					{"img": "img/background1.jpg","name": "9","size": "9","color": "color9"}, 
					{"img": "img/background1.jpg","name": "9","size": "9","color": "color9"}, 
					{"img": "img/background1.jpg","name": "9","size": "9","color": "color9"}, 
					{"img": "img/background1.jpg","name": "9","size": "9","color": "color9"}, 
					{"img": "img/background1.jpg","name": "9","size": "9","color": "color9"}, 
					{"img": "img/background1.jpg","name": "9","size": "9","color": "color9"}, 
					{"img": "img/background1.jpg","name": "10","size": "10","color": "color10"},
					{"img": "img/background1.jpg","name": "10","size": "10","color": "color10"},
					{"img": "img/background1.jpg","name": "10","size": "10","color": "color10"},
					{"img": "img/background1.jpg","name": "10","size": "10","color": "color10"},
					{"img": "img/background1.jpg","name": "10","size": "10","color": "color10"},
					{"img": "img/background1.jpg","name": "10","size": "10","color": "color10"},
					{"img": "img/background1.jpg","name": "11","size": "11","color":"color11"},
					{"img": "img/background1.jpg","name": "11","size": "11","color":"color11"},
					{"img": "img/background1.jpg","name": "11","size": "11","color":"color11"},
					{"img": "img/background1.jpg","name": "11","size": "11","color":"color11"},
					{"img": "img/background1.jpg","name": "11","size": "11","color":"color11"},
					{"img": "img/background1.jpg","name": "11","size": "11","color":"color11"},
					{"img": "img/background1.jpg","name": "12","size": "12","color":"color12"},
					{"img": "img/background1.jpg","name": "12","size": "12","color":"color12"},
					{"img": "img/background1.jpg","name": "12","size": "12","color":"color12"},
					{"img": "img/background1.jpg","name": "12","size": "12","color":"color12"},
					{"img": "img/background1.jpg","name": "12","size": "12","color":"color12"},
					{"img": "img/background1.jpg","name": "12","size": "12","color":"color12"},
					{"img": "img/background1.jpg","name": "13","size": "13","color":"color13"},
					{"img": "img/background1.jpg","name": "13","size": "13","color":"color13"},
					{"img": "img/background1.jpg","name": "13","size": "13","color":"color13"},
					{"img": "img/background1.jpg","name": "13","size": "13","color":"color13"},
					{"img": "img/background1.jpg","name": "13","size": "13","color":"color13"},
					{"img": "img/background1.jpg","name": "13","size": "13","color":"color13"},
					{"img": "img/background1.jpg","name": "14","size": "14","color":"color14"},
					{"img": "img/background1.jpg","name": "14","size": "14","color":"color14"},
					{"img": "img/background1.jpg","name": "14","size": "14","color":"color14"},
					{"img": "img/background1.jpg","name": "14","size": "14","color":"color14"},
					{"img": "img/background1.jpg","name": "14","size": "14","color":"color14"},
					{"img": "img/background1.jpg","name": "14","size": "14","color":"color14"},
					{"img": "img/background1.jpg","name": "15","size": "15","color":"color15"},
					{"img": "img/background1.jpg","name": "15","size": "15","color":"color15"},
					{"img": "img/background1.jpg","name": "15","size": "15","color":"color15"},
					{"img": "img/background1.jpg","name": "15","size": "15","color":"color15"},
					{"img": "img/background1.jpg","name": "15","size": "15","color":"color15"},
					{"img": "img/background1.jpg","name": "15","size": "15","color":"color15"},
					{"img": "img/background1.jpg","name": "16","size": "16","color":"color16"},
					{"img": "img/background1.jpg","name": "16","size": "16","color":"color16"},
					{"img": "img/background1.jpg","name": "16","size": "16","color":"color16"},
					{"img": "img/background1.jpg","name": "16","size": "16","color":"color16"},
					{"img": "img/background1.jpg","name": "16","size": "16","color":"color16"},
					{"img": "img/background1.jpg","name": "16","size": "16","color":"color16"},
					{"img": "img/background1.jpg","name": "17","size": "17","color":"color17"},
					{"img": "img/background1.jpg","name": "17","size": "17","color":"color17"},
					{"img": "img/background1.jpg","name": "17","size": "17","color":"color17"},
					{"img": "img/background1.jpg","name": "17","size": "17","color":"color17"},
					{"img": "img/background1.jpg","name": "17","size": "17","color":"color17"},
					{"img": "img/background1.jpg","name": "17","size": "17","color":"color17"},
					
					{"img": "img/background1.jpg","name": "18","size": "18","color":"color18"},
					{"img": "img/background1.jpg","name": "18","size": "18","color":"color18"},
					{"img": "img/background1.jpg","name": "18","size": "18","color":"color18"},
					{"img": "img/background1.jpg","name": "18","size": "18","color":"color18"},
					{"img": "img/background1.jpg","name": "18","size": "18","color":"color18"},
					{"img": "img/background1.jpg","name": "18","size": "18","color":"color18"},
					
					{"img": "img/background1.jpg","name": "19","size": "19","color":"color19"},
					{"img": "img/background1.jpg","name": "19","size": "19","color":"color19"},
					{"img": "img/background1.jpg","name": "19","size": "19","color":"color19"},
					{"img": "img/background1.jpg","name": "19","size": "19","color":"color19"},
					{"img": "img/background1.jpg","name": "19","size": "19","color":"color19"},
					{"img": "img/background1.jpg","name": "19","size": "19","color":"color19"},
					{"img": "img/background1.jpg","name": "20","size": "20","color":"color20"},
					{"img": "img/background1.jpg","name": "20","size": "20","color":"color20"},
					{"img": "img/background1.jpg","name": "20","size": "20","color":"color20"},
					{"img": "img/background1.jpg","name": "20","size": "20","color":"color20"},
					{"img": "img/background1.jpg","name": "20","size": "20","color":"color20"},
					{"img": "img/background1.jpg","name": "20","size": "20","color":"color20"},
					{"img": "img/background1.jpg","name": "21","size": "21","color":"color21"},
					{"img": "img/background1.jpg","name": "21","size": "21","color":"color21"},
					{"img": "img/background1.jpg","name": "21","size": "21","color":"color21"},
					{"img": "img/background1.jpg","name": "21","size": "21","color":"color21"},
					{"img": "img/background1.jpg","name": "21","size": "21","color":"color21"},
					{"img": "img/background1.jpg","name": "21","size": "21","color":"color21"},
					{"img": "img/background1.jpg","name": "22","size": "22","color":"color22"},
					{"img": "img/background1.jpg","name": "22","size": "22","color":"color22"},
					{"img": "img/background1.jpg","name": "22","size": "22","color":"color22"},
					{"img": "img/background1.jpg","name": "22","size": "22","color":"color22"},
					{"img": "img/background1.jpg","name": "22","size": "22","color":"color22"},
					{"img": "img/background1.jpg","name": "22","size": "22","color":"color22"},
					{"img": "img/background1.jpg","name": "23","size": "23","color":"color23"},
					{"img": "img/background1.jpg","name": "23","size": "23","color":"color23"},
					{"img": "img/background1.jpg","name": "23","size": "23","color":"color23"},
					{"img": "img/background1.jpg","name": "23","size": "23","color":"color23"},
					{"img": "img/background1.jpg","name": "23","size": "23","color":"color23"},
					{"img": "img/background1.jpg","name": "23","size": "23","color":"color23"},
					{"img": "img/background1.jpg","name": "24","size": "24","color":"color24"},
					{"img": "img/background1.jpg","name": "24","size": "24","color":"color24"},
					{"img": "img/background1.jpg","name": "24","size": "24","color":"color24"},
					{"img": "img/background1.jpg","name": "24","size": "24","color":"color24"},
					{"img": "img/background1.jpg","name": "24","size": "24","color":"color24"},
					{"img": "img/background1.jpg","name": "24","size": "24","color":"color24"},
					{"img": "img/background1.jpg","name": "25","size": "25","color":"color25"},
					{"img": "img/background1.jpg","name": "25","size": "25","color":"color25"},
					{"img": "img/background1.jpg","name": "25","size": "25","color":"color25"},
					{"img": "img/background1.jpg","name": "25","size": "25","color":"color25"},
					{"img": "img/background1.jpg","name": "25","size": "25","color":"color25"},
					{"img": "img/background1.jpg","name": "25","size": "25","color":"color25"},
					{"img": "img/background1.jpg","name": "26","size": "26","color":"color26"},
					{"img": "img/background1.jpg","name": "26","size": "26","color":"color26"},
					{"img": "img/background1.jpg","name": "26","size": "26","color":"color26"},
					{"img": "img/background1.jpg","name": "26","size": "26","color":"color26"},
					{"img": "img/background1.jpg","name": "26","size": "26","color":"color26"},
					{"img": "img/background1.jpg","name": "26","size": "26","color":"color26"},
					{"img": "img/background1.jpg","name": "27","size": "27","color":"color27"},
					{"img": "img/background1.jpg","name": "27","size": "27","color":"color27"},
					{"img": "img/background1.jpg","name": "27","size": "27","color":"color27"},
					{"img": "img/background1.jpg","name": "27","size": "27","color":"color27"},
					{"img": "img/background1.jpg","name": "27","size": "27","color":"color27"},
					{"img": "img/background1.jpg","name": "27","size": "27","color":"color27"},
					{"img": "img/background1.jpg","name": "28","size": "28","color":"color28"},
					{"img": "img/background1.jpg","name": "28","size": "28","color":"color28"},
					{"img": "img/background1.jpg","name": "28","size": "28","color":"color28"},
					{"img": "img/background1.jpg","name": "28","size": "28","color":"color28"},
					{"img": "img/background1.jpg","name": "28","size": "28","color":"color28"},
					{"img": "img/background1.jpg","name": "28","size": "28","color":"color28"}
					];
					
var jsonSourse = new Array; //发送数组
var dataList = new Object; //发送数组
// 创建服务器
http.createServer(function(request, response) {
	var jsonData = new Array; //盒子数组
	//跨域请求的解决方法
	response.setHeader("Access-Control-Allow-Origin", "*");

	// 解析请求，包括文件名
	var pathname = url.parse(request.url).pathname;

	var arg = url.parse(request.url).query;

	var offset = queryString.parse(arg).offset; //	offset =>0  5  11	
	var limit = queryString.parse(arg).limit; //	limit =>6  6  6
	var offsetInt = parseInt(offset);
	var limitInt = Number(limit);
	
		if(dataSourse.length - offsetInt >= limitInt) {
			for(var i = offsetInt; i < offsetInt + limitInt; i++) {
				//盒子数组
				jsonData.push(dataSourse[i]);
			}
		} else {
			for(var i = offsetInt; i < dataSourse.length; i++) {
				jsonData.push(dataSourse[i]);
			}
		}

	if (dataSourse.length % 6 == 0) {
		dataList.totalPage = parseInt(dataSourse.length / 6);
	} else{
		dataList.totalPage =  parseInt(dataSourse.length / 6 + 1);
	}
	if (dataSourse.length % 6 == 0) {
		dataList.totalPage = parseInt(dataSourse.length / 6);
	} else{
		dataList.totalPage =  parseInt(dataSourse.length / 6 + 1);
	}

	//数组序列化为json数据
	dataList.jsonData = jsonData;
	jsonSourse = JSON.stringify(dataList); 
		
//	jsonSourse = JSON.stringify(dataSourse);
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