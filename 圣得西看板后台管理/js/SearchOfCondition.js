/*
 * 		part1：根据隐藏框里面的内容点击进行数据的收集，得到请求的数据conditionData
 * 		part2：点击“收起选项”按键后，将conditionData发送至服务器，请求并刷新table的数据
 * 		part3：点击条件搜索后，隐藏div中的选项都应为未选中状态
 * 		part4：点击“搜索”按钮后，将文本框中的数据进行数据请求
 * 
 */

var conditionData = new Object;

/*
 *  种类的标记flag  数据数组typeData  传递数组typeArry
 */
var typeArry = new Array;
var typeData = ["艺术品", "建筑", "动物", "植物", "风景"];

var flag_type_0 = 0;
var flag_type_1 = 0;
var flag_type_2 = 0;
var flag_type_3 = 0;
var flag_type_4 = 0;

/*
 *  简单-复杂的标记flag  数据数组simpleComplexData  传递数组simpleComplexArray
 */
var simpleComplexArray = new Array;
var simpleComplexData = [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3];

var flag_simpleComplex = 0;
var flag_simpleComplex_0 = 0;
var flag_simpleComplex_1 = 0;
var flag_simpleComplex_2 = 0;
var flag_simpleComplex_3 = 0;
var flag_simpleComplex_4 = 0;
var flag_simpleComplex_5 = 0;
var flag_simpleComplex_6 = 0;
var flag_simpleComplex_7 = 0;
var flag_simpleComplex_8 = 0;
var flag_simpleComplex_9 = 0;
var flag_simpleComplex_10 = 0;
var flag_simpleComplex_11 = 0;
var flag_simpleComplex_12 = 0;

/*
 *  硬朗-圆润的标记flag  数据数组haleFullData  传递数组haleFullArray
 */
var haleFullArray = new Array;
var haleFullData = [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3];

var flag_haleFull_0 = 0;
var flag_haleFull_1 = 0;
var flag_haleFull_2 = 0;
var flag_haleFull_3 = 0;
var flag_haleFull_4 = 0;
var flag_haleFull_5 = 0;
var flag_haleFull_6 = 0;
var flag_haleFull_7 = 0;
var flag_haleFull_8 = 0;
var flag_haleFull_9 = 0;
var flag_haleFull_10 = 0;
var flag_haleFull_11 = 0;
var flag_haleFull_12 = 0;

/*
 *  冷酷-温暖的标记flag  数据数组coolWarmData  传递数组coolWarmArray
 */
var coolWarmArray = new Array;
var coolWarmData = [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3];

var flag_coolWarm_0 = 0;
var flag_coolWarm_1 = 0;
var flag_coolWarm_2 = 0;
var flag_coolWarm_3 = 0;
var flag_coolWarm_4 = 0;
var flag_coolWarm_5 = 0;
var flag_coolWarm_6 = 0;
var flag_coolWarm_7 = 0;
var flag_coolWarm_8 = 0;
var flag_coolWarm_9 = 0;
var flag_coolWarm_10 = 0;
var flag_coolWarm_11 = 0;
var flag_coolWarm_12 = 0;

conditionData.type = typeArry;
conditionData.simplecomplex = simpleComplexArray;
conditionData.halefull = haleFullArray;
conditionData.coolwarm = coolWarmArray;


/*
 * 种类条件选择
 */

$("#Type #Type_0").bind("click", function() {
	if(flag_type_0 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_type_0 = 1;
		typeArry.push(typeData[0]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_type_0 = 0;
		typeArry.pop(typeData[0]);
		
	}
});
$("#Type #Type_1").bind("click", function() {
	if(flag_type_1 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_type_1 = 1;
		typeArry.push(typeData[1]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_type_1 = 0;
		typeArry.pop(typeData[1]);
		
	}
});
$("#Type #Type_2").bind("click", function() {
	if(flag_type_2 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_type_2 = 1;
		typeArry.push(typeData[2]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_type_2 = 0;
		typeArry.pop(typeData[2]);
		
	}
});
$("#Type #Type_3").bind("click", function() {
	if(flag_type_3 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_type_3 = 1;
		typeArry.push(typeData[3]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_type_3 = 0;
		typeArry.pop(typeData[3]);
		
	}
});
$("#Type #Type_4").bind("click", function() {
	if(flag_type_4 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_type_4 = 1;
		typeArry.push(typeData[4]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_type_4 = 0;
		typeArry.pop(typeData[4]);
		
	}
});

/*
 	简单-复杂条件选择
*/
$("#Simple-Complex #Simple-Complex_0").bind("click", function() {
	if(flag_simpleComplex_0 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_0 = 1;
		simpleComplexArray.push(simpleComplexData[0]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_0 = 0;
		simpleComplexArray.pop(simpleComplexData[0]);
		
	}
});
$("#Simple-Complex #Simple-Complex_1").bind("click", function() {
	if(flag_simpleComplex_1 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_1 = 1;
		simpleComplexArray.push(simpleComplexData[1]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_1 = 0;
		simpleComplexArray.pop(simpleComplexData[1]);
		
	}
});
$("#Simple-Complex #Simple-Complex_2").bind("click", function() {
	if(flag_simpleComplex_2 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_2 = 1;
		simpleComplexArray.push(simpleComplexData[2]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_2 = 0;
		simpleComplexArray.pop(simpleComplexData[2]);
		
	}
});
$("#Simple-Complex #Simple-Complex_3").bind("click", function() {
	if(flag_simpleComplex_3 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_3 = 1;
		simpleComplexArray.push(simpleComplexData[3]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_3 = 0;
		simpleComplexArray.pop(simpleComplexData[3]);
		
	}
});
$("#Simple-Complex #Simple-Complex_4").bind("click", function() {
	if(flag_simpleComplex_4 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_4 = 1;
		simpleComplexArray.push(simpleComplexData[4]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_4 = 0;
		simpleComplexArray.pop(simpleComplexData[4]);
		
	}
});
$("#Simple-Complex #Simple-Complex_5").bind("click", function() {
	if(flag_simpleComplex_5 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_5 = 1;
		simpleComplexArray.push(simpleComplexData[5]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_5 = 0;
		simpleComplexArray.pop(simpleComplexData[5]);
		
	}
});
$("#Simple-Complex #Simple-Complex_6").bind("click", function() {
	if(flag_simpleComplex_6 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_6 = 1;
		simpleComplexArray.push(simpleComplexData[6]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_6 = 0;
		simpleComplexArray.pop(simpleComplexData[6]);
		
	}
});
$("#Simple-Complex #Simple-Complex_7").bind("click", function() {
	if(flag_simpleComplex_7 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_7 = 1;
		simpleComplexArray.push(simpleComplexData[7]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_7 = 0;
		simpleComplexArray.pop(simpleComplexData[7]);
		
	}
});
$("#Simple-Complex #Simple-Complex_8").bind("click", function() {
	if(flag_simpleComplex_8 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_8 = 1;
		simpleComplexArray.push(simpleComplexData[8]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_8 = 0;
		simpleComplexArray.pop(simpleComplexData[8]);
		
	}
});
$("#Simple-Complex #Simple-Complex_9").bind("click", function() {
	if(flag_simpleComplex_9 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_9 = 1;
		simpleComplexArray.push(simpleComplexData[9]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_9 = 0;
		simpleComplexArray.pop(simpleComplexData[9]);
		
	}
});
$("#Simple-Complex #Simple-Complex_10").bind("click", function() {
	if(flag_simpleComplex_10 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_10 = 1;
		simpleComplexArray.push(simpleComplexData[10]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_10 = 0;
		simpleComplexArray.pop(simpleComplexData[10]);
		
	}
});
$("#Simple-Complex #Simple-Complex_11").bind("click", function() {
	if(flag_simpleComplex_11 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_11 = 1;
		simpleComplexArray.push(simpleComplexData[11]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_11 = 0;
		simpleComplexArray.pop(simpleComplexData[11]);
		
	}
});
$("#Simple-Complex #Simple-Complex_12").bind("click", function() {
	if(flag_simpleComplex_12 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_simpleComplex_12 = 1;
		simpleComplexArray.push(simpleComplexData[12]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_simpleComplex_12 = 0;
		simpleComplexArray.pop(simpleComplexData[12]);
		
	}
});

/*
 	硬朗-圆润条件选择
 */
$("#Hale-Full #Hale-Full_0").bind("click", function() {
	if(flag_haleFull_0 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_0 = 1;
		haleFullArray.push(haleFullData[0]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_0 = 0;
		haleFullArray.pop(haleFullData[0]);
		
	}
});
$("#Hale-Full #Hale-Full_1").bind("click", function() {
	if(flag_haleFull_1 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_1 = 1;
		haleFullArray.push(haleFullData[1]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_1 = 0;
		haleFullArray.pop(haleFullData[1]);
		
	}
});
$("#Hale-Full #Hale-Full_2").bind("click", function() {
	if(flag_haleFull_2 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_2 = 1;
		haleFullArray.push(haleFullData[2]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_2 = 0;
		haleFullArray.pop(haleFullData[2]);
		
	}
});

$("#Hale-Full #Hale-Full_3").bind("click", function() {
	if(flag_haleFull_3 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_3 = 1;
		haleFullArray.push(haleFullData[3]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_3 = 0;
		haleFullArray.pop(haleFullData[3]);
		
	}
});
$("#Hale-Full #Hale-Full_4").bind("click", function() {
	if(flag_haleFull_4 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_4 = 1;
		haleFullArray.push(haleFullData[4]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_4 = 0;
		haleFullArray.pop(haleFullData[4]);
		
	}
});
$("#Hale-Full #Hale-Full_5").bind("click", function() {
	if(flag_haleFull_5 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_5 = 1;
		haleFullArray.push(haleFullData[5]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_5 = 0;
		haleFullArray.pop(haleFullData[5]);
		
	}
});
$("#Hale-Full #Hale-Full_6").bind("click", function() {
	if(flag_haleFull_6 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_6 = 1;
		haleFullArray.push(haleFullData[6]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_6 = 0;
		haleFullArray.pop(haleFullData[6]);
		
	}
});
$("#Hale-Full #Hale-Full_7").bind("click", function() {
	if(flag_haleFull_7 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_7 = 1;
		haleFullArray.push(haleFullData[7]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_7 = 0;
		haleFullArray.pop(haleFullData[7]);
		
	}
});
$("#Hale-Full #Hale-Full_8").bind("click", function() {
	if(flag_haleFull_8 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_8 = 1;
		haleFullArray.push(haleFullData[8]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_8 = 0;
		haleFullArray.pop(haleFullData[8]);
		
	}
});
$("#Hale-Full #Hale-Full_9").bind("click", function() {
	if(flag_haleFull_9 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_9 = 1;
		haleFullArray.push(haleFullData[9]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_9 = 0;
		haleFullArray.pop(haleFullData[9]);
		
	}
});
$("#Hale-Full #Hale-Full_10").bind("click", function() {
	if(flag_haleFull_10 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_10 = 1;
		haleFullArray.push(haleFullData[10]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_10 = 0;
		haleFullArray.pop(haleFullData[10]);
		
	}
});
$("#Hale-Full #Hale-Full_11").bind("click", function() {
	if(flag_haleFull_11 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_11 = 1;
		haleFullArray.push(haleFullData[11]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_11 = 0;
		haleFullArray.pop(haleFullData[11]);
		
	}
});
$("#Hale-Full #Hale-Full_12").bind("click", function() {
	if(flag_haleFull_12 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_haleFull_12 = 1;
		haleFullArray.push(haleFullData[12]);
		
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_haleFull_12 = 0;
		haleFullArray.pop(haleFullData[12]);
		
	}
});

/*
 *		冷酷-温暖
 */
$("#Cool-Warm #Cool-Warm_0").bind("click", function() {
	if(flag_coolWarm_0 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_0 = 1;
		coolWarmArray.push(coolWarmData[0]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_0 = 0;
		coolWarmArray.pop(coolWarmData[0]);
	}
});
$("#Cool-Warm #Cool-Warm_1").bind("click", function() {
	if(flag_coolWarm_1 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_1 = 1;
		coolWarmArray.push(coolWarmData[1]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_1 = 0;
		coolWarmArray.pop(coolWarmData[1]);
	}
});
$("#Cool-Warm #Cool-Warm_2").bind("click", function() {
	if(flag_coolWarm_2 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_2 = 1;
		coolWarmArray.push(coolWarmData[2]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_2 = 0;
		coolWarmArray.pop(coolWarmData[2]);
	}
});
$("#Cool-Warm #Cool-Warm_3").bind("click", function() {
	if(flag_coolWarm_3 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_3 = 1;
		coolWarmArray.push(coolWarmData[3]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_3 = 0;
		coolWarmArray.pop(coolWarmData[3]);
	}
});
$("#Cool-Warm #Cool-Warm_4").bind("click", function() {
	if(flag_coolWarm_4 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_4 = 1;
		coolWarmArray.push(coolWarmData[4]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_4 = 0;
		coolWarmArray.pop(coolWarmData[4]);
	}
});
$("#Cool-Warm #Cool-Warm_5").bind("click", function() {
	if(flag_coolWarm_5 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_5 = 1;
		coolWarmArray.push(coolWarmData[5]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_5 = 0;
		coolWarmArray.pop(coolWarmData[5]);
	}
});
$("#Cool-Warm #Cool-Warm_6").bind("click", function() {
	if(flag_coolWarm_6 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_6 = 1;
		coolWarmArray.push(coolWarmData[6]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_6 = 0;
		coolWarmArray.pop(coolWarmData[6]);
	}
});
$("#Cool-Warm #Cool-Warm_7").bind("click", function() {
	if(flag_coolWarm_7 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_7 = 1;
		coolWarmArray.push(coolWarmData[7]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_7 = 0;
		coolWarmArray.pop(coolWarmData[7]);
	}
});
$("#Cool-Warm #Cool-Warm_8").bind("click", function() {
	if(flag_coolWarm_8 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_8 = 1;
		coolWarmArray.push(coolWarmData[8]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_8 = 0;
		coolWarmArray.pop(coolWarmData[8]);
	}
});
$("#Cool-Warm #Cool-Warm_9").bind("click", function() {
	if(flag_coolWarm_9 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_9 = 1;
		coolWarmArray.push(coolWarmData[9]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_9 = 0;
		coolWarmArray.pop(coolWarmData[9]);
	}
});
$("#Cool-Warm #Cool-Warm_10").bind("click", function() {
	if(flag_coolWarm_10 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_10 = 1;
		coolWarmArray.push(coolWarmData[10]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_10 = 0;
		coolWarmArray.pop(coolWarmData[10]);
	}
});
$("#Cool-Warm #Cool-Warm_11").bind("click", function() {
	if(flag_coolWarm_11 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_11 = 1;
		coolWarmArray.push(coolWarmData[11]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_11 = 0;
		coolWarmArray.pop(coolWarmData[11]);
	}
});
$("#Cool-Warm #Cool-Warm_12").bind("click", function() {
	if(flag_coolWarm_12 == 0) {
		//点击一次  1.背景颜色变黄   2.数组加入该标签id
		$(this).css("background", "#FDD616");
		flag_coolWarm_12 = 1;
		coolWarmArray.push(coolWarmData[12]);
	} else {
		//再次点击  1.背景颜色恢复   2.数组删除该标签id
		$(this).css("background", "#FDFDFD");
		flag_coolWarm_12 = 0;
		coolWarmArray.pop(coolWarmData[12]);
	}
});
conditionData.type = typeArry;
conditionData.simplecomplex = simpleComplexArray;
conditionData.halefull = haleFullArray;
conditionData.coolwarm = coolWarmArray;
/*
 * 获取文本框中的数据
 */

/*
 *	点击条件搜索后，隐藏div中的选项都应为未选中状态
 * 		1.请求的数据需要清空
 * 		2.所有的flag都为0
 */
$("#showButton").bind("click", function() {

	conditionData.type.length = 0;
	conditionData.simplecomplex.length = 0;
	conditionData.halefull.length = 0;
	conditionData.coolwarm.length = 0;

	typeArry.length = 0;
	simpleComplexArray.length = 0;
	haleFullArray.length = 0;
	coolWarmArray.length = 0;

	flag_type_0 = 0;
	flag_type_1 = 0;
	flag_type_2 = 0;
	flag_type_3 = 0;
	flag_type_4 = 0;

	flag_simpleComplex_0 = 0;
	flag_simpleComplex_1 = 0;
	flag_simpleComplex_2 = 0;
	flag_simpleComplex_3 = 0;
	flag_simpleComplex_4 = 0;
	flag_simpleComplex_5 = 0;
	flag_simpleComplex_6 = 0;
	flag_simpleComplex_7 = 0;
	flag_simpleComplex_8 = 0;
	flag_simpleComplex_9 = 0;
	flag_simpleComplex_10 = 0;
	flag_simpleComplex_11 = 0;
	flag_simpleComplex_12 = 0;

	flag_haleFull_0 = 0;
	flag_haleFull_1 = 0;
	flag_haleFull_2 = 0;
	flag_haleFull_3 = 0;
	flag_haleFull_4 = 0;
	flag_haleFull_5 = 0;
	flag_haleFull_6 = 0;
	flag_haleFull_7 = 0;
	flag_haleFull_8 = 0;
	flag_haleFull_10 = 0;
	flag_haleFull_11 = 0;
	flag_haleFull_12 = 0;

	flag_coolWarm_0 = 0;
	flag_coolWarm_1 = 0;
	flag_coolWarm_2 = 0;
	flag_coolWarm_3 = 0;
	flag_coolWarm_4 = 0;
	flag_coolWarm_5 = 0;
	flag_coolWarm_6 = 0;
	flag_coolWarm_7 = 0;
	flag_coolWarm_8 = 0;
	flag_coolWarm_9 = 0;
	flag_coolWarm_10 = 0;
	flag_coolWarm_11 = 0;
	flag_coolWarm_12 = 0;

	$("#Type p").css("background", "#FDFDFD");
	$("#Simple-ComplexDiv p").css("background", "#FDFDFD");
	$("#Hale-FullDiv p").css("background", "#FDFDFD");
	$("#Cool-WarmDiv p").css("background", "#FDFDFD");
	
});