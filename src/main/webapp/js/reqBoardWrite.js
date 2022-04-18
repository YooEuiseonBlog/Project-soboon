$(function(){
	CKEDITOR.replace("writeContent", {
		height:'400px',
		startupFocus : false,
	});

	
	$("#uploadBtn").click(function(){
		if($("#innerFiles").css("display")=='none'){
			$("#innerFiles").show();
		}else{
			$("#innerFiles").hide();
		};
	});
	
	$("#reqForm").submit(function(){
		if($("#reqBoardTitle").val()==''){
			alert("🚫 제목을 입력해주세요");
			return false;
		}
		if(CKEDITOR.instances.writeContent.getData()==''){
			alert("🚫 내용을 입력해주세요");
			return false;
		}
	});
	
	$("#resetBtn").on('click', function(){
		CKEDITOR.instances.writeContent.setData("");
	});
	
	$("#backList").click(function(){
		location.href="/board/reqBoardList";
	})
});