import React, { useState, useRef } from "react";
import "./ArticleDetails.css";
const ArticleDetails = () => {
  const [opinions, setOpinions] = useState([]);
  const totalOpinions = useRef(0);
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const content = inputRef.current.value;
    if (content && content.trim()) {
      const newOpinion = {
        id: Date.now(),
        content: content,
        time: new Date().toLocaleString("vi-VN"),
      };
      setOpinions((prev) => [newOpinion, ...prev]);
      totalOpinions.current += 1;
      inputRef.current.value = "";
    }
  };

  return (
    <div className="article-details responsive-wrapper">
      <div className="article-container">
        <main className="article-main">
          <span className="article-time">
            Chủ nhật, 1/2/2026, 06:00 (GMT+7)
          </span>
          <h1 className="article-heading">
            Thủ khoa giành 5 giải Olympic Toán, Lý toàn quốc
          </h1>

          <p className="article-lead">
            Đoàn Minh Lượng từng giành 5 giải Olympic toàn quốc môn Toán và Lý,
            có bài báo trên tạp chí Q1, trước khi tốt nghiệp thủ khoa Đại học
            Phenikaa.
          </p>
          <p>
            Lượng, 23 tuổi, quê Hải Phòng, vừa tốt nghiệp chương trình Vật lý
            tài năng của Đại học Phenikaa với điểm tổng kết (GPA) 3.86/4. Nhận
            bằng xuất sắc hôm 31/1, Lượng nói không bất ngờ khi đứng đầu trong
            gần 360 sinh viên ra trường đợt này, bởi kết quả được trường cập
            nhật thường xuyên.
          </p>

          <p>
            5 năm trước, với giải nhì học sinh giỏi Vật lý cấp tỉnh và 27,95
            điểm tổ hợp A01 (Toán, Lý, Anh), Lượng được tuyển thẳng, kèm học
            bổng vào chương trình Vật lý tài năng. Nam sinh cho hay muốn học sâu
            về ngành này bởi thấy có thể áp dụng vào nhiều lĩnh vực trong thực
            tiễn, chọn Phenikaa vì trường có nhiều giảng viên tu nghiệp ở nước
            ngoài về.
          </p>

          <p className="article-quote">
            "Mình xác định học Vật lý là phải nghiên cứu nên giảng viên là yếu
            tố quyết định", Lượng nói.
          </p>
          <figure className="article-figure">
            <img
              src="https://i1-vnexpress.vnecdn.net/2026/01/31/4098266225582035685-1769835468-4840-2303-1769863325.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=fx08u8GftUs9RGKjg6fW1w"
              alt="Đoàn Minh Lượng"
            />
            <figcaption>Đoàn Minh Lượng</figcaption>
          </figure>

          <p>
            Dù có nền tảng Vật lý từ bậc phổ thông, thời gian đầu, Lượng "sốc"
            vì khối lượng kiến thức mới. Nam sinh cũng phải làm quen lại với
            nhiều ký hiệu Toán học bởi cách viết khác thời phổ thông.
          </p>

          <p>
            Là học sinh trường làng dự thi học sinh giỏi cấp tỉnh thời THPT,
            Lượng thấm thía tầm quan trọng của tự học. Nhưng ở đại học, nam sinh
            thấy tinh thần này phải "gấp 10 lần". Ngoài xem lại giáo trình,
            Lượng học từ các bài báo khoa học, tài liệu trên mạng.
          </p>

          <p>
            Chỉ sau 2 tháng bắt nhịp, Lượng thử sức với kỳ thi Olympic Toán sinh
            viên toàn quốc và giành cú đúp huy chương đồng (môn Đại số tuyến
            tính và Giải tích). Hai năm tiếp theo, nam sinh quay lại thế mạnh sở
            trường khi thi Olympic Vật lý. Với lịch ôn luyện 3-4 buổi mỗi tuần,
            có giai đoạn cao điểm học 15 tiếng một ngày, Lượng giành 3 giải nhất
            trong hai lần tham dự, ở cả nội dung bài tập cá nhân và trắc nghiệm
            đồng đội.
          </p>

          <p>
            Đại học Phenikaa cho biết hiếm sinh viên nào ở trường đạt nhiều giải
            Olympic toàn quốc ở cả Toán và Vật lý như Lượng. Dù vậy, nam sinh
            cho rằng giai đoạn tham gia nghiên cứu khoa học, từ đầu năm thứ ba,
            căng thẳng hơn.
          </p>

          <p>
            "Bởi có nhiều thứ lạ lẫm và vô cùng nhức đầu", Lượng kể. "Nhiều hôm,
            mình bỏ cả ăn tối, ở trường đến nửa đêm để làm".
          </p>

          <p>
            Nỗ lực đó được đền đáp bằng một bài báo trong nước và một bài công
            bố trên The European Physical Journal C – tạp chí nhóm Q1, uy tín
            hàng đầu lĩnh vực Vật lý hạt. Trong đó, Lượng đều là tác giả đầu.
          </p>

          <figure className="article-figure">
            <img
              src="https://i1-vnexpress.vnecdn.net/2026/01/31/Screen-Shot-2026-01-31-at-14-5-7898-6308-1769863325.png?w=1020&h=0&q=100&dpr=1&fit=crop&s=L5-nlVDwmqJoid-rtZcu-w"
              alt="Thành tích học tập"
            />
            <figcaption>Đoàn Minh Lượng trong ngày tốt nghiệp.</figcaption>
          </figure>

          <p>
            Ngoài ra, Lượng làm việc cho một công ty công nghệ từ năm thứ hai
            đến nay. Từ chỗ chỉ tham gia lập trình ứng dụng, website, hiện Lượng
            là nhân sự nghiên cứu AI với hướng chính là dùng Vật lý để huấn
            luyện AI hiểu đúng bản chất của thế giới.
          </p>

          <p>
            Lượng cùng đồng nghiệp đã có hai bài báo được chấp nhận tại hội nghị
            AAAI vừa diễn ra tại Singapore và AAMAS tổ chức tại Nhật Bản vào
            tháng 5 tới. Đây đều là những hội nghị uy tín hàng đầu trong lĩnh
            vực trí tuệ nhân tạo.
          </p>
          <p className="article-quote">
            "Mình thấy khá hợp với hướng nghiên cứu về AI nhưng nếu cho chọn
            lại, mình vẫn chọn học Vật lý ở bậc đại học", Lượng cho hay. "Nhờ
            học Vật lý, mình hình thành nhiều kỹ năng, tư duy phục vụ nghiên
            cứu. Mình cũng ứng dụng được Vật lý vào AI".
          </p>
          <p>
            Chàng trai Hải Phòng hy vọng thời gian tới có thêm nhiều kết quả
            nghiên cứu, đồng thời cải thiện khả năng ngoại ngữ để tìm kiếm học
            bổng du học.
          </p>

          <div className="article-author">
            <div className="article-author-img">
              <img
                src="https://res.cloudinary.com/dz9q8zkeh/image/upload/v1769940136/avatar_t%C3%A1c_gi%E1%BA%A3_ojd3kd.png"
                alt="Phùng Tuấn Hải"
              />
            </div>
            <div className="article-author-info">
              <dl>
                <dt>Phùng Tuấn Hải</dt>
                <dd>Tác giả</dd>
              </dl>
            </div>
          </div>

          <div className="article-opinions">
            <h3 className="opinion-title">
              Ý kiến ({totalOpinions.current > 0 ? totalOpinions.current : "0"})
            </h3>
            <div className="opinion-form">
              <textarea
                ref={inputRef}
                className="opinion-textarea"
                placeholder="Chia sẻ ý kiến của bạn về bài viết này..."
              ></textarea>
              <button
                type="button"
                className="opinion-submit-btn"
                onClick={handleSubmit}
              >
                Gửi ý kiến
              </button>
              <p className="opinion-note">
                Ý kiến của bạn sẽ được kiểm duyệt trước khi đăng tải.
              </p>
            </div>

            {opinions.length > 0 && (
              <ul className="opinion-list">
                {opinions.map((op) => (
                  <li key={op.id} className="opinion-item">
                    <p className="opinion-content">{op.content}</p>
                    <span className="opinion-time">{op.time}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>

        <aside className="article-sidebar">
          <h3 className="sidebar-title">Xem nhiều</h3>
          <ul className="sidebar-list">
            <li>
              <a href="#" className="sidebar-item">
                <div className="sidebar-item-image">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2026/01/18/img-2291-jpg-1768731017-176873-9503-8193-1768731762.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=9--QF77v1WnD6AEqDGifSg"
                    alt="Bác sĩ nội trú"
                  />
                </div>
                <div className="sidebar-item-title">
                  Hành trình trở thành bác sĩ nội trú xuất sắc
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <div className="sidebar-item-image">
                  {/* Reuse image or find another relevant one. I'll use a placeholder/similar one for now or try to match if I had more context, but generic fits. Using a different one from homepage content if possible or reusing. */}
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2026/01/28/d2776809-0bc1-43ec-a15c-0915b3-1913-9489-1769566173.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=VT4vRagiZDwkb927P9l_3g"
                    alt="Sinh viên"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://i1-vnexpress.vnecdn.net/2026/01/18/img-2291-jpg-1768731017-176873-9503-8193-1768731762.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=9--QF77v1WnD6AEqDGifSg";
                    }}
                  />
                </div>
                <div className="sidebar-item-title">
                  Tranh cãi sinh viên dùng công cụ cướp slot môn học
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <div className="sidebar-item-image">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2026/01/28/kimdohyeong-1769587281-1769587-9368-3384-1769587339.jpg?w=300&h=180&q=100&dpr=2&fit=crop&s=GykQEGDLu3N64I9iXCnyrQ"
                    alt="Singapore"
                  />
                </div>
                <div className="sidebar-item-title">
                  Trường Quốc tế Singapore có Thủ khoa thế giới
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <div className="sidebar-item-image">
                  <img
                    src="https://i1-vnexpress.vnecdn.net/2026/01/08/image004-1767885332-1767885459-8152-1767885516.png?w=680&h=0&q=100&dpr=1&fit=crop&s=V9lJfAcr5yUi5znGbh5QhQ"
                    alt="AI"
                  />
                </div>
                <div className="sidebar-item-title">
                  Thêm chương trình đào tạo nhân sự AI chất lượng cao
                </div>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default ArticleDetails;
