import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || 8080,
  URL_MONGO: process.env.URL_MONGO,
};
