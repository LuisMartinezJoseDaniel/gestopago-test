import axios from "@/lib/axios";

export const sendPost = (url: string, encryptedData: string) => {
  return axios.post(
    url,
    {
      signed: encryptedData,
      random: new Date().getMilliseconds() + "_rand",
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};
