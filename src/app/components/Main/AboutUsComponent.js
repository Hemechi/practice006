export default function AboutUsComponent() {
    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="card container mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-tite my-3 font-bold"><span className="text-dark-blue">&gt;_</span>WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?</h2>
                        <p>CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company. CSTAD will continue to provide high-quality training with the latest methodology, and roadmap as well as the best choice for those who want to be an IT expert in Cambodia.</p>
                        <div className="flex justify-center"><img src="https://istad.co/resources/img/logo_md.png" alt="CSTAD" width={270}></img></div>
                    </div>
                </div>
                <div className="card container mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-tite my-3 font-bold"><span className="text-dark-blue">&gt;_</span>VISION</h2>
                        <p>
                            Advanced IT Institute in Cambodia</p>
                    </div>
                </div>
                <div className="card container mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-tite my-3 font-bold"><span className="text-dark-blue">&gt;_</span>MISSION</h2>
                        <ul>
                            <li>_ Provide the latest methodology with high quality training and mentoring</li>
                            <li>_ Build up the capacity and career of IT experts Cambodia</li>
                            <li>_ Consult and connect CSTAD trainees to top IT careers</li>
                        </ul>
                    </div>
                </div>
                <div className="card container mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-tite my-3 font-bold"><span className="text-dark-blue">&gt;_</span>SLOGAN</h2>
                        <p>Start your IT Career with CSTAD</p>
                    </div>
                </div>
                <h1 className="text-center text-dark-blue text-3xl font-bold">
                IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.
                </h1>
                <div className="card container mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh, Cambodia</p>
                        <p>(+855) 95 990 910 | (+855) 93 990 910</p>
                        <p>Telegram Channel</p>
                        <p>Facebook</p>
                        <p>info.istad@gmail.com</p>
                        <p>www.istad.co</p>
                        <p>Youtube</p>
                    </div>
                </div>
            </div>
        </>
    );
}