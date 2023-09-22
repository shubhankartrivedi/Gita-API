import axios from "axios"

export default async function sendMessage(content) {


    try {
        const discordWebhookUrl = 'https://discord.com/api/webhooks/1154705569421217832/hIaGVWUDcCaRcHPUuh6ZMT79QUpbWGhC6rQXYdgZnnOe5vIS1RmM2T1auMuvqIrxUZE3'; // Replace with your Discord webhook URL
    
        const response = await axios.post(discordWebhookUrl, {
          content
        });
    
        if (response.status === 204) { // Discord returns a 204 No Content status on success

        }
    

      } catch (error) {

      }
  }