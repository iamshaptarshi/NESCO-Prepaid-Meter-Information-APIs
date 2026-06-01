function parseCustomerInfo($) {
  const inputs = $("#con_info_div input");

  return {
    name: inputs.eq(0).val()?.trim() || "",

    fatherOrHusband: inputs.eq(1).val()?.trim() || "",

    address: inputs.eq(2).val()?.trim() || "",

    mobile: inputs.eq(3).val()?.trim() || "",

    office: inputs.eq(4).val()?.trim() || "",

    feeder: inputs.eq(5).val()?.trim() || "",

    consumerNo: inputs.eq(6).val()?.trim() || "",

    meterNo: inputs.eq(7).val()?.trim() || "",

    sanctionedLoad: inputs.eq(8).val()?.trim() || "",

    tariff: inputs.eq(9).val()?.trim() || "",

    meterType: inputs.eq(10).val()?.trim() || "",

    meterStatus: inputs.eq(11).val()?.trim() || "",

    installDate: inputs.eq(12).val()?.trim() || "",

    minimumRecharge: inputs.eq(13).val()?.trim() || "",

    balance: inputs.eq(14).val()?.trim() || "",
  };
}

function parseRechargeHistory($) {
  const history = [];

  $(".consumerRechargeData").each((i, el) => {
    history.push({
      orderId: $(el).attr("data-order") || "",

      tokenNo: $(el).attr("data-token") || "",

      seqNo: $(el).attr("data-seq") || "",

      meterRent: Number($(el).attr("data-rent") || 0),

      demandCharge: Number($(el).attr("data-demandcharge") || 0),

      vat: Number($(el).attr("data-tax") || 0),

      pfcCharge: Number($(el).attr("data-pfc") || 0),

      subsidy: Number($(el).attr("data-subsidyamount") || 0),

      electricityAmount: Number($(el).attr("data-purchaseamount") || 0),

      rechargeAmount: Number($(el).attr("data-totalamount") || 0),

      energyUnit: Number($(el).attr("data-purchaseenergy") || 0),

      method: $(el).attr("data-salename") || "",

      rechargeDate: $(el).attr("data-purchasedate") || "",

      debtAmount: Number($(el).attr("data-debtamount") || 0),

      paidAmount: Number($(el).attr("data-paidamount") || 0),

      meterNo: $(el).attr("data-meterno") || "",

      customerNo: $(el).attr("data-customerno") || "",

      customerName: $(el).attr("data-customername") || "",

      tariff: $(el).attr("data-tariff") || "",

      organization: $(el).attr("data-organization") || "",
    });
  });

  return history;
}

module.exports = {
  parseCustomerInfo,
  parseRechargeHistory,
};
