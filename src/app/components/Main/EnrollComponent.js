import { Button, Label, TextInput } from "flowbite-react";
import { Select } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function EnrollComponent() {
    return (
        <>
            <div className="bg-white py-5 rounded">
                <h1 className="text-center text-3xl font-bold">ENROLL FORM</h1>
                <main className="w-[90%] mx-auto my-8 grid grid-cols-2">
                    <section>
                        <form className="flex max-w-md flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email1" value="FULL NAME (EN) " />
                                </div>
                                <TextInput
                                    id="email1"
                                    type="email"
                                    placeholder="Helen"
                                    required
                                />
                            </div>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="gender" value="Gender" />
                                </div>
                                <Select id="gender" required placeholder="Select gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                </Select>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="dob" value="DATE OF BIRTH" />
                                </div>
                                <TextInput
                                    id="dob"
                                    type="email"
                                    placeholder="04/05/2004"
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="pob" value="PLACE OF BIRTH" />
                                </div>
                                <TextInput
                                    id="pob"
                                    type="email"
                                    placeholder="select place of birth"
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="ca" value="CURRENT ADDRESS" />
                                </div>
                                <TextInput
                                    id="ca"
                                    type="email"
                                    placeholder="select current address"
                                    required
                                />
                            </div>
                        </form>
                    </section>
                    <section>
                        <form className="flex max-w-md flex-col gap-4">
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="email4" value="Your email" />
                                </div>
                                <TextInput
                                    id="email4"
                                    type="email"
                                    icon={HiMail}
                                    placeholder="name@flowbite.com"
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="dob" value="Phone Number" />
                                </div>
                                <TextInput
                                    id="dob"
                                    type="email"
                                    placeholder="4567890{Telegram}"
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="pob" value="EDUCATION" />
                                </div>
                                <TextInput
                                    id="pob"
                                    type="email"
                                    placeholder="select education"
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="ca" value="UNIVERSITY" />
                                </div>
                                <TextInput
                                    id="ca"
                                    type="email"
                                    placeholder="select university"
                                    required
                                />
                            </div>
                        </form>
                    </section>
                </main>
                <hr className="my-5 w-[90%] mx-auto"></hr>
                <div className="flex w-[90%] py-5 justify-end mx-auto">
                <div className="flex gap-5">
                <button className="btn btn-outline btn-error">CANCEL</button>
                <button className="btn btn-outline btn-success">ENROLL NOW</button>
                </div>
                </div>
            </div>
        </>
    )
}