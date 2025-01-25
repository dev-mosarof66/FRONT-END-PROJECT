import React from "react";
import colors from "../colors/colors";
import GradientText from "../components/GradientText/GradientText";
import Card from "../components/CardComponent/Card";
import courseOne from "../assets/Courses/course-01.jpg";
import courseTwo from "../assets/Courses/course-02.jpg";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <div className="text-white">
      <h1 className="text-2xl lg:text-4xl text-center font-semibold py-7 px-5">
        Complete Collection of
        {"  "}
        <span className="text-2xl lg:text-4xl">
          <GradientText
            dark={colors.textColor.darkPink}
            light={colors.textColor.lightPink}
            text="Hablu Programmer"
          />
        </span>{" "}
        Courses
      </h1>
      <div className="large-container lg:w-[96%] mx-auto lg:pl-16 xl:pl-24 ">
        <div
          className="card-container w-full py-12 space-y-8 flex flex-col md:flex md:flex-col   md:space-x-0 md:items-center md:justify-between  md:px-11 md:space-y-8 
     lg:w-fit  lg:mx-auto lg:flex lg:flex-row lg:items-baseline lg:justify-start  lg:space-x-8 flex-wrap lg:space-y-8"
        >
          <Link to="/course-description">
            <Card
              image={courseOne}
              heading="Journey Of Full Stack Web Development"
              background="We strongly believe in personalized learning and empowering individuals to kick-start thei....."
              noOfStudent={169}
              price={8000}
            />
          </Link>
          <Link to="course-description">
            <Card
              image={courseTwo}
              heading="Journey Of Full Stack Web Development"
              background="We strongly believe in personalized learning and empowering individuals to kick-start thei....."
              noOfStudent={230}
              price={6000}
            />
          </Link>
          <Link to="course-description">
            <Card
              image={courseOne}
              heading="Journey Of Full Stack Web Development"
              background="We strongly believe in personalized learning and empowering individuals to kick-start thei....."
              noOfStudent={169}
              price={8000}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
