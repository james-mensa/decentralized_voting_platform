import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    // Get the path to the deployment.json file
    const filePath = path.join(process.cwd(), "data", "deployment.json");
    // Read the JSON file
    const deploymentData = await fs.readFile(filePath, "utf-8");
    // Parse the JSON data
    const jsonData = JSON.parse(deploymentData);
    return Response.json(jsonData);
  } catch (error) {
    console.error({ error });
    return Response.json({ error: "Internal Server Error" });
  }
}
