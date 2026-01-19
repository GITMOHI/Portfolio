import { FaFilePdf, FaGithub, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const Resume = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center bg-white">
        <h1 className="font-bold text-3xl text-center my-4 text-gray-900">Online Resume</h1>
        <button
          onClick={handleDownloadPDF}
          className="btn font-bold btn-wide bg-[#54b689] hover:bg-[#2c845b] flex flex-row gap-2 text-white text-base border-none"
        >
          <FaFilePdf></FaFilePdf>Download PDF Version
        </button>
      </div>

      <div>
        <div className="card w-[90%] h-screen mx-auto mt-24 bg-white shadow-2xl border border-gray-200">
          <div className="m-12 bg-white">
            {/* banner.. */}
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-4xl font-black text-[#54b689]">M O H I</h1>
                <p className="font-thin text-base mt-1 text-gray-700">Junior Software Engineer at Lab3</p>
              </div>
              <div className="border-l border-gray-300 pl-4 space-y-1">
                <p className="text-xs underline font-thin flex flex-row gap-2 items-center text-gray-700">
                  <FaPhone className="text-gray-700"></FaPhone>01625680207
                </p>
                <p className="text-xs underline font-thin flex flex-row gap-2 items-center text-gray-700">
                  <MdEmail className="text-gray-700"></MdEmail> umohi559@gmail.com
                </p>
                <p className="text-xs underline font-thin flex flex-row gap-2 items-center text-gray-700">
                  <FaGithub className="text-gray-700"></FaGithub> github
                </p>
                <p className="text-xs underline font-thin flex flex-row gap-2 items-center text-gray-700">
                  <SiLeetcode className="text-gray-700"></SiLeetcode> leetcode
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between gap-0 mt-10 items-center">
              <div className="   ">
                <img
                  src="../../../public/images/bw1.jpg"
                  className="w-32 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-[80%] ">
                <p className="text-sm text-gray-700">
                  Summarise your career here. You can make a PDF version of your
                  resume using our free Sketch template here. Donec quam felis,
                  ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Donec quam
                  felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                  orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                  mauris sit amet nibh.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <div className="flex flex-row gap-1 items-end">
                <p className="font-bold text-[#54b689] text-2xl ">I</p>
                <p className="font-bold inline-block text-[#54b689] text-lg border-[#54b689] pl-2">
                  EDUCATION
                </p>
              </div>

              <div className="flex flex-row justify-between mt-3 mb-2">
                <div>
                  <p className="font-semibold text-gray-800"> Chittagong University of Engineering and Technology</p>
                  <p className="font-thin text-sm text-gray-600">Bachelor of Science in Computer Science & Engineering</p>
                </div>
                <div>
                  <p className="text-gray-700"> 2020 – 2025 | Chittagong, Bangladesh</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <p className="font-semibold text-gray-800"> Armed Police Battalion Public School And College</p>
                  <p className="font-thin text-sm text-gray-600">Higher Secondary School Certificate in Science (GPA- 5/5)</p>
                </div>
                <div>
                  <p className="text-gray-700"> 2020 – 2025 | Chittagong, Bangladesh</p>
                </div>
              </div>
             
            </div>

            <div>

            <div className="mt-8">
                <div className="flex flex-row gap-1 items-end">
                    <p className="font-bold text-[#54b689] text-2xl ">I</p>
                    <p className="font-bold inline-block text-[#54b689] text-lg border-[#54b689] pl-2">
                      WORK EXPERIENCE
                    </p>
                </div>

                <div className="flex flex-row justify-between items-start mt-3 mb-2">
                  <div className="flex flex-row gap-4 items-start">
                    <img
                      src="../../../public/images/lab3.png"
                      alt="Lab3"
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Junior Software Engineer</p>
                      <p className="font-thin text-sm text-gray-600">Lab3</p>
                      <p className="text-sm mt-2 text-gray-700">
                        Working as a Junior Software Engineer, contributing to web application development
                        and collaborating with the team on various projects.
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-700">Present</p>
                  </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex flex-row gap-1 items-end">
                    <p className="font-bold text-[#54b689] text-2xl ">I</p>
                    <p className="font-bold inline-block text-[#54b689] text-lg border-[#54b689] pl-2">
                      PROGRAMMING SKILLS
                    </p>
                </div>
                <div className="mt-3 space-y-2">
                  <p className="text-gray-700"><span className="font-semibold text-gray-800">Programming Languages: </span> C++, Javascript, Python</p>
                  <p className="text-gray-700"><span className="font-semibold text-gray-800">Frontend Libraries: </span>  React.js, Redux</p>
                  <p className="text-gray-700"><span className="font-semibold text-gray-800">Backend FrameWorks: </span>  Node.js, Express.js, Django</p>
                  <p className="text-gray-700"><span className="font-semibold text-gray-800">Databases: </span>  MySQL, Mongodb</p>
                </div>

            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
