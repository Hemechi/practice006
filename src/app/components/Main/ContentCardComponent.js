import React from 'react';

let products = [
    {
        title: "លេងបិទពួនជាមួយ Searching Algorithm",
        category: "Blog",
        date: "08-Dec-2022",
        thumbnail: 'https://api.istad.co/media/image/e4a4d369-72c3-441c-9df1-23cc6e2ce3f7.jpg'
    },
    {
        title: "ជជែកគ្នាលេងអំពី Web 4.0",
        category: "Blog",
        date: "24-Apr-2023",
        thumbnail: 'https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg'
    },
    {
        title: "តើអ្វីទៅជា Cybersecurity",
        category: "Blog",
        date: "04-Jan-2023",
        thumbnail: 'https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png'
    },
    {
        title: "អ្វីដែលគួរត្រៀមសម្រាប់អ្នកចង់ចាប់អាជីព IT",
        category: "Blog",
        date: "23-Dec-2022",
        thumbnail: 'https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png'
    },
    {
        title: "សេចក្តីជូនដំណឹង  ស្តីពីការប្រលងជ្រើសរើសនិស្សិតអាហារូបករណ៍  ផ្នែកព័ត៌មានវិទ្យាចំនួន  ៥០  កន្លែងក្នុងឆ្នាំសិក្សា ២០២៣",
        category: "Blog",
        date: "08-Dec-2022",
        thumbnail: 'https://api.istad.co/media/image/21a31c2d-181b-4ee0-aed9-61dfb8a09757.jpg'
    },
    {
        title: "ហេតុអ្វីបានជា Developer គួរមានចំណេះដឹងទៅលើ Docker?",
        category: "Blog",
        date: "04-Aug-2022",
        thumbnail: 'https://api.istad.co/media/image/0b7ddba0-021c-4dc3-ad73-6fe8bea44167.png'
    },
    {
        title: "ការប្រៀបធៀបរវាង Flutter និង React Native",
        category: "Blog",
        date: "12-Oct-2022",
        thumbnail: 'https://api.istad.co/media/image/aed02d47-329b-4493-89b9-56a93ed06946.png'
    },
    {
        title: "តើអ្នកអាចតម្រៀបបៀរដោយប្រើប្រាស់ Sort Algorithm បានដែរឬទេ?",
        category: "Blog",
        date: "27-Jul-2022",
        thumbnail: 'https://api.istad.co/media/image/4c81c78c-553c-409f-84c1-34018124debb.PNG'
    },
    {
        title: "Senior Spring Web Developer",
        category: "Blog",
        date: "07-Sep-2022",
        thumbnail: 'https://api.istad.co/media/image/0f73eade-8174-4d30-bed9-6319a27ce149.png'
    }
];


export default function ContentCardComponent() {
    return (
        <div className="grid xl:grid-cols-4 sm:grid-cols-1 gap-5">
            {products.map((product, index) => (
                <div key={index} className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src={product.thumbnail} alt={product.title} />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z" clipRule="evenodd" />
                                </svg>
                                <div className="badge mb-2">{product.category}</div>
                            </div>
                            <div>{product.date}</div>
                        </div>
                        <h2 className="card-title line-clamp-1">
                            {product.title}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );
}