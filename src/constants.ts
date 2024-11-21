import "dotenv/config";

export const HANDLE = "@github-labeler.bsky.social";
export const DID = (process.env.DID ?? "") as `did:${string}`;
export const SIGNING_KEY = process.env.SIGNING_KEY ?? "";
export const PORT = Number(process.env.PORT ?? 4001);
export const MAXLABELS = 4;
