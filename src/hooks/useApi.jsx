import * as React from 'react';
import { Buffer } from "buffer";

export default function useAPI(api_url, type = "wp", auth = false) {
  const [data, setData] = React.useState({});
  const creds = Buffer.from(`${process.env.USERNAME}:${process.env.PASSWORD}`).toString("base64");

  if(!api_url) return;

  React.useEffect(() => {
    const location = window.location.origin;
    const headers = {};

    if (auth) {
      api_url = api_url + '?context=edit';
      headers["Authorization"] = "Basic " + creds;
      headers["Content-Type"] = "application/json";
    }

    async function loadData() {
      const res = await fetch(location + '/wp-json/' + type + '/v2/' + api_url, { method: 'GET', headers: headers });

      if(!res.ok) {
        return;
      }

      const resData = await res.json();
      setData(resData);
    }

    loadData();
  }, [])

  return data;
}