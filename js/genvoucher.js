
$("#genvoucher").click(function (event) {
    var param = {
        "Phone": $("#telno").text(),
        "PIN_Code": $("#pincode").val()
}
    $.ajax({
        "url": "https://www.billionvouchers.com/BVwebapi/" + "BVSP_VOUCHER_GENERATE",
        "async": true,
        "crossDomain": true,
        "type": "POST",
        "dataType": "json",
        "contentType": "application/json; charset=utf-8",
        "data": JSON.stringify(param),
        "success": function (result) {
            if (result.ResultSets[0].length > 0)
                {
                console.log('激活失败：' + result.ResultSets[0][0].msg);
                $("#msg").html('激活失败：' + result.ResultSets[0][0].msg);
            }
            else
                console.log('激活成功');
        }
    })
});