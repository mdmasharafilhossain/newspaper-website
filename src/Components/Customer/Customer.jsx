

const Customer = () => {
    return (
        <div className="mt-20">
            <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">Our Customer Review </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-14 gap-20 md:gap-10 lg:gap-10 pb-10 container mx-auto mb-10 mt-5">
              
          <div className="border-2 border-orange-600 rounded-xl ">
            <div className="py-10 px-10">
                <img className="mx-auto pb-5 relative -mt-24" src="https://i.ibb.co/g4zJ7q7/comment-people-1.png"alt="" />
                <p className="text-justify">"I've been a regular visitor to this newspaper's website for years. The variety of news coverage across different sections is impressive. I particularly enjoy the in-depth analysis pieces. However, the mobile app could use some improvement in terms of speed and responsiveness."</p>
                <h1 className="text-center font-bold text-xl mt-5">Sourav</h1>

            </div>
        </div>
          <div className="border-2 border-orange-600 rounded-xl ">
            <div className="py-10 px-10">
                <img className="mx-auto pb-5 relative -mt-24" src="https://i.ibb.co/swXD40B/comment-people-4.png"alt="" />
                <p className="text-justify">"As a journalist, I heavily rely on this news site for credible information. The reporting is top-notch, and the editorial standards are high. The layout is clean and easy to navigate. My only suggestion would be to include more international news stories."!</p>
                <h1 className="text-center font-bold text-xl mt-5">Soumita</h1>

            </div>
        </div>
          <div className="border-2 border-orange-600 rounded-xl ">
            <div className="py-10 px-10">
                <img className="mx-auto pb-5 relative -mt-24" src="https://i.ibb.co/Cs2cLjg/comment-people-5.png"alt="" />
                <p className="text-justify">"This newspaper website is my morning ritual! The diverse range of topics, from politics to lifestyle, keeps me informed. However, the number of intrusive ads can be overwhelming at times. Nonetheless, the quality of journalism keeps me coming back every day."</p>
                <h1 className="text-center font-bold text-xl mt-5">Mohasin</h1>

            </div>
        </div>
          <div className="border-2 border-orange-600 rounded-xl ">
            <div className="py-10 px-10">
                <img className="mx-auto pb-5 relative -mt-24" src="https://i.ibb.co/Z8M4SWM/comment-people-2.png"alt="" />
                <p className="text-justify">"The user experience is excellent! I love the website's interface and how quickly I can find the latest headlines. The commenting system fosters engaging discussions, but occasionally, moderation seems lacking. Overall, it's my primary source for local news."</p>
                <h1 className="text-center font-bold text-xl mt-5">Motia</h1>

            </div>
        </div>

            </div>
        </div>
    );
};

export default Customer;