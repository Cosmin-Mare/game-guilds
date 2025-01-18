import AirtablePlus from "airtable-plus";
import Airtable from "airtable";

export async function rsvp(email: string): Promise<AirtablePlus.Record> {
  const rsvpTable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE_ID,
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "RSVPs",
  });

  console.debug(`rsvp for "${email}""`);

  return rsvpTable.create({
    Email: email,
  });
}

export async function POST(req: Request) {
  
  let { email } = await req.json();

  if (!email) {
    return new Response('Missing required fields', {
      status: 400
    });
  }

  try {
    await rsvp(email);

    return new Response('RSVP successful', { status: 200 });
  } catch (error) {

    if (error instanceof Airtable.Error) {
      console.error(error);
      return new Response("Bad request", {
        status: 400
      });
    }

    console.error(error);
    return new Response('Internal server error', {
      status: 500
    });
  }
}
