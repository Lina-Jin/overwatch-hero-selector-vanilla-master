import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
// /**
//  * 모바일 페이지 강제 이동
//  */
// //Mobile여부를 구분하기 위함
// var uAgent = navigator.userAgent.toLowerCase();
// // 아래는 모바일 장치들의 모바일 페이지 접속을위한 스크립트
// var mobilePhones = new Array(
//   "iphone",
//   "ipod",
//   "ipad",
//   "android",
//   "blackberry",
//   "windows ce",
//   "nokia",
//   "webos",
//   "opera mini",
//   "sonyericsson",
//   "opera mobi",
//   "iemobile"
// );
// for (var i = 0; i < mobilePhones.length; i++) {
//   if (uAgent.indexOf(mobilePhones[i]) != -1) {
//     location.href = "/mobile.html";
//   }
// }
var ratio = window.devicePixelRatio;

if (ratio > 1) {
  window.location.href = "www.naver.com";
}
