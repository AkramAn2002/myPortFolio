import React, { useRef, useState } from "react";
import { EndPage, Input } from "../components";
import { FaUser, FaEnvelope, FaPhone, FaRegAddressCard } from "react-icons/fa";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import emailjs from "@emailjs/browser";
import { Toast } from "primereact/toast";
const ContactPage = () => {
  const [valueEmail, setValueEmail] = useState("");
  const [valueName, setValueName] = useState("");
  const [valuePhone, setValuePhone] = useState("");
  const [valueSub, setValueSub] = useState("");
  const [value, setValue] = useState("");

  // sendingMails :
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS
    emailjs
      .sendForm("service_g17684r", "template_06youa9", form.current, {
        publicKey: "VLy-L41DNHN5FaNa1",
      })
      .then(
        () => {
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Message send by success",
            life: 3000,
          });
        },
        (error) => {
          toast.current.show({
            severity: "FAILED...",
            summary: "Error",
            detail: `${error.text}`,
            life: 3000,
          });
        }
      );
    // Réinitialiser les valeurs du formulaire après soumission
    setValueEmail("");
    setValueName("");
    setValuePhone("");
    setValueSub("");
    setValue("");
  };
  const toast = useRef(null);
  return (
    <div className="relative mt-20" id="Contact Me">
      <Toast ref={toast} />
      {/* Make parent div relative for absolute positioning of background */}
      <h1 className="text-center mb-20 font-bold text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] ">
        Contact <span className="text-[#14008e]">Me</span>
      </h1>
      <div className="w-full flex justify-center mb-11">
        <form
          className="grid grid-rows-1 sm:w-[60%] md:grid-cols-2 md:w-[80%] md:gap-9 lg:w-[70%] lg:gap-32"
          onSubmit={handleSubmit}
          ref={form}
        >
          <div className="w-full">
            <Input
              value={valueName}
              label={"full name"}
              icon={"user"}
              onChange={(e) => setValueName(e.target.value)}
              name="user_name"
            />
            <Input
              value={valueEmail}
              label={"Email"}
              icon={"envelope"}
              onChange={(e) => setValueEmail(e.target.value)}
              name="user_email"
            />
            <Input
              value={valuePhone}
              label={"phone number"}
              icon={"phone"}
              onChange={(e) => setValuePhone(e.target.value)}
              name="user_phone"
            />
            <Input
              value={valueSub}
              label={"Subject"}
              icon={"address-card"}
              onChange={(e) => setValueSub(e.target.value)}
              name="subject"
            />
          </div>
          <div>
            <FloatLabel>
              <InputTextarea
                id="username"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                rows={5}
                cols={30}
                name="message"
                className="p-1 border-[3px] border-[#14008e] shadow-custom-1.5px bg-transparent w-full text-[16px] pl-7 rounded-lg"
                required
              />
              <label htmlFor="username" className="pl-2">
                Your message
              </label>
            </FloatLabel>
            <div className="flex justify-center">
              <button className="bg-[#14008e] p-2 pl-14  pr-14 rounded-xl shadow-custom-1.5px mt-8 hover:tracking-widest hover:shadow-2xl hover:shadow-black transition-all ease-in-out duration-500">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <EndPage />
    </div>
  );
};

export default ContactPage;
