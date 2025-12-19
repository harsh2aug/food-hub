const Contact = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-4 bg-gray-50 dark:bg-slate-900">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">
            Contact{" "}
            <span className="text-amber-600 dark:text-amber-400">Us</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            We'd love to hear from you. Please fill out the form below.
          </p>
        </div>

        <div className="mb-6 text-center">
          <p className="text-slate-700 dark:text-slate-300 font-medium">
            📞 +91 88650 16602
          </p>
          <p className="text-slate-700 dark:text-slate-300 font-medium">
            📧 support@foodhub.com
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="
                w-full px-4 py-2.5
                border border-slate-300 dark:border-slate-600
                bg-white dark:bg-slate-700
                text-slate-800 dark:text-slate-100
                rounded-lg
                focus:outline-none focus:ring-2 focus:ring-amber-500
              "
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full px-4 py-2.5
                border border-slate-300 dark:border-slate-600
                bg-white dark:bg-slate-700
                text-slate-800 dark:text-slate-100
                rounded-lg
                focus:outline-none focus:ring-2 focus:ring-amber-500
              "
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="
                w-full px-4 py-2.5
                border border-slate-300 dark:border-slate-600
                bg-white dark:bg-slate-700
                text-slate-800 dark:text-slate-100
                rounded-lg
                resize-none
                focus:outline-none focus:ring-2 focus:ring-amber-500
              "
            ></textarea>
          </div>

          <button
            type="submit"
            className="
              w-full bg-amber-500 dark:bg-amber-600 text-white
              py-3 rounded-lg
              font-semibold
              hover:bg-amber-600 dark:hover:bg-amber-700
              transition
              shadow-md
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
