import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];


  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 35 },
    { skill: "HTML", ratingPercentage: 40 },
    { skill: "CSS", ratingPercentage: 45 },
    { skill: "Ruby", ratingPercentage: 20 },
    { skill: "React JS", ratingPercentage: 30 },
    { skill: "Node JS", ratingPercentage: 30 },
    { skill: "jQuery", ratingPercentage: 30 },
    { skill: "Python", ratingPercentage: 45 },
    { skill: "C++", ratingPercentage: 40 },
    { skill: "Java", ratingPercentage: 40 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Hotel Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A reservation website for showcasing and selling hotel rooms and bed and breakfast homes onlne with payment system integration using Stripe",
      subHeading:
        "Technologies Used: Ruby On Rails, JSX, Bootstrap and Stripe",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Southern New Hampshire University"}
        subHeading={"Took a gap year during sophomore year - awaiting transfer status"}
        fromDate={"2019"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"Altcademy"}
        subHeading={"An online bootcamp focusing on full stack web and mobile development"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"Mission Hills High School"}
        fromDate={"2015"}
        toDate={"2019"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"National STEM Honor Society"}
          subHeading={"Software Engineering Intern"}
          fromDate={"08/02/21"}
          toDate={"10/10/21"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Interned for NSTEM as a web and mobile developer - fixing bugs and creating new websites.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
        </div>
        <ResumeHeading
          heading={"National STEM Honor Society"}
          subHeading={"Data Analyst Intern"}
          fromDate={"08/02/21"}
          toDate={"10/10/21"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Interned for NSTEM as data analyst - weekly assignments where we would use Google Analytics to illustrate and present our user and client data such as purchases, user traffic and online trends.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - We were required to become certified in Google's Advanced Analytics Certification program.{" "}
          </span>
          <br />
        </div>
        <ResumeHeading
          heading={"Enterprise Hall"}
          subHeading={"Data Analyst Intern"}
          fromDate={"08/02/21"}
          toDate={"09/05/21"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Interned for Enterprise Hall, an online internship where we are given weekly coding assignments which require us to use MatLab and Python debug segments of code and make a visualization of the data using Excel as well as an analysis of what we did. 
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Music"
        description="I play alto saxophone and the piano. Whenever I have some spare time, and nobody is around for me to bother, I bring out an instrument and play some old tunes or improve my skills."
      />
      <ResumeHeading
        heading="Video Games"
        description="Video games inspired me to get into computer science, and as cliche as that sounds, I have been playing for well over a decade now and will continue to do so. I try not to delve too much of my time into video games, but I love MMOs like Destiny 2 and story-based games like God of War."
      />
      <ResumeHeading
        heading="Model Puzzles/Projects"
        description="If I want to do something genuinely relaxing, I will buy a model set of a vehicle, building, or car. I piece each part (like legos, but much more complicated and precise) and recreate the model - kind of like a puzzle. "
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="Could not load file"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return ( //added fade-in class to line 260
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;