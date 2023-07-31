import RedCard from "./Cards/RedCard";
import { useEffect, useState } from "react";

import axios from "axios";

export default function RedFolderPage() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/redfolderb');
        setData(response.data);
        setLoading(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <RedCard data={data} /> }
    </div>
  );
}
