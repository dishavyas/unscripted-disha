const WHATSAPP_NUMBER = "916267481715";

export const createWhatsAppLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
};


// ============================================
// REEL ORDER
// ============================================

export const reelOrderLink = createWhatsAppLink(
  `Hi Unscripted Disha! 👋

I want to order an AI Cinematic Reel.

Please share the details and next steps.

Thank you!`
);


// ============================================
// SERVICE ORDER
// ============================================

export const serviceOrderLink = (serviceName) =>
  createWhatsAppLink(
    `Hi Unscripted Disha! 👋

I'm interested in your "${serviceName}" service.

Please share the details, pricing and process.

Thank you!`
  );


// ============================================
// PACKAGE ORDER
// ============================================

export const packageOrderLink = (packageName, price) =>
  createWhatsAppLink(
    `Hi Unscripted Disha! 👋

I'm interested in the "${packageName}".

Package Price: ₹${price}

Please share the payment details and next steps.

Thank you!`
  );