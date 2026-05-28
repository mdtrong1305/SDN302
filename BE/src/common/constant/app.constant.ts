import 'dotenv/config';

export const PORT = process.env.PORT;
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const DATABASE_URL = process.env.DATABASE_URL;
export const FOLDER_IMAGE = 'public/images';

console.log(
  '\n',
  {
    PORT,
    ACCESS_TOKEN_SECRET,
    DATABASE_URL,
  },
  '\n',
);
