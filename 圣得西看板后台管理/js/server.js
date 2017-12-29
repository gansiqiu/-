var http = require('http');
var fs = require('fs');
var url = require('url');
var queryString = require("querystring");
/*	数据*/
var dataSourse = [	
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"-3","HaleFull":"-3","CoolWarm":"-3","Number":"1-1"},
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"-2.5","HaleFull":"-2.5","CoolWarm":"-2.5","Number":"1-2"},
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"-2","HaleFull":"-2","CoolWarm":"-2","Number":"1-3"},
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"-1.5","HaleFull":"-1.5","CoolWarm":"-1.5","Number":"1-4"},
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"-1","HaleFull":"-1","CoolWarm":"-1","Number":"1-5"},
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"-0.5","HaleFull":"-0.5","CoolWarm":"-0.5","Number":"1-6"},
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"0","HaleFull":"0","CoolWarm":"0","Number":"1-7"},	
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"0.5","HaleFull":"-0.5","CoolWarm":"-0.5","Number":"1-8"},	
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"1","HaleFull":"1","CoolWarm":"1","Number":"1-9"},	
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"1.5","HaleFull":"1.5","CoolWarm":"1.5","Number":"1-10"},	
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"2","HaleFull":"2","CoolWarm":"2","Number":"1-11"},	
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"2.5","HaleFull":"2.5","CoolWarm":"2.5","Number":"1-12"},	
	{"img":"img/img_2.jpg","Type":"艺术品","SimpleComplex":"3","HaleFull":"3","CoolWarm":"3","Number":"1-13"},	
	
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"-3","HaleFull":"-3","CoolWarm":"-3","Number":"2-1"},
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"-2.5","HaleFull":"-2.5","CoolWarm":"-2.5","Number":"2-2"},
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"-2","HaleFull":"-2","CoolWarm":"-2","Number":"2-3"},
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"-1.5","HaleFull":"-1.5","CoolWarm":"-1.5","Number":"2-4"},
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"-1","HaleFull":"-1","CoolWarm":"-1","Number":"2-5"},
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"-0.5","HaleFull":"-0.5","CoolWarm":"-0.5","Number":"2-6"},
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"0","HaleFull":"0","CoolWarm":"0","Number":"2-7"},	
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"0.5","HaleFull":"-0.5","CoolWarm":"-0.5","Number":"2-8"},	
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"1","HaleFull":"1","CoolWarm":"1","Number":"2-9"},	
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"1.5","HaleFull":"1.5","CoolWarm":"1.5","Number":"2-10"},	
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"2","HaleFull":"2","CoolWarm":"2","Number":"2-11"},	
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"2.5","HaleFull":"2.5","CoolWarm":"2.5","Number":"2-12"},	
	{"img":"img/img_2.jpg","Type":"建筑","SimpleComplex":"3","HaleFull":"3","CoolWarm":"3","Number":"2-13"},
	
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"-3","HaleFull":"-3","CoolWarm":"-3","Number":"3-1"},
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"-2.5","HaleFull":"-2.5","CoolWarm":"-2.5","Number":"3-2"},
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"-2","HaleFull":"-2","CoolWarm":"-2","Number":"3-3"},
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"-1.5","HaleFull":"-1.5","CoolWarm":"-1.5","Number":"3-4"},
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"-1","HaleFull":"-1","CoolWarm":"-1","Number":"3-5"},
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"-0.5","HaleFull":"-0.5","CoolWarm":"-0.5","Number":"3-6"},
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"0","HaleFull":"0","CoolWarm":"0","Number":"3-7"},	
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"0.5","HaleFull":"-0.5","CoolWarm":"-0.5","Number":"3-8"},	
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"1","HaleFull":"1","CoolWarm":"1","Number":"3-9"},	
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"1.5","HaleFull":"1.5","CoolWarm":"1.5","Number":"3-10"},	
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"2","HaleFull":"2","CoolWarm":"2","Number":"3-11"},	
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"2.5","HaleFull":"2.5","CoolWarm":"2.5","Number":"3-12"},	
	{"img":"img/img_2.jpg","Type":"动物","SimpleComplex":"3","HaleFull":"3","CoolWarm":"3","Number":"3-13"},
	
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"-3","HaleFull":"-3","CoolWarm":"-3","Number":"4-1"},
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"-2.5","HaleFull":"-2.5","CoolWarm":"-2.5","Number":"4-2"},
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"-2","HaleFull":"-2","CoolWarm":"-2","Number":"4-3"},
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"-1.5","HaleFull":"-1.5","CoolWarm":"-1.5","Number":"4-4"},
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"-1","HaleFull":"-1","CoolWarm":"-1","Number":"4-5"},
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"-0.5","HaleFull":"-0.5","CoolWarm":"-0.5","Number":"4-6"},
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"0","HaleFull":"0","CoolWarm":"0","Number":"4-7"},	
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"0.5","HaleFull":"-0.5","CoolWarm":"-0.5","Number":"4-8"},	
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"1","HaleFull":"1","CoolWarm":"1","Number":"4-9"},	
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"1.5","HaleFull":"1.5","CoolWarm":"1.5","Number":"4-10"},	
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"2","HaleFull":"2","CoolWarm":"2","Number":"4-11"},	
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"2.5","HaleFull":"2.5","CoolWarm":"2.5","Number":"4-12"},	
	{"img":"img/img_2.jpg","Type":"植物","SimpleComplex":"3","HaleFull":"3","CoolWarm":"3","Number":"4-13"},
	
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"-3","HaleFull":"-3","CoolWarm":"-3","Number":"5-1"},
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"-2.5","HaleFull":"-2.5","CoolWarm":"-2.5","Number":"5-2"},
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"-2","HaleFull":"-2","CoolWarm":"-2","Number":"5-3"},
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"-1.5","HaleFull":"-1.5","CoolWarm":"-1.5","Number":"5-4"},
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"-1","HaleFull":"-1","CoolWarm":"-1","Number":"5-5"},
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"-0.5","HaleFull":"-0.5","CoolWarm":"-0.5","Number":"5-6"},
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"0","HaleFull":"0","CoolWarm":"0","Number":"5-7"},	
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"0.5","HaleFull":"-0.5","CoolWarm":"-0.5","Number":"5-8"},	
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"1","HaleFull":"1","CoolWarm":"1","Number":"5-9"},	
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"1.5","HaleFull":"1.5","CoolWarm":"1.5","Number":"5-10"},	
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"2","HaleFull":"2","CoolWarm":"2","Number":"5-11"},	
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"2.5","HaleFull":"2.5","CoolWarm":"2.5","Number":"5-12"},	
	{"img":"img/img_2.jpg","Type":"风景","SimpleComplex":"3","HaleFull":"3","CoolWarm":"3","Number":"5-13"}
	];
				

// 创建服务器
http.createServer(function(request, response) {
	
	var dataList = new Object;
	var jsonData = new Array;
	//跨域请求的解决方法
	response.setHeader("Access-Control-Allow-Origin", "*");
	var dataP = "";
	request.on('data', function(chunk) {
		dataP += chunk;
	});
	request.on('end', function() {
		// 解析参数
		dataP = queryString.parse(dataP);
		// 设置响应头部信息及编码
		response.writeHead(200, {
			'Content-Type': 'text/html; charset=utf8'
		});
		
		if (dataP.searchText == "") {
			console.log("searchBarData为空");
		} else{
			console.log(dataP.searchText);
		}
		
		
		if ((dataP.type === null || dataP.type === undefined)||(dataP.simplecomplex === null || dataP.simplecomplex === undefined)||(dataP.halefull === null || dataP.halefull === undefined)||(dataP.coolwarm === null || dataP.coolwarm === undefined)) {
			console.log("显示为undefined");
		}else{
			var arr_number = [dataP.searchText];
			var arr_type = dataP.type.split(',');
			var arr_simplecomplex = dataP.simplecomplex.split(',');
			var arr_halefull = dataP.halefull.split(',');
			var arr_coolwarm = dataP.coolwarm.split(',');			
			/*
			* 1.对相同的组进行并集运算，不同组之间取交集运算
			* 2.将得到的数据进行数组填装(arr_number === "" || arr_number===null  || arr_number === dataSourse[i].Number) && 
			*/
			for (var i =0;i < dataSourse.length;i++) {
				if ((dataP.type === "" || dataSourse[i].Type == arr_type[0] || dataSourse[i].Type == arr_type[1] || dataSourse[i].Type == arr_type[2] || dataSourse[i].Type == arr_type[3] || dataSourse[i].Type == arr_type[4]) && (dataSourse[i].SimpleComplex == arr_simplecomplex[0] || dataSourse[i].SimpleComplex == arr_simplecomplex[1] || dataSourse[i].SimpleComplex == arr_simplecomplex[2] || dataSourse[i].SimpleComplex == arr_simplecomplex[3] || dataSourse[i].SimpleComplex == arr_simplecomplex[4] || dataSourse[i].SimpleComplex == arr_simplecomplex[5] || dataSourse[i].SimpleComplex == arr_simplecomplex[6] || dataSourse[i].SimpleComplex == arr_simplecomplex[7] || dataSourse[i].SimpleComplex == arr_simplecomplex[8] || dataSourse[i].SimpleComplex == arr_simplecomplex[9] || dataSourse[i].SimpleComplex == arr_simplecomplex[10] || dataSourse[i].SimpleComplex == arr_simplecomplex[11] || dataSourse[i].SimpleComplex == arr_simplecomplex[12]  || dataP.simplecomplex === "") && (dataSourse[i].HaleFull == arr_halefull[0] ||dataSourse[i].HaleFull == arr_halefull[1] || dataSourse[i].HaleFull == arr_halefull[2] || dataSourse[i].HaleFull == arr_halefull[3] || dataSourse[i].HaleFull == arr_halefull[4] || dataSourse[i].HaleFull == arr_halefull[5] || dataSourse[i].HaleFull == arr_halefull[6] || dataSourse[i].HaleFull == arr_halefull[7] || dataSourse[i].HaleFull == arr_halefull[8] || dataSourse[i].HaleFull == arr_halefull[9] || dataSourse[i].HaleFull == arr_halefull[10] || dataSourse[i].HaleFull == arr_halefull[11] || dataSourse[i].HaleFull == arr_halefull[12]  || dataP.halefull === "") && (dataSourse[i].CoolWarm == arr_coolwarm[0] || dataSourse[i].CoolWarm == arr_coolwarm[1] || dataSourse[i].CoolWarm == arr_coolwarm[2] || dataSourse[i].CoolWarm == arr_coolwarm[3] || dataSourse[i].CoolWarm == arr_coolwarm[4] || dataSourse[i].CoolWarm == arr_coolwarm[5] || dataSourse[i].CoolWarm == arr_coolwarm[6] || dataSourse[i].CoolWarm == arr_coolwarm[7] || dataSourse[i].CoolWarm == arr_coolwarm[8] || dataSourse[i].CoolWarm == arr_coolwarm[9] || dataSourse[i].CoolWarm == arr_coolwarm[10] || dataSourse[i].CoolWarm == arr_coolwarm[11] || dataSourse[i].CoolWarm == arr_coolwarm[12]  || dataP.coolwarm === "")) 
				{
					jsonData.push(dataSourse[i]);
				}
			}
			
			
			var dataArray = JSON.stringify(jsonData);
			response.write(dataArray);
		}
		response.end();
	});
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