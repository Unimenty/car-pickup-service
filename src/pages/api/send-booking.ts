import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Use environment variable for the API key
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { pickup, destination, date, time, passengers } = data;

    // Generate a random Reference Number
    const refNumber = `R1-${Math.floor(1000 + Math.random() * 9000)}`;

    const { data: resData, error } = await resend.emails.send({
      from: 'RiderOne <onboarding@resend.dev>', // You should verify your own domain later
      to: 'dwinkomey27@gmail.com',
      subject: `New Booking Request: ${refNumber}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #3B82F6;">New RiderOne Reservation</h1>
          <p>A new booking request has been received with reference: <strong>${refNumber}</strong></p>
          <hr />
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;">📍 <strong>Pickup:</strong> ${pickup}</li>
            <li style="margin-bottom: 10px;">🏁 <strong>Destination:</strong> ${destination}</li>
            <li style="margin-bottom: 10px;">📅 <strong>Date:</strong> ${date}</li>
            <li style="margin-bottom: 10px;">⏰ <strong>Time:</strong> ${time}</li>
            <li style="margin-bottom: 10px;">👥 <strong>Passengers:</strong> ${passengers} Pax</li>
          </ul>
          <hr />
          <p style="font-size: 12px; color: #999;">Received via RiderOne Website Forms.</p>
        </div>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return new Response(
      JSON.stringify({ success: true, refNumber }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
};
