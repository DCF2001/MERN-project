const { generatePdf } = require('../utils/pdfGenerator');

exports.generateReport = async (req, res) => {
  try {
    const pdfBuffer = await generatePdf(req.body);
    // Set headers to indicate that the response is a PDF file
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=report.pdf'); // Optional: set filename
    res.send(pdfBuffer); // Send the PDF content in the response
  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).json({ success: false, message: 'Error generating report' });
  }
};
