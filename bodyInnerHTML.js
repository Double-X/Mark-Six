const BODY_INNER_HTML = `
<div id="printDiv"></div>
<div id="infoDiv">
    <script type="text/javascript">
function receiveMessage(event) {
 var trustedOrigins = '//is.hkjc.com;//special.hkjc.com'.split(';');
var i = trustedOrigins.length;
 while (i--) {
 if (trustedOrigins[i] === event.origin) {
eval(event.data);}}}
if (!window.addEventListener) window.attachEvent('onmessage', receiveMessage);
else window.addEventListener('message', receiveMessage, false);
</script>

    <div id="topNav" style="z-index: 200; position: absolute; left: 233px; top: 62px; width: 530px;"><div class="tContainer"><div class="tDropdown" onmouseover="tMenuHover(true, 0);" onmouseout="tMenuHover(false, 0);" style="width:132.5px" onclick="tMenuClick(0);">網上渠道</div><div class="tDropdown"><img src="/info/include/images/stroke_menu.gif" width="1px"></div><div class="tDropdown" onmouseover="tMenuHover(true, 1);" onmouseout="tMenuHover(false, 1);" style="width:132.5px" onclick="tMenuClick(1);">投注處及電話投注</div><div class="tDropdown"><img src="/info/include/images/stroke_menu.gif" width="1px"></div><div class="tDropdown" onmouseover="tMenuHover(true, 2);" onmouseout="tMenuHover(false, 2);" style="width:132.5px" onclick="tMenuClick(2);">投注資訊</div><div class="tDropdown"><img src="/info/include/images/stroke_menu.gif" width="1px"></div><div class="tDropdown" onmouseover="tMenuHover(true, 3);" onmouseout="tMenuHover(false, 3);" style="width:132.5px" onclick="tMenuClick(3);">客戶服務</div></div><div id="tMenuDD" class="tContainer tDisplayNone tDropdownTable"><div id="tMenuDDSub0" class="tDropdownCell tMenuBorderLeft" style="width:132.5px"><div class="tDropdownItem" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(0,0);">新 • 平台</div><div class="tDropdownItem" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(0,1);">申請投注戶口</div><div class="tDropdownItem" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(0,2);">關於轉賬</div></div><div class="tMenuStroke"></div><div id="tMenuDDSub1" class="tDropdownCell" style="width:132.5px"><div class="tDropdownItem" onmouseover="menuTxtOver(1, 0, 1, 0);" onmouseout="menuTxtOver(1, 0, 0, 0);" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(1,0);">場外投注處</div><div class="tDropdownItem" onmouseover="menuTxtOver(1, 1, 1, 0);" onmouseout="menuTxtOver(1, 1, 0, 0);" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(1,1);">電話投注</div><div class="tDropdownItem" onmouseover="menuTxtOver(1, 2, 1, 0);" onmouseout="menuTxtOver(1, 2, 0, 0);" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(1,2);">馬場</div></div><div class="tMenuStroke"></div><div id="tMenuDDSub2" class="tDropdownCell" style="width:132.5px"><div class="tDropdownItem" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(2,0);">賽馬</div><div class="tDropdownItem" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(2,1);">足智彩</div><div class="tDropdownItem" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(2,2);">六合彩</div><div class="tDropdownItem" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(2,3);">投注金額及派彩</div></div><div class="tMenuStroke"></div><div id="tMenuDDSub3" class="tDropdownCell tMenuBorderRight" style="width:132.5px"><div class="tDropdownItem" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(3,0);">顧客服務智能助理 <sup><span style="text-align:center;color:#ffffff;background:rgb(230,0,0);margin:0;padding:0 1px;font-size:10px;line-height:12px;width:13px;display:inline-block;border-radius:2px;">新</span></sup></div><div class="tDropdownItem" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(3,1);">網上客戶中心</div><div class="tDropdownItem" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(3,2);">下載表格</div><div class="tDropdownItem" onfocusout="tMenuCloseOnFocusOut();" onclick="tSubMenuClick(3,3);">其他聯絡途徑</div></div><div class="tMenuBox" style="position:absolute; right:2px; width:260px; height:166px; display:none" id="menuBox"></div></div></div>
<script type="text/javascript" src="/info/include/js/xml2json.min.js?CV=L4.02R1"></script>
<div class="fMenuTABLE">
  <div class="fMenuTR">
    <div class="fMenuRow"><img id="machineInfo" src="/info/include/images/spacer.gif?CV=L4.02R1" title="169" width="10" height="10"></div>
    <div class="fMenuRowLang"><a href="javascript:changeLang()" class="topMenuLang"></a></div>
    <div class="fMenuRowHome"><a href="javascript:topMenuLink(0);" class="topMenuHome"></a></div>
    <div id="fMenuRC" onclick="topMenuLink(1);"></div>
    <div class="fMenuRowLine"></div>
    <div id="fMenuHR" onclick="topMenuLink(2);"></div>
    <div class="fMenuRowLine"></div>
    <div id="fMenuFB" onclick="topMenuLink(3);"></div>
    <div class="fMenuRowLine"></div>
    <div id="fMenuMEM" onclick="topMenuLink(4);"></div>
    <div class="fMenuRowLine"></div>
    <div id="fMenuCHA" onclick="topMenuLink(5);"></div>
    <div class="fMenuRowLine"></div>
    <div id="fMenuABOUT" onclick="topMenuLink(6);"></div>
  </div>
</div>

<div class="secMenu">
  <div class="secMenuTR">
    <div class="secTable">
      <div id="secMenuHR" title="賽馬" onclick="switchTo('racing', 'index', curLang);"></div>
      <div id="secMenuFB" title="足智彩" onclick="switchTo('football', 'index', curLang);"></div>
      <div id="secMenuM6" title="六合彩" onclick="switchTo('marksix', 'index', curLang);"></div>
      <div id="secMenu3in1" title="EWin" onclick="switchTo('home', 'index', curLang);"></div>
      <div class="date" id="server_datetime">09/11/22 22:10 (三)</div>
    </div>
  </div>
  <div class="secMenuLine"></div>
</div>

<script type="text/javascript">
  var serverDateObj = new Date(2022, 10, 9, 14, 24, 38);
  serverOddsRefresh();
  function serverOddsRefresh() {
    $("#server_datetime").html(formatServerOdds(serverDateObj));
	serverDateObj.setMinutes(serverDateObj.getMinutes() + 1);
    window.setTimeout("serverOddsRefresh()", 60000);
  }
  function formatServerOdds(d) {
    return addZero(d.getDate()) + "/" + addZero((d.getMonth() + 1)) + "/" + addZero(d.getFullYear()) + " " + addZero(d.getHours()) + ":" + addZero(d.getMinutes())+' ('+jsWeekDayArr[curLang][d.getDay()] + ')';
  }
  function addZero(tstr) {
    return ("0"+tstr).substr((tstr+"").length-1, 2)
  }

  $('#machineInfo').prop('title', '169');
</script>

    <div id="topBannerDiv" class="topBanner">
  <div id="divTopBanner" style="display: none;">
    <div id="info_top_block"></div>
    <div id="info_top_promo"></div>
    <div style="clear:both"></div>
  </div>
</div>

    <div id="homeSNDiv" style="display:none">
	<div style="display:table;width:764px;height:26px;background-color:#002E63;border:#002E63 0.5px solid;padding:0px 5px 0px 5px">
		<div style="display:table-row;position:relative;width:764px;background-color:#FFDE00;">
			<div class="importantCell1"></div>
			<div class="importantCell3" id="divNewsCont"><div id="divNews" class="content"></div></div>
			<div class="importantCell4" onclick="reloadImportantNotices(toProductShortCode()); NewWindow('/msginbox.aspx?lang=' + curLang + '&amp;pd=' + toProductShortCode(), 'msgInbox' + toProductShortCode(), 664, 462, 1, 0);">更多</div>
		</div>
	</div>
</div>

    <div id="thirdMenu" class="pMenuTABLE"><div class="pContainer"><div class="pDropdown" onclick="menuItemClick(0,-1);" style="width: 130.751px;"><span>核對中獎號碼</span></div><div class="pDropdown" style="padding-top: 3px; width: 1.81598px;"><img src="/marksix/info/images/tool_line_v.gif?CV=L4.02R1" width="1px" height="14px"></div><div class="pDropdown" onclick="menuItemClick(1,-1);" style="width: 130.751px;"><span>過去攪珠結果</span></div><div class="pDropdown" style="padding-top: 3px; width: 1.81598px;"><img src="/marksix/info/images/tool_line_v.gif?CV=L4.02R1" width="1px" height="14px"></div><div class="pDropdown" onclick="menuItemClick(2,-1);" style="width: 108.959px;"><span>攪珠日期表</span></div><div class="pDropdown" style="padding-top: 3px; width: 1.81598px;"><img src="/marksix/info/images/tool_line_v.gif?CV=L4.02R1" width="1px" height="14px"></div><div class="pDropdown" onclick="menuItemClick(3,-1);" style="width: 130.751px;"><span>六合彩計算機</span></div><div class="pDropdown" style="padding-top: 3px; width: 1.81598px;"><img src="/marksix/info/images/tool_line_v.gif?CV=L4.02R1" width="1px" height="14px"></div><div class="pDropdown" style="width: 130.751px;"><div class="pDropbtn" onclick="pMenuClick(4);">攪珠結果統計</div><div class="pDropdownTable" id="pMenu4"><ul><li onclick="menuItemClick(4,0);">攪珠結果統計</li><li onclick="menuItemClick(4,1);">幸運投注處</li></ul></div></div><div class="pDropdown" style="padding-top: 3px; width: 1.81598px;"><img src="/marksix/info/images/tool_line_v.gif?CV=L4.02R1" width="1px" height="14px"></div><div class="pDropdown" style="width: 108.959px;"><div class="pDropbtn" onclick="pMenuClick(5);">六合彩指南</div><div class="pDropdownTable" id="pMenu5" style="left: 612px;"><ul><li onclick="menuItemClick(5,0);">六合彩簡介</li><li onclick="menuItemClick(5,1);">獲獎資格</li><li onclick="menuItemClick(5,2);">獎金基金的分配</li><li onclick="menuItemClick(5,3);">六合彩金多寶攪珠</li><li onclick="menuItemClick(5,4);">注項種類</li><li onclick="menuItemClick(5,5);">複式/膽拖注數表</li><li onclick="menuItemClick(5,6);">連續多期攪珠</li><li onclick="menuItemClick(5,7);">填寫及核對彩票</li><li onclick="menuItemClick(5,8);">重要事項</li><li onclick="menuItemClick(5,9);">獎券規例</li></ul></div></div></div></div>
    <div id="oddsMenu" style="width: 115px;"><div id="oMenuTABLE"><div class="oMenuTitle">下期攪珠</div><div class="oMenuTR"><div class="oMenuTD1"><img src="/info/marksix/info/images/arrow.gif?CV=L4.02R1" width="4px" height="5px"></div><div class="oMenuTD2" onclick="switchTo(curProduct, 'Single', curLang);highLightMenu(this)" id="oMenuSINGLE.ASPX">自選單式</div></div><div class="oMenuTR"><div class="oMenuTD1"><img src="/info/marksix/info/images/arrow.gif?CV=L4.02R1" width="4px" height="5px"></div><div class="oMenuTD2" onclick="switchTo(curProduct, 'Multiple', curLang);highLightMenu(this)" id="oMenuMULTIPLE.ASPX">自選複式</div></div><div class="oMenuTR"><div class="oMenuTD1"><img src="/info/marksix/info/images/arrow.gif?CV=L4.02R1" width="4px" height="5px"></div><div class="oMenuTD2" onclick="switchTo(curProduct, 'Banker', curLang);highLightMenu(this)" id="oMenuBANKER.ASPX">自選膽拖</div></div><div class="oMenuTR"><div class="oMenuTD1"><img src="/info/marksix/info/images/arrow.gif?CV=L4.02R1" width="4px" height="5px"></div><div class="oMenuTD2" onclick="switchTo(curProduct, 'Random', curLang);highLightMenu(this)" id="oMenuRANDOM.ASPX">運財號碼</div></div></div></div>
    <div id="container" style=""><script type="text/javascript">
            var dPageDone = $.Deferred();
            $.when(
                $.getScript("/marksix/script/m6str.js?lang=ch&CV=L4.02R1"),
                getScriptNotCache("/marksix/script/bs_common2.js?CV=L4.02R1"),
                getScriptNotCache("/marksix/script/randomGen.js?CV=L4.02R1"),
                getScriptNotCache("/marksix/script/m6betfunc2.js?CV=L4.02R1"),
                getScriptNotCache("/marksix/script/m6results.js?CV=L4.02R1"),
                getScriptNotCache("/marksix/script/PUB2.js?CV=L4.02R1"),
                $.Deferred(function (deferred) {
                    $(deferred.resolve);
                })
            ).done(function () {
                unloadAllCss();

                reInit();
                m6Init();
                pageName = 'm6';
                document.title = '香港馬會獎券有限公司';
                try {
                    ShowMyM6Favorites('m6FavoritesCookie');
                } catch (e) { }
                dPageDone.resolve();
            });

             $.when(dPageDone).done(function () {
                // Get Script
                $.when(
                    $.getScript("/info/include/js/jquery.simplyscroll.min.js?CV=L4.02R1"),
                    $.getScript("/info/include/js/jquery.cycle2.js?CV=L4.02R1"),
                    $.getScript("/bannerad/js/system/sdceo_config.js?CV=L4.02R1"),
                    $.getScript("/bannerad/js/system/sdceo_core.js?CV=L4.02R1"),
                    $.getScript("/info/include/js/banner.js?CV=L4.02R1"),
                    $.getScript("/info/include/js/banner_top.js?CV=L4.02R1"),
                    $.getScript("/info/include/js/banner_bottom.js?CV=L4.02R1"),
                    $.Deferred(function (deferred) {$(deferred.resolve);})
                ).done(function () {
                    m6BannerInit();
                });
            });
        </script><script type="text/javascript">
  var oMenuLang = 'C';
  var oMenuPD = 'M6';
  var oMenuLPD = 'marksix';
  var oMenuIconPath = '/contentserver/jcbw/images/';
  var oMenuData = {"pMenu":[{"nE":"Drawn Number Checking","nC":"核對中獎號碼","uE":"","uC":"","pg":"CheckDrawResult","pa":"","at":"width=680,height=440,left=20,top=20,scrollbars=yes,resizable=yes","pu":"0","dm":null,"child":null},{"nE":"Results","nC":"過去攪珠結果","uE":"","uC":"","pg":"Results","pa":"","at":"","pu":"0","dm":null,"child":null},{"nE":"Draw Schedule","nC":"攪珠日期表","uE":"","uC":"","pg":"Fixtures","pa":"","at":"","pu":"0","dm":null,"child":null},{"nE":"Calculator","nC":"六合彩計算機","uE":"/marksix/ms_calculator.aspx?lang=EN","uC":"/marksix/ms_calculator.aspx?lang=CH","pg":"","pa":"","at":"width=450,height=300,left=0,top=0,scrollbars=no,resizable=no","pu":"1","dm":null,"child":null},{"nE":"Statistics","nC":"攪珠結果統計","uE":"","uC":"","pg":"Statistics","pa":"","at":"","pu":"0","dm":null,"child":[{"nE":"Statistics","nC":"攪珠結果統計","uE":"","uC":"","pg":"Statistics","pa":"","at":"","pu":"0","dm":"","child":null},{"nE":"Lucky OCB","nC":"幸運投注處","uE":"","uC":"","pg":"userinfo","pa":"{'file':'lucky_ocbs.asp'}","at":"","pu":"0","dm":"","child":null}]},{"nE":"Mark Six Guide","nC":"六合彩指南","uE":"","uC":"","pg":"userinfo","pa":"{'file':'about_m6.asp'}","at":"","pu":"0","dm":null,"child":[{"nE":"Mark Six Lottery","nC":"六合彩簡介","uE":"","uC":"","pg":"userinfo","pa":"{'file':'about_m6.asp'}","at":"","pu":"0","dm":"","child":null},{"nE":"Prize Qualification","nC":"獲獎資格","uE":"","uC":"","pg":"userinfo","pa":"{'file':'prize_entitlement.asp'}","at":"","pu":"0","dm":"","child":null},{"nE":"Allocation of Prize Fund","nC":"獎金基金的分配","uE":"","uC":"","pg":"userinfo","pa":"{'file':'prizes_fund.asp'}","at":"","pu":"0","dm":"","child":null},{"nE":"Mark Six Snowball Draw","nC":"六合彩金多寶攪珠","uE":"","uC":"","pg":"userinfo","pa":"{'file':'sb_adv_sales.asp'}","at":"","pu":"0","dm":"","child":null},{"nE":"Types of Entry","nC":"注項種類","uE":"","uC":"","pg":"userinfo","pa":"{'file':'multiple_banker.asp'}","at":"","pu":"0","dm":"","child":null},{"nE":"Multiple/Banker Entry Chance Table","nC":"複式/膽拖注數表","uE":"","uC":"","pg":"userinfo","pa":"{'file':'chance.asp'}","at":"","pu":"0","dm":"","child":null},{"nE":"Multiple Consecutive Draws","nC":"連續多期攪珠","uE":"","uC":"","pg":"userinfo","pa":"{'file':'mul_con_draws.asp'}","at":"","pu":"0","dm":"","child":null},{"nE":"Ticket Filling & Validation","nC":"填寫及核對彩票","uE":"","uC":"","pg":"userinfo","pa":"{'file':'ticket_validation.asp'}","at":"","pu":"0","dm":"","child":null},{"nE":"Important Notice","nC":"重要事項","uE":"","uC":"","pg":"userinfo","pa":"{'file':'important_notice.asp'}","at":"","pu":"0","dm":"","child":null},{"nE":"Lotteries Rules","nC":"獎券規例","uE":"","uC":"","pg":"userinfo","pa":"{'file':'rules.asp'}","at":"","pu":"0","dm":"","child":null}]}],"oMenu":[{"nE":"Next Draw","nC":"下期攪珠","uE":"","uC":"","pg":"","pa":"","ta":"","icon":"","iconE":"","iconC":"","type":"LABEL","dv":"","child":null},{"nE":"Self Select Single","nC":"自選單式","uE":"","uC":"","pg":"Single","pa":"","ta":"","icon":"","iconE":"","iconC":"","type":"SINGLE.ASPX","dv":"","child":null},{"nE":"Self Select Multiple","nC":"自選複式","uE":"","uC":"","pg":"Multiple","pa":"","ta":"","icon":"","iconE":"","iconC":"","type":"MULTIPLE.ASPX","dv":"","child":null},{"nE":"Self Select Banker","nC":"自選膽拖","uE":"","uC":"","pg":"Banker","pa":"","ta":"","icon":"","iconE":"","iconC":"","type":"BANKER.ASPX","dv":"","child":null},{"nE":"Quick Pick","nC":"運財號碼","uE":"","uC":"","pg":"Random","pa":"","ta":"","icon":"","iconE":"","iconC":"","type":"RANDOM.ASPX","dv":"","child":null}]};
</script><div class="bodyMainTable">
            <div class="bodyMainTableRow">
                <div class="bodyMainOddsMenu">
                </div>
                <div class="bodyMainOddsTable content">

<!-- Odds Content starts -->
<div id="oddsTable">


<script type="text/javascript">
	var draw_start = true;
	var next_draw = "22/090";
	var next_draw_date = "10/11/2022";
	var adv_sb_start = true;
	var m6_stopsell_desc = "購買六合彩服務暫停，請稍後再試。" ;
	var isAdvSB = 0 ;
	var m6_cookiefull_desc = "儲存限額已滿，未能加入「我的心水注項」。請先刪除部分心水注項。" ;
	var m6_too_many_banker_desc = "最多五個作膽號碼" ;
	var m6_insufficient_sel_desc = "所選號碼不足" ;
	var m6_value_too_big_desc = "總金額太大" ;
	var m6_must_be_within1_49 = "六合彩號碼須在1-49之內";
	var invalidDateRangeMsg = '所選日期不正確。';
    var invalidDateLengthMsg = '所選擇日期超過 3 個月，請縮窄所選的日期為 3 個月或少於 3 個月，然後再試一次。';

    var last30DrawUrl = '/contentserver/jcbw/cmc/last30draw.json';
    var last30SBDrawUrl = '/contentserver/jcbw/cmc/last30SBdraw.json';
    var dateRangeSearchUrl = '/marksix/getJSON.aspx';

    var drawIdLabel = '攪珠期數';
    var drawDateLabel = '攪珠日期';
    var turnoverLabel = '總投注額';
    var sbNameLabel = '金多寶名稱';
    var drawResultLabel = '攪珠結果';
    var resultLinkLabel = '攪珠結果及派彩';
    var prizeLabel = '獎項';
    var unitPrizeLabel = '每注獎金';
    var winUnitLabel = '中獎注數';

    var pagingLineTotalPage = 10;
    var pagingPrefixLabel = '本頁顯示';
    var pagingTotalLabel = '期,共找到';
    var pagingSuffixLabel = '期';
    var pagingPrevLabel = '上頁';
    var pagingNextLabel = '下頁';
    var pagingPrev10Label = '上?頁'.replace('?', pagingLineTotalPage);
    var pagingNext10Label = '下?頁'.replace('?', pagingLineTotalPage);

    var yearLabel = '年';
    var monthLabel = '月';
    var months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
    var defaultFromToDate = ['10','2022','11','2022'];
    var weekDays = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    var winningLabels = ['','頭 獎','二 獎','三 獎','四 獎','五 獎','六 獎','七 獎'];

	var totalRandomBall = 6;

	function SortArrayASC(needSortArrayList)
	{
		var tempValue = 0;

		for (sortCounter1 = 0; sortCounter1< needSortArrayList.length; sortCounter1++)
		{
			for (sortCounter2 = sortCounter1+1; sortCounter2 < needSortArrayList.length; sortCounter2++)
			{
				if (parseInt(needSortArrayList[sortCounter1], 10) > parseInt(needSortArrayList[sortCounter2], 10))
				{
					tempValue = needSortArrayList[sortCounter1];
					needSortArrayList[sortCounter1] = needSortArrayList[sortCounter2];
					needSortArrayList[sortCounter2] = tempValue;
				}
			}
		}

		return needSortArrayList;
	}

	function IsNumeric(sText)
	{
		var ValidChars = "0123456789";
		var IsNumber=true;
		var Char;

		for (i = 0; i < sText.length && IsNumber == true; i++)
		{
			Char = sText.charAt(i);
			if (ValidChars.indexOf(Char) == -1)
			{
				IsNumber = false;
			}
		}
		return IsNumber;
	}
</script>

<div id="drawResultsSingle" style="">
    <div class="resultHeaderTable">
      <div class="resultHeaderRow">
        <div class="resultHeaderCell1">攪珠結果</div>
        <div class="resultHeaderCell2"><a href="javascript:PrintResultSinglePage();" style="color:#FFFFFF">列印資料</a></div>
        <div class="resultHeaderCell3"><a href="javascript:PrintResultSinglePage();"><img src="/info/include/images/icon_print.gif?CV=L4.02R1" title="列印資料" border="0"></a></div>
      </div>
    </div>
    <div id="drawDetails1"><div class="resultSubHeaderRow"><div class="resultDetailsCell1">攪珠期數 : 11/154</div><div class="resultDetailsCell2">攪珠日期 : 31/12/2011(星期六)</div><div class="resultDetailsCell3">總投注額 : $43,332,819</div></div></div>
    <div id="drawDetails2"><div class="resultSubHeaderRow"><div class="resultDetailsCell4">攪珠結果 : </div><div class="resultDetailsCell5"><span class="resultDetailsInner"><img src="/marksix/info/images/icon/no_02.gif?CV=L4.02R1"></span><span class="resultDetailsInner"><img src="/marksix/info/images/icon/no_03.gif?CV=L4.02R1"></span><span class="resultDetailsInner"><img src="/marksix/info/images/icon/no_27.gif?CV=L4.02R1"></span><span class="resultDetailsInner"><img src="/marksix/info/images/icon/no_40.gif?CV=L4.02R1"></span><span class="resultDetailsInner"><img src="/marksix/info/images/icon/no_44.gif?CV=L4.02R1"></span><span class="resultDetailsInner"><img src="/marksix/info/images/icon/no_49.gif?CV=L4.02R1"></span><span class="resultDetailsInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultDetailsInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_38.gif?CV=L4.02R1"></span></div></div></div>
    <div id="resultPrizeTable"><div class="resultPrizeRow"><div class="resultPrizeCell"><div class="resultPrizeInnerTable"><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableContentHead"><strong>獎項</strong></div><div class="resultPrizeInnerCellRight tableContentHead"><strong>每注獎金</strong></div><div class="resultPrizeInnerCellRight tableContentHead"><strong>中獎注數</strong></div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult2">頭 獎</div><div class="resultPrizeInnerCellRight tableResult2"><span class="orangeNum2">$18,767,030</span></div><div class="resultPrizeInnerCellRight tableResult2">0.5</div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult1">二 獎</div><div class="resultPrizeInnerCellRight tableResult1"><span class="orangeNum1">$505,060</span></div><div class="resultPrizeInnerCellRight tableResult1">4.0</div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult2">三 獎</div><div class="resultPrizeInnerCellRight tableResult2"><span class="orangeNum1">$98,850</span></div><div class="resultPrizeInnerCellRight tableResult2">54.5</div></div></div></div><div style="padding:0px 0px 0px 10px;" class="resultPrizeCell"><div class="resultPrizeInnerTable"><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableContentHead"><strong>獎項</strong></div><div class="resultPrizeInnerCellRight tableContentHead"><strong>每注獎金</strong></div><div class="resultPrizeInnerCellRight tableContentHead"><strong>中獎注數</strong></div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult2">四 獎</div><div class="resultPrizeInnerCellRight tableResult2"><span class="orangeNum1">$9,600</span></div><div class="resultPrizeInnerCellRight tableResult2">258.5</div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult1">五 獎</div><div class="resultPrizeInnerCellRight tableResult1"><span class="orangeNum1">$640</span></div><div class="resultPrizeInnerCellRight tableResult1">3,128.0</div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult2">六 獎</div><div class="resultPrizeInnerCellRight tableResult2"><span class="orangeNum1">$320</span></div><div class="resultPrizeInnerCellRight tableResult2">4,787.8</div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult1">七 獎</div><div class="resultPrizeInnerCellRight tableResult1"><span class="orangeNum1">$40</span></div><div class="resultPrizeInnerCellRight tableResult1">64,590.9</div></div></div></div></div></div>
    <div class="resultFooter">若獲中之獎金為每十元一注超過五百萬元，所有中獎彩票持票人士或經由電話投注服務的中獎人士，包括使用智財咭、1886電話投注自動服務系統等，必須於指定時間致電本會1817登記。﹝使用互動投注服務途徑或香港賽馬會電子錢包除外﹞<br><br>互動投注服務包括網上投注服務「投注區」、馬會投注三合一及 Racing Touch流動應用程式。</div>
</div>
<div id="drawResultsAll" class="divToPrint" style="display: none;">
    <div class="resultHeaderTable">
      <div class="resultHeaderRow">
        <div class="resultHeaderCell1">過去攪珠結果</div>
        <div class="resultHeaderCell2"><a href="javascript:PrintResultPage();" style="color:#FFFFFF">列印資料</a></div>
        <div class="resultHeaderCell3"><a href="javascript:PrintResultPage();"><img src="/info/include/images/icon_print.gif?CV=L4.02R1" title="列印資料" border="0"></a></div>
      </div>
    </div>
    <div class="resultSubHeaderTable">
      <div class="resultSubHeaderRow">
        <div class="resultSubHeaderCell1">運氣，話嚟就嚟！只須鍵入一個心水號碼然後按 "加入注項"，電腦便會隨機加入五個運財號碼方便你即時購買六合彩！</div>
        <div class="resultSubHeaderCell2"><input name="txtRandomNum" id="txtRandomNum" type="text" class="inputField1"></div>
        <div class="resultSubHeaderCell3"><div class="addBet" title="加入注項" onclick="AddSingleRandomM6ToBetSlip()"></div></div>
      </div>
    </div>
    <div class="resultSearchTable">
      <div class="resultSearchRow">
        <div class="resultSearchCell1">攪珠期數/日期</div>
        <div class="resultSearchCell2">
          <span class="resultSearchRadio"><input name="radioDrawRange" id="radioDrawID" type="radio" value="DrawID" onchange="enableSearch = true;" style="margin:0px" checked=""></span>
          <span class="resultSearchRadio"><label for="radioDrawID">攪珠期數 : </label></span>
          <span>
            <select name="selectDrawID" id="selectDrawID" class="select2" style="width:50px" onchange="setRadio('radioDrawID');enableSearch = true;"><option value="1" disabled="">---</option><option value="5">5</option><option value="10" selected="">10</option><option value="20">20</option><option value="30">30</option><option value="1" disabled="">---</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option></select>
          </span>
        </div>
        <div class="resultSearchButton">
        </div>
      </div>
      <div class="resultSearchRow">
        <div class="resultSearchCell1"></div>
        <div class="resultSearchCell2">
          <div style="display:table-cell;vertical-align:middle">
            <span class="resultSearchRadio"><input name="radioDrawRange" id="radioDrawDate" type="radio" value="DrawDate" onchange="enableSearch = true;" style="margin:0px"></span>
          </div>
          <div style="display:table-cell;padding-left:5px">
            <div>
            (每次最多可搜尋3 個月。)
            </div>
            <div>
            <span class="resultSearchRadio"><label for="radioDrawDate">由 : </label></span>
            <span>
              <select name="FromMonth" id="FromMonth" class="select2" style="width:55px" onchange="setRadio('radioDrawDate');enableSearch = true;"><option value="0" disabled="">月</option><option value="1">1月</option><option value="2">2月</option><option value="3">3月</option><option value="4">4月</option><option value="5">5月</option><option value="6">6月</option><option value="7">7月</option><option value="8">8月</option><option value="9">9月</option><option value="10">10月</option><option value="11">11月</option><option value="12">12月</option></select>
	            /
              <select name="FromYear" id="FromYear" class="select2" style="width:70px" onchange="setRadio('radioDrawDate');enableSearch = true;"><option value="0" disabled="">年</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option></select>
            </span>
            <span>
	          <span class="resultSearchRadio">至 : </span>
            </span>
            <span>
              <select name="ToMonth" id="ToMonth" class="select2" style="width:55px" onchange="setRadio('radioDrawDate');enableSearch = true;"><option value="0" disabled="">月</option><option value="1">1月</option><option value="2">2月</option><option value="3">3月</option><option value="4">4月</option><option value="5">5月</option><option value="6">6月</option><option value="7">7月</option><option value="8">8月</option><option value="9">9月</option><option value="10">10月</option><option value="11">11月</option><option value="12">12月</option></select>
	            /
              <select name="ToYear" id="ToYear" class="select2" style="width:70px" onchange="setRadio('radioDrawDate');enableSearch = true;"><option value="0" disabled="">年</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option></select>
	        </span>
            </div>
          </div>
        </div>
        <div class="resultSearchButton">
        </div>
      </div>
      <div class="resultSearchRow">
        <div class="resultSearchCell1">攪珠類別</div>
        <div class="resultSearchCell2">
          <span class="resultSearchRadio"><input name="radioResultType" id="GetAll" type="radio" value="GetAll" style="margin:0px" onchange="enableSearch = true;" checked=""></span>
          <span class="resultSearchRadio"><label for="radioResultAll">全部</label></span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span class="resultSearchRadio"><input name="radioResultType" id="GetSnowBall" type="radio" value="GetSnowBall" onchange="enableSearch = true;" style="margin:0px"></span>
          <span class="resultSearchRadio"><label for="radioResultSnowBall">金多寶</label></span>
        </div>
        <div class="resultSearchButton"><div class="searchButton" title="搜尋" onclick="OnSearchSubmitMark6Result();postM6Search();"></div></div>
      </div>
    </div>
    <div class="resultPagingTable">
      <div class="resultPagingRow">
        <div class="resultPagingCell1 gray" id="pagingTopLeft">本頁顯示 1 - 20 期,共找到 39期</div>
        <div class="resultPagingCell2 gray" id="pagingTopRight"><a href="javascript:goToPaging(39, 0);">&lt;&lt;上頁</a> | <span>1</span> | <a href="javascript:goToPaging(39, 2)">2</a> | <a href="javascript:goToPaging(39, 2)">下頁&gt;&gt;</a></div>
      </div>
    </div>
    <div id="resultMainTable"><div class="resultMainTable"><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(0);" title="攪珠結果及派彩">11/154&nbsp;</a></div><div class="resultMainCell2 tableResult2">31/12/2011</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_02_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_03_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_27_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_40_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_44_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_49_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_38_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(1);" title="攪珠結果及派彩">11/153&nbsp;</a></div><div class="resultMainCell2 tableResult1">29/12/2011</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_07_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_10_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_21_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_23_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_29_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_39_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_01_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(2);" title="攪珠結果及派彩">11/152&nbsp;</a></div><div class="resultMainCell2 tableResult2">26/12/2011</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_08_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_30_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_31_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_37_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_38_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_48_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_05_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(3);" title="攪珠結果及派彩">11/151&nbsp;</a></div><div class="resultMainCell2 tableResult1">24/12/2011</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_01_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_04_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_17_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_24_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_27_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_43_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_41_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(4);" title="攪珠結果及派彩">11/150&nbsp;</a></div><div class="resultMainCell2 tableResult2">22/12/2011</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_05_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_16_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_18_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_28_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_37_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_49_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_24_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(5);" title="攪珠結果及派彩">11/149&nbsp;XMS</a></div><div class="resultMainCell2 tableResult1">20/12/2011</div><div class="resultMainCell3 tableResult1">聖誕金多寶</div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_26_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_29_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_31_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_37_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_43_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_49_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_02_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(6);" title="攪珠結果及派彩">11/148&nbsp;</a></div><div class="resultMainCell2 tableResult2">18/12/2011</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_01_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_02_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_23_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_35_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_38_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_46_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_05_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(7);" title="攪珠結果及派彩">11/147&nbsp;</a></div><div class="resultMainCell2 tableResult1">15/12/2011</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_09_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_21_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_29_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_34_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_43_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_47_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_32_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(8);" title="攪珠結果及派彩">11/146&nbsp;</a></div><div class="resultMainCell2 tableResult2">13/12/2011</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_03_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_25_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_32_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_36_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_38_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_40_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_31_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(9);" title="攪珠結果及派彩">11/145&nbsp;</a></div><div class="resultMainCell2 tableResult1">10/12/2011</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_03_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_14_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_21_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_25_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_27_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_42_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_34_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(10);" title="攪珠結果及派彩">11/144&nbsp;</a></div><div class="resultMainCell2 tableResult2">08/12/2011</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_05_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_20_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_22_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_28_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_36_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_48_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_01_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(11);" title="攪珠結果及派彩">11/143&nbsp;</a></div><div class="resultMainCell2 tableResult1">06/12/2011</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_01_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_02_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_05_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_06_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_11_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_43_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_25_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(12);" title="攪珠結果及派彩">11/142&nbsp;</a></div><div class="resultMainCell2 tableResult2">03/12/2011</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_02_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_03_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_09_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_18_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_23_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_37_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_31_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(13);" title="攪珠結果及派彩">11/141&nbsp;</a></div><div class="resultMainCell2 tableResult1">01/12/2011</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_01_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_03_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_08_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_22_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_28_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_33_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_05_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(14);" title="攪珠結果及派彩">11/140&nbsp;</a></div><div class="resultMainCell2 tableResult2">29/11/2011</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_03_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_06_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_13_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_37_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_40_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_42_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_29_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(15);" title="攪珠結果及派彩">11/139&nbsp;</a></div><div class="resultMainCell2 tableResult1">26/11/2011</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_04_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_22_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_33_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_39_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_42_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_47_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_14_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(16);" title="攪珠結果及派彩">11/138&nbsp;</a></div><div class="resultMainCell2 tableResult2">24/11/2011</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_03_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_05_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_19_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_35_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_38_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_41_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_32_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(17);" title="攪珠結果及派彩">11/137&nbsp;</a></div><div class="resultMainCell2 tableResult1">22/11/2011</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_07_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_21_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_24_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_31_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_43_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_47_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_05_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(18);" title="攪珠結果及派彩">11/136&nbsp;</a></div><div class="resultMainCell2 tableResult2">19/11/2011</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_10_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_12_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_13_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_14_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_22_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_47_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_21_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(19);" title="攪珠結果及派彩">11/135&nbsp;</a></div><div class="resultMainCell2 tableResult1">17/11/2011</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_03_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_06_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_23_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_24_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_42_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_44_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_35_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div></div></div>
    <div id="printContent"></div>
    <div class="resultPagingTable">
      <div class="resultPagingRow">
        <div class="resultPagingCell1" id="pagingBottomLeft"></div>
        <div class="resultPagingCell2" id="pagingBottomRight"><a href="javascript:goToPaging(39, 0);">&lt;&lt;上頁</a> | <span>1</span> | <a href="javascript:goToPaging(39, 2)">2</a> | <a href="javascript:goToPaging(39, 2)">下頁&gt;&gt;</a></div>
      </div>
    </div>
    <div class="resultFooter">若獲中之獎金為每十元一注超過五百萬元，所有中獎彩票持票人士或經由電話投注服務的中獎人士，包括使用智財咭、1886電話投注自動服務系統等，必須於指定時間致電本會1817登記。﹝使用互動投注服務途徑或香港賽馬會電子錢包除外﹞<br><br>互動投注服務包括網上投注服務「投注區」、馬會投注三合一及 Racing Touch流動應用程式。</div>
</div>
</div>
<!-- Odds Content ends -->
<script type="text/javascript">
    function m6Init() {
        m6ResSelPara = {};
       // setTopBannerFrame('marksix', 'results', curLang);
        setSearchBoxOption();
        if (!$.isEmptyObject(m6ResSelPara)){
            OnSearchSubmitMark6Result();
        } else {
            noOfDrawSearch = 10;
            getLastNResults(noOfDrawSearch, last30DrawUrl);
        }
    }
    function getNotResultLabel() {
        return "<label>沒有相關資料。</label>";
    }
    function m6BannerInit() {
        setTopBannerFrame('marksix', 'results', curLang);
    }
</script>

                </div>
            </div>
        </div></div>
    <div id="bottomBannerDiv" class="bottomMenu" style="display: none;">
<table width="750" cellspacing="0" cellpadding="0" border="0">
	<tbody><tr>
		<td style="padding:0px 0px 7px 0px;">
			<table width="100%" cellspacing="0" cellpadding="0" border="0">
				<tbody><tr class="bottomtopbannerdisplay" style="display:none">
					<td width="120" align="left"><a id="bottomBanner_lnk_mcs" href="http://mcs.hkjcfootball.com/" target="_blank"><img id="bottomBanner_img_mcs" src="/root2/bet_main/ch/images/btn_media.gif" width="120" height="40" border="0"></a></td>
					<td align="left"><img src="/info/Include/Images/spacer.gif" width="5" height="5" border="0"></td>
					<td colspan="9" align="left"><img id="bottomBanner_img_phone" src="/root2/bet_main/ch/images/btn_phone.gif" width="624" height="40" border="0"></td>
				</tr>
				<tr valign="top">
					<td width="120"><a id="banner1a" href="Javascript:;" onclick="return false;"><img name="banner1" id="banner1" src="/info/Include/images/spacer.gif" width="120" height="50" border="0"></a></td>
					<td><img src="/info/Include/images/spacer.gif" width="5" height="50"></td>
					<td width="120"><a id="banner2a" href="Javascript:;" onclick="return false;"><img name="banner2" id="banner2" src="/info/Include/images/spacer.gif" width="120" height="50" border="0"></a></td>
					<td><img src="/info/Include/images/spacer.gif" width="5" height="50"></td>
					<td width="120"><a id="banner3a" href="Javascript:;" onclick="return false;"><img name="banner3" id="banner3" src="/info/Include/images/spacer.gif" width="120" height="50" border="0"></a></td>
					<td><img src="/info/Include/images/spacer.gif" width="5" height="50"></td>
					<td width="120"><a id="banner4a" href="Javascript:;" onclick="return false;"><img name="banner4" id="banner4" src="/info/Include/images/spacer.gif" width="120" height="50" border="0"></a></td>
					<td><img src="/info/Include/images/spacer.gif" width="5" height="50"></td>
					<td width="120"><a id="banner5a" href="Javascript:;" onclick="return false;"><img name="banner5" id="banner5" src="/info/Include/images/spacer.gif" width="120" height="50" border="0"></a></td>
					<td><img src="/info/Include/images/spacer.gif" width="5" height="50"></td>
					<td width="120"><a id="banner6a" href="Javascript:;" onclick="return false;"><img name="banner6" id="banner6" src="/info/Include/images/spacer.gif" width="120" height="50" border="0"></a></td>
				</tr>
			</tbody></table>
		</td>
	</tr>
</tbody></table>
</div>

    <div id="rgpDiv" style="width:744px; background-color:#ffffff;margin:5px 6px 0px 6px;padding:10px 10px 10px 10px;margin-bottom:150px;">
	<div id="rgpImage"><img src="/info/include/rgp/rgp_text_710_chi.gif" usemap="#Map" width="710" height="103" border="0"><map id="Map" name="Map"><area shape="rect" coords="640,2,708,43" href="//www.hkjc.com/responsible-gambling/ch/index.aspx" target="_blank"></map></div>
	<div style="padding:9px 2px 0px 2px;">
		<div id="rgpLinks" style="float:left"><a href="//www.hkjc.com/infomenu/ch/contact/feedback.aspx" target="_blank" class="footer">聯絡我們</a> | <a href="//www.hkjc.com/home/chinese/sitemap.aspx" target="_blank" class="footer">網頁指南</a> | <a href="//www.hkjc.com/chinese/betting/betting_rule_ch.htm" target="_blank" class="footer">規例</a> | <a href="//www.hkjc.com/responsible-gambling/ch/index.aspx" target="_blank" class="footer">提倡有節制博彩</a> | <a href="//www.hkjc.com/home/chinese/corporate/corp_privacy.aspx" target="_blank" class="footer">私隱條款</a> | <a href="//special.hkjc.com/root/info/ch/disclaimer.asp" target="_blank" class="footer">免責聲明</a> | <a href="//www.hkjc.com/home/chinese/corporate/security-tips.aspx" target="_blank" class="footer">網絡保安</a></div>
		<div id="rgpCopyRight" style="float:right"><a href="//www.hkjc.com/chinese/copyright.htm" target="_blank" class="footer">版權所有 不得轉載</a><span class="footer"> © 2006-2022 香港馬會獎券有限公司</span></div>
		<div style="clear:both"></div>
	</div>
</div>

</div>
<div id="betslipDiv" class="noPrint" style="position: fixed; top: 39px;">
	<div id="betslipDisableDiv"></div>
	<div id="betslipDimmedDiv"></div>
	<div id="betslipDimmedText"></div>
	<div id="betslipSound" style="display:none"></div>
	<div id="divBetSlipMinimize" style="display:none" onclick="OnClickRestore()" title="放大">
		<div id="divBetSlipMinimizeText"></div>
	</div>
	<div id="divBetSlipNormal">
		<div id="divAccInfo" onkeydown="return onKeyDown(event, true, 'accInfo');">
			<div id="errormsg" onclick="javascript:HideError(1)"></div>
			<div class="topYellowBar"></div>
			<div id="divAccInfoLogout" class="accInfoBg">
				<div class="accInfoTable">
					<div class="betslipRow">
						<div class="accInfoCellLogo" onmouseover="ShowServerId(this)"></div>
						<div class="accInfoCellInput">
							<div id="minimizeButton" class="minimizeButton" onclick="OnClickMinimize()" title="縮小"></div>
							<div id="topHelpButton" class="topHelpButton" onclick="OnClickHelp()" title="「投注區」使用指南"></div>
							<div style="clear:both"></div>
							<div style="padding-top:3px"><input name="account" id="account" type="text" value="" maxlength="15" class="accInfoInputField" style="width:152px; height:16px;" tabindex="1" autocomplete="off"></div>
							<div style="padding-top:4px; float:left">
								<input type="text" name="passwordInput1" id="passwordInput1" value="" class="accInfoInputField" style="width:99px; height: 16px; display: block;" tabindex="2">
								<input type="password" name="password" id="password" maxlength="20" class="inputField1" style="width:99px; height:16px; display:none;" onblur="if ( $(this).val()=='' ) { $(this).hide(); $('#passwordInput1').show(); }" tabindex="-1">
							</div>
							<div id="loginButton" class="loginButton" onclick="OnClickLogin()" tabindex="3" title="登入"></div>
							<div id="loginSSONextButton" class="loginSSONextButton" onclick="OnClickNext()" tabindex="4" title="下一步" style="display: none;"></div>
							<div style="clear:both"></div>
						</div>
					</div>
				</div>
				<div class="accInfoTable2" style="padding-top:5px">
					<div class="betslipRow">
						<div class="accInfoCell regDropdown" id="linkAccInfoRegister" onclick="OnClickRegisterNow()" style="visibility: visible; color: rgb(102, 102, 102);">申請網上<br>投注服務</div>
						<div class="accInfoCellStroke"></div>
						<div class="accInfoCell" id="linkPersonalSettings" onclick="OnClickPersonalSettings()">設定</div>
						<div class="accInfoCellStroke"></div>
						<div class="accInfoCell" id="linkCannotLogin" onclick="OnClickCannotLogin()">無法登入</div>
					</div>
				</div>
			</div>
			<div id="divAccInfoLogin" class="accInfoBg" style="display:none">
				<div class="accInfoTable">
					<div class="betslipRow">
						<div class="accInfoCellLogo" onmouseover="ShowServerId(this)"></div>
						<div style="display:table-cell">
							<div class="accInfoCellNo">
								<div id="txtAccNo"></div>
								<div id="valueAccNo"></div>
								<div id="bsPeNoteIcon"></div>
							</div>
							<div class="accInfoCellButton">
								<div id="minimizeButtonLogin" class="minimizeButton" onclick="OnClickMinimize()" title="縮小"></div>
								<div id="topHelpButtonLogin" class="topHelpButton" onclick="OnClickHelp()" title="「投注區」使用指南"></div>
								<div id="logoutButton" class="logoutButton" onclick="OnClickLogout()"></div>
							</div>
						</div>
					</div>
					<div class="betslipRow">
						<div style="display:table-cell"></div>
						<div class="accInfoCellName">
							<div style="width:151px">
								<div id="valueAccName"></div>
								<div>
									<div id="valueAccBal" style="display:inline-block;vertical-align:top;margin-top:1px"></div>
									<div id="buttonAccBal" onclick="OnClickRefreshBalance()"></div>
								</div>
							</div>
						</div>
						<div style="display:table-cell; width:1px"></div>
					</div>
				</div>


				<div class="accInfoTable2">
					<div class="betslipRow">
						<div class="accInfoCell" id="linkAccStmt" onclick="OnClickAccountRecord()">戶口紀錄</div>
						<div class="accInfoCellStroke"></div>
						<div class="accInfoCell regDropdown" id="linkPersonalSettingsLogin" onclick="OnClickPersonalSettingsLogin()" style="color: rgb(102, 102, 102);">設定</div>
						<div class="accInfoCellStroke"></div>
						<div class="accInfoCell" id="linkFundsTransfer" onclick="OnClickFundTransfer()">轉賬服務</div>
					</div>
				</div>
			</div>
		</div>

		<div id="divSlip">
			<div id="errormsgMiddle" onclick="javascript:HideError(2)">
				<div class="errorMsgClodeButton"></div>
				<div style="clear: both"></div>
				<div id="errMsgMiddleTxt"></div>
			</div>

			<div class="betslipRow">
				<div class="middleYellowBar"></div>
				<div class="middleYellowBar"></div>
			</div>
			<div class="betslipRow">
				<div id="slipToggleButton" class="slipExpand" onclick="slipToogle();" title="按此開關"></div>
				<div class="slipBetTable">
					<div id="multiplePanel" style="display:none">
						<div class="betslipRow">
							<div class="slipActivePanel">A</div>
							<div class="slipInactivePanel">B</div>
							<div class="slipInactivePanel">C</div>
							<div class="slipInactivePanel">D</div>
							<div style="width:1px"></div>
						</div>
					</div>
					<div id="divBetLayer" onscroll="collapseUnitBetDropdown();"></div>
					<div class="slipBetPanel">
						<div class="slipBetPanelRow">
							<div class="slipStrokeOrange"></div>
							<div id="divAlupFormulaLabel" class="slipBottomCellLeft">過關方式</div>
							<div id="bottomHelpButton" class="bottomHelpButton" onclick="OnClickAllupHelp()" title="過關投注示範"></div>
							<div class="clear"></div>
						</div>
						<div class="slipBetPanelRow">
							<div id="bsAddBetButton" class="slipAddBet" onclick="CreateAndAddAllUp()" title="加入過關注項"></div>
							<div class="slipAlupUpDown">
								<div class="slipAlupUp" onclick="inputAllUpValueChanged(10)"></div>
								<div class="slipAlupDown" onclick="inputAllUpValueChanged(-10)"></div>
							</div>
							<div class="slipBottomCellRight" style="padding-left:1px">
								<input type="text" class="inputField1" style="width:45px; height:19px; background-color: #FFFFFF" onblur="CheckAlupBoxUnitBet(this);" disabled="" id="inputAllUp">
							</div>
							<div class="slipBottomCellRight">
								<select name="selFormula" id="sel_formula" class="select1" style="width:60px" disabled=""></select>
							</div>
							<div class="clear"></div>
						</div>
						<div class="slipDottedLine"></div>
						<div class="slipBetPanelRow">
							<div id="fldTotalNoOfBets" class="slipBottomAmountLeft">總注數</div>
							<div id="total_no_of_bets" class="slipBottomAmountRight">0</div>
							<div class="clear"></div>
						</div>
						<div class="slipBetPanelRow">
							<div id="fldTotalAmount" class="slipBottomAmountLeft">總投注金額</div>
							<div id="fld_total_bet_amount" class="slipBottomAmountRight">$ 0.00</div>
							<div class="clear"></div>
						</div>
						<div class="slipBetPanelRow">
							<div id="bsSendPreviewButton" class="slipSendPreview" onclick="OnClickPreview()" title="傳送注項"></div>
							<div id="bsDeleteBetButton" class="slipDeleteBet" onclick="OnClickReset()" title="刪除注項"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="betslipRow">
				<div class="bottomYellowBar"></div>
				<div class="bottomYellowBar"></div>
			</div>

			<div id="divEKBA" onkeydown="return onKeyDown(event, true, 'ekba');">
				<div class="topYellowBar"></div>
				<div class="ekbaGrayBar"></div>
				<div class="ekbaContainer">
					<div id="ekbaDivTitle">登入問題</div>
					<div id="ekbaSeqQuestion"></div>
					<div class="ekbaFields">
						<input id="ekbaDivInput" name="ekbaDivInput" type="text" class="text" maxlength="50" autocomplete="off" tabindex="4"><span onclick="OnClickChgSecQuestion()" id="txtForgetWebPass">忘記登入答案?</span>
						<div id="ekbaDivError"></div>
					</div>
					<div id="divEKBADefaultButton" class="ekbaFooter" style="display:block">
						<div class="cancelButton" onclick="OnClickLoginEKBACancel()" id="pic_cancel" title="取消"></div>
						<div class="confirmButton" onclick="OnClickLoginEKBA()" id="pic_confirm" tabindex="5" title="確定"></div>
					</div>
					<div id="divEKBASSOButton" class="ekbaFooter" style="display:none">
						<div class="backButton" onclick="OnClickLoginEKBABack()" id="pic_backSSO" title="返回"></div>
						<div class="logoutEKBAButton" onclick="OnClickLoginEKBALogout()" id="pic_logoutSSO" title="登出"></div>
						<div class="confirmButton" onclick="OnClickLoginEKBA()" id="pic_confirmSSO" tabindex="6" title="確定"></div>
					</div>
				</div>
				<div class="ekbaGrayBar"></div>
				<div class="topYellowBar"></div>
			</div>

			<div id="divEWallet" style="display:none; border-left: 1px solid #a3a3a3;">
				<div class="topYellowBar"></div>
				<div class="ekbaGrayBar"></div>
				<div class="container">
					<h2>
						<div id="eWalletDivTitle"></div>
					</h2>
					<p>
						</p><div id="eWalletMsg"></div>
					<p></p>
					<div id="divEWalletLaterButton" class="BLfooter" style="display:block">
						<span style="float:left; margin-left:280px; margin-right:10px; display:inline;"><a class="eWalletLater" href="#" onclick="OnClickEWalletCancel();return false;"></a></span>
						<span style="float:right; margin-left:10px; margin-right:10px; display:inline;"><a class="eWalletUpgrade" href="#" onclick="OnClickEWalletUpgrade();return false;"></a></span>
					</div>
				</div>
				<div class="ekbaGrayBar"></div>
				<div class="topYellowBar"></div>
			</div>

			<div id="divDisclaimer" onkeydown="return onKeyDown(event, true, 'disclaimer');" tabindex="-1">
				<div class="topYellowBar"></div>
				<div class="ekbaGrayBar"></div>
				<div id="disclaimerHeader">條款及細則</div>
				<div id="disclaimerText"></div>
				<div id="disclaimerProceed" onclick="ShowDisclaimer(false, true)" class="disclaimerEnterButton" title="進入主頁"></div>
				<div style="clear:both"></div>
				<div class="ekbaGrayBar"></div>
				<div class="topYellowBar"></div>
			</div>

			<div id="divIdleAlert">
				<div id="divIdleAlertLogoutTips"></div>
				<div id="divIdleAlertLogoutTimeTips"></div>
				<div onclick="idleAlertClose()" id="divIdleAlertStay"></div>
				<div onclick="idleAlertLogout(false)" id="divIdleAlertLogout"></div>
				<div id="divIdleAlertSound" style="height:0"></div>
			</div>

			<div id="divBetPreview">
				<div class="topYellowBar"></div>
				<div class="ekbaGrayBar"></div>
				<div class="divBetTable">
					<div class="betHeader">
						<div id="betHeaderCell1"></div>
						<div id="betHeaderCell2"></div>
						<div id="betHeaderCell3"></div>
						<div id="betHeaderPrint" onclick="betReplyPrint()"></div>
						<div style="clear:both"></div>
					</div>
					<div id="divReplyTotal" class="replyBottomRow">
						<div id="txtBetTotalReply"></div>
						<div id="valueBetTotalReply"></div>
						<div style="clear:both"></div>
					</div>
					<div id="betSubHeader"></div>
					<div id="previewTable"></div>
					<div id="replyTable"></div>
				</div>
				<div id="divPreviewBottom">
					<div class="previewDeleteDiv">
						<div class="previewDeleteDimButton" onclick="OnClickDeleteBet()" id="previewDel"></div>
					</div>
					<div class="previewInplayMsgDiv">
						<div class="inplayMsgTxt"></div>
					</div>
					<div class="previewSendDiv">
						<div>
							<div class="previewSendCell" id="txtBetTotal"></div>
							<div class="previewSendCell" id="valueBetTotal"></div>
							<div style="clear:both"></div>
						</div>
						<div>
							<div class="previewCloseButton previewSendCell" onclick="OnClickClosePreview()" id="previewClose"></div>
							<div class="previewSendButton previewSendCell" onclick="OnClickConfirmBet()" id="previewSend"></div>
						</div>
					</div>
					<div style="clear:both"></div>
				</div>
				<div id="divReplyBottom">
					<div class="previewInplayMsgDiv">
						<div class="inplayMsgTxt"></div>
					</div>
					<div class="replyBottomDiv">
						<div>
							<div style="float:right; margin-left:10px; display:none;" class="previewSendButton previewSendCell" onclick="OnClickResendConfirmBet()" id="replySend"></div>
							<div class="replyRecallButton" onclick="OnClickCloseAndRecall()" id="replyRecall"></div>
							<div class="replyCloseButton" onclick="OnClickClose()" id="replyClose"></div>
						</div>
						<div style="clear:both"></div>
					</div>
				</div>
				<div class="ekbaGrayBar"></div>
				<div class="topYellowBar"></div>
			</div>

		</div>

		<div id="divRegDropdownMenu" class="regDropdown tDisplayNone">
			<ul>
				<li><a href="javascript:onClickRegonline();" class="content"><span id="regOnline">我已經持有投注戶口</span></a></li>
				<li><a href="javascript:onClickApplybet();" class="content"><span id="regApply">我尚未持有投注戶口</span></a></li>
			</ul>
		</div>

		<div id="divSettingsMenu" class="regDropdown tDisplayNone">
			<ul>
				<li><a href="javascript:OnClickChgWebPassword();" class="content"><span id="txtChgWebPassword">更改網上密碼</span></a></li>
				<li><a href="javascript:OnClickChgSecQuestion();" class="content"><span id="txtChgSecQuestion">更改登入答案</span></a></li>
				<li><a href="javascript:OnClickChgWebProfile();" class="content"><span id="txtChgWebProfile">更改個人檔案</span></a></li>
				<li><a href="javascript:OnClickPersonalSettings();" class="content"><span id="txtPersonalSettings">「投注區」個人設定</span></a></li>
				<li style="display:none"><a href="javascript:OnClickFootballLive();" class="content"><span id="txtFootballLive">足智即場睇</span></a></li>
			</ul>
		</div>
	</div>

</div>


<div id="divBetSlipOverlay">
	<div id="divStmtYellowNote"></div>

	<div id="divPersonalSetting">
		<div class="topYellowBar"></div>
		<div class="boCenter">
			<div class="boHeader" id="txtSettingHeader"></div>
			<div id="divSettingTable">
				<div id="settingTable">
					<div id="settingHeader1" class="settingHeaderOpen" onclick="settingToggleTable(1)"></div>
					<div id="settingBody1" class="settingTable"></div>
					<div id="settingHeader2" class="settingHeaderOpen" onclick="settingToggleTable(2)"></div>
					<div id="settingBody2" class="settingTable"></div>
					<div id="settingHeader3" class="settingHeaderOpen" onclick="settingToggleTable(3)"></div>
					<div id="settingBody3" class="settingTable"></div>
					<div id="settingHeader4" class="settingHeaderOpen" onclick="settingToggleTable(4)"></div>
					<div id="settingBody4" class="settingTable"></div>
					<div id="settingHeader5" class="settingHeaderOpen" onclick="settingToggleTable(5)"></div>
					<div id="settingBody5" class="settingTable"></div>
					<div id="settingHeader6" class="settingHeaderOpen" onclick="settingToggleTable(6)"></div>
					<div id="settingBody6" class="settingTable"></div>
				</div>
				<div id="divSettingBottom">
					<div class="stmtCloseButton" id="settingClose" onclick="closeAllBetSlipOverlay()"></div>
					<div class="settingDefaultButton" id="settingDefault" onclick="setDefaultAmt()"></div>
					<div class="settingSaveButton" id="settingSave" onclick="saveAmt()" onmouseover="showDiv(this, 'setting', true);" onmouseout="showDiv(this, '', false);"></div>
				</div>
			</div>
		</div>
		<div class="topYellowBar"></div>
	</div>

	<div id="divStatement">
		<div id="DivReceipt" style="background:rgba(0,0,0,0.5); width:100%;height:100%;position:absolute;text-align:center;z-index:10;display:none;top:0; left:0;" onclick="CloseReceipt()">
			<div style="margin-top:20px;color:white;">
				<a class="btnGray" id="btnDownload" style="width:60px; padding:5px;" onclick="downloadReceipt()"></a>
				<br>
				<img id="imgReceipt">
				<canvas id="canReceipt" style="display:none">
			</canvas></div>
		</div>
		<div class="topYellowBar"></div>
		<div class="boCenter">
			<div class="boHeader" id="txtAccRecordHeader"></div>
			<div class="boSubheader">
				<div class="boNav" id="linkAccountRecord" onclick="reloadAccountRecord()"></div>
				<div class="boHelpButton" id="helpAccountRecord" onclick="OnClickHelpAccountRecord()">
					<img src="/info/include/images/icon_help.gif" class="boHelpPic">
				</div>
				<div class="strokeGray"></div>
				<div class="boNav" id="linkCurSession" onclick="reloadCurSession()"></div>
				<div class="boHelpButton" id="helpCurSession" onclick="OnClickHelpCurSession()">
					<img src="/info/include/images/icon_help.gif" class="boHelpPic">
				</div>
				<div class="strokeGray"></div>
				<div class="boNav" id="linkRecall" onclick="reloadRecall()"></div>
				<div class="boHelpButton" id="helpRecall" onclick="OnClickHelpRecall()">
					<img src="/info/include/images/icon_help.gif" class="boHelpPic">
				</div>
				<div style="clear:both"></div>
			</div>

			<div id="divAccountRecord">
				<div id="divStatementSearchBox">
					<div id="divSearchBlock1">
						<div class="betslipRow">
							<div class="searchDateCell1"><input name="dateType" id="radioToday" type="radio" value="0" style="margin:0px" checked=""></div>
							<div class="searchDateCell2"><label for="radioToday" id="asToday"></label></div>
						</div>
						<div class="betslipRow">
							<div class="searchDateCell1" style="padding-top:7px;"><input name="dateType" id="radioDateRange" type="radio" value="1" style="margin:0px"></div>
							<div class="searchDateCell3">
								<div>
									<label for="radioDateRange" id="asFrom"></label> :
									<label for="radioDateRange" id="asFromDay"></label>
									<select id="FromDay" class="select2" style="width:50px" onchange="resetDate('From', 0)"></select>
									/
									<label for="radioDateRange" id="asFromMonth"></label>
									<select id="FromMonth" class="select2" style="width:50px" onchange="resetDate('From', 1)"></select>
									/
									<label for="radioDateRange" id="asFromYear"></label>
									<select id="FromYear" class="select2" style="width:60px" onchange="resetDate('From', 2)"></select>
								</div>
								<div>
									<label for="radioDateRange" id="asTo"></label> :
									<label for="radioDateRange" id="asTo_Day"></label>
									<select id="ToDay" class="select2" style="width:50px" onchange="resetDate('To', 0)"></select>
									/
									<label for="radioDateRange" id="asToMonth"></label>
									<select id="ToMonth" class="select2" style="width:50px" onchange="resetDate('To', 1)"></select>
									/
									<label for="radioDateRange" id="asToYear"></label>
									<select id="ToYear" class="select2" style="width:60px" onchange="resetDate('To', 2)"></select>
								</div>
							</div>
						</div>
						<div id="asSelDtRange"></div>
						<div class="betslipRow" id="lastDayOption">
							<div class="searchDateCell1" style="padding-top:3px;">
								<input name="dateType" id="radioLastDay" type="radio" value="2" style="margin:0px"></div>
							<div class="searchDateCell2">
								<label for="radioLastDay" id="seekLastDay"></label>
								<select id="last_days" class="select2" style="width:50px" onchange="$('#radioLastDay').prop('checked', 'true');"></select>
								<label for="radioLastDay" id="seekUnit"></label>
							</div>
						</div>
					</div>
					<div id="divSearchBlock2">
						<div class="betslipRow">
							<span id="asTxnType"></span> :
							<select id="betType" class="select2" style="width:215px" onchange="resetBetAndTxnOptions(false)"></select>
						</div>
						<div class="betslipRow">
							<span id="asDisplayType"></span> :
							<select id="txnType" class="select2" style="width:215px" onchange="resetBetAndTxnOptions(false)"></select>
						</div>
						<div class="statementConfirmButton" id="stmtConfirmButton" onclick="OnClickStatementSearch()">
						</div>
					</div>

				</div>

				<div id="divStatementYellowHeader">
					<div class="stmtMiddleHeader">
						<div id="stmtPageNo"></div>
						<div id="stmtAccBal"></div>
						<div id="stmtAccNo"></div>
						<div id="stmtTime"></div>
						<div style="clear:both"></div>
					</div>
				</div>

				<div id="divStatementTable">
					<div id="stmtMsg"></div>
					<div id="stmtHeader"></div>
					<div id="stmtTable"></div>
					<div id="divStmtBottom">
						<div class="stmtCloseButton" id="stmtClose" onclick="closeAllBetSlipOverlay()"></div>
						<div class="stmtNextDimButton" id="stmtNext" onclick="stmtNextPage()"></div>
						<div class="stmtPrevDimButton" id="stmtPrev" onclick="stmtPrevPage()"></div>
						<div id="stmtExportMenu">
							<div id="stmtExportHtml" onclick="fileExport('html')"></div>
							<div id="stmtExportText" onclick="fileExport('txt')"></div>
						</div>
						<div class="stmtExportButton" id="stmtExport" onmouseover="showDiv(this, 'save', true);" onmouseout="showDiv(this, '', false);" onclick="onclickStmtExport(this)" tabindex="-1">
						</div>
						<div class="stmtPrintButton" id="stmtPrint" onmouseover="showDiv(this, 'print', true);" onmouseout="showDiv(this, '', false);" onclick="onclickStmtPrint()"></div>
						<div class="stmtNewSearchButton" id="stmtNewSearch" onclick="openSearchBox()"></div>
					</div>
				</div>
			</div>

			<div id="divCurSession">
				<div id="divCurSessionYellowHeader">
					<div class="curSessionNote">
						<div id="curSessionNote1"></div>
						<div id="curSessionNote2"></div>
					</div>
					<div id="curSessionYellowBar" class="stmtMiddleHeader">
						<div id="curSessionAccBal"></div>
					</div>
				</div>

				<div id="divCurSessionTable">
					<div id="curSessionMsg"></div>
					<div id="curSessionHeader"></div>
					<div id="curSessionTable"></div>
					<div id="divCurSessionBottom">
						<div class="stmtCloseButton" id="curSessionClose" onclick="closeAllBetSlipOverlay()"></div>
						<div class="stmtPrintButton" id="curSessionPrint" onmouseover="showDiv('print', true);" onmouseout="showDiv('', false);" onclick="onclickCurSessionPrint()"></div>
					</div>
				</div>
			</div>


			<div id="divRecall">
				<div id="divRecallYellowHeader">
					<div class="stmtMiddleHeader">
						<div id="recallPageNo"></div>
					</div>
				</div>

				<div id="divRecallTable">
					<div id="recallMsg"></div>
					<div id="recallHeader"></div>
					<div id="recallTable"></div>
					<div id="divRecallBottom">
						<div class="stmtCloseButton" id="recallClose" onclick="closeAllBetSlipOverlay()"></div>
						<div class="stmtNextDimButton" id="recallNext" onclick="recallNextPage()"></div>
						<div class="stmtPrevDimButton" id="recallPrev" onclick="recallPrevPage()"></div>
						<div class="stmtPrintButton" id="recallPrint" onmouseover="showDiv(this, 'print', true);" onmouseout="showDiv(this, '', false);" onclick="onclickRecallPrint()"></div>
					</div>
				</div>
			</div>

		</div>
		<div class="topYellowBar"></div>
	</div>

	<div id="divFundTransfer">
		<div class="eft_base">
			<div id="popupHeader" style="float: left; width: 100%">
				<div class="eft_topTitleBar" style="float:left; width:100%; padding:5px 0px 0px 0px">
					<img src="/info/include/images/stroke_yellow.gif" style="padding-left:10px; vertical-align: middle">
					<span class="titleWhite" id="asTitle" style="padding-left:10px; vertical-align: middle"></span>
					<a href="javascript:;" style="cursor:help; vertical-align: middle"><img src="/info/include/images/icon_help.gif" id="pic_help" onclick="EftOnClickHelp()" style="margin-bottom:3px;" hspace="3" border="0" align="absmiddle"></a>
				</div>
				<div style="float:left;width:100%; border-top:1px solid #E8E9EA; background-color:#FFFFFF; line-height:1px; margin-top:3px;">
				</div>
				<div style="background:url(/info/include/images/popup_nav_bg.gif) repeat-x; float:left; width:100%; padding-bottom: 3px;">
					<input type="button" class="popupNav eftMenu" id="eftMenuBtn0" onclick="EftOnLoad(0)">
					<img src="/info/include/images/popuo_stroke_gray.gif" style="vertical-align: middle" width="1" height="14">
					<input type="button" class="popupNav eftMenu" id="eftMenuBtn1" onclick="EftOnLoad(1)">
					<img id="eftMenuBtn2Stoke" src="/info/include/images/popuo_stroke_gray.gif" style="vertical-align: middle" width="1" height="14">
					<input type="button" class="popupNav eftMenu" id="eftMenuBtn2" onclick="EftOnLoad(2)">
				</div>
			</div>
			<div id="DivNotice" style="display: none; width: 270px; height: 160px; z-index: 100; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background-color: #FFFFFF; border: 1px solid #A6A6A6">
				<div>
					<h2 id="lblServiceNotice" style="text-align: center"></h2>
				</div>
				<div id="lblServiceContent" style="padding: 10px; height: 60px; text-align: center;"></div>
				<div style="height: 30px; text-align: center; float: left; width: 100%">
					<input type="button" class="btnServiceConfirm btnGray" onclick="UpdateNotification();">
				</div>
			</div>
			<!-- **************** DivRequest BEGIN **************** -->
			<div id="DivRequest" style="float: left;width:100%;background-color: #EEEEEE;">
				<div id="RequestYellowBar" style="background-color:#FCF7B2;display:none;">
					<div style="float:left;width:610px;padding:10px 15px 10px 15px;">
						<span id="lblRequestNoNba"></span>
					</div>
					<div id="DivLinkNow" style="float:left;width:100px;padding:10px 15px 10px 15px;text-align:right;display:none;">
						<input type="button" class="btnLinkNow btnGray" onclick="EftOnLoad(2);" style="right:0;">
					</div>
				</div>
				<div style="float: left; width: 100%; border-top: 2px solid #003B7F; "></div>
				<div id="DivDeposit" style="float: left; width: 100%; display:none">
					<div class="eft_item_l">
						<span id="lblFrom"></span>:
					</div>
					<div style="float: left; position: relative; width: 80%;">
						<div id="DivDepositType" style="margin: 15px 15px 0px 0px;  position: relative; display:none; ">
							<div id="DivDepositTypeNba" class="eft_deposit_selection eft_deposit_selection_selected" onclick="changeDepositType('NBA')"><span id="lbl_link_nba"></span></div>
							<div id="DivDepositTypePps" class="eft_deposit_selection" onclick="changeDepositType('PPS')"><span id="lbl_link_pps"></span></div>
						</div>
						<div id="DivDepositNba" class="eft_deposit_group">
							<div id="div_nba1" class="eft_deposit_nba">
								<input type="radio" id="rd_nba1" value="NBA1" name="trans_from_to" checked="checked" onclick="OnChangeTransFrom(true);" class="eft_rd">
								<label id="lbl_bankname_1" for="rd_nba1" class="eft_rd_label"></label>
								<span class="eft_rd_label">
									<label id="lbl_bank_account_1" for="rd_nba1"></label>
							</span>
						</div>
							<div id="div_nba2" class="eft_deposit_nba">
								<input type="radio" id="rd_nba2" value="NBA2" name="trans_from_to" onclick="OnChangeTransFrom(true);" class="eft_rd">
								<label style="display: block;" id="lbl_bankname_2" for="rd_nba2" class="eft_rd_label"></label>
								<span class="eft_rd_label">
								<label id="lbl_bank_account_2" for="rd_nba2"></label>
							</span>
						</div>
						</div>
						<div id="DivDepositPps" class="eft_deposit_group" style="margin-top:0px">
							<div id="div_pps" class="eft_deposit_nba">
								<input type="radio" id="rd_pps" name="trans_from_to" value="PPS" onclick="OnChangeTransFrom(true)" class="eft_rd">
								<label id="lbl_pps" for="rd_pps" class="eft_rd_label"></label>
								<span class="eft_rd_label" style="margin-bottom: 10px;">
								<label id="lbl_pps2" for="rd_pps"></label>
							</span>
						</div>
					</div>
				</div>
					<div class="eft_separater"></div>
				</div>
				<div style="float: left; width: 100%;">
					<div class="eft_item_l">
						<span id="lblTo"></span>:
					</div>
					<div style="padding: 10px 15px 10px 0px; float: left; width: 70%; position: relative; box-sizing: border-box;">
						<span id="txtAccount"></span>
						<br>
						<span id="txtBettingAcctNo"></span>
					</div>
				</div>
				<div id="sep2" class="eft_separater" style="display:none"></div>
				<div id="DivDepositMethod" style="display:none;float:left;width:100%">
					<div class="eft_item_l">
						<span id="lblMethod"></span>:
					</div>
					<div id="DivDepositMethodListNBA1" class="eft_transaction_method_list">
						<div id="DivDepositMethodFps_nba1" style="display: none;margin:0px 0px 10px 0px">
							<input type="radio" id="rd_fps_nba1" value="FPS" name="method" onclick="OnChangeTransFrom(false);" class="eft_rd">
							<label style="display: block;font-weight: bold;" id="lbl_method_fps_nba1" for="rd_fps_nba1" class="lbl_method_fps eft_rd_label_method"></label>
							<span id="DivDepositMethodFpsText_nba1" class="eft_rd_label_method">
								<label id="lbl_method_fps_2_nba1" class="lbl_method_fps_2" for="rd_fps_nba1"></label>
								<label id="lbl_method_fps_3_nba1" class="lbl_method_fps_3" for="rd_fps_nba1" style="display:none"></label>
							</span>
							<span id="DivDepositMethodFpsMain_nba1" class="eft_rd_label_method" style="display: none;">
								<label id="lbl_method_fps_4_nba1" class="lbl_method_fps_4" for="rd_fps_nba1"></label>
							</span>
						</div>
						<div id="DivDepositMethodEpsco_nba1" style="display: none;margin:0px 0px 10px 0px">
							<input type="radio" id="rd_epsco_nba1" value="EPSCO" name="method" onclick="OnChangeTransFrom(false);" class="eft_rd">
							<label style="display: block;font-weight: bold;" id="lbl_method_epsco_nba1" for="rd_epsco_nba1" class="lbl_method_epsco eft_rd_label_method"></label>
							<span class="eft_rd_label_method">
								<label id="lbl_method_epsco_2_nba1" class="lbl_method_epsco_2" for="rd_epsco_nba1"></label>
							</span>
						</div>
						<div id="DivDepositMethodAutopay_nba1" style="display: none;margin:0px 0px 10px 0px">
							<input type="radio" id="rd_autopay_nba1" value="AUTOPAY" name="method" onclick="OnChangeTransFrom(false);" class="eft_rd">
							<label style="display: block;font-weight: bold;" id="lbl_method_autopay_nba1" for="rd_autopay_nba1" class="lbl_method_autopay eft_rd_label_method"></label>
							<span class="eft_rd_label_method">
								<label id="lbl_method_autopay_2_nba1" class="lbl_method_autopay_2" for="rd_autopay_nba1"></label>
								<label id="lbl_method_autopay_3_nba1" class="lbl_method_autopay_3" for="rd_autopay_nba1" style="display:none"></label>
							</span>
						</div>
						<a id="lnkOtherMeans_nba1" onclick="toggleOtherMeans()" href="javascript:;" style="float:left;margin-bottom:10px;display: none;"></a>
					</div>
					<div id="DivDepositMethodListNBA2" class="eft_transaction_method_list">
						<div id="DivDepositMethodFps_nba2" style="display: none;margin:0px 0px 10px 0px">
							<input type="radio" id="rd_fps_nba2" value="FPS" name="method" onclick="OnChangeTransFrom(false);" class="eft_rd">
							<label style="display: block; font-weight: bold;" id="lbl_method_fps_nba2" for="rd_fps_nba2" class="lbl_method_fps eft_rd_label_method"></label>
							<span id="DivDepositMethodFpsText_nba2" class="eft_rd_label_method">
								<label id="lbl_method_fps_2_nba2" class="lbl_method_fps_2" for="rd_fps_nba2"></label>
								<label id="lbl_method_fps_3_nba2" class="lbl_method_fps_3" for="rd_fps_nba2" style="display:none"></label>
							</span>
							<span id="DivDepositMethodFpsMain_nba2" class="eft_rd_label_method" style="display: none;">
								<label id="lbl_method_fps_4_nba2" class="lbl_method_fps_4" for="rd_fps_nba2"></label>
							</span>
						</div>
						<div id="DivDepositMethodEpsco_nba2" style="display: none;margin:0px 0px 10px 0px">
							<input type="radio" id="rd_epsco_nba2" value="EPSCO" name="method" onclick="OnChangeTransFrom(false);" class="eft_rd">
							<label style="display: block;font-weight: bold;" id="lbl_method_epsco_nba2" for="rd_epsco_nba2" class="lbl_method_epsco eft_rd_label_method"></label>
							<span class="eft_rd_label_method">
								<label id="lbl_method_epsco_2_nba2" class="lbl_method_epsco_2" for="rd_epsco_nba2"></label>
							</span>
						</div>
						<div id="DivDepositMethodAutopay_nba2" style="display: none;margin:0px 0px 10px 0px">
							<input type="radio" id="rd_autopay_nba2" value="AUTOPAY" name="method" onclick="OnChangeTransFrom(false);" class="eft_rd">
							<label style="display: block;font-weight: bold;" id="lbl_method_autopay_nba2" for="rd_autopay_nba2" class="lbl_method_autopay eft_rd_label_method"></label>
							<span class="eft_rd_label_method">
								<label id="lbl_method_autopay_2_nba2" class="lbl_method_autopay_2" for="rd_autopay_nba2"></label>
								<label id="lbl_method_autopay_3_nba2" class="lbl_method_autopay_3" for="rd_autopay_nba2" style="display:none"></label>
							</span>
						</div>
						<a id="lnkOtherMeans_nba2" onclick="toggleOtherMeans()" href="javascript:;"></a>
					</div>
					<div id="DivDepositMethodListPPS" class="eft_transaction_method_list">
						<label style="padding-left:0px; display: block;font-weight: bold;" id="lbl_method_pps" class="lbl_method_pps eft_rd_label_method"></label>
						<span class="eft_rd_label_method; padding-left:0px">
							<label id="lbl_method_pps_2" class="lbl_method_pps_2"></label><br>
							<label id="lbl_method_pps_3" class="lbl_method_pps_3" style="display:none"></label>
						</span>
					</div>

				</div>
				<div id="DivWithdrawal" style="float: left; width: 100%; display:none">
					<div>
						<div class="eft_item_l">
							<span id="lblTo_withdrawal"></span>:
						</div>
						<div style="padding: 15px 15px 15px 0px; float: left; width: 70%; position: relative; box-sizing: border-box">
							<div id="div_nba1_withdrawal" style="padding-bottom: 15px;">
								<label id="lbl_bankname_1_withdrawal" for="rd_nba1" style="vertical-align:middle"></label><br>
								<span>
									<label id="lbl_bank_account_1_withdrawal" for="rd_nba1_withdrawal">
								</label></span>
							</div>
						</div>
					</div>
				</div>
				<div style="float: left; width: 100%; border-top: 3px solid white; background-color: #EEEEEE">
					<div class="eft_item_l">
						<span id="lblTransAmount"></span>($):
					</div>
					<div style="padding: 15px 15px 15px 0px; float: left; width: 70%; position: relative; box-sizing: border-box;">
						<input type="text" class="inputField4" id="trans_amount" name="trans_amount" style="margin-bottom:5px;">
						<br>
						<span style="display: none; padding: 10px 0px 0px 0px" id="lbl_eftnote"></span>
					</div>
				</div>
				<div id="DivPpsLink" style="float: left; width: 100%; border-top: 3px solid white; background-color: #FFF;">
					<div style="padding:10px 15px 10px 15px;">
						<a target="_blank" id="lnk_pps"></a>
					</div>
				</div>
				<div id="DivBanner" style="float: left; background-color: white; width: 100%; text-align: center; display: none">
					<a id="aBanner">
						<img id="imgBanner" style="max-height:85px;max-width:472px; margin-top:10px;"></a>
				</div>
				<!-- DivRequestButton BEGIN -->
				<div class="eft_bottom">
					<div class="eft_bottom_l">
						<input type="button" class="btnClose btnGray" style="margin-left: 15px" onclick="closeAllBetSlipOverlay()">
						<input type="button" class="btnReset btnGray" style="margin-left: 5px" onclick="OnClickEftReset()">
					</div>
					<div class="eft_bottom_r">
						<input id="btnDepositNext" type="button" class="btnNext btnGray" style="margin-right: 15px;" onclick="OnClickEftNext()">
					</div>
				</div>
				<!-- DivRequestButton END -->
			</div>
			<!-- **************** DivNoNba BEGIN **************** -->
			<div id="DivNoNba" style="display:none; float: left; width: 100%; border-top: 2px solid #003B7F; background-color: #EEEEEE;">
				<div class="eft_item">
					<div style="padding:20px">
						<span id="lbl_NoNba"></span>
						<span id="lbl_NoNba_Link"></span>
					</div>
				</div>
				<div class="eft_bottom">
					<div class="eft_bottom_l">
						<input type="button" class="btnClose btnGray" style="margin-left: 15px" onclick="closeAllBetSlipOverlay()">
					</div>
					<div class="eft_bottom_r">&nbsp;
						<input type="button" id="btnNoNbaLink" class="btnLinkNow btnGray" style="margin-right: 15px;" onclick="EftOnLoad(2)">
					</div>
				</div>
			</div>
			<!-- **************** DivConfirmCharge BEGIN **************** -->
			<div id="DivConfirmCharge" style="display:none; float: left; width: 100%; border-top: 2px solid #003B7F; background-color: #EEEEEE;">
				<div style="overflow-x: hidden; background-color: #D8E2EC; width: vm100; padding: 10px 20px 10px 20px;">
					<span id="lbl_ConfirmCharge" style="color: #05378E; font-weight: bold;"></span>
				</div>
				<div class="eft_item">
					<div id="lblConfirmChargeText" style="padding:20px"></div>
				</div>
				<div class="eft_bottom">
					<div class="eft_bottom_l">
						<input type="button" class="btnCancel btnGray" style="margin-left: 15px" onclick="OnClickEftBack2()">
					</div>
					<div class="eft_bottom_r">
						<input type="button" class="btnContinue btnGray" style="margin-right: 15px;" onclick="OnClickEftSubmit();">
					</div>
				</div>
			</div>
			<!-- **************** DivConfirm BEGIN **************** -->
			<div id="DivConfirm" style="float: left; display: none; width: 100%; border-top: 2px solid #003B7F">
				<div style="overflow-x: hidden; background-color: #D8E2EC; width: 100%; padding: 15px 0px 15px 0px;">
					<span id="lbl_preview" style="padding-left:15px; color: #05378E; font-weight: bold;"></span>
					<br>
					<span id="lbl_preview2" style="padding-left:15px"></span>
				</div>
				<div class="eft_item" id="DivConfirmBank">
					<div class="eft_item_l">
						<span id="lblPreviewFrom"></span>:
					</div>
					<div class="eft_item_r">
						<span id="lblPreviewBankName"></span>
						<br>
						<span id="lblPreviewBankAcc"></span>
					</div>
				</div>
				<div class="eft_item" id="DivConfirmBet">
					<div class="eft_item_l">
						<span id="lblPreviewTo"></span>:
					</div>
					<div class="eft_item_r">
						<span id="lblPreviewBet"></span>
						<br>
						<span id="lblPreviewBetAcc"></span>
					</div>
				</div>
				<div class="eft_item">
					<div class="eft_item_l">
						<span id="lblPreviewAmount"></span>:
					</div>
					<div class="eft_item_r">
						$<span id="lblPreviewAmountValue"></span>
					</div>
				</div>
				<div class="eft_item" id="DivPreviewTransType">
					<div class="eft_item_l">
						<span id="lblPreviewTransType"></span>:
					</div>
					<div class="eft_item_r">
						<span id="lblPreviewTransTypeValue"></span>
					</div>
				</div>
				<div id="DivPreviewCharge" class="eft_item" style="display: none">
					<div class="eft_item_l">
						<span id="lblPreviewCharge"></span>:
					</div>
					<div class="eft_item_r">
						$<span id="lblPreviewChargeValue"></span>
					</div>
				</div>
				<div id="DivBankPin" style="display: none; border-top: solid 3px white; padding-top: 5px;background-color: #FFF5B0;">
					<div id="DivPreviewUseLabel" style="padding:0px 0px 10px 15px"><span id="lblPreviewTransTypeEpsco"></span>:</div>
					<div style="padding:0px 0px 0px 15px">
						<div id="DivPreviewUseEpsco">
							<input type="radio" id="rd_eft_epsco" value="EPSCO" name="preview_eft_selection" checked="checked" style="vertical-align:middle" onclick="OnChangePreviewTrans()">
							<label style="vertical-align:middle" id="lbl_preview_eft_epsco" for="rd_eft_epsco"></label><br>
						</div>
						<!-- DivBankPin BEGIN -->
						<table id="BankPin" style="width:715px; padding-left:15px;" cellspacing="0" cellpadding="0" border="0">
							<tbody><tr>
								<td class="yellowBarEft" style="padding: 3px 10px 3px 15px;">
									<table cellspacing="0" cellpadding="0" border="0">
										<tbody><tr>
											<td colspan="3" class="content" style="padding: 0px 0px 0px 0px;">
												<span id="txtEFTNotice"></span>
											</td>
										</tr>
										<tr>
											<td colspan="3" style="height:5px">
											</td>
										</tr>
										<tr>
											<td class="content" style="padding: 0px 0px 0px 0px;" width="">
												<span id="txtServicePin"></span>:
											</td>
											<td class="content" style="padding: 0px 0px 0px 5px;" width="317px">
												<input type="password" maxlength="8" id="pin" name="pin" class="inputField4" readonly="" style="width:100%">
											</td>
											<td class="content" style="padding: 0px 0px 0px 10px;">
												<input type="button" style="font-size: 20px; font-weight: bold; line-height:21px;" class="btnGray" id="btnDeletePin" value=" ← " onclick="Backspace()">
											</td>
										</tr>
										<tr>
											<td colspan="3">
												<img src="/info/include/images/spacer.gif" height="5px">
											</td>
										</tr>
										<tr>
											<td class="content" style="padding: 0px 0px 0px 0px;">&nbsp;</td>
											<td class="content" style="padding: 0px 0px 0px 5px;">
												<table cellspacing="0" cellpadding="0" border="0">
													<tbody><tr>
														<td style="padding: 0px 3px 0px 0px;" width="21">
															<img id="pinBtn0" onmousedown="inputPinDown(0)" onmouseout="inputPinOut(0)" onmouseup="inputPin(0)">
														</td>
														<td style="padding: 0px 3px 0px 0px;" width="21">
															<img id="pinBtn1" onmousedown="inputPinDown(1)" onmouseout="inputPinOut(1)" onmouseup="inputPin(1)">
														</td>
														<td style="padding: 0px 3px 0px 0px;" width="21">
															<img id="pinBtn2" onmousedown="inputPinDown(2)" onmouseout="inputPinOut(2)" onmouseup="inputPin(2)">
														</td>
														<td style="padding: 0px 3px 0px 0px;" width="21">
															<img id="pinBtn3" onmousedown="inputPinDown(3)" onmouseout="inputPinOut(3)" onmouseup="inputPin(3)">
														</td>
														<td style="padding: 0px 3px 0px 0px;" width="21">
															<img id="pinBtn4" onmousedown="inputPinDown(4)" onmouseout="inputPinOut(4)" onmouseup="inputPin(4)">
														</td>
														<td style="padding: 0px 3px 0px 0px;" width="21">
															<img id="pinBtn5" onmousedown="inputPinDown(5)" onmouseout="inputPinOut(5)" onmouseup="inputPin(5)">
														</td>
														<td style="padding: 0px 3px 0px 0px;" width="21">
															<img id="pinBtn6" onmousedown="inputPinDown(6)" onmouseout="inputPinOut(6)" onmouseup="inputPin(6)">
														</td>
														<td style="padding: 0px 3px 0px 0px;" width="21">
															<img id="pinBtn7" onmousedown="inputPinDown(7)" onmouseout="inputPinOut(7)" onmouseup="inputPin(7)">
														</td>
														<td style="padding: 0px 3px 0px 0px;" width="21">
															<img id="pinBtn8" onmousedown="inputPinDown(8)" onmouseout="inputPinOut(8)" onmouseup="inputPin(8)">
														</td>
														<td style="padding: 0px 0px 0px 0px;" width="21">
															<img id="pinBtn9" onmousedown="inputPinDown(9)" onmouseout="inputPinOut(9)" onmouseup="inputPin(9)">
														</td>
													</tr>
												</tbody></table>
											</td>
											<td class="content" style="padding: 0px 0px 0px 10px;">
												<input type="button" class="btnReinput btnGray" id="btnReinput" onclick="clrPin()">
											</td>
										</tr>
									</tbody></table>
								</td>
							</tr>
						</tbody></table>
						<!-- DivBankPin END-->
						<div id="DivPreviewUseAutopay" style="padding:5px 0px 10px 0px">
							<input type="radio" id="rd_eft_autopay" value="AUTOPAY" name="preview_eft_selection" style="vertical-align:middle" onclick="OnChangePreviewTrans()">
							<label style="vertical-align:middle" id="lbl_preview_eft_autopay" for="rd_eft_autopay"></label>
							<div style="padding-left:29px"><label id="lbl_preview_eft_autopay_note"></label></div>
						</div>
					</div>
				</div>
				<div id="DivPreviewReminder" class="eft_item" style="display:none;background-color:#FFF;padding:10px 20px 5px 15px;">
					<span id="lblPreviewNoPin"></span>
				</div>
				<div class="eft_bottom">
					<div class="eft_bottom_l">
						<input type="button" class="btnBack btnGray" style="margin-left: 15px" onclick="OnClickEftBack()">
					</div>
					<div class="eft_bottom_r">
						<input id="btnPreviewSubmit" type="button" class="btnConfirm btnGray" style="margin-right: 15px;" onclick="OnClickEftSubmit();">
						<input id="btnPreviewContinue" type="button" class="btnConfirm btnGray" style="margin-right: 15px;display:none;" onclick="OnClickDisplayCharge();">
					</div>
				</div>
			</div>

			<!-- **************** DivProgress BEGIN **************** -->
			<div id="DivProgress" style="float: left; width: 100%; border-top: 2px solid #003B7F; display: none">
				<div style="height: 410px; padding: 10px; text-align: center;">
					<img id="imgProgress" style="width: 50px; margin-top:170px">
					<br>
					<span id="lblProgress" style="font-weight: bold;"></span>
				</div>
			</div>
			<div id="DivOtpProgress" style="float: left; width: 100%; border-top: 2px solid #003B7F; display: none">
				<div style="height: 410px; padding: 10px; text-align: center;">
					<img id="imgOtpProgress" style="width: 50px; margin-top:170px">
				</div>
			</div>

			<div id="DivConfirmAutopay" style="float: left; width: 100%; border-top: 2px solid #003B7F; display: none">
				<div style="overflow-x: hidden; background-color: #D8E2EC; width: vm100; padding:10px 20px 10px 20px;">
					<span id="lbl_ConfirmAutopay" style="color: #05378E; font-weight: bold;">asdfsadf</span>
				</div>
				<div style="height: 280px">
					<div style="padding: 20px; background-color: #EEEEEE;">
						<span class="content" id="txtConfirmAutopayMsg"></span>
					</div>
				</div>
				<div class="eft_bottom">
					<div class="eft_bottom_l">
						<input type="button" id="btnConfirmAutopayBack" class="btnCancel btnGray" style="margin-left: 15px" onclick="OnClickEftBack3()">
					</div>
					<div class="eft_bottom_r">
						<input type="button" id="btnConfirmAutopay" class="btnContinue btnGray" style="margin-right: 15px" onclick="OnClickConfirmAutopay()">
					</div>
				</div>
			</div>
			<!-- **************** DivReply START **************** -->
			<div id="DivReply" style="display: none; float: left; width: 100%; border-top: 2px solid #003B7F;">
				<div style="padding: 10px; text-align: center;">
					<img id="imgResult" style="width: 35px; margin-bottom:5px;">
					<br>
					<span id="lblResult" style="font-weight: bold;"></span>
				</div>
				<div id="DivReplyResult" style="display: none">
					<div style="overflow-x: hidden; background-color: #D8E2EC; width: 100%; padding: 5px 0px 5px 0px;">
						<span id="lblSummary" style="padding-left:15px; color: #05378E; font-weight: bold;">Online Deposit Summary</span>
					</div>
					<div class="eft_item" id="DivReplyBank">
						<div class="eft_item_l">
							<span id="lblResultFrom"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblResultBankName"></span>
							<br>
							<span id="lblResultBankAcc"></span>
						</div>
					</div>
					<div class="eft_item" id="DivReplyBet">
						<div class="eft_item_l">
							<span id="lblResultTo"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblResultBet"></span>
							<br>
							<span id="lblResultBetAcc"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblResultTransType"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblResultTransTypeValue"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblResultAmount"></span>:
						</div>
						<div class="eft_item_r">
							$<span id="lblResultAmountValue"></span>
						</div>
					</div>
					<div id="DivResultFee" class="eft_item" style="display: none;">
						<div class="eft_item_l">
							<span id="lblResultFee"></span>:
						</div>
						<div class="eft_item_r">
							$<span id="lblResultFeeValue"></span>
						</div>
					</div>
					<div id="DivRejectReason" class="eft_item" style="display: none;">
						<div class="eft_item_l">
							<span id="lblResultReject"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblResultRejectReason"></span>
						</div>
					</div>
					<div id="DivReference" class="eft_item" style="display:none">
						<div class="eft_item_l">
							<span id="lblResultRef"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblResultRefNo">---</span>
						</div>
					</div>
					<div id="DivBalance" class="eft_item" style="display: none; background-color: #FFF;">
						<div class="eft_item_l">
							<span id="lblResultBetAccBal"></span>:
						</div>
						<div class="eft_item_r">
							$<span id="lblResultBetAccBalVal"></span>
						</div>
					</div>
					<div id="DivReminder" class="eft_item" style="display: none; background-color: #FFF; padding: 10px 20px 5px 15px;">
						<span id="lblResultReminder"></span>
					</div>
					<div class="eft_bottom">
						<div class="eft_bottom_l">&nbsp;
						</div>
						<div class="eft_bottom_r">
							<input type="button" class="btnDone btnGray" style="margin-right: 15px" onclick="EftCompleted()">
						</div>
					</div>
				</div>
			</div>
			<!-- **************** DivPPSRedirect START **************** -->
			<div id="DivPPSRedirect" style="float: left; width: 100%; border-top: 2px solid #003B7F; display: none">
				<div style="height: 280px">
					<div style="padding: 60px 100px 7px 100px">
						<span class="content" id="txtRedirectMsg"></span>
					</div>
				</div>
				<div class="eft_bottom">
					<div class="eft_bottom_l">
						<input type="button" class="btnBack btnGray" style="margin-left: 15px" onclick="OnClickEftBack2();">
					</div>
					<div class="eft_bottom_r">
						<input type="button" class="btnRedirect btnGray" style="margin-right: 15px" onclick="OnClickPPSRedirect()">
					</div>
				</div>
			</div>
			<!-- **************** DivLink **************** -->
			<div id="DivLink" style="float: left; width: 100%; border-top: 2px solid #003B7F; display: none">
				<div style="float: left; width: 100%; background-color: #EEEEEE;">
					<div style="padding: 10px">
						<span class="content" id="lblLinkMsg"></span>
					</div>
					<div id="DivLinkNba1Fps" style="width:325px; height:215px; margin:0px 5px 0px 10px; padding:10px; background-color:white; float:left; border-radius:5px;">
						<div><span id="lblLinkingNba1"></span></div>
						<hr>
						<div id="DivLinkNba1Ph" style="padding:5px 10px">
							<div style="padding-bottom:5px"><span id="lblLinkingDepWit" style="color:#0096d6"></span>
							</div>
							<div id="DivLinkNoNba1" style="display:none">
								<span id="lblLinkNoNba1"></span>
							</div>
							<div id="DivLinkNba1" style="display:none">
								<div style="height:50px">
									<div class="biggerFont"><span id="lblLinkingBank1"></span></div>
									<div class="biggerFont" style="padding-bottom:5px"><span id="lblLinkingBankAcc1">
									</span></div>
								</div>
								<div id="DivLinkNba1NotSupport" style="display:none;padding:10px 0px 15px 0px;"><span id="lblLinkNba1NotSupport"></span></div>
								<div id="DivLinkNba1Support" style="margin-top:5px">
									<div id="DivLinkFps1" class="eft_link_fps biggerFont" style="display:none; margin-bottom:5px; background-color:#EEEEEE; border-radius: 5px;  height:50px;">
										<div style="float:left; width:235px; padding: 8px 10px 9px 10px;">
											<strong><span id="lblLinkFpsMethod"></span></strong><br>
											<span id="lblLinkFpsStatus"></span>
										</div>
										<div style="float:left; padding: 13px 10px 0px 10px; "><img id="ImgLinkNba1Fps">
										</div>
									</div>
									<div id="DivLinkNba1Pending" class="eft_link_pending" style="display: none;">
										<span id="lblLinkNba1Pending"></span>
									</div>
									<div id="DivLinkNba1Rejected" class="eft_link_rejected" style="display: none;" onclick="ResetLinkBank('NBA1')">
										<div style="float: right;margin: 0px 0px 10px 10px;">X</div>
										<span id="lblLinkNba1Rejected"></span>
									</div>
									<div id="DivLinkNba1Epsco" class="biggerFont" style="margin-bottom:5px; background-color:#EEEEEE; border-radius:5px; height:50px;">
										<div style="float:left; width:235px; padding: 8px 10px 9px 10px;">
											<strong><span id="lblLinkEpscoMethod"></span></strong><br>
											<span id="lblLinkEpscoStatus"></span>
										</div>
										<div style="float:left; padding: 13px 10px 0px 10px; "><img id="ImgLinkNba1Epsco"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="DivLinkNba2Fps" style="width:325px; height:215px; margin:0px 10px 0px 5px; padding:10px; background-color:white; float:left; border-radius:5px;">
						<div><span id="lblLinkingNba2"></span></div>
						<hr>
						<div id="DivLinkNba2Ph" style="padding:5px 10px">
							<div style="padding-bottom:5px"><span id="lblLinkingDep" style="color:#0096d6"></span></div>
							<div id="DivLinkNoNba2" style="display:none">
								<span id="lblLinkNoNba2"></span>
							</div>
							<div id="DivLinkNba2" style="display:none">
								<div style="height:50px">
									<div class="biggerFont"><span id="lblLinkingBank2"></span></div>
									<div class="biggerFont" style="margin-bottom:5px;"><span id="lblLinkingBankAcc2"></span></div>
								</div>
								<div id="DivLinkNba2NotSupport" style="display:none;padding:10px 0px 15px 0px;"><span id="lblLinkNba2NotSupport"></span></div>
								<div id="DivLinkNba2Support" style="margin-top:5px">
									<div id="DivLinkFps2" class="eft_link_fps biggerFont" style="display:none;margin-bottom:5px; background-color:#EEEEEE; border-radius:5px; height:50px;">
										<div style="float:left; width:235px; padding: 8px 10px 9px 10px;">
											<strong><span id="lblLinkFpsMethod2"></span></strong><br>
											<span id="lblLinkFpsStatus2"></span>
										</div>
										<div style="float:left; padding: 13px 10px 0px 10px;"><img id="ImgLinkNba2Fps">
										</div>
									</div>
									<div id="DivLinkNba2Pending" class="eft_link_pending" style="display: none;">
										<span id="lblLinkNba2Pending"></span>
									</div>
									<div id="DivLinkNba2Rejected" class="eft_link_rejected" style="display: none;" onclick="ResetLinkBank('NBA2')">
										<div style="float: right;margin: 0px 0px 10px 10px;">X</div>
										<span id="lblLinkNba2Rejected"></span>
									</div>
									<div id="DivLinkNba2Epsco" class="biggerFont" style="margin-bottom:5px; background-color:#EEEEEE; border-radius:5px; height:50px;">
										<div style="float:left; width:235px; padding: 8px 10px 9px 10px;">
											<strong><span id="lblLinkEpscoMethod2"></span></strong><br>
											<span id="lblLinkEpscoStatus2"></span>
										</div>
										<div style="float:left; padding: 13px 10px 0px 10px;"><img id="ImgLinkNba2Epsco"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div style="clear:both; padding:10px;"><span id="lblLinkMsg2"></span></div>
				</div>
				<div id="DivBannerLink" style="float: left; background-color: white; width: 100%; text-align: center; margin:10px 0px 10px 0px; display: none">
					<a id="aBannerLink">
						<img id="imgBannerLink" style="max-height:85px;max-width:472px;"></a>
				</div>
				<div class="eft_bottom">
					<div class="eft_bottom_l">
						<input type="button" class="btnClose btnGray" style="margin-left: 15px" onclick="closeAllBetSlipOverlay()">
					</div>
					<div class="eft_bottom_r">
						<input type="button" id="btnLinkNext" disabled="disabled" class="btnNext btnGray" style="margin-right: 15px" onclick="OnClickLinkNext()">
					</div>
				</div>
			</div>
			<div id="DivLinkSummary" style="display: none; float: left; width: 100%; border-top: 2px solid #003B7F;">
				<div style="padding: 10px; text-align: left;">
					<span id="lblLinkSummaryResult"></span>
				</div>
				<div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblLinkSummaryName"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkSummaryResultName"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblLinkSummaryBankName"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkSummaryResultBankName"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblLinkSummaryBankAc"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkSummaryResultBankAc"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblLinkSummaryPhone"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkSummaryResultPhone"></span>
						</div>
					</div>
					<div class="eft_item" id="DivLinkSummaryReject" style="display:none">
						<div class="eft_item_l">
							<span id="lblLinkSummaryReject"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkSummaryResultReject"></span>
						</div>
					</div>
					<div class="eft_item" style="background-color: #FFF; padding: 10px 20px 5px 15px;">
						<span id="lblLinkSummaryResultReminder"></span>
					</div>
					<div class="eft_bottom">
						<div class="eft_bottom_l">&nbsp;
						</div>
						<div class="eft_bottom_r">
							<input type="button" class="btnDone btnGray" style="margin-right: 15px" onclick="EftOnLoad(2)">
						</div>
					</div>
				</div>
			</div>
			<div id="DivLinkTandC" style="float: left; width: 100%; border-top: 2px solid #003B7F; display: none">
				<div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblLinkFullname"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkFullnameValue"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblLinkBankname"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkBanknameValue"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblLinkBankac"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkBankacValue"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblLinkMobile"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkMobileValue"></span>
						</div>
					</div>
				</div>
				<div style="margin-top:5px;padding:10px;" class="eft_item">
					<div id="lblLinkTandC" style="height:241px;overflow-y:auto; padding:10px 10px 20px 10px; box-shadow: 0 0 0pt 1px grey; background-color:white;">
						<strong><span id="lblTandC"></span></strong>
						<hr>
						<span id="lblTandCMsg"></span>
					</div>
					<div style="margin-top:5px"><input type="checkbox" id="chkTandC" onchange="OnClickLinkTandCCheckbox()"><label for="chkTandC" id="lblLinkTandCCheck"></label>
					</div>
				</div>
				<div class="eft_bottom">
					<div class="eft_bottom_l">
						<input type="button" class="btnBack btnGray" style="margin-left: 15px" onclick="OnClickLinkBack()">
					</div>
					<div class="eft_bottom_r">
						<input type="button" id="btnLinkTandC" class="btnNext btnGray" style="margin-right: 15px" onclick="OnClickLinkTandC()">
					</div>
				</div>
			</div>
			<div id="DivLinkOtpFailed" style="float: left; width: 100%; border-top: 2px solid #003B7F; display: none">
				<div style="padding: 10px; text-align: center;">
					<img id="imgOtpFailed" style="width: 35px; margin-bottom:5px;">
					<br>
					<span id="lblOtpFailed" style="font-weight: bold;"></span>
				</div>
				<div style="height:20px;margin-bottom:2px;background-color: #D8E2EE"></div>
				<div style="background-color:#EFF0F1;padding:20px;">
					<span id="lblOtpFailedMsg"></span>
				</div>
				<div class="eft_bottom">
					<div class="eft_bottom_l">
						&nbsp;
					</div>
					<div class="eft_bottom_r">
						<input type="button" class="btnClose btnGray" style="margin-right: 15px" onclick="closeAllBetSlipOverlay()">
					</div>
				</div>
			</div>
			<div id="DivLinkOtpValidate" style="float: left; width: 100%; border-top: 2px solid #003B7F; background-color: #EEEEEE; display: none; height:442px;">
				<div id="divOtpResent" style="width: 100%; background-color: #1B96D4; display: none; padding: 5px 0px 5px 0px; text-align: center; color: white; float: left;">
					<span id="lblOtpResent"></span>
				</div>
				<div id="divOtpInvalid" style="width: 100%; background-color: #FAD3D8; display: none; padding: 5px 0px 5px 0px; text-align: center; color: #D42027; float: left;">
					<span id="lblOtpInvalid"></span>
				</div>
				<div style="margin:50px auto 50px auto; width:400px; padding:15px;background-color: #FFFFFF;">
					<div class="biggerFont" style="text-align: center; padding:5px;"><span id="lblOtpsent"></span></div>
					<div style="text-align: center; padding:5px; color: #9c9999"><span id="lblOtpsentIncorrect"></span>
					</div>
					<div class="biggerFont" style="text-align: center; padding:15px 5px 10px 5px"><span id="lblOtpInput"></span></div>
					<div style="text-align: center">
						<input id="otpInput0" class="otpCode" maxlength="1" inputmode="numeric" pattern="[0-9]*">
						<input id="otpInput1" class="otpCode" maxlength="1" inputmode="numeric" pattern="[0-9]*">
						<input id="otpInput2" class="otpCode" maxlength="1" inputmode="numeric" pattern="[0-9]*">
						<input id="otpInput3" class="otpCode" maxlength="1" inputmode="numeric" pattern="[0-9]*">
						<input id="otpInput4" class="otpCode" maxlength="1" inputmode="numeric" pattern="[0-9]*">
						<input id="otpInput5" class="otpCode" maxlength="1" inputmode="numeric" pattern="[0-9]*">
					</div>
					<div class="biggerFont" style="text-align: center; padding:30px 0px 0px 5px;"><span id="lblNoOtp"></span></div>
					<div style="text-align: center; padding:5px;"><a class="urlDisabled" id="lnkOtpResend"></a>
						<span id="bracketLeft">(</span><span id="otpTimer"></span><span id="bracketRight">)</span></div>
				</div>
				<div class="eft_bottom">
					<div class="eft_bottom_l">
						<input type="button" class="btnBack btnGray" style="margin-left: 15px" onclick="OnClickLinkBack()">
					</div>
					<div class="eft_bottom_r">
						<input type="button" id="btnOtpValidate" disabled="disabled" class="btnNext btnGray" style="margin-right: 15px" onclick="OtpCodeConfirm()">
					</div>
				</div>
			</div>
			<div id="DivLinkReply" style="display: none; float: left; width: 100%; border-top: 2px solid #003B7F;">
				<div style="padding: 10px; text-align: center;">
					<img id="imgLinkResult" style="width: 35px; margin-bottom:5px;">
					<br>
					<span id="lblLinkResult" style="font-weight: bold;"></span>
				</div>
				<div style="padding:5px;"><span id="lblLinkReplyMsg"></span></div>
				<div id="DivLinkReplyResult" style="display: none">
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblLinkReplyName"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkResultName"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblLinkReplyBankName"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkResultBankName"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblLinkReplyBankAc"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkResultBankAc"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lblLinkReplyPhone"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkResultPhone"></span>
						</div>
					</div>
					<div class="eft_item" id="DivLinkDefaultDeposit" style="display:none;">
						<div class="eft_item_l">
							<span id="lblLinkReplyDefaultDeposit"></span>:
						</div>
						<div class="eft_item_r">
							$<span id="lblLinkResultDefaultDeposit"></span>
						</div>
					</div>
					<div id="DivLinkRejectReason" class="eft_item" style="display: none;">
						<div class="eft_item_l">
							<span id="lblLinkReplyReject"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lblLinkResultReject"></span>
						</div>
					</div>
					<div id="DivLinkReminder" class="eft_item" style="display: none; background-color: #FFF; padding: 10px 20px 5px 15px;">
						<span id="lblLinkResultReminder"></span>
					</div>
					<div class="eft_bottom">
						<div class="eft_bottom_l">&nbsp;
						</div>
						<div class="eft_bottom_r">
							<input type="button" class="btnDone btnGray" style="margin-right: 15px" onclick="EftOnLoad(2)">
						</div>
					</div>
				</div>
				<div id="DivLinkContent" style="display:none; background-color: #EEEEEE;">
					<div style="padding:10px;">
						<span id="lblLinkContent"></span>
					</div>
					<div class="eft_bottom">
						<div class="eft_bottom_l">&nbsp;
						</div>
						<div class="eft_bottom_r">
							<input type="button" class="btnDone btnGray" style="margin-right: 15px" onclick="EftOnLoad(0)">
						</div>
					</div>
				</div>
			</div>
			<div id="DivFpsBankList" style="float: left; width: 100%; border-top: 2px solid #003B7F; display: none">
				<div class="eft_item">
					<div style="padding:10px">
						<span id="lbl_banklist_title"></span>
					</div>
				</div>
				<div id="DivFpsTheList" style="padding:0px 10px 10px 10px; overflow-y:auto;">
					<table id="dgBanklist" style="width:100%; border-spacing: 0px;">
						<tbody><tr>
							<td id="lblBankCode" class="eft_banklist_header" style="text-align: center;"></td>
							<td id="lblBankName" class="eft_banklist_header"></td>
						</tr>
					</tbody></table>
				</div>
				<div class="eft_bottom">
					<div class="eft_bottom_l">
						<input type="button" class="btnBack btnGray" style="margin-left: 15px" onclick="BackFpsBankList()">
					</div>
					<div class="eft_bottom_r">&nbsp;
					</div>
				</div>
			</div>
			<div id="DivPpsResult" style="float: left; width: 100%; border-top: 2px solid #003B7F; display: none">
				<div style="padding: 10px; text-align: center;">
					<img id="imgPpsResult" style="width: 40px;">
					<br>
					<span id="lblPpsResult" style="font-weight: bold;"></span>
				</div>
				<div id="DivReplyPpsResult">
					<div style="overflow-x: hidden; background-color: #D8E2EC; width: 100%; padding: 5px 0px 5px 0px;">
						<span id="lblPpsResultSummary" style="padding-left: 15px; color: #05378E; font-weight: bold;">Online Deposit Summary</span>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lbl_ppsResult_txn_date"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lbl_ppsResult_txn_date_text"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lbl_ppsResult_ref_no"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lbl_ppsResult_ref_no_text">
						</span></div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lbl_ppsResult_payment_no"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lbl_ppsResult_payment_no_text"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lbl_ppsResult_trans_amount"></span>:
						</div>
						<div class="eft_item_r">
							$<span id="lbl_ppsResult_trans_amount_text"></span>
						</div>
					</div>
					<div class="eft_item">
						<div class="eft_item_l">
							<span id="lbl_ppsResult_result_msg"></span>:
						</div>
						<div class="eft_item_r">
							<span id="lbl_ppsResult_result_msg_text"></span>
						</div>
					</div>
				</div>
				<div class="eft_bottom">
					<div class="eft_bottom_l">&nbsp;
					</div>
					<div class="eft_bottom_r">
						<input type="button" class="btnDone btnGray" style="margin-right: 15px" onclick="EftOnLoad(0)">
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="divLogout" onkeydown="return onKeyDown(event, true, 'logout');" tabindex="-1">
	<div style="background-color:#FFFFFF">
		<iframe id="logoutFrame" border="0" marginwidth="0" marginheight="0" src="" scrolling="no" style="width:758px; height:358px;" frameborder="0"></iframe>
	</div>
	<div id="logoutCloseDiv">
		<div id="logoutClose" onclick="OnClickCloseLogoutPopup();"></div>
	</div>
</div>

<script type="text/javascript" src="/common/wa_tracker.js"></script>
<script type="text/javascript" src="/info/include/wa/wa_tracker_config.js"></script>

<div id="div_engine" style="position:absolute"></div>
<iframe id="tFrame" style="display: none" src="/reload.aspx?a=20221109"></iframe>


`;
