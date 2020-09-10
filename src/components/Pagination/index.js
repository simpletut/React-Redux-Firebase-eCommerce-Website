import React from 'react';
import './styles.scss';

const Pagination = ({
  onNextEvt,
  onPrevEvt
}) => {
  return (
    <div className="pagination">
      <ul>
        <li>
          <span onClick={() => onPrevEvt()}>
            Prev
          </span>
        </li>
        <li>
          <span onClick={() => onNextEvt()}>
            Next
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
