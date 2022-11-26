import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    food_truck_api_url: process.env.FOOD_TRUCK_API_URL,
    food_truck_app_token: process.env.FOOD_TRUCK_APP_TOKEN,

  
  };
});
