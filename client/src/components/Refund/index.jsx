import React from "react";
import {
  RefundContent,
  RefundColumn,
  RefundWrapper,
  RefundTitle,
} from "./styles";

const RefundContainer = () => {
  return (
    <RefundContent>
      <RefundTitle>환불 정책</RefundTitle>
      <RefundWrapper>
        <RefundColumn>
          이용 2일 전 <span>70%</span> 환불
        </RefundColumn>
        <RefundColumn>
          이용 1일 전 <span>50%</span> 환불
        </RefundColumn>
        <RefundColumn>
          이용 당일 환불 <span>불가</span>
        </RefundColumn>
      </RefundWrapper>
    </RefundContent>
  );
};

export default RefundContainer;
