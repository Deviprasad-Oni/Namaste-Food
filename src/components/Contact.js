const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className=" p-4 m-4 border border-black "
          placeholder="name"
        />
        <input
          type="text"
          className=" p-4 m-4 border border-black"
          placeholder="message"
        />
        <button className=" p-4 m-4 border border-black bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
