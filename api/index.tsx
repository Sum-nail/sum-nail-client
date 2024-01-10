//api넣어유
import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_END,
  headers: {
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDEsIm5hbWUiOiJoYWhhIiwiaWF0IjoxNjQyMDcwMDI4LCJleHAiOjE2NDQ2NjIwMjgsImlzcyI6IldZQiJ9.F-ExkKt4mAxfQjThsAg-afnmv0HGixblOLLxFZ2U7A',
  },
});
