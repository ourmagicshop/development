/* 'npm install axios' needed !*/

const axios = require('axios');

export default async function DiscordAPI_call() {
  const server = 'tTm7cDdBn';

  try {
    const apiResult = await axios.get(
      `https://discord.com/api/v9/invites/${server}?with_counts=true&with_expiration=true`
    );
    return apiResult.data;
  } catch (err) {
    console.error(
      err.response?.status,
      err.response?.data || err.message
    );
    throw err;
  }
}