import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_AUDIENCE_ID;

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ error: 'Email is required.' }, { status: 400 });
    }

    // Add to Resend Audience
    await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    // Confirm to subscriber
    await resend.emails.send({
      from: 'Link <onboarding@resend.dev>',
      to: email,
      subject: "You're subscribed to linkb.dev",
      html: `
        <div style="font-family: monospace; background: #11131a; color: #abb2bf; padding: 32px; border-radius: 8px;">
          <h2 style="color: #98c379; margin-bottom: 16px;">❯ subscribed.</h2>
          <p>Hey! You're now subscribed to updates from <span style="color: #98c379;">linkb.dev</span>.</p>
          <p style="margin-top: 12px;">I'll send you updates on new projects, blog posts, and builds.</p>
          <p style="color: #3d4451; margin-top: 24px; font-size: 12px;">// linkb.dev — software dev & builder</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}