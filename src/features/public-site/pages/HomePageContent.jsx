import React, { useRef, useState } from "react";
import "./HomePageContent.css";
import { Link } from "react-router-dom";
const HomePageContent = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(formatTime(audioRef.current.duration));
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="homepagecontent responsive-wrapper">
      <div className="page-title">
        <h1>Tin tức mới nhất</h1>
      </div>
      <div className="magazine-layout">
        <div className="magazine-column">
          <article className="article">
            <figure className="article-img">
              <img src="https://i1-vnexpress.vnecdn.net/2026/01/18/img-2291-jpg-1768731017-176873-9503-8193-1768731762.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=9--QF77v1WnD6AEqDGifSg" />
            </figure>
            <h2 className="article-title article-title--large">
              <a href="#" className="article-link">
                Hành trình trở thành{" "}
                <mark className="mark mark--primary">
                  bác sĩ nội trú xuất sắc
                </mark>{" "}
                của thủ khoa Y Hà Nội
              </a>
            </h2>
            <div className="article-excerpt">
              <p>
                Học trường huyện, tới giữa lớp 12 mới ôn khối B, Mạnh Hùng không
                chỉ đỗ Đại học Y Hà Nội, mà sau đó còn trở thành thủ khoa đầu
                ra, bác sĩ nội trú xuất sắc.
              </p>
            </div>
          </article>
          <article className="article">
            {/* <figure className="article-img">
              <img src="https://i1-vnexpress.vnecdn.net/2026/01/28/d2776809-0bc1-43ec-a15c-0915b3-1913-9489-1769566173.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=VT4vRagiZDwkb927P9l_3g" />
            </figure> */}
            <h2 className="article-title article-title--medium">
              <a href="#" className="article-link">
                Tranh cãi sinh viên dùng công cụ{" "}
                <mark className="mark mark--primary">cướp slot môn học</mark>
              </a>
            </h2>
          </article>
        </div>
        <div className="magazine-column">
          <article className="article">
            <figure className="article-img">
              <img src="https://i1-vnexpress.vnecdn.net/2026/01/31/4098266225582035685-1769835468-5407-8176-1769863325.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=bVjs1KSnHyippP3Qj5Jtew" />
            </figure>
            <h2 className="article-title article-title--medium">
              <Link to="/article-details" className="article-link">
                Thủ khoa giành 5 giải Olympic Toán, Lý toàn quốc
              </Link>
            </h2>
            <div className="article-excerpt">
              <p>
                Đoàn Minh Lượng từng giành 5 giải Olympic toàn quốc môn Toán và
                Lý, có bài báo trên tạp chí Q1, trước khi tốt nghiệp thủ khoa
                Đại học Phenikaa.
              </p>
            </div>
          </article>
          <article className="article">
            <figure className="article-img">
              <img src="https://i1-vnexpress.vnecdn.net/2026/01/08/image004-1767885332-1767885459-8152-1767885516.png?w=680&h=0&q=100&dpr=1&fit=crop&s=V9lJfAcr5yUi5znGbh5QhQ" />
            </figure>
            <h2 className="article-title article-title--medium">
              <a href="#" className="article-link">
                Thêm chương trình đào tạo nhân sự AI chất lượng cao
              </a>
            </h2>
            <div className="article-excerpt">
              <p>
                Chương trình "Học viện AI tại Việt Nam" do Đại học Bách khoa,
                NIC và HLE triển khai, cấp chứng chỉ được công nhận tại các tập
                đoàn công nghệ lớn như Nvidia, Viettel, FPT…
              </p>
            </div>
          </article>
        </div>

        <div className="magazine-column">
          <article className="article">
            <figure className="article-img">
              <img src="https://i1-vnexpress.vnecdn.net/2026/01/28/kimdohyeong-1769587281-1769587-9368-3384-1769587339.jpg?w=300&h=180&q=100&dpr=2&fit=crop&s=GykQEGDLu3N64I9iXCnyrQ" />
            </figure>
            <h2 className="article-title article-title--small">
              <a href="#" className="article-link">
                Trường Quốc tế Singapore có{" "}
                <mark className="mark mark--secondary">Thủ khoa thế giới</mark>{" "}
                kỳ thi Cambridge 2025
              </a>
            </h2>
          </article>
          <article className="article">
            <figure className="article-img">
              <img src="https://i1-vnexpress.vnecdn.net/2026/01/26/z7463767962270-a99ad5f203e3485-6596-8810-1769398293.jpg?w=300&h=180&q=100&dpr=2&fit=crop&s=qGUFflnvy5BsU70_tj5Rdg" />
            </figure>
            <h2 className="article-title article-title--small">
              <a href="#" className="article-link">
                Chàng trai cõng mẹ khi nhận bằng tốt nghiệp xuất sắc
              </a>
            </h2>
          </article>
        </div>
        <div className="magazine-column">
          <article className="article">
            {/* <figure className="article-img">
              <iframe
                width="100%"
                height="280"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </figure> */}
            <h2 className="article-title article-title--medium">
              <a href="#" className="article-link">
                <mark className="mark mark--secondary">
                  Ăn mày mà đòi xôi gấc
                </mark>{" "}
                trong tiếng Anh nói thế nào?
              </a>
            </h2>
            <div className="article-excerpt">
              <p>
                "Ăn mày mà đòi xôi gấc" là cách nói để chỉ những người ở vị thế
                yếu nhưng lại đưa ra đòi hỏi cao. Bạn có biết cách nói tương tự
                trong tiếng Anh?.
              </p>
            </div>
          </article>
          <article className="article">
            <small className="article-category">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="28"
                height="22"
                viewBox="0 0 28 22"
              >
                <defs>
                  <clipPath id="clip-headphones">
                    <rect width="28" height="22" />
                  </clipPath>
                </defs>
                <g id="headphones" clipPath="url(#clip-headphones)">
                  <g
                    id="Group_2"
                    data-name="Group 2"
                    transform="translate(-3680 -609)"
                  >
                    <path
                      id="Subtraction_1"
                      data-name="Subtraction 1"
                      d="M5,12H5A5.274,5.274,0,0,1,0,6.5,5.274,5.274,0,0,1,5,1V12Z"
                      transform="translate(3680 619)"
                    />
                    <rect
                      id="Rectangle_18"
                      data-name="Rectangle 18"
                      width="2"
                      height="11"
                      transform="translate(3686 620)"
                    />
                    <path
                      id="Subtraction_5"
                      data-name="Subtraction 5"
                      d="M1.243,12H.045C.015,11.67,0,11.334,0,11A11,11,0,0,1,18.778,3.222,10.925,10.925,0,0,1,22,11c0,.331-.015.667-.045,1h-1.2a14.108,14.108,0,0,0-2.685-6.241A8.982,8.982,0,0,0,11,2,8.982,8.982,0,0,0,3.929,5.759,14.109,14.109,0,0,0,1.243,12Z"
                      transform="translate(3683 609)"
                    />
                    <path
                      id="Subtraction_6"
                      data-name="Subtraction 6"
                      d="M5,0H5A5.274,5.274,0,0,0,0,5.5,5.274,5.274,0,0,0,5,11V0Z"
                      transform="translate(3708 631) rotate(180)"
                    />
                    <rect
                      id="Rectangle_23"
                      data-name="Rectangle 23"
                      width="2"
                      height="11"
                      transform="translate(3700 620)"
                    />
                    <path
                      id="Path_8"
                      data-name="Path 8"
                      d="M.156-.031,2.125-1.687,2,2H0Z"
                      transform="translate(3683 619)"
                    />
                    <path
                      id="Path_9"
                      data-name="Path 9"
                      d="M1.969-.031,0-1.687.125,2h2Z"
                      transform="translate(3702.875 619)"
                    />
                  </g>
                </g>
              </svg>
              <span> Postcast</span>
            </small>
            <h2 className="article-title article-title--medium">
              <a href="#" className="article-link">
                Nghe bài hát này vào lúc học bài{" "}
                <mark className="mark mark--tertiary"> trong vòng 20 ngày</mark>{" "}
                thì sẽ đến Tết
              </a>
            </h2>
            <div className="article-podcast-player">
              <audio
                ref={audioRef}
                src="https://res.cloudinary.com/dz9q8zkeh/video/upload/v1769991641/lofi-chill-372954_uxkmzz.mp3"
                onEnded={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
              />
              <button className="podcast-play-button" onClick={togglePlay}>
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M232.3125,114.34375,88.34375,26.35937A15.99781,15.99781,0,0,0,64,40.00781V215.99219a16.00521,16.00521,0,0,0,24.34375,13.64843L232.3125,141.65625a16.00727,16.00727,0,0,0,0-27.3125Z"></path>
                  </svg>
                )}
              </button>
              <div
                className="podcast-progression"
                style={{
                  backgroundImage: `linear-gradient(to right, #f99970 ${progress}%, #d9d4cd ${progress}%, #d9d4cd 100%)`,
                }}
              ></div>
              <span className="podcast-time">{currentTime}</span>
            </div>
            <div className="article-podcast-info">{/* Postcast info */}</div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
