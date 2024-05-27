import React, { useEffect, useRef } from "react";
import "./DonateContainer.css";

function DonateContainer() {

  return (
    <div className="donate-container pad-LR">
      <p className="donate-title">돌팔이로 쌓인 누적 기부금</p>
      <p className="money">₩<span>30000</span></p>
      <img src="images/icons/오리가 꽥꽥.png" className="duckImg" alt="오리가 꽥꽥" />
      <p className="test">
        행운의 돌 구매 즉시 500원, 커뮤니티에 선행 인증글 작성 후 관리자 승인시 1000원이 적립됩니다.<br />
        기부금은 행운이 필요한 소아 난치병 환자들을 위해 사용됩니다.
      </p>
    </div>
  );
}

export default DonateContainer;
