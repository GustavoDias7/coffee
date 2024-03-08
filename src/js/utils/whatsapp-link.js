const bsae_url = "https://api.whatsapp.com/send";
const phone = "5587994257122";

function getWhatsAppLink(msg) {
  let url = `${bsae_url}?phone=${phone}&text=${msg}`;
  return encodeURI(url);
}

module.exports = { getWhatsAppLink };
