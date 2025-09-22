import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY    = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID    = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_TO_ME     = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_TO_ME;
const TEMPLATE_ID_AUTOREPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY;
const EMAIL_ME              = import.meta.env.VITE_EMAILJS_EMAIL_ME;

export const initEmail = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export const sendEmail = async ({ name, email, message, company = "", contactMethod = "Email" }) => {
  try {
    const payloadToMe = {
      from_name: name,
      from_email: email,
      message: message,
      company: company,
      contact_method: contactMethod,
      to_email: EMAIL_ME
    };

    await emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_ID_TO_ME, payloadToMe);

    const payloadAutoReply = {
      from_name: name,
      from_email: email,
      reply_to: EMAIL_ME
    };

    await emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_ID_AUTOREPLY, payloadAutoReply);

    return { success: true };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
}
