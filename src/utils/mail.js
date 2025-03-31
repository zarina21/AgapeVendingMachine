import emailjs from 'emailjs-com';

const credentials = {
  service_id: 'service_26olgsf',
  template_id: 'template_g1ggsdi',
  publik_key: 'JAD0ZHpg4wnDWVIv4'
}

export const sendMail = async (emailObj) => {
 try { 
    const response = await emailjs.send(
      'service_26olgsf',
      'template_g1ggsdi', // Debes usar un template_id, pero será flexible
      emailObj,
      'JAD0ZHpg4wnDWVIv4'
    );
    console.log('Email enviado:', response);
 } catch (e) {
    console.log(e, 'error')
 }
}
