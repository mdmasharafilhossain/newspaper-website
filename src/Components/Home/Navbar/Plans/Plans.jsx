

const Plans = () => {
    return (
        <div className="mt-20 container mx-auto">
            <div className="mx-auto text-center w-4/12 ">
            <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">Our Plans</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {/* First Page */}
               <div className="border-2 shadow-lg border-pink-300 rounded-lg py-5 w-3/4">
                <h2 className="mb-10 ml-5 border rounded-md font-bold w-40 px-2 py-1 bg-pink-300">Free For 1 Months</h2>
                <div className="flex ml-5   gap-40 mb-10">
                     <div className="font-bold uppercase">
                        <h2> Premium<br></br>
                         Individual</h2>
                     </div>
                     <div>
                          <h1 className="font-bold uppercase">Free</h1>
                          <p>For 1 Months</p> 
                     </div>
                </div>
                <div>
                    <div className="ml-5 font-bold">
                        <li><span>1 Premium Account</span></li>
                        <li>Cancel Anytime</li>
                        <li>15 hours/Months To Enjoy Our Service</li>
                    </div>
                    
                </div>

                <button className="btn ml-12 text-base btn-secondary border-none text-black font-bold bg-pink-300 hover:bg-pink-400 w-3/4 mt-32 rounded-3xl">Try Free For 1 Months</button>
                <p className="text-[12px]  text-center">Free for 1 month,then $10.99 per month after <br></br>
                <span className="underline ">Terms Apply</span>
                </p>

               </div>
              {/* Second Page */}
               <div className="border-2 shadow-lg border-yellow-300 rounded-lg py-5 w-3/4">
                <div className="flex gap-32">
                <h2 className="  ml-5 font-bold text-xl">Premium Duo</h2>
                <div >
                    <p className="font-bold text-xl">$14.99</p>
                    <p className="text-[12px]">per months</p>
                </div>

                </div>
                
                <div>
                    <div className="ml-5 mt-28 font-bold">
                        <li><span>2 Premium Accounts</span></li>
                        <li>Cancel Anytime</li>
                        <li>15 hours/Months To Enjoy Our Service</li>
                    </div>
                    
                </div>

                <button className="btn ml-12 text-base btn-secondary border-none text-black font-bold bg-yellow-300 hover:bg-yellow-400 w-3/4 mt-32 rounded-3xl">Get Premium Duo</button>
                <p className="text-[12px]  text-center">For couples who reside at the same address
                <span className="underline ">Terms Apply</span>
                </p>

               </div>
              {/* Third Page */}
               <div className="border-2 shadow-lg border-blue-300 rounded-lg py-5 w-3/4">
                <div className="flex gap-32">
                <h2 className="  ml-5 font-bold text-xl">Premium Family</h2>
                <div >
                    <p className="font-bold text-xl">$16.99</p>
                    <p className="text-[12px]">per months</p>
                </div>

                </div>
                
                <div>
                    <div className="ml-5 mt-16 font-bold">
                        <li><span>6 Premium Accounts</span></li>
                        <li>Cancel Anytime</li>
                        <li>15 hours/Months To Enjoy Our Service</li>
                        <li>Block explicit music</li>
                        <li>Access to Spotify Kids</li>
                    </div>
                    
                </div>

                <button className="btn ml-12 text-base btn-secondary border-none text-black font-bold bg-blue-300 hover:bg-blue-400 w-3/4 mt-32 rounded-3xl">Get Premium Duo</button>
                <p className="text-[12px]  text-center">For 6 people who reside at the same address
                <span className="underline ">Terms Apply</span>
                </p>

               </div>
              
                







            </div>
        </div>
    );
};

export default Plans;