import React from "react";
import EducationInfos from "./EducationInfos";
import DateContainer from "./DateContainer";
import EndPage from "./EndPage";

const EducationContainer = () => {
  return (
    <div className="flex items-center justify-start sm:ml-[10%] md:ml-[10%] ml-[2%] lg:justify-center lg:ml-[4.5%] w-[90%] absolute">
      <div className="flex items-center  sm400:h-[190vh] h-[230vh]  w-[2px] bg-[#14008e] shadow-custom-2.5px border-[#14008e] sm:ml-20 lg:ml-0">
        <DateContainer
          date="2017"
          postionTop="lg:top-[10px]  top-3"
          margin="ml-5"
        />
        <DateContainer
          date="2020"
          postionTop="lg:top-[210px] top-[230px]"
          margin="lg:ml-[-25px] ml-5"
        />
        <DateContainer
          date="2022"
          postionTop="lg:top-[430px] top-[460px]"
          margin="ml-5"
        />
        <DateContainer
          date="2023"
          postionTop="lg:top-[660px] top-[750px]"
          margin="lg:ml-[-25px] ml-5"
        />
        <DateContainer
          date="2024"
          postionTop="lg:top-[930px] top-[1100px]"
          margin="ml-5"
        />
        <DateContainer
          date="2025"
          postionTop="lg:top-[1230px] top-[1400px]"
          margin="ml-5"
        />
      </div>
      <div className="flex items-center justify-center w-full absolute top-0">
        <div className="grid grid-row-1 lg:grid-cols-2 gap-10">
          <div>
            <div
              className="grid grid-rows-1"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <EducationInfos
                title1={"Hight School"}
                info={
                  "I attended Hassan II High School in Deroua, where I completed my secondary education"
                }
                height={"h-[200px] p-1"}
                position1={"lg:text-end lg:ml-[85px] text-start ml-11"}
                maxWidth={"max-w-[70%]"}
              />
            </div>
          </div>
          <div>
            <div className="grid grid-rows-1">
              <div className="lg:h-[210px]"></div>
              <EducationInfos
                position1={"text-start ml-[55px]"}
                title1={"University"}
                info={
                  " I earned my DEUST in Mathematics, Physics, and Computer Science from the Faculty of Sciences and Techniques, Settat."
                }
                height={"h-[210px] p-1"}
                maxWidth={"max-w-[70%]"}
              />
            </div>
          </div>
          <div>
            <div className="grid grid-rows-1">
              <EducationInfos
                title1={"Computer Science"}
                info={
                  "I enrolled in the first year of the engineering cycle in Computer Science Engineering at the Faculty of Sciences and Techniques, Settat."
                }
                height={"h-[250px] sm:h-[230px] md:h-[230px] lg:h-[230px] p-1 "}
                position1={"lg:text-end lg:ml-[85px] text-start ml-11"}
                maxWidth={"max-w-[70%]"}
              />
            </div>
          </div>
          <div>
            <div className="grid grid-rows-1">
              <div className="lg:h-[210px]"></div>
              <EducationInfos
                position1={"text-start ml-[55px]"}
                title1={"InternShip"}
                value={"Agora technology"}
                info={
                  " Gained hands-on experience in software development and technical problem-solving. Contributed to real-world projects, enhancing my skills in coding, teamwork, and project management."
                }
                height={
                  "h-[330px] sm400:h-[300px] lg:h-[250px] md:h-[250px] sm:h-[250px] p-1"
                }
                maxWidth={"max-w-[70%]"}
              />
            </div>
          </div>
          <div>
            <div className="grid grid-rows-1">
              <EducationInfos
                title1={"InternShip"}
                value={"technopark, BlueBooks solutions"}
                info={
                  "Developed 'BlueBooks' a Laravel 10 and DaisyUI-based web application with two interfaces: one for clients and one for accountants"
                }
                height={
                  "h-[320px] sm400:h-[250px] sm:h-[250px] md:h-[250px] lg:h-[250px] p-1"
                }
                position1={"lg:text-end lg:ml-[85px] text-start ml-11"}
                maxWidth={"max-w-[70%]"}
              />
            </div>
          </div>
          <div className="grid grid-rows-1">
            <div className="lg:h-[300px]"></div>
            <EducationInfos
              position1={"text-start ml-[58px]"}
              title1={"InternShip"}
              value={"HPS Maroc"}
              info={
                "Developed a Unix server monitoring platform at HPS using Spring Boot and React.js, with features like real-time metrics, alerts, and reporting."
              }
              height={
                "h-[330px] sm400:h-[220px] lg:h-[250px] md:h-[250px] sm:h-[250px] p-1"
              }
              maxWidth={"max-w-[80%]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationContainer;
