import Input from "../components/Input";

export default function Contact() {
    return (
        <div>
            <div className="bg-blue-500">
                <h1>Contact Us</h1>
                <p>You can reach us at 123 Main Street, Anytown, USA</p>
            </div>
            <div className="p-4 grid grid-cols-3 gap-4">
                <Input label="Name" placeholder="Enter your name" />
                <Input label="Email" placeholder="Enter your email" />
                <Input label="Message" placeholder="Enter your message" />
            </div>
            <div className="p-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
            </div>
        </div>
    );
}