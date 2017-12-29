/*
 * 通过点击隐藏按钮，使条件选筛选框隐藏，且使table添加数据
 * 点击收起进行div隐藏		
 * 1.table自动添加选项	
 * 2.后台请求数据  "offset="+ offset + "&limit="+ limit +
 * 
 * 
 * 1.通过条件筛选或者搜索，将数组内容发至服务器
 * 2.服务器通过筛选，将数组中的包含选项筛选出来，放置一个返回的数组中
 * 3.客户端获得这个数组，并在界面中显示该数组中的所有产品信息
 * 
*/
var dataObj = new Object;
var dataBigBox = new Array;
var dataSmallBox = new Array;
var fenyeTotalNum = "";
var pageNum = 1;
var offset = "";
var limit = 4;
var initFlag = 0;

/*
 * 条件筛选后数据POST请求
 * */
function getInitData(conditionData){
	$.ajax({
		type: "post",
		url: "http://127.0.0.1:8081/",
		data:  "type="+ conditionData.type + "&simplecomplex=" + conditionData.simplecomplex + "&halefull=" + conditionData.halefull + "&coolwarm=" + conditionData.coolwarm + "&searchText=" + conditionData.searchBarData,
		dataType: "json",
		success: function(data) {
			console.log(data);
			dataBigBox = data;
			clearTableData();
			clearPageControl();
			creatPageControl();
			if (initFlag == 0) {
				limit = 1;
				initFlag = 1;
			} else{
				limit = 4
			}
			$("<tbody id='tbody'></tbody>").insertAfter("#thead");
			for(var i = 0; i < limit; i++) {
				$("#tbody").append("<tr id='table_tr" + i + "'></tr>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_img_" + i + "'><img style='width: 100px;height: 80px;' src='"+dataBigBox[i].img+"'/></td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_type_" + i + "'>"+dataBigBox[i].Type+"</td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_number_" + i + "'>"+dataBigBox[i].Number+"</td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_simple-complex_" + i + "'>"+dataBigBox[i].SimpleComplex+"</td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_number_hale-full_" + i + "'>"+dataBigBox[i].HaleFull+"</td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_number_cool-warm_" + i + "'>"+dataBigBox[i].CoolWarm+"</td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_buildData_" + i + "'>2017.10.28</td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_operation_" + i + "'></td>");
				$("#table_tr_operation_" + i).append("<a id='table_tr_operation_check_" + i + "' href='#'>查看</a>	&nbsp;<a id='table_tr_operation_write' href='#'>编辑</a>");
			}
			
		}
	});
}

function getInitData(conditionData){
	$.ajax({
		type: "post",
		url: "http://127.0.0.1:8081/",
		data:"searchText=" + conditionData.searchBarData,
		dataType: "json",
		success: function(data) {
			console.log(data);
			dataBigBox = data;
			clearTableData();
			clearPageControl();
			creatPageControl();
			$("<tbody id='tbody'></tbody>").insertAfter("#thead");
			for(var i = 0; i < limit; i++) {
				$("#tbody").append("<tr id='table_tr" + i + "'></tr>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_img_" + i + "'><img style='width: 100px;height: 80px;' src='"+dataBigBox[i].img+"'/></td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_type_" + i + "'>"+dataBigBox[i].Type+"</td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_number_" + i + "'>"+dataBigBox[i].Number+"</td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_simple-complex_" + i + "'>"+dataBigBox[i].SimpleComplex+"</td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_number_hale-full_" + i + "'>"+dataBigBox[i].HaleFull+"</td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_number_cool-warm_" + i + "'>"+dataBigBox[i].CoolWarm+"</td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_buildData_" + i + "'>2017.10.28</td>");
				$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_operation_" + i + "'></td>");
				$("#table_tr_operation_" + i).append("<a id='table_tr_operation_check_" + i + "' href='#'>查看</a>	&nbsp;<a id='table_tr_operation_write' href='#'>编辑</a>");
			}
			
		}
	});
}

$("#hiddenButton").bind("click", function() {
	pageNum = 1;
	$("#hiddenDiv").slideUp();			//隐藏div
	$("#showButton").slideDown();		//显示div
	clearTableData();
	clearPageControl();
	getInitData(conditionData);//初始化数据，显示前四组数据
	creatPageControl();
});


/**
 * 点击搜索框搜索，数据请求
 */

$("#searchButton").bind("click", function() {
	
	var txt = new Object;
	txt = $("#searchBar").val();
	conditionData.searchBarData = txt;
	getInitData(conditionData);
});

/*
 *	通过点击条件搜索按钮，使筛选框显示，且使table删除数据
 *	点击显示进行div隐藏
 * 	1.table自动删减选项	
 * 	2.后台请求数据
 * 	3.筛选框所有数据恢复为未选中状态
 */
$("#showButton").bind("click", function() {
	//点击条件搜索进行div显示			
	$("#showButton").slideUp();
	$("#hiddenDiv").slideDown();
	clearTableData();
	$("<tbody id='tbody'></tbody>").insertAfter("#thead");
	$("#tbody").append("<tr id='table_tr'></tr>");
	$("#table_tr").append("<td style='text-align: center;' id='table_tr_img_'><img style='width: 100px;height: 80px;' src='"+dataBigBox[0].img+"'/></td>");
	$("#table_tr").append("<td style='text-align: center;' id='table_tr_type_'>"+dataBigBox[0].Type+"</td>");
	$("#table_tr").append("<td style='text-align: center;' id='table_tr_number_'>"+dataBigBox[0].Number+"</td>");
	$("#table_tr").append("<td style='text-align: center;' id='table_tr_simple-complex_'>"+dataBigBox[0].SimpleComplex+"</td>");
	$("#table_tr").append("<td style='text-align: center;' id='table_tr_number_hale-full'>"+dataBigBox[0].HaleFull+"</td>");
	$("#table_tr").append("<td style='text-align: center;' id='table_tr_number_cool-warm'>"+dataBigBox[0].CoolWarm+"</td>");
	$("#table_tr").append("<td style='text-align: center;' id='table_tr_buildData_'>2017.10.28</td>");
	$("#table_tr").append("<td style='text-align: center;' id='table_tr_operation_'></td>");
	$("#table_tr_operation").append("<a id='table_tr_operation_check_' href='#'>查看</a>	&nbsp;<a id='table_tr_operation_write' href='#'>编辑</a>");
});
/**
 * 清空table标签中的tbody内容
 */
function clearTableData(){
	$("#tbody").remove();
}
/*
 *	清空分页控件中的数字按键
 * */
function clearPageControl(){
	$("#pageNullDiv").remove();
}