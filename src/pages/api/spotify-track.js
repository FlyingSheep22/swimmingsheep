function extractSpotifyItem(spotifyUrl) {
  try {
    const url = new URL(spotifyUrl);
    const parts = url.pathname.split("/").filter(Boolean);

    const type = parts[0];
    const id = parts[1];

    if (!id || !["track", "album"].includes(type)) {
        throw new Error("Unsupported Spotify URL");
    }

    return {type, id};
  } catch {
    throw new Error("Invalid Spotify track URL");
  }
}

async function getAccessToken() {
  const credentials = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error("Failed to authenticate with Spotify");
  }

  const data = await response.json();
  return data.access_token;
}

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Spotify URL is required" });
  }

  try {
    const {type, id} = extractSpotifyItem(url);
    const accessToken = await getAccessToken();

    const response = await fetch(
      `https://api.spotify.com/v1/${type}s/${id}?market=CA`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to retrieve Spotify track");
    }

    const item = await response.json();

    if (type === "track") {
      return res.status(200).json({
          type: "track",
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          album: item.album.name,
          albumArt: item.album.images[0]?.url ?? "",
          spotifyUrl: item.external_urls.spotify,
      });
  }

  if (type === "album") {
      return res.status(200).json({
          type: item.album_type, // "album", "single", or "compilation"
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          album: item.name,
          albumArt: item.images[0]?.url ?? "",
          spotifyUrl: item.external_urls.spotify,
      });
  }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}