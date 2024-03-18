let products = [
    {
        title: "FLUTTER MOBILE DEVELOPMENT",
        description: "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        hours: "80h",
        level: "Medium",
        thumbnail: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png'
    },
    {
        title: "IOS DEVELOPMENT",
        description: "iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.",
        hours: "80h",
        level: "Medium",
        thumbnail: 'https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png'
    },
    {
        title: "SQL & DATA MODELING WITH POSTGRESQL",
        description: "SQL &amp; Data Modeling with PostgreSQL is designed to help you understand in project analyze, database design and normalized data follow requirements from clients and Modeling the business flows. Please see the details course offers  below,",
        hours: "50h",
        level: "Medium",
        thumbnail: 'https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png'
    },
    {
        title: "WEB DESIGN",
        description: "Web Design course is designed for students to get started with Design Website Concepts. This course will focus on basic and advanced layout of website plus responsive design including UI/UX Design Concept. Moreover, CMS &amp; Dynamic content with hosting application to access in public.",
        hours: "70h",
        level: "Basic",
        thumbnail: 'https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png'
    },
    {
        title: "DEVOPS ENGINEERING",
        description: "This course will provide you with in-depth knowledge on how to build applications on the cloud. This program will help you learn the best practices for deploying SaaS, PaaS, and IaaS applications on Server. Master DevOps tools to automate and improve the overall efficiency and delivery of software applications.",
        hours: "70h",
        level: "Advanced",
        thumbnail: 'https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png'
    },
    {
        title: "C++ PROGRAMMING",
        description: "C++ is one of the world's most popular programming languages. C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems. C++ programming course will guide you to from basic language syntax to OOP concept step by step. Please see the details course offer below,",
        hours: "60h",
        level: "Basic",
        thumbnail: 'https://api.istad.co/media/image/73c3424a-39e0-450c-8969-8b35559594f5.png'
    },
    {
        title: "DOCKER",
        description: "Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers",
        hours: "45h",
        level: "Medium",
        thumbnail: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png'
    },
    {
        title: "DATA ANALYTICS",
        description: "Data analytics is the science of analyzing raw data to make conclusions about that information. Many of the techniques and processes of data analytics have been automated into mechanical processes and algorithms that work over raw data for human consumption.",
        hours: "4 months",
        level: "Advanced",
        thumbnail: 'https://api.istad.co/media/image/a3c4f87e-7a85-44c3-a568-6c5abef76cfe.png'
    },
    {
        title: "ANDROID DEVELOPMENT",
        description: "Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers. This course will teach you basic Android programming and will also take you through some advance concepts related to Android application development and include with UX / UI Design concept. Please see the course offers below,",
        hours: "70h",
        level: "Medium",
        thumbnail: 'https://api.istad.co/media/image/0d254e62-5896-4c61-b1aa-c7de02d8d40d.png'
    },
    {
        title: "NEXT.JS",
        description: "Next.js course is designed for students to develop single page application. It has all the tools you need to make the Web faster, plus Server-Side Rendering which essential for search engine optimization. We also include with UI/UX Design Concept for professional website development...",
        hours: "60h",
        level: "Medium",
        thumbnail: 'https://api.istad.co/media/image/dea9d967-e99e-49f3-a999-5b710dd5daf3.png'
    },
    {
        title: "LINUX ADMINISTRATOR",
        description: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel. Linux is typically packaged in a Linux distribution. This course will covers fundamental concept in Operating systems and others, please see the details below:",
        hours: "45h",
        level: "Basic",
        thumbnail: 'https://api.istad.co/media/image/dea9d967-e99e-49f3-a999-5b710dd5daf3.png'
    },
    {
        title: "SPRING FRAMEWORK",
        description: "Spring Course will help in understanding about Spring framework and how to build web applications, RESTful APIs using Spring, Spring MVC, Spring Boot, Thymeleaf, Spring JDBC etc. By the end of this course, students will understand all the below topics.",
        hours: "80h",
        level: "Advanced",
        thumbnail: 'https://api.istad.co/media/image/c8c41751-3bc0-4f07-9658-7d95efbae692.png'
    },
    {
        title: "BLOCKCHAIN DEVELOPMENT",
        description: "The Blockchain is a technology based on a decentralized network with “blocks” of information. Blockchain, sometimes referred to as Distributed Ledger Technology (DLT), makes the history of any digital asset unalterable and transparent through the use of decentralization and cryptographic hashing.",
        hours: "100h",
        level: "Advanced",
        thumbnail: 'https://api.istad.co/media/image/24c392c2-152b-49c0-bddb-dc12b9403b3e.png'
    },
    {
        title: "JAVA PROGRAMMING",
        description: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. This course will cover from fundamental language to OOP concept.",
        hours: "60h",
        level: "Basic",
        thumbnail: 'https://api.istad.co/media/image/b0b3f26d-4d21-45c6-9ed4-8e1f9f11e534.png'
    }
]

export default function CourseCardComponent() {
    return (
        <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-5">
            {products.map((product, index) => (
                <div key={index} className="card card-side bg-base-100 shadow-xl cursor-pointer">
                    <div className="flex flex-row">
                        <figure>
                            <img className="flex pl-4" src={product.thumbnail} alt={product.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title hover:text-dark-blue">{product.title}</h2>
                            <div className="badge bg-dark-red text-white">
                                20% Scholarship
                            </div>
                            <p className="line-clamp-2">{product.description}</p>
                        </div>
                    </div>
                    <div className="flex pt-9 pr-5">
                        <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-dark-blue mb-3">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-dark-blue mr-3">
                            <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />
                            <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" />
                            <path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" />
                        </svg>
                        </div>
                        <div>
                        <p>{product.hours}</p>
                        <p className="mt-3">{product.level}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}