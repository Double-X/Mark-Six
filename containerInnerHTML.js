const CONTAINER_INNER_HTML = `
<script type="text/javascript">
            var dPageDone = $.Deferred();
            $.when(
                $.getScript("/marksix/script/m6str.js?lang=ch&CV=L4.02R1_CRQ129532"),
                getScriptNotCache("/marksix/script/bs_common2.js?CV=L4.02R1_CRQ129532"),
                getScriptNotCache("/marksix/script/randomGen.js?CV=L4.02R1_CRQ129532"),
                getScriptNotCache("/marksix/script/m6betfunc2.js?CV=L4.02R1_CRQ129532"),
                getScriptNotCache("/marksix/script/m6results.js?CV=L4.02R1_CRQ129532"),
                getScriptNotCache("/marksix/script/PUB2.js?CV=L4.02R1_CRQ129532"),
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
                    $.getScript("/info/include/js/jquery.simplyscroll.min.js?CV=L4.02R1_CRQ129532"),
                    $.getScript("/info/include/js/jquery.cycle2.js?CV=L4.02R1_CRQ129532"),
                    $.getScript("/bannerad/js/system/sdceo_config.js?CV=L4.02R1_CRQ129532"),
                    $.getScript("/bannerad/js/system/sdceo_core.js?CV=L4.02R1_CRQ129532"),
                    $.getScript("/info/include/js/banner.js?CV=L4.02R1_CRQ129532"),
                    $.getScript("/info/include/js/banner_top.js?CV=L4.02R1_CRQ129532"),
                    $.getScript("/info/include/js/banner_bottom.js?CV=L4.02R1_CRQ129532"),
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
	var next_draw = "22/095";
	var next_draw_date = "22/11/2022";
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
        <div class="resultHeaderCell3"><a href="javascript:PrintResultSinglePage();"><img src="/info/include/images/icon_print.gif?CV=L4.02R1_CRQ129532" title="列印資料" border="0"></a></div>
      </div>
    </div>
    <div id="drawDetails1"><div class="resultSubHeaderRow"><div class="resultDetailsCell1">攪珠期數 : 15/152</div><div class="resultDetailsCell2">攪珠日期 : 31/12/2015(星期四)</div><div class="resultDetailsCell3">總投注額 : $62,348,733</div></div></div>
    <div id="drawDetails2"><div class="resultSubHeaderRow"><div class="resultDetailsCell4">攪珠結果 : </div><div class="resultDetailsCell5"><span class="resultDetailsInner"><img src="/marksix/info/images/icon/no_02.gif?CV=L4.02R1"></span><span class="resultDetailsInner"><img src="/marksix/info/images/icon/no_11.gif?CV=L4.02R1"></span><span class="resultDetailsInner"><img src="/marksix/info/images/icon/no_12.gif?CV=L4.02R1"></span><span class="resultDetailsInner"><img src="/marksix/info/images/icon/no_22.gif?CV=L4.02R1"></span><span class="resultDetailsInner"><img src="/marksix/info/images/icon/no_24.gif?CV=L4.02R1"></span><span class="resultDetailsInner"><img src="/marksix/info/images/icon/no_25.gif?CV=L4.02R1"></span><span class="resultDetailsInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultDetailsInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_03.gif?CV=L4.02R1"></span></div></div></div>
    <div id="resultPrizeTable"><div class="resultPrizeRow"><div class="resultPrizeCell"><div class="resultPrizeInnerTable"><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableContentHead"><strong>獎項</strong></div><div class="resultPrizeInnerCellRight tableContentHead"><strong>每注獎金</strong></div><div class="resultPrizeInnerCellRight tableContentHead"><strong>中獎注數</strong></div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult2">頭 獎</div><div class="resultPrizeInnerCellRight tableResult2"><span class="orangeNum2">-</span></div><div class="resultPrizeInnerCellRight tableResult2">-</div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult1">二 獎</div><div class="resultPrizeInnerCellRight tableResult1"><span class="orangeNum1">$282,810</span></div><div class="resultPrizeInnerCellRight tableResult1">6.5</div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult2">三 獎</div><div class="resultPrizeInnerCellRight tableResult2"><span class="orangeNum1">$19,560</span></div><div class="resultPrizeInnerCellRight tableResult2">250.5</div></div></div></div><div style="padding:0px 0px 0px 10px;" class="resultPrizeCell"><div class="resultPrizeInnerTable"><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableContentHead"><strong>獎項</strong></div><div class="resultPrizeInnerCellRight tableContentHead"><strong>每注獎金</strong></div><div class="resultPrizeInnerCellRight tableContentHead"><strong>中獎注數</strong></div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult2">四 獎</div><div class="resultPrizeInnerCellRight tableResult2"><span class="orangeNum1">$9,600</span></div><div class="resultPrizeInnerCellRight tableResult2">616.0</div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult1">五 獎</div><div class="resultPrizeInnerCellRight tableResult1"><span class="orangeNum1">$640</span></div><div class="resultPrizeInnerCellRight tableResult1">9,605.8</div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult2">六 獎</div><div class="resultPrizeInnerCellRight tableResult2"><span class="orangeNum1">$320</span></div><div class="resultPrizeInnerCellRight tableResult2">11,912.5</div></div><div class="resultPrizeInnerRow"><div class="resultPrizeInnerCell tableResult1">七 獎</div><div class="resultPrizeInnerCellRight tableResult1"><span class="orangeNum1">$40</span></div><div class="resultPrizeInnerCellRight tableResult1">132,935.0</div></div></div></div></div></div>
    <div class="resultFooter">若獲中之獎金為每十元一注超過五百萬元，所有中獎彩票持票人士或經由電話投注服務的中獎人士，包括使用智財咭、1886電話投注自動服務系統等，必須於指定時間致電本會1817登記。﹝使用互動投注服務途徑或香港賽馬會電子錢包除外﹞<br><br>互動投注服務包括網上投注服務「投注區」、馬會投注三合一及 Racing Touch流動應用程式。</div>
</div>
<div id="drawResultsAll" class="divToPrint" style="display: none;">
    <div class="resultHeaderTable">
      <div class="resultHeaderRow">
        <div class="resultHeaderCell1">過去攪珠結果</div>
        <div class="resultHeaderCell2"><a href="javascript:PrintResultPage();" style="color:#FFFFFF">列印資料</a></div>
        <div class="resultHeaderCell3"><a href="javascript:PrintResultPage();"><img src="/info/include/images/icon_print.gif?CV=L4.02R1_CRQ129532" title="列印資料" border="0"></a></div>
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
    <div id="resultMainTable"><div class="resultMainTable"><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(0);" title="攪珠結果及派彩">15/152&nbsp;</a></div><div class="resultMainCell2 tableResult2">31/12/2015</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_02_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_11_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_12_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_22_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_24_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_25_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_03_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(1);" title="攪珠結果及派彩">15/151&nbsp;</a></div><div class="resultMainCell2 tableResult1">29/12/2015</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_03_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_05_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_20_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_30_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_33_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_38_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_28_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(2);" title="攪珠結果及派彩">15/150&nbsp;</a></div><div class="resultMainCell2 tableResult2">26/12/2015</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_01_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_08_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_33_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_37_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_42_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_47_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_07_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(3);" title="攪珠結果及派彩">15/149&nbsp;</a></div><div class="resultMainCell2 tableResult1">24/12/2015</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_12_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_18_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_20_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_28_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_33_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_47_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_25_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(4);" title="攪珠結果及派彩">15/148&nbsp;</a></div><div class="resultMainCell2 tableResult2">22/12/2015</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_11_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_28_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_36_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_38_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_44_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_48_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_26_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(5);" title="攪珠結果及派彩">15/147&nbsp;</a></div><div class="resultMainCell2 tableResult1">20/12/2015</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_06_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_11_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_16_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_20_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_43_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_45_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_21_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(6);" title="攪珠結果及派彩">15/146&nbsp;</a></div><div class="resultMainCell2 tableResult2">17/12/2015</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_18_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_20_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_24_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_36_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_44_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_45_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_39_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(7);" title="攪珠結果及派彩">15/145&nbsp;</a></div><div class="resultMainCell2 tableResult1">15/12/2015</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_18_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_22_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_40_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_41_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_48_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_49_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_42_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(8);" title="攪珠結果及派彩">15/144&nbsp;</a></div><div class="resultMainCell2 tableResult2">12/12/2015</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_16_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_18_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_27_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_35_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_42_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_44_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_33_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(9);" title="攪珠結果及派彩">15/143&nbsp;</a></div><div class="resultMainCell2 tableResult1">10/12/2015</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_09_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_24_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_29_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_32_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_34_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_47_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_42_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(10);" title="攪珠結果及派彩">15/142&nbsp;</a></div><div class="resultMainCell2 tableResult2">08/12/2015</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_09_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_10_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_25_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_40_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_48_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_49_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_32_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(11);" title="攪珠結果及派彩">15/141&nbsp;</a></div><div class="resultMainCell2 tableResult1">05/12/2015</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_06_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_16_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_19_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_34_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_35_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_46_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_09_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(12);" title="攪珠結果及派彩">15/140&nbsp;</a></div><div class="resultMainCell2 tableResult2">03/12/2015</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_04_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_11_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_14_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_41_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_42_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_44_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_10_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(13);" title="攪珠結果及派彩">15/139&nbsp;</a></div><div class="resultMainCell2 tableResult1">01/12/2015</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_08_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_09_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_10_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_22_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_33_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_40_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_28_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(14);" title="攪珠結果及派彩">15/138&nbsp;</a></div><div class="resultMainCell2 tableResult2">28/11/2015</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_15_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_21_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_24_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_25_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_28_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_31_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_48_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(15);" title="攪珠結果及派彩">15/137&nbsp;</a></div><div class="resultMainCell2 tableResult1">26/11/2015</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_10_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_17_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_25_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_26_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_39_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_44_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_07_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(16);" title="攪珠結果及派彩">15/136&nbsp;</a></div><div class="resultMainCell2 tableResult2">24/11/2015</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_17_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_21_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_22_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_36_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_41_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_44_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_38_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(17);" title="攪珠結果及派彩">15/135&nbsp;</a></div><div class="resultMainCell2 tableResult1">22/11/2015</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_09_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_20_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_30_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_33_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_38_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_39_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_37_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult2"><a href="javascript:genResultDetails(18);" title="攪珠結果及派彩">15/134&nbsp;</a></div><div class="resultMainCell2 tableResult2">19/11/2015</div><div class="resultMainCell3 tableResult2"></div><div class="resultMainCell4 tableResult2"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_13_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_15_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_25_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_40_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_41_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_48_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_19_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div><div class="resultMainRow"><div class="resultMainCell1 tableResult1"><a href="javascript:genResultDetails(19);" title="攪珠結果及派彩">15/133&nbsp;</a></div><div class="resultMainCell2 tableResult1">17/11/2015</div><div class="resultMainCell3 tableResult1"></div><div class="resultMainCell4 tableResult1"><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_12_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_13_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_31_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_33_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_35_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner"><img src="/marksix/info/images/icon/no_47_s.gif?CV=L4.02R1" width="25" height="25"></span><span class="resultMainCellInner" style="padding:0px 5px 0px 5px"><img src="/marksix/info/images/icon_special_no.gif?CV=L4.02R1" width="6" height="6"></span><span class="resultMainCellInner" style="padding:0px 1px 0px 3px"><img src="/marksix/info/images/icon/no_21_s.gif?CV=L4.02R1" width="25" height="25"></span></div></div></div></div>
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
        </div>
`;
