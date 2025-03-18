import emailjs from 'emailjs-com';

const credentials = {
  service_id: '',
  template_id: '',
  publik_key: ''
}

export const sendMail = async (emailObj) => {
 try { 
    const response = await emailjs.send(
      'tu_service_id',
      'tu_template_id', // Debes usar un template_id, pero será flexible
      emailObj,
      'tu_public_key'
    );
    console.log('Email enviado:', response);
 } catch (e) {
    console.log(e, 'error')
 }
}
