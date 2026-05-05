const phone = "5581986265469";

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function createProductMessage(productName: string) {
  return createWhatsAppLink(
    `Olá, vim pelo site e quero pedir ${productName}.`
  );
}

export function createCustomOrderMessage(context: string) {
  return createWhatsAppLink(
    `Olá, vim pelo site e quero solicitar ${context}.`
  );
}