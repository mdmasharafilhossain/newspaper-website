import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AllArticles from "../../../AllArtciles/AllArticles";


const AllArticle = () => {
    const [art, setart] = useState([]);
    const [search,setSearch] = useState('');
//
    useEffect(() => {
        fetch(`https://newspaper-server-rosy.vercel.app/acceptedArticle?search=${search}`)
            .then(res => res.json())
            .then(data => setart(data))
    }, [search]);

    const handleSerach = e =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        console.log(searchText);
        setSearch(searchText)
    }

    return (
        <div className="mt-32">
            <div className="mx-auto text-center w-4/12 ">
                <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">All Article </h1>
            </div>

            {/* <div tabIndex={0} className="collapse  w-[150px] ml-44 mb-10 collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                  Filter by?
                </div>
                <div className="collapse-content">
                  <div>
                  <button className="btn border ">Tags</button>
                  </div>
                 <div>
                 <button className="btn border ">Publisher</button>
                 </div>
                </div>
            </div> */}
            <form onSubmit={handleSerach} className="container  ml-[450px] mb-20">
                <input className="border-2 w-1/2 py-2 border-red-600 rounded-lg" type="text" name="search" placeholder="Search Any Article..." id=""/>
                <input className="btn bg-red-700 hover:bg-red-600 text-yellow-50" type="submit" value="Search" />
            </form>

            <div className="grid grid-cols-3 gap-10  container mx-auto">
                {
                    art.map(article =>  
                        <AllArticles article={article}></AllArticles>

                    )
                }
            </div>
        </div>
    );
};

export default AllArticle;