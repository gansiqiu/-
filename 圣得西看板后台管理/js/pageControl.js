/**
 *	分页控件设置 
 * 1.点击了前进按键之后，table数据在条件筛选出来的数据里面进行更新（不进行数据请求）
 * 2.分页背景颜色改变

 */
/**
 * 右键被点击了
 */
var rightFlag = 0;
$("#rightButton").bind("click",function(){
	//如果到达最后一页，则右键无效
	//    4              4
	if(pageNum >= fenyeTotalNum){
		//右键无效
		
		if(rightFlag == 0){
			clearTableData();
			clearPageControl();
			fenyePanduan((pageNum - 1)*limit,4);
			creatPageControl();
			rightFlag = 1;
		};
	}else{
		pageNum++;
		clearTableData();
		clearPageControl();
		fenyePanduan((pageNum - 1)*limit,4);
		creatPageControl();
	}
});


/**
 * 左键被点击了
 */
var leftFlag = 0;
$("#leftButton").bind("click",function(){
	//如果到达最后一页，则右键无效
	//	1 
	if(pageNum <= 1){
		//左键无效
		if(leftFlag == 0){
			clearTableData();
			clearPageControl();
			fenyePanduan((pageNum-1)*4,4);
			creatPageControl();
			leftFlag = 1;
		};
	}else{
		pageNum--;
		clearTableData();
		clearPageControl();
		fenyePanduan((pageNum-1)*4,4);
		creatPageControl();
	}
});

/*
 * 分页的判断
 */
function fenyePanduan(offset,limit){
	/**
	 * 	table显示的判断设置
	*/
	if(dataBigBox.length - offset >= limit) {
		limit = 4;
	} else {
		limit = dataBigBox.length - offset;
	}
	$("<tbody id='tbody'></tbody>").insertAfter("#thead");
	for(var i = offset; i < offset + limit; i++) {
		$("#tbody").append("<tr id='table_tr" + i + "'></tr>");
		$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_img_" + i + "'><img style='width: 100px;height: 80px;' src='"+dataBigBox[i].img+"'/></td>");
		$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_type_" + i + "'>"+dataBigBox[i].Type+"</td>");
		$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_number_" + i + "'>"+dataBigBox[i].Number+"</td>");
		$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_simple-complex_" + i + "'>"+dataBigBox[i].SimpleComplex+"</td>");
		$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_number_hale-full" + i + "'>"+dataBigBox[i].HaleFull+"</td>");
		$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_number_cool-warm" + i + "'>"+dataBigBox[i].CoolWarm+"</td>");
		$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_buildData_" + i + "'>2017.10.28</td>");
		$("#table_tr" + i).append("<td style='text-align: center;' id='table_tr_operation_" + i + "'></td>");
		$("#table_tr_operation_" + i).append("<a id='table_tr_operation_check_" + i + "' href='#'>查看</a>	&nbsp;<a id='table_tr_operation_write' href='#'>编辑</a>");
		
		/*
		 * 
		 */
		$("#table_tr_operation_write" + i).bind("click",function(){
			
			$("#rightContent").slideUp();
			$("#rightContent_2").slideUp();
			$("#rightContent_3").slideDown();
			console.log($("#table_tr_number_"+i).val());
			console.log($("#table_tr_type_"+i).val());
			console.log($("#table_tr_simple-complex_"+i).val());
			
			console.log($("#table_tr_number_hale-full_"+i).val());
			console.log($("#table_tr_number_cool-warm_"+i).val());
		})
	}
}
/* 
 * 分页控件的判断设置
 */
function creatPageControl(){
	if (dataBigBox.length % 4 == 0) {
		fenyeTotalNum = parseInt(dataBigBox.length / 4);
	} else{
		fenyeTotalNum = parseInt(dataBigBox.length / 4 + 1);
	}
	if (parseInt(pageNum) == parseInt(fenyeTotalNum - 2)) {
		$("<span id='pageNullDiv'></span>").insertBefore("#rightButton");
		$("#pageNullDiv").append("<li class='active '><a class='pageControlBtn' href='#!'>"+parseInt(fenyeTotalNum-2)+"</a></li>");
		$("#pageNullDiv").append("<li class='waves-effect '><a class='pageControlBtn' href='#!'>"+parseInt(fenyeTotalNum-1)+"</a></li>");
		$("#pageNullDiv").append("<li class='waves-effect '><a class='pageControlBtn' href='#!'>"+parseInt(fenyeTotalNum)+"</a></li>");
		$("#pageNullDiv").append("<li class='waves-effect'><p style='width: 30px;height: 30px;line-height: 30px; text-align: center;margin: 0 auto;'>···</p></li>");
		$("#pageNullDiv").append("<li id='pageControl_4'><a href='#!'>"+fenyeTotalNum+"</a></li>");
	}else if(parseInt(pageNum) == parseInt(fenyeTotalNum - 1)){
		$("<span id='pageNullDiv'></span>").insertBefore("#rightButton");
		$("#pageNullDiv").append("<li class='waves-effect '><a class='pageControlBtn' href='#!'>"+parseInt(fenyeTotalNum-2)+"</a></li>");
		$("#pageNullDiv").append("<li class='active '><a class='pageControlBtn' href='#!'>"+parseInt(fenyeTotalNum-1)+"</a></li>");
		$("#pageNullDiv").append("<li class='waves-effect '><a class='pageControlBtn' href='#!'>"+parseInt(fenyeTotalNum)+"</a></li>");
		$("#pageNullDiv").append("<li class='waves-effect'><p style='width: 30px;height: 30px;line-height: 30px; text-align: center;margin: 0 auto;'>···</p></li>");
		$("#pageNullDiv").append("<li id='pageControl_4'><a href='#!'>"+fenyeTotalNum+"</a></li>");
	}else if(parseInt(pageNum) == parseInt(fenyeTotalNum)){
		$("<span id='pageNullDiv'></span>").insertBefore("#rightButton");
		$("#pageNullDiv").append("<li class='waves-effect '><a class='pageControlBtn' href='#!'>"+parseInt(fenyeTotalNum-2)+"</a></li>");
		$("#pageNullDiv").append("<li class='waves-effect '><a class='pageControlBtn' href='#!'>"+parseInt(fenyeTotalNum-1)+"</a></li>");
		$("#pageNullDiv").append("<li class='active '><a class='pageControlBtn' href='#!'>"+parseInt(fenyeTotalNum)+"</a></li>");
		$("#pageNullDiv").append("<li class='waves-effect'><p style='width: 30px;height: 30px;line-height: 30px; text-align: center;margin: 0 auto;'>···</p></li>");
		$("#pageNullDiv").append("<li id='pageControl_4'><a href='#!'>"+fenyeTotalNum+"</a></li>");
	}
	else{
		$("<span id='pageNullDiv'></span>").insertBefore("#rightButton");
		$("#pageNullDiv").append("<li class='active'><a class='pageControlBtn' href='#!'>"+parseInt(pageNum)+"</a></li>");
		$("#pageNullDiv").append("<li class='waves-effect '><a class='pageControlBtn' href='#!'>"+parseInt(pageNum+1)+"</a></li>");
		$("#pageNullDiv").append("<li class='waves-effect '><a class='pageControlBtn' href='#!'>"+parseInt(pageNum+2)+"</a></li>");
		$("#pageNullDiv").append("<li class='waves-effect'><p style='width: 30px;height: 30px;line-height: 30px; text-align: center;margin: 0 auto;'>···</p></li>");
		$("#pageNullDiv").append("<li id='pageControl_4'><a href='#!'>"+fenyeTotalNum+"</a></li>");
	}
	/**
	 * 	点击按键进行该页的跳转
	 */
	clickThePage();
}

/**
 *	选择跳转至第几页 
 */

$("#buttonPageGo").bind("click",function(){
	var txt = parseInt($("#textPageGo").val());
	if (txt > fenyeTotalNum) {
		alert("该页数已经超过最大页数，请重新输入！");
	} else if(txt < 1){
		alert("输入的内容不符合要求，请重新输入！");
	}else{
		clearTableData();
		clearPageControl();
		fenyePanduan((txt-2)*4 + 4,4);
		pageNum = txt;
		creatPageControl();
	}
});

function clickThePage(){
	$(".pageControlBtn" ).bind("click", function(){
		var txt = parseInt($(this).html());
		console.log(txt);
		clearTableData();
		clearPageControl();
		fenyePanduan((txt-2)*4 + 4,4);
		pageNum = txt;
		creatPageControl();
	});
}
