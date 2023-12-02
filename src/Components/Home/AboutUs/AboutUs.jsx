

const AboutUs = () => {
    return (
        <div className="mt-20">
            <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">About Us </h1>
            <h1 className="text-center text-lg mt-5 mb-10">
                We  focus on the publication's narrative, its core values, the team behind the news, and the dedication to providing high-quality journalism. It invites visitors to explore the history, mission, and ethos of the newspaper.
            </h1>
            <div className="flex flex-col md:flex-col mx-10 lg:flex-row ">
                <div>
                    <img className="flex-1" src="https://i.ibb.co/GRmYNNM/Screenshot-1185.png" alt="" />
                </div>
                <div className="flex-1 lg:ml-10 mt-10">
                    <p className='text-2xl font-bold mb-5'>Our Story</p>
                    <h1 className='text-lg'>


                        Since its inception in 1990, The The Claremont Independent has been driven by a passion for authentic storytelling and an unwavering commitment to delivering accurate, timely, and comprehensive news coverage. Our journey began with a vision to inform, engage, and inspire our readers through insightful journalism.
                    </h1>
                    <p className='text-2xl font-bold mb-5 mt-5'>                        Mission and Values:
                    </p>
                    <h1 className='text-lg'>



                        A statement outlining the publication's mission, core values, and editorial principles. This might include commitments to accuracy, objectivity, journalistic integrity, and serving the community.
                    </h1>
                    <p className='text-2xl font-bold mb-5 mt-5'>                        Our Commitment to You
                    </p>
                    <h1 className='text-lg'>



                        <h1 className='text-lg'>



                        

Throughout our growth, one thing has remained constant: our commitment to serving our readership. We aim to be your trusted source for local and global news, providing accurate, unbiased reporting that empowers you to make informed decisions.
                        </h1>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;