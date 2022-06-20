export default function handler(req, res) {
  
  if (req.method === "POST") {
    // Process a POST request
    if (req.body) {
      // send to database
      // check if username is unique
      // add user to DB
      // return success message + user session
      console.log(JSON.parse(req.body))
      return res.status(200).json({ result: "success" })
    } else {
      return res.status(500).json({ error: "Form Data is empty" })
    }
  } else {
    // Handle any other HTTP method
    return res
      .status(405)
      .json({ error: "This route only supports POST request" })
  }
}
