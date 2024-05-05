const PDFDocument = require('pdfkit');

async function generatePdf(data) {
  const pdfDoc = new PDFDocument();
  pdfDoc.text('Your report content goes here');
  // Collect PDF content into a buffer
  const buffers = [];
  pdfDoc.on('data', buffers.push.bind(buffers));
  pdfDoc.end();
  // Return the buffer containing PDF content
  return Buffer.concat(buffers);
}

module.exports = { generatePdf };







