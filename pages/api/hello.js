// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  console.log("API CALLED");
  res.status(200).json([
    { id: "1", name: "John Doe", github: "john-doe", location: "London" },
    { id: "2", name: "Jane Doe", github: "john-doe", location: "London" },
    { id: "3", name: "Emma Doe", github: "john-doe", location: "London" },
    { id: "4", name: "Bret Doe", github: "john-doe", location: "London" },
    { id: "5", name: "Martha Doe", github: "john-doe", location: "London" },
    { id: "6", name: "Bob Doe", github: "john-doe", location: "London" },
  ]);
}
