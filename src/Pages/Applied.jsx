import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/images/one (1).jfif';
import logos from '../assets/images/one (2).jfif';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';

const Applied = () => {
    const [currentDate, setCurrentDate] = useState('');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getCurrentDate = () => {
            const now = new Date();
            const year = now.getFullYear();
            let month = now.getMonth() + 1;
            let day = now.getDate();

            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }

            return `${year}-${month}-${day}`;
        };

        setCurrentDate(getCurrentDate());
    }, []);

    const jobone = useLoaderData();
    const { title, _id, category, company, name, email, salary, date, applicants, deadline } = jobone;

    const handelApply = (event) => {
        event.preventDefault();

        const currentDate = new Date();
        const deadlineDate = new Date(deadline);

        if (currentDate <= deadlineDate) {
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;
            const resume = form.resume.value;
            const today = form.today.value;

            const applyInfo = {
                applyPerson: name,
                email,
                message,
                today,
                resume,
                title: title,
                category: category,
                company: company,
                date: date,
                deadline: deadline
            };

            if (user.email === jobone.email) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Sorry! You Can't Apply to This Job",
                    footer: '<a href="#">Because, this is your posted job</a>'
                });
            } else {
                fetch('http://localhost:5000/applys', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(applyInfo)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: "Application Completed",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })

            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Sorry! The application deadline for this job has passed.",
                footer: '<a href="#">Please check for other opportunities.</a>'
            });
        }
    }

    return (
        <section data-aos="zoom-in-down" className="p-6 bg-gray-200 rounded-lg mb-5">
            <h1 data-aos="fade-up" className="ml-0 lg:ml-40 font-bold text-4xl mb-3 md:mb-4 lg:mb-5 underline">Apply to the Job : {title}</h1>
            <h2 className='mb-4 lg:ml-20'>This Job Is posted from this email : - <span className='text-lg underline font-semibold'>{email}</span></h2>
            <div className='flex items-center justify-center gap-24 lg:ml-40'>
                <p className='text-blue-500 underline'>Posting Date : {date}</p>
                <p className='text-red-500 underline animate-pulse'>Application Deadline : {deadline}</p>
            </div>
            <form
                onSubmit={handelApply}
                noValidate=""
                action=""
                className="container flex flex-col mx-auto space-y-12"
            >
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shad">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <img src={logo} className="mt-5" alt="" />
                        <img src={logos} className="mt-5" alt="" />
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user.displayName}
                                placeholder="Full Name"
                                className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user.email}
                                placeholder="Email"
                                className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="today" className="text-sm">Today's Date :</label>
                            <input
                                type=""
                                name="today"
                                defaultValue={currentDate}
                                placeholder={currentDate}
                                className="w-36 h-16 ml-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
                            />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Short Message</label>
                            <input
                                type="text"
                                name="message"
                                placeholder="Give your short message here !"
                                className="w-full h-32 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
                            />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Your Resume Link</label>
                            <input
                                type="url"
                                name="resume"
                                placeholder=""
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 h-12 focus:dark:ring-violet-600"
                            ></input>
                        </div>
                        <input className="btn px-12 btn-block bg-blue-400" type="submit" value="Apply" />
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Applied;
