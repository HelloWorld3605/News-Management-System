import React from "react";

const SearchSection = () => {
  return (
    <div className="search-section">
      <div className="search-container">
        <input type="search" placeholder="Bạn muốn tìm kiếm tin tức gì ?" />
      </div>

      <div className="search-dropdown">
        {/* <ul>
                    <li></li>
                </ul> */}
      </div>
    </div>
  );
};

export default SearchSection;
