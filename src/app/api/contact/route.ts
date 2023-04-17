import { sendEmail } from '@/service/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({
        message: 'Message was not successfully delivered.',
      }),
      {
        status: 400,
      }
    );
  }
  return sendEmail(body)
    .then(
      () =>
        new Response(
          JSON.stringify({ message: 'Message was sent successfully.' }),
          {
            status: 200,
          }
        )
    )
    .catch((error) => {
      console.error(error);
      return new Response(
        JSON.stringify({
          message: 'Message was not successfully delivered.',
        }),
        {
          status: 500,
        }
      );
    });
}
