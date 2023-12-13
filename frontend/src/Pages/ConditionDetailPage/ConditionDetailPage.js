import React from 'react';
import { useParams } from 'react-router-dom';

function ConditionDetailPage() {
  const { conditionId } = useParams();

  return (
    <div>
      <h1>{conditionId}</h1>
      {/* Detailed information about the condition */}
    </div>
  );
}

export default ConditionDetailPage;
