import React from 'react';

type Filter = 'All' | 'Completed' | 'Incomplete';

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const Filters: React.FC<Props> = ({ filter, setFilter }) => {
  const filters: Filter[] = ['All', 'Completed', 'Incomplete'];
  return (
    <div className="filters">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={filter === f ? 'active' : ''}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default Filters;
