import LogCard from "./log-card";
import { useState, useEffect } from 'react';

export default function Logs() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('http://localhost:3001/article')
        const resJson = await res.json();

        setArticles(resJson.data);
      }
        catch (error) {
        console.error("ERROR");
      }
    }

    fetchArticles();

  }, []);

  return (
    <div className="bg-background text-terminal-white font-mono p-6">
      <div id="daily-view" className="space-y-4">
      {articles.map((article, _)=> 
          <LogCard key={_} data={article}/>
      )}
      </div>
    </div>
  );
};
