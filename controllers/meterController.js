const nescoService = require("../services/nescoService");

exports.healthCheck = (req, res) => {
  res.json({
    success: true,
    service: "NESCO API",
  });
};

exports.getMeterInfo = async (req, res) => {
  try {
    const data = await nescoService.getMeterInformation(req.params.custNo);

    res.json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getRechargeHistoryPdf = async (req, res) => {
  try {
    const pdf = await nescoService.downloadRechargePdf(req.params.custNo);

    res.setHeader("Content-Type", "application/pdf");

    res.setHeader(
      "Content-Disposition",
      `inline; filename="${req.params.custNo}-recharge-history.pdf"`,
    );

    res.send(pdf);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCertificatePdf = async (req, res) => {
  try {
    const pdf = await nescoService.downloadCertificatePdf(req.params.custNo);

    res.setHeader("Content-Type", "application/pdf");

    res.setHeader(
      "Content-Disposition",
      `inline; filename="${req.params.custNo}-certificate.pdf"`,
    );

    res.send(pdf);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
