import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { pickup, destination, date, time, passengers } = data;

    // Generate a formal Reference Number
    const refNumber = `R1-${Math.floor(1000 + Math.random() * 9000)}`;

    // Forward the data to Formspree
    const response = await fetch(import.meta.env.FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        subject: `New RiderOne Reservation | ${refNumber}`,
        reference: refNumber,
        pickup,
        destination,
        date,
        time,
        passengers: `${passengers} Pax`,
        // Formspree likes it better if it's flat
        message: `RiderOne has a new booking request! Ref: ${refNumber}. Pickup at ${pickup} going to ${destination} on ${date} at ${time}. Total ${passengers} passengers.`
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true, refNumber }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, error: result.error || "Formspree Error" }),
        { status: response.status }
      );
    }
  } catch (err) {
    console.error('Submission processing error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
};
