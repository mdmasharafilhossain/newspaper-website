import { useEffect, useState } from "react";


const TrendingArticle = () => {
    const [art,setart] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/article")
    .then(res =>res.json())
    .then(data =>setart(data))
    },[])
    return (
        <div>
            <h2>{art.length}</h2>
            <h2>{art.email}</h2>
        </div>
    );
};

export default TrendingArticle;