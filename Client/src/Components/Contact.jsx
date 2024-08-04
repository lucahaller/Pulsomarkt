import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import unique from "../Assets/Images/unique.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 200,
      once: false,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s5m0vix",
        "template_i7ekoth",
        formData,
        "ph4GO5j8iOkS5OG1c"
      )
      .then(
        (result) => {
          setSuccess(t("contact.successMessage"));
          setError("");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setError(t("contact.errorMessage"));
          setSuccess("");
        }
      );
  };

  return (
    <section
      id="contacto"
      style={{ backgroundImage: `url(${unique})` }}
      className="min-h-screen flex flex-col justify-center lg:pl-40 p-8 text-white bg-cover bg-center relative"
    >
      <div className="bg-opacity-10 w-full">
        <div className="h-full">
          <div className="lg:max-w-xl ">
            <div className="mb-4 flex flex-row items-center ">
              <h2
                data-aos="fade-down-right"
                data-aos-anchor-placement="center-bottom"
                className="text-4xl font-semibold font-nunito"
              >
                {t("contact.title")}
              </h2>
              <div className="justify-end flex items-end space-x-6 ml-auto pr-8 lg:hidden">
                <a
                  data-aos="fade-up-left"
                  data-aos-anchor-placement="center-bottom"
                  href="https://www.facebook.com/profile.php?id=61563341117684"
                  className="lg:text-4xl text-2xl hover:text-pink-500 transition duration-300 ease-in-out"
                >
                  <FaFacebookF />
                </a>
                <a
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  href="#"
                  className="lg:text-4xl text-2xl hover:text-pink-500 transition duration-300 ease-in-out"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <p
              data-aos="fade-down-right"
              data-aos-anchor-placement="center-bottom"
              className="mb-8 text-xl font-sans"
            >
              {t("contact.description")}
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="max-w-sm">
              <div
                data-aos="fade-down-right"
                data-aos-anchor-placement="center-bottom"
              >
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  {t("contact.nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white focus:border-pink-500 outline-none py-1"
                  required
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
              >
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  {t("contact.emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white focus:border-pink-500 outline-none py-1"
                  required
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
              >
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium mb-2"
                >
                  {t("contact.phoneLabel")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white focus:border-pink-500 outline-none py-1"
                  required
                />
              </div>
              <div
                data-aos="fade-up-right"
                data-aos-anchor-placement="center-bottom"
              >
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  {t("contact.messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white focus:border-pink-500 outline-none py-1"
                  required
                ></textarea>
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <div className="flex items-center mt-auto">
              <button
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                type="submit"
                className="rounded-full w-96 flex items-center justify-center font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 text-white text-lg px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                {t("contact.submitButton")}
              </button>
              <div className="justify-end lg:flex items-end space-x-6 ml-auto pr-8 hidden">
                <a
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  href="https://www.facebook.com/profile.php?id=61563341117684"
                  className="text-4xl hover:text-pink-500 transition duration-300 ease-in-out"
                >
                  <FaFacebookF />
                </a>
                <a
                  data-aos="fade-up-left"
                  data-aos-anchor-placement="center-bottom"
                  href="#"
                  className="text-4xl hover:text-pink-500 transition duration-300 ease-in-out"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
