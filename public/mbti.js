import enfjBg from "./bgPersonality/enfj.png";
import enfpBg from "./bgPersonality/enfp.png";
import entjBg from "./bgPersonality/entj.png";
import entpBg from "./bgPersonality/entp.png";
import esfjBg from "./bgPersonality/esfj.png";
import esfpBg from "./bgPersonality/esfp.png";
import estjBg from "./bgPersonality/estj.png";
import estpBg from "./bgPersonality/estp.png";
import infjBg from "./bgPersonality/infj.png";
import infpBg from "./bgPersonality/infp.png";
import intjBg from "./bgPersonality/intj.png";
import intpBg from "./bgPersonality/intp.png";
import isfjBg from "./bgPersonality/isfj.png";
import isfpBg from "./bgPersonality/isfp.png";
import istjBg from "./bgPersonality/istj.png";
import istpBg from "./bgPersonality/istp.png";

import enfj from "./personality-img/enfj.png";
import enfp from "./personality-img/enfp.png";
import entj from "./personality-img/entj.png";
import entp from "./personality-img/entp.png";
import esfj from "./personality-img/esfj.png";
import esfp from "./personality-img/esfp.png";
import estj from "./personality-img/estj.png";
import estp from "./personality-img/estp.png";
import infj from "./personality-img/infj.png";
import infp from "./personality-img/infp.png";
import intj from "./personality-img/intj.png";
import intp from "./personality-img/intp.png";
import isfj from "./personality-img/isfj.png";
import isfp from "./personality-img/isfp.png";
import istj from "./personality-img/istj.png";
import istp from "./personality-img/istp.png";

export const mbti = [
  {
    label: "ENFP",
    value: 1,
    description:
      "Enthusiastic, creative, and sociable. ENFPs are known for their warmth and ability to inspire others with their innovative ideas. They value authenticity and enjoy exploring possibilities and connecting with people on a deep level.",
    reasonable_job: "Creative Director, Life Coach, Event Planner",
    strengths: ["Innovative thinking", "Inspiring others", "Adaptability"],
    weaknesses: [
      "Can be indecisive",
      "May overthink",
      "Sensitive to criticism",
    ],
    communication_style:
      "Expressive and empathetic, enjoys open discussions and brainstorming.",
    hobbies_interests: [
      "Artistic pursuits",
      "Exploring new cultures",
      "Community involvement",
    ],
    stress_response:
      "May seek creative outlets or engage in social activities to recharge.",
    leadership_style:
      "Inspirational leader who encourages collaboration and individual expression.",
    avatar: enfp,
    imageBg: enfpBg,
    role: "Diplomat",
  },
  {
    label: "ISFP",
    value: 13,
    description:
      "Artistic, sensitive, and reserved. ISFPs are often deeply in tune with their emotions and the beauty of the world. They have a keen eye for aesthetics and express themselves through various forms of art and creativity.",
    reasonable_job: "Artist, Graphic Designer, Landscape Architect",
    strengths: [
      "Artistic expression",
      "Sensitive to others' needs",
      "Adaptable",
    ],
    weaknesses: [
      "May avoid conflict",
      "Tendency to be perfectionistic",
      "Reserved in group settings",
    ],
    communication_style:
      "Prefers one-on-one or small group conversations, values sincerity and personal connections.",
    hobbies_interests: [
      "Art and design",
      "Nature exploration",
      "Music and performance arts",
    ],
    stress_response:
      "May seek solace in creative activities or spend time in nature.",
    leadership_style:
      "Leads by example, fostering a supportive and creative environment.",
    avatar: isfp,
    imageBg: isfpBg,
    role: "Explorer",
  },
  {
    label: "INFJ",
    value: 8,
    description:
      "Insightful, compassionate, and idealistic. INFJs are driven by a strong sense of purpose and a desire to make a positive impact on the world. They are known for their deep insights, empathy, and commitment to personal growth.",
    reasonable_job: "Counselor, Social Worker, Humanitarian",
    strengths: ["Empathy", "Strategic thinking", "Dedication to causes"],
    weaknesses: [
      "Perfectionistic tendencies",
      "May be overly self-critical",
      "Difficulty with confrontation",
    ],
    communication_style:
      "Warm and empathetic, prefers deep and meaningful conversations, values authenticity.",
    hobbies_interests: [
      "Philosophy and spirituality",
      "Helping others",
      "Creative writing",
    ],
    stress_response:
      "May seek alone time for reflection or engage in activities that align with their values.",
    leadership_style:
      "Inspires and motivates, leading with a vision for positive change.",
    avatar: infj,
    imageBg: infjBg,
    role: "Diplomat",
  },
  {
    label: "ISTP",
    value: 15,
    description:
      "Analytical, independent, and adventurous. ISTPs are hands-on problem solvers who enjoy exploring the world around them. They are logical thinkers and thrive in situations that require practical, strategic solutions.",
    reasonable_job: "Mechanical Engineer, Pilot, Emergency Room Doctor",
    strengths: [
      "Analytical mindset",
      "Practical problem-solving",
      "Adventurous spirit",
    ],
    weaknesses: [
      "Can be reserved",
      "Tendency to avoid commitment",
      "Impatient with inefficiency",
    ],
    communication_style:
      "Direct and straightforward, values concise information and practical discussions.",
    hobbies_interests: [
      "Outdoor activities",
      "Mechanical and technical pursuits",
      "Travel and exploration",
    ],
    stress_response:
      "May engage in hands-on activities or seek solitude to recharge.",
    leadership_style:
      "Leads by example, excelling in crisis situations and strategic problem-solving.",
    avatar: istp,
    imageBg: istpBg,
    role: "Explorer",
  },
  {
    label: "ENFJ",
    value: 0,
    description:
      "Charismatic, empathetic, and supportive. ENFJs are natural leaders who excel at understanding and motivating people. They are driven by a desire to create harmonious relationships and bring out the best in others.",
    reasonable_job: "Human Resources Manager, Teacher, Nonprofit Director",
    strengths: ["Charismatic leadership", "Empathy", "Team building"],
    weaknesses: [
      "May be overly self-sacrificing",
      "Struggles with criticism",
      "Perfectionistic tendencies",
    ],
    communication_style:
      "Warm and persuasive, values open communication and collaboration.",
    hobbies_interests: [
      "Social events and gatherings",
      "Supporting community causes",
      "Mentoring",
    ],
    stress_response:
      "May seek support from loved ones or engage in activities that promote connection.",
    leadership_style:
      "Collaborative leader who empowers and nurtures team members.",
    avatar: enfj,
    imageBg: enfjBg,
    role: "Diplomat",
  },
  {
    label: "INTJ",
    value: 10,
    description:
      "Strategic, logical, and visionary. INTJs are masterminds who excel at long-term planning and implementing innovative ideas. They are driven by a pursuit of knowledge and a desire to achieve their goals with precision.",
    reasonable_job: "CEO, Scientist, Strategic Planner",
    strengths: [
      "Strategic thinking",
      "Innovative problem-solving",
      "Goal-oriented",
    ],
    weaknesses: [
      "Impatience with inefficiency",
      "May be perceived as distant",
      "Difficulty with small talk",
    ],
    communication_style:
      "Direct and concise, values discussions focused on ideas and goals.",
    hobbies_interests: [
      "Intellectual pursuits",
      "Innovative projects",
      "Strategy games",
    ],
    stress_response:
      "May retreat to a quiet space for focused thinking or engage in solitary activities.",
    leadership_style:
      "Strategic and visionary leader, excelling in planning and execution.",
    avatar: intj,
    imageBg: intjBg,
    role: "Analyst",
  },
  {
    label: "ENTJ",
    value: 2,
    description:
      "Confident, decisive, and assertive. ENTJs are natural leaders who thrive in strategic planning and execution. They are goal-oriented and have a strong focus on efficiency and productivity.",
    reasonable_job: "Entrepreneur, Management Consultant, Military Leader",
    strengths: ["Decisive leadership", "Efficiency", "Strategic planning"],
    weaknesses: [
      "Intolerance for incompetence",
      "May be perceived as overly dominant",
      "Impatient with indecision",
    ],
    communication_style:
      "Direct and assertive, values efficient and goal-oriented discussions.",
    hobbies_interests: [
      "Leadership seminars",
      "Competitive sports",
      "Strategic board games",
    ],
    stress_response:
      "May engage in physical activities or strategic thinking exercises to cope with stress.",
    leadership_style:
      "Confident and assertive leader, excelling in strategic planning and execution.",
    avatar: entj,
    imageBg: entjBg,
    role: "Analyst",
  },
  {
    label: "ESFP",
    value: 5,
    description:
      "Energetic, outgoing, and spontaneous. ESFPs live in the present moment and love to engage with others. They are enthusiastic, adaptable, and enjoy bringing excitement to their surroundings.",
    reasonable_job: "Actor/Actress, Sales Representative, Event Coordinator",
    strengths: ["Energetic and lively", "Adaptable", "Natural storytellers"],
    weaknesses: [
      "Tendency to be impulsive",
      "May avoid long-term planning",
      "Sensitive to criticism",
    ],
    communication_style:
      "Expressive and engaging, values interactive and lively conversations.",
    hobbies_interests: [
      "Performing arts",
      "Social events and gatherings",
      "Outdoor adventures",
    ],
    stress_response:
      "May seek social activities or engage in creative pursuits to alleviate stress.",
    leadership_style:
      "Charismatic leader who thrives in dynamic and people-oriented environments.",
    avatar: esfp,
    imageBg: esfpBg,
    role: "Explorer",
  },
  {
    label: "INFP",
    value: 9,
    description:
      "Idealistic, compassionate, and creative. INFPs are deeply in touch with their values and strive to make a positive impact on the world. They are imaginative, individualistic, and often seek authenticity in their lives.",
    reasonable_job: "Writer, Counselor, Social Worker",
    strengths: ["Creativity", "Empathy", "Devotion to values"],
    weaknesses: [
      "Tendency to be perfectionistic",
      "May struggle with practical details",
      "Difficulty with criticism",
    ],
    communication_style:
      "Warm and sincere, values deep and meaningful conversations.",
    hobbies_interests: [
      "Creative writing",
      "Nature exploration",
      "Advocacy for social causes",
    ],
    stress_response:
      "May retreat to a quiet space for reflection or engage in creative activities.",
    leadership_style:
      "Inspirational leader who fosters a supportive and authentic work environment.",
    avatar: infp,
    imageBg: infpBg,
    role: "Diplomat",
  },
  {
    label: "INTP",
    value: 11,
    description:
      "Analytical, curious, and logical. INTPs are thinkers who enjoy exploring ideas and theories. They have a deep intellectual curiosity and are often drawn to complex problem-solving and abstract concepts.",
    reasonable_job: "Research Scientist, Software Developer, Philosopher",
    strengths: [
      "Analytical thinking",
      "Curiosity",
      "Innovative problem-solving",
    ],
    weaknesses: [
      "Tendency to be indecisive",
      "May appear distant",
      "Difficulty with routine tasks",
    ],
    communication_style:
      "Thoughtful and analytical, values discussions focused on ideas and theories.",
    hobbies_interests: [
      "Scientific research",
      "Philosophical discussions",
      "Creative coding projects",
    ],
    stress_response:
      "May immerse in intellectual pursuits or seek solitary activities to cope with stress.",
    leadership_style:
      "Strategic and insightful leader, excelling in problem-solving and innovation.",
    avatar: intp,
    imageBg: intpBg,
    role: "Analyst",
  },
  {
    label: "ISTJ",
    value: 14,
    description:
      "Detail-oriented, responsible, and organized. ISTJs are practical and systematic individuals who value structure and tradition. They are reliable, efficient, and excel in tasks that require attention to detail.",
    reasonable_job: "Accountant, Project Manager, Judge",
    strengths: ["Organized", "Reliable", "Attention to detail"],
    weaknesses: [
      "Resistance to change",
      "May be perceived as rigid",
      "Difficulty with ambiguity",
    ],
    communication_style:
      "Clear and concise, values discussions that provide structure and follow established protocols.",
    hobbies_interests: [
      "Project management",
      "Documentary watching",
      "Traditional crafts",
    ],
    stress_response:
      "May create structured plans or engage in routine activities to manage stress.",
    leadership_style:
      "Methodical and detail-oriented leader, ensuring precision and efficiency.",
    avatar: istj,
    imageBg: istjBg,
    role: "Sentinel",
  },
  {
    label: "ENTP",
    value: 3,
    description:
      "Innovative, curious, and adaptable. ENTPs are idea generators who enjoy exploring possibilities and challenging the status quo. They are quick thinkers, love debate, and thrive in dynamic environments.",
    reasonable_job: "Innovation Consultant, Entrepreneur, Political Analyst",
    strengths: ["Innovative thinking", "Adaptability", "Energetic approach"],
    weaknesses: [
      "Tendency to be argumentative",
      "May struggle with follow-through",
      "Impatient with routine tasks",
    ],
    communication_style:
      "Enthusiastic and inquisitive, values dynamic and open-minded discussions.",
    hobbies_interests: [
      "Debating",
      "Technology exploration",
      "Brainstorming sessions",
    ],
    stress_response:
      "May seek diverse challenges or engage in stimulating activities to alleviate stress.",
    leadership_style:
      "Inspirational leader who encourages creativity and fosters an innovative culture.",
    avatar: entp,
    imageBg: entpBg,
    role: "Analyst",
  },
  {
    label: "ISFJ",
    value: 12,
    description:
      "Caring, dependable, and considerate. ISFJs are nurturing individuals who prioritize the well-being of others. They are loyal, supportive, and often take on a caregiving role in relationships.",
    reasonable_job: "Nurse, Teacher, Librarian",
    strengths: ["Compassion", "Dependability", "Attention to detail"],
    weaknesses: [
      "May struggle with assertiveness",
      "Difficulty saying no",
      "May take criticism personally",
    ],
    communication_style:
      "Warm and considerate, values personal connections and harmonious discussions.",
    hobbies_interests: [
      "Caring for others",
      "Reading",
      "Creating cozy and organized spaces",
    ],
    stress_response:
      "May seek comfort from loved ones or engage in calming activities.",
    leadership_style:
      "Supportive and compassionate leader, fostering a harmonious work environment.",
    avatar: isfj,
    imageBg: isfjBg,
    role: "Sentinel",
  },
  {
    label: "ESTJ",
    value: 6,
    description:
      "Efficient, organized, and practical. ESTJs are natural leaders who value order and structure. They are decisive, take responsibility seriously, and excel in managing people and projects.",
    reasonable_job: "Manager, Police Officer, Military Officer",
    strengths: ["Efficiency", "Organized leadership", "Strategic thinking"],
    weaknesses: [
      "May be perceived as too authoritative",
      "Intolerance for inefficiency",
      "Difficulty with ambiguity",
    ],
    communication_style:
      "Direct and authoritative, values discussions that are focused on efficiency and results.",
    hobbies_interests: [
      "Leadership seminars",
      "Organizing events",
      "Sports and physical activities",
    ],
    stress_response:
      "May engage in physical activities or strategic thinking exercises to cope with stress.",
    leadership_style:
      "Confident and assertive leader, excelling in strategic planning and execution.",
    avatar: estj,
    imageBg: estjBg,
    role: "Sentinel",
  },
  {
    label: "ESTP",
    value: 7,
    description:
      "Energetic, action-oriented, and outgoing. ESTPs are thrill-seekers who enjoy taking risks and living in the moment. They are adaptable, hands-on problem solvers with a love for excitement and adventure.",
    reasonable_job: "Athlete, Sales Manager, Emergency Services",
    strengths: ["Adventurous spirit", "Adaptability", "Action-oriented"],
    weaknesses: [
      "Tendency to be impulsive",
      "May overlook long-term consequences",
      "Difficulty with routine tasks",
    ],
    communication_style:
      "Dynamic and assertive,values discussions that are engaging and practical.",
    hobbies_interests: [
      "Extreme sports",
      "Sales and negotiation",
      "Outdoor adventures",
    ],
    stress_response:
      "May seek physical activities or exciting challenges to cope with stress.",
    leadership_style:
      "Bold and hands-on leader, thriving in dynamic and fast-paced environments.",
    avatar: estp,
    imageBg: estpBg,
    role: "Explorer",
  },
  {
    label: "ESFJ",
    value: 4,
    description:
      "Social, nurturing, and responsible. ESFJs are people-oriented individuals who thrive on creating and maintaining social harmony. They are supportive, empathetic, and often take on a caretaking role in their communities.",
    reasonable_job: "Event Planner, Teacher, Human Resources Specialist",
    strengths: ["Empathy", "Team building", "Reliability"],
    weaknesses: [
      "May be overly self-sacrificing",
      "Difficulty with criticism",
      "Struggles with delegating",
    ],
    communication_style:
      "Warm and supportive, values open and harmonious discussions.",
    hobbies_interests: [
      "Organizing social events",
      "Helping others",
      "Community service",
    ],
    stress_response:
      "May seek support from loved ones or engage in activities that promote connection.",
    leadership_style:
      "Supportive and collaborative leader, fostering a positive and inclusive work environment.",
    avatar: esfj,
    imageBg: esfjBg,
    role: "Sentinel",
  },
];
