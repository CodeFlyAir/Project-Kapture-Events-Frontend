import React, { useState } from 'react';

const EventFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState('Upcoming Events');
  const [selectedSubFilter, setSelectedSubFilter] = useState('');

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);

    // Disable subfilters if 'Past Events' is clicked
    if (filter === 'Past Events') {
      setSelectedSubFilter(null);
    }
  };

  const handleSubFilterClick = (subFilter) => {
    setSelectedSubFilter(subFilter);
  };

  return (
    <div>
      <div className='flex justify-around mt-10 mb-3'>
        {/* Filter Options */}
        <div>
          <button
            className={`mx-10 font-poppins w-[187px] h-[33px] font-semibold text-xl m-auto ml-10 ${
              selectedFilter === 'My Registration' ? 'text-pinky' : 'text-sm_pink'
            }`}
            onClick={() => handleFilterClick('My Registration')}
          >
            My Registration
          </button>
          <button
            className={`mx-10 font-poppins w-[128px] h-[33px] font-semibold text-xl m-auto ${
              selectedFilter === 'Past Events' ? 'text-pinky' : 'text-sm_pink'
            }`}
            onClick={() => handleFilterClick('Past Events')}
          >
            Past Events
          </button>
          <span className="text-pinky text-2xl font-bold">Organizer Dashboard</span>
          <button
            className={`mx-10 font-poppins w-[187px] h-[33px] font-semibold text-xl m-auto ${
              selectedFilter === 'Upcoming Events' ? 'text-pinky' : 'text-sm_pink'
            } `}
            onClick={() => handleFilterClick('Upcoming Events')}
          >
            Upcoming Events
          </button>
          <button
            className={`mx-10 font-poppins w-[187px] h-[33px] font-semibold text-xl m-auto ${
              selectedFilter === 'Create New Event' ? 'text-pinky' : 'text-sm_pink'
            }`}
            onClick={() => handleFilterClick('Create New Event')}
          >
            Create New Event
          </button>
        </div>
      </div>
      {/* Subfilter Options */}
      <div>
        <button
          className={`text-xl font-medium font-poppins border-[1px] border-pinky w-40 h-10 rounded-xl text-center text-white ml-10 mt-3 ${
            selectedSubFilter === 'Approved' && selectedFilter !== 'Past Events'
              ? 'bg-pinky '
              : ''
          }`}
          onClick={() => handleSubFilterClick('Approved')}
        >
          Approved
        </button>
        <button
          className={`text-xl font-medium border-[1px] border-pinky font-poppins w-40 h-10 rounded-xl text-center text-white ml-12 ${
            selectedSubFilter === 'Pending' && selectedFilter !== 'Past Events'
              ? 'bg-pinky'
              : ''
          }`}
          onClick={() => handleSubFilterClick('Pending')}
        >
          Pending
        </button>
        <button
          className={`text-xl font-medium border-[1px] border-pinky font-poppins w-40 h-10 rounded-xl text-center text-white ml-12 ${
            selectedSubFilter === 'Past' && selectedFilter !== 'Past Events'
              ? 'bg-pinky'
              : ''
          }`}
          onClick={() => handleSubFilterClick('Past')}
        >
          Past
        </button>
      </div>
    </div>
  );
};

export default EventFilter;