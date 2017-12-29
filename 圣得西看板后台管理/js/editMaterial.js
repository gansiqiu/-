/*
 * 图片选择并预览
 */
var seee = "";
var image = '';
function selectImage(file) {
	if(!file.files || !file.files[0]) {
		return;
	}
	var reader = new FileReader();
	reader.onload = function(evt) {
		document.getElementById('imageUpload').src = evt.target.result;
		image = evt.target.result;
	}
	reader.readAsDataURL(file.files[0]);
	seee = file.files[0];
}
/*
 * 获取各个素材值
 */
$("#holdButton_Load").bind("click",function(){
	console.log($("#rightContent2_number_input").val());
	console.log($("#rightContent2_type_input").val());
	console.log($("#rightContent2_SimpleComplex_input").val());
	console.log($("#rightContent2_HaleFull_input").val());
	console.log($("#rightContent2_CoolWarm_input").val());
	console.log(seee.name); 
	
	$("#rightContent3").slideDown();
	$("#rightContent_2").slideUp();
	$("#rightContent").slideUp();
})

/*
 *  图片上传
 */

function uploadImage() { 
	$.ajax({
		type: 'POST',
		url: 'ajax/uploadimage',
		data: {image: image},
		async: false,
		dataType: 'json',
		success: function(data) {
			if(data.success) {
				alert('上传成功');
			} else {
				alert('上传失败');
			}
		},
		error: function(err) {
			alert('网络故障');
		}
	});
}
