import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'Link.bernath5@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: monospace; background: #11131a; color: #abb2bf; padding: 32px; border-radius: 8px;">
          <h2 style="color: #98c379; margin-bottom: 24px;">❯ new message received</h2>
          <p><span style="color: #61afef;">name</span>: ${name}</p>
          <p><span style="color: #61afef;">email</span>: ${email}</p>
          <p><span style="color: #61afef;">message</span>:</p>
          <p style="color: #dce1ea; background: #181b24; padding: 16px; border-radius: 4px; border-left: 3px solid #98c379;">${message}</p>
          <p style="color: #3d4451; margin-top: 24px; font-size: 12px;">// sent from linkb-dev.vercel.app</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
