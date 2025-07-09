$(function(){
    // 메뉴 숨김 상태 플래그
    var hide_menu = false;
    // 마우스 이동 이벤트 발생 여부 체크
    var mouse_event = false;
    // 이전 마우스 좌표 저장용 변수
    var oldX = oldY = 0;

    // 문서 전체에서 마우스 이동 이벤트 감지
    $(document).mousemove(function(e) {
        // 최초 이벤트일 경우 이전 좌표 초기화
        if(oldX == 0) {
            oldX = e.pageX;
            oldY = e.pageY;
        }

        // 현재 좌표와 이전 좌표가 다르면 마우스가 실제 움직였다고 판단
        if(oldX != e.pageX || oldY != e.pageY) {
            mouse_event = true;
        }
    });

    // 주메뉴 1차 메뉴 링크 선택자
    var $gnb = $(".gnb_1dli > a");

    // 1차 메뉴 항목에 마우스 오버 이벤트
    $gnb.mouseover(function() {
        // 마우스가 실제 움직였을 때만 처리
        if(mouse_event) {
            // 헤더에 z-index 관련 클래스 추가 (메뉴가 최상위로 보이도록)
            $("#header").addClass("hd_zindex");
            // 모든 1차 메뉴 항목에서 활성화 클래스 제거
            $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
            // 현재 호버된 메뉴 항목에 활성화 클래스 추가
            $(this).parent().addClass("gnb_1dli_over gnb_1dli_on");
            // 메뉴 위치 재조정 함수 호출 (2차 메뉴 위치 보정)
            menu_rearrange($(this).parent());
            // 메뉴 숨김 플래그 false (메뉴 유지)
            hide_menu = false;
        }
    });

    // 1차 메뉴에서 마우스가 벗어날 때
    $gnb.mouseout(function() {
        // 메뉴를 숨길 준비 신호를 true로 변경
        hide_menu = true;
    });

    // 2차 메뉴 항목에 마우스가 올라올 때
    $(".gnb_2dli").mouseover(function() {
        // 메뉴를 숨기지 않도록 false로 설정
        hide_menu = false;
    });

    // 2차 메뉴에서 마우스가 벗어날 때
    $(".gnb_2dli").mouseout(function() {
        // 메뉴 숨길 준비 신호를 true로 변경
        hide_menu = true;
    });

    // 1차 메뉴 링크에 키보드 포커스가 들어올 때
    $gnb.focusin(function() {
        // 헤더에 z-index 클래스 추가 (메뉴 최상위 보이기)
        $("#header").addClass("hd_zindex");
        // 모든 1차 메뉴 항목에서 활성화 클래스 제거
        $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
        // 현재 포커스된 메뉴 항목에 활성화 클래스 추가
        $(this).parent().addClass("gnb_1dli_over gnb_1dli_on");
        // 메뉴 위치 재조정 호출
        menu_rearrange($(this).parent());
        // 메뉴 숨김 플래그 false (메뉴 유지)
        hide_menu = false;
    });

    // 1차 메뉴 링크에서 키보드 포커스가 벗어날 때
    $gnb.focusout(function() {
        // 메뉴 숨길 준비 신호 true로 변경
        hide_menu = true;
    });

    // 2차 메뉴 링크에 키보드 포커스가 들어올 때
    $(".gnb_2da").focusin(function() {
        // 모든 1차 메뉴 항목에서 활성화 클래스 제거
        $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
        // 현재 2차 메뉴 링크에 가장 가까운 1차 메뉴 항목에 활성화 클래스 추가
        var $gnb_li = $(this).closest(".gnb_1dli").addClass("gnb_1dli_over gnb_1dli_on");
        // 메뉴 위치 재조정 호출
        menu_rearrange($(this).closest(".gnb_1dli"));
        // 메뉴 숨김 플래그 false (메뉴 유지)
        hide_menu = false;
    });

    // 2차 메뉴 링크에서 키보드 포커스가 벗어날 때
    $(".gnb_2da").focusout(function() {
        // 메뉴 숨길 준비 신호 true로 변경
        hide_menu = true;
    });

    // 1차 메뉴 리스트 아이템에서 마우스가 완전히 벗어날 때
    $('#gnb_1dul>li').bind('mouseleave',function(){
        // 서브 메뉴 숨김 처리 함수 호출
        submenu_hide();
    });

    // 문서 전체에서 클릭 또는 포커스가 이동할 때
    $(document).bind('click focusin',function(){
        // 만약 메뉴 숨길 준비 신호가 true라면 서브 메뉴 숨김 처리
        if(hide_menu) {
            submenu_hide();
        }
    });
});

// 서브 메뉴 숨김 처리 함수
function submenu_hide() {
    // 헤더에서 z-index 관련 클래스 제거 (메뉴 원상복구)
    $("#header").removeClass("hd_zindex");
    // 모든 1차 메뉴 항목에서 활성화 관련 클래스 제거
    $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
}

// 메뉴 위치 재조정 함수
function menu_rearrange(el)
{
    // 1차 메뉴 전체 너비 구하기
    var width = $("#gnb_1dul").width();
    var left = w1 = w2 = 0;
    // 현재 활성 메뉴의 인덱스
    var idx = $(".gnb_1dli").index(el);
    // 메뉴가 넘칠 때 기준이 되는 최대 메뉴 개수 (초기값 0)
    var max_menu_count = 0;
    var $gnb_1dli;

    // 0번부터 현재 메뉴 인덱스까지 반복
    for(i=0; i<=idx; i++) {
        // i번째 1차 메뉴 아이템 선택
        $gnb_1dli = $(".gnb_1dli:eq("+i+")");
        // 1차 메뉴 아이템 너비 구함
        w1 = $gnb_1dli.outerWidth();

        // 1차 메뉴 아이템이 2차 메뉴를 가지고 있다면,
        // 2차 메뉴 링크 너비를 구함, 없으면 1차 메뉴 너비 사용
        if($gnb_1dli.find(".gnb_2dul").length)
            w2 = $gnb_1dli.find(".gnb_2dli > a").outerWidth(true);
        else
            w2 = w1;

        // 현재까지 쌓인 너비(left) + 2차 메뉴 너비가 메뉴 전체 너비를 초과하면
        if((left + w2) > width) {
            // 아직 max_menu_count가 설정되지 않았다면 현재 메뉴 번호 +1로 설정
            if(max_menu_count == 0)
                max_menu_count = i + 1;
        }

        // max_menu_count가 설정된 상태에서 현재 메뉴 인덱스가 max_menu_count 단위로 나누어떨어질 때
        // 즉 메뉴 넘침 구간에 해당하면 현재 메뉴 엘리먼트에 특수 클래스 추가 (스타일 변경 목적)
        if(max_menu_count > 0 && (idx + 1) % max_menu_count == 0) {
            el.removeClass("gnb_1dli_over").addClass("gnb_1dli_over2");
            // 좌측 위치 초기화
            left = 0;
        } else {
            // 그렇지 않으면 쌓인 너비에 현재 1차 메뉴 너비 더함
            left += w1;
        }
    }
}
