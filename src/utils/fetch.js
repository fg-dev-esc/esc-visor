import axios from "axios";
import { api_key } from "../constants/url";

export async function GET(url) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.defaults.headers.common = {
      "X-API-Key": api_key,
    };

    const { data } = await axios({
      method: "get",
      url: url,
      config,
    });
    return data;
  } catch (e) {
    console.log(e);
    return -1;
  }
}

export async function POST(url, body) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.defaults.headers.common = {
      "X-API-Key": api_key,
    };

    const { data } = await axios({
      method: "post",
      url: url,
      config,
      data:body,
    });
    return data;
  } catch (e) {
    console.log(e);
    return -1;
  }
}
