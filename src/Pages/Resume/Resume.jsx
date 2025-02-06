import { FaFilePdf, FaGithub, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const Resume = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center ">
        <h1 className="font-bold text-3xl text-center my-4">Online Resume</h1>
        <button className="btn font-bold btn-wide bg-[#54b689] hover:bg-[#2c845b]  flex flex-row gap-2 text-white text-base">
          <FaFilePdf></FaFilePdf>Download PDF Version
        </button>
      </div>

      <div>
        <div className="card w-[90%] h-screen mx-auto mt-24  bg-base-100 shadow-2xl ">
          <div className="m-12 ">
            {/* banner.. */}
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-4xl font-black text-[#54b689]">M O H I</h1>
                <p className="font-thin text-base mt-1">Fullstack Developer</p>
              </div>
              <div className="border-l pl-4 space-y-1">
                <p className="text-xs underline font-thin flex flex-row gap-2 items-center">
                  <FaPhone></FaPhone>01625680207
                </p>
                <p className="text-xs underline font-thin flex flex-row gap-2 items-center">
                  <MdEmail></MdEmail> umohi559@gmail.com
                </p>
                <p className="text-xs underline font-thin flex flex-row gap-2 items-center">
                  <FaGithub></FaGithub> github
                </p>
                <p className="text-xs underline font-thin flex flex-row gap-2 items-center">
                  <SiLeetcode></SiLeetcode> leetcode
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
                <p className="text-sm">
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
                  <p className="font-semibold"> Chittagong University of Engineering and Technology</p>
                  <p className="font-thin text-sm">Bachelor of Science in Computer Science & Engineering</p>
                </div>
                <div>
                  <p> 2020 – 2025 | Chittagong, Bangladesh</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <p  className="font-semibold"> Armed Police Battalion Public School And College</p>
                  <p className="font-thin text-sm">Higher Secondary School Certificate in Science (GPA- 5/5)</p>
                </div>
                <div>
                  <p> 2020 – 2025 | Chittagong, Bangladesh</p>
                </div>
              </div>
             
            </div>

            <div>
            

            <div className="mt-8">
                <div className="flex flex-row gap-1 items-end">
                    <p className="font-bold text-[#54b689] text-2xl ">I</p>
                    <p className="font-bold inline-block text-[#54b689] text-lg border-[#54b689] pl-2">
                      PROGRAMMING SKILLS
                    </p>
                </div>
                <div className="mt-3 space-y-2">
                  <p><span className="font-semibold">Programming Languages: </span> C++, Javascript, Python</p>
                  <p><span className="font-semibold">Frontend Libraries: </span>  React.js, Redux</p>
                  <p><span className="font-semibold">Backend FrameWorks: </span>  Node.js, Express.js, Django</p>
                  <p><span className="font-semibold">Databases: </span>  MySQL, Mongodb</p>
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
