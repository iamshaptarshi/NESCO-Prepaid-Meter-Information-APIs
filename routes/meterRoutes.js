const express = require("express");

const {
  healthCheck,
  getMeterInfo,
  getRechargeHistoryPdf,
  getCertificatePdf,
} = require("../controllers/meterController");

const router = express.Router();

router.get("/health", healthCheck);

router.get("/meter/:custNo", getMeterInfo);

router.get("/meter/:custNo/recharge-history/pdf", getRechargeHistoryPdf);

router.get("/meter/:custNo/certificate/pdf", getCertificatePdf);

module.exports = router;
