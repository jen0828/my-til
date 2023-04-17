import { EmailData } from './email';

export async function sendContactEmail(email: EmailData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'applicatioin/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      data.message || 'Sorry, something went wrong with your request.'
    );
  }
  return data;
}
