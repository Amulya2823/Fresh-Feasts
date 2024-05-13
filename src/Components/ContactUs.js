const ContactUs = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-2" >Contact Us page</h1>
            <form>
                <input className="p-4 m-2 w-60 font-semibold border-2 border-black"
                type="text" placeholder="Enter Your Name"></input>
                <input className="p-4 m-2 w-60 font-semibold border-2 border-black"
                type="text" placeholder="Enter Your Message"></input>
                <button className="rounded-lg bg-black text-white w-40 text-2xl px-4 m-4 h-14"
                >Submit</button>
            </form>

        </div>
    )
}
export default ContactUs;