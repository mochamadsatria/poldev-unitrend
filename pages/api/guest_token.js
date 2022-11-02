// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const baseURL = process.env.SUPERSET_DOMAIN;

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    axios.post(
      `${baseURL}/api/v1/security/login`,
      {
        username: process.env.SUPERSET_USERNAME,
        password: process.env.SUPERSET_PASSWORD,
        provider: 'db',
        refresh: false,
      },
    )
      .then((response) => {
        // console.log(response.data);
  
        return axios.post(
          `${baseURL}/api/v1/security/guest_token/`,
          {
            user: {
              username: 'pemilu',
              first_name: 'Pemilu',
              last_name: '2024',
            },
            rls: [],
            resources: [
              {
                type: 'dashboard',
                id: process.env.SUPERSET_DASHBOARD_ID,
              },
            ],
          },
          {
            headers: { Authorization: `Bearer ${response.data.access_token}` }
          }
        )
      })
      .then((response) => {
        // console.log(response);
        res.json({token: response.data.token});
        resolve();
      })
  });
}
