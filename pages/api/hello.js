// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { createClient } = require("@astrajs/collections");

export default async function helloAPI(req, res) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DATABASE_ID,
    astraDatabaseRegion: process.env.ASTRA_DATABASE_REGION,
    applicationToken: process.env.ASTRA_APPLICATION_TOKEN,
  });

  const membersCollection = astraClient
    .namespace("NextJS")
    .collection("members");

  // check if request is a post
  if (req.method === "POST") {
    // get the data from the request
    const { name, github, location } = req.body;
    console.log(name, github, location);
    await membersCollection.create({
      name: name,
      github: github,
      location: location,
    });

    res.status(201).json({
      message: "Successfully added a new member",
    });

    return;
  }

  const members = await membersCollection.find({});
  res.status(200).json(
    Object.keys(members).map((key) => {
      return {
        id: key,
        ...members[key],
      };
    })
  );
}
