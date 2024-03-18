import { Carousel } from 'flowbite-react';
import Link from 'next/link';

export default function HeroComponent() {
    return (
        <div className="hero relative min-h-screen">
            <Carousel>
                <div className="hero relative min-h-screen" style={{ backgroundImage: 'url(https://www.queensu.ca/gazette/sites/gazettewww/files/assets/WEB%20Coding%20arnold-francisca-nPhl2x4fk2s-unsplash.jpg)' }}>
                    <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
                    <div className="hero-content top-28 text-center text-neutral-content relative z-10 h-full">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-5xl font-bold">Center of Science and Technology Advanced Development</h1>
                            <p className="mb-5">CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.</p>
                            <Link href="/enroll"><button className="btn btn-primary">Enroll Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="hero relative min-h-screen" style={{ backgroundImage: 'url(https://visaenvoy.com/wp-content/uploads/2022/04/Information-Technology-Sector-1200x430.png)' }}>
                    <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
                    <div className="hero-content flex top-52 text-center text-neutral-content relative z-10 h-full">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-5xl font-bold">Vision</h1>
                            <p className="mb-5">Advanced IT Center in Cambodia</p>
                            <Link href="/enroll"><button className="btn btn-primary">Enroll Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="hero relative min-h-screen" style={{ backgroundImage: 'url(https://studyworkgrow.com.au/wp-content/uploads/2023/04/coding.jpg)' }}>
                    <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
                    <div className="hero-content flex top-48 text-center text-neutral-content relative z-10 h-full">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-5xl font-bold">Mission</h1>
                            <p className="mb-5">Provide the latest methodology with high-quality training and mentoring
                                Build up the capacity and career of IT experts Cambodia
                                Consult and connect CSTAD trainees to top IT careers</p>
                            <Link href="/enroll"><button className="btn btn-primary">Enroll Now</button></Link>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
