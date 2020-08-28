//
// 배경 사진 전환 js
//
// ===============================================================================================

var now_img, next_img;
function fade_change(){
now_img = $("#map-defined .slide-img:eq(0)");
// 맨 처음의 now_img를 선택한다. 그렇게 되면 now_img는 active를 포함하는 img가 선택 될 것이다.
next_img = $("#map-defined .slide-img:eq(1)");
// 그 다음의 이미지를  next_img로 선택한다.
next_img.addClass("active").css("opacity",0).animate({"opacity":1},1000, function(){
$("#map-defined").append(now_img);			//콜백
now_img.removeClass("active");
});
} // 다음 이미지에 active 클라스를 넣고 opacity를 0에서 1로 에니메이션 되게끔 해준다. 그러면서 현재 맨 위의 이미지의 active 클라스를 제거한다.
// 그렇게 되면 1PAGE_SLIDE_IMAGE.css 에서 적용한 것 처럼 active 이미지의 z인덱스가 제일 높게되어 맨 위에서 opacity가 0에서 1로 바뀌는 에니메이션이 실행된다.


// 순환
var timer = setInterval("fade_change()",5000);
// 위의 함수를 반복해준다.
