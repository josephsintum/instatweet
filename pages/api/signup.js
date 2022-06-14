import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
    } else {
      // Handle any other HTTP method
      return res.status(405).json({error:"This route only supports POST request"})
    }
  }