const axios = require("axios");
const cheerio = require("cheerio");

const {
  BASE_URL,
  RECHARGE_HISTORY,
  RECHARGE_HISTORY_PDF,
  CERTIFICATE_PDF,
} = require("../config/constants");

const {
  parseCustomerInfo,
  parseRechargeHistory,
} = require("../parsers/meterParser");

async function getTokenAndCookies() {
  const response = await axios.get(BASE_URL);

  const $ = cheerio.load(response.data);

  const token = $('input[name="_token"]').val();

  if (!token) {
    throw new Error("Unable to extract CSRF token");
  }

  return {
    token,
    cookies: response.headers["set-cookie"] || [],
  };
}

async function submitRequest(custNo, submitValue, responseType = "text") {
  const { token, cookies } = await getTokenAndCookies();

  const form = new URLSearchParams();

  form.append("_token", token);
  form.append("cust_no", custNo);
  form.append("submit", submitValue);

  const response = await axios.post(BASE_URL, form.toString(), {
    responseType,
    headers: {
      Cookie: cookies.join("; "),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return response;
}

async function getMeterInformation(custNo) {
  const response = await submitRequest(custNo, RECHARGE_HISTORY);

  const $ = cheerio.load(response.data);

  const customer = parseCustomerInfo($);

  const rechargeHistory = parseRechargeHistory($);

  return {
    success: true,
    customer,
    rechargeHistory,

    endpoints: {
      rechargeHistoryPdf: `/api/meter/${custNo}/recharge-history/pdf`,

      certificatePdf: `/api/meter/${custNo}/certificate/pdf`,
    },
  };
}

async function downloadRechargePdf(custNo) {
  const response = await submitRequest(
    custNo,
    RECHARGE_HISTORY_PDF,
    "arraybuffer",
  );

  return response.data;
}

async function downloadCertificatePdf(custNo) {
  const response = await submitRequest(custNo, CERTIFICATE_PDF, "arraybuffer");

  return response.data;
}

module.exports = {
  getMeterInformation,
  downloadRechargePdf,
  downloadCertificatePdf,
};
