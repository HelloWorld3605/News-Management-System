import React from "react";

import "./PublicArrowUp.css";

const PublicArrowUp = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#top"
      id="to_top"
      className="scroll-to-top"
      title="Lên đầu trang"
      onClick={scrollToTop}
      aria-label="Lên đầu trang"
    >
      <ion-icon name="arrow-up-outline"></ion-icon>
    </a>
  );
};

export default PublicArrowUp;
