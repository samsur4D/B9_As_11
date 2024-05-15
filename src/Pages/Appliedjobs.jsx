import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';

const Appliedjobs = () => {
   
    useEffect(() => {
        document.title = 'JS/Applied_HISTORY';
        return () => {
          document.title = 'Title';
        };
      }, []);


    const {user} = useContext(AuthContext);
    const [appli , setAppli] = useState([]);
    

    const url = `https://b11-assignment-server.vercel.app/applys?email=${user?.email}`


    useEffect(()=>{
         fetch(url)
         .then(res => res.json())
         .then(data => {
            const newData = data.filter((item)=> item.email === user.email)
             setAppli(newData)
             console.log(newData);
         })
        
    },[])

    return (
        <div>

            {
                appli.map(applione=>(
                    <section key={applione._id} className=" py-5 lg:px-72 bg-[#bdc3c7] shadow-xl mb-10 mt-10">
                       
                    <h1 className='text-3xl font-bold underline '>My Application Include My Resume k </h1>
        <div className="container max-w-6xl  p-6 mx-auto space-y-6 sm:space-y-12">
            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                <img src={applione.resume} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 mt-5" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{applione.title}</h3>
                      <div>
                          <h1>{applione.company}</h1>
                          <h1>{applione.category}</h1>
                          <h1>{applione.applyPerson}</h1>
                          <h1>{applione.email}</h1>
                          <h1>{applione.message}</h1>
                         
                      </div>
                </div>
            </a>
        </div>
    </section>
                ))
            }
         
        </div>
    );
};

export default Appliedjobs;