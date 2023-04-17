import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  if (!bodySchema.isValidSync(req.body)) {
    return new Response(JSON.stringify({ message: 'Error - wrong format' }), {
      status: 400,
    });
  }
}
