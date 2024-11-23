import "dotenv/config";

export const HANDLE = "@ts4labels.bsky.social";  // Change this if you're using a different handle
export const DID = (process.env.DID ?? "") as `did:${string}`;  // Make sure the DID is set in your .env file
export const SIGNING_KEY = process.env.SIGNING_KEY ?? "";  // Ensure this is set if required for signing
export const PORT = Number(process.env.PORT ?? 4001);  // Change this if you need a different port
