import { axiosInstance } from "../axiosInstance";

export async function getFetcher(url: string, locale?: string) {

  try {
    const response = await axiosInstance.get(url, {
      headers: {
        "Accept-Language": locale,
      },
    });
    return response.data;
  } catch (e) {
    return null
  }
}
