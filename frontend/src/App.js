import React, { useState, useEffect } from 'react';

async function getData(sortCriteria) {
  const apiUrl = `http://localhost:3000/shifts?sort_by=${sortCriteria}`;
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

function calcTotalDayDuration(day, data) {
  let totalDuration = 0;
  data.forEach((employee) => {
    employee.shifts.forEach((shift) => {
      if (shift.day === day) {
        totalDuration += shift.duration;
      }
    });
  });

  return totalDuration;
}

function calcEmployeeDayDuration(name, data) {
  let totalDuration = 0;

  data.forEach((employee) => {
    employee.shifts.forEach((shift) => {
      if (employee.name === name) {
        totalDuration += shift.duration;
      }
    });
  });

  return totalDuration;
}

function dayHeaders(data) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days.map((day, index) => (
    <th key={index} style={{backgroundColor: "Gray"}}>{day} ({calcTotalDayDuration(index, data)} Hours)</th>
  ));
}

function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortCriteria, setSortCriteria] = useState('first_name');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData(sortCriteria);
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();  
  }, [sortCriteria]);

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div key="schedule">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortCriteria} onChange={handleSortChange}>
            <option value="first_name">Name</option>
            <option value="last_name">Last Name</option>
          </select>
          <table border="1">
            <thead>
              <tr>
                <th style={{backgroundColor: "Gray"}}></th>
                {dayHeaders(data)}
              </tr>
            </thead>
            <tbody>
              {data.map((employee) => (
                <tr key={employee.name}>
                  <td>{employee.name} ({calcEmployeeDayDuration(employee.name, data)} hrs)</td>

                  {[...Array(7)].map((_, index) => {
                    const shift = employee.shifts.find((shift) => shift.day === index);
                    return (
                      <td key={index} style={{ backgroundColor: shift ? shift.color : 'transparent' }}>
                        <center>
                          {shift ? `${shift.start_at} - ${shift.end_at}` : ''}
                        </center>
                        <br/>
                        <center>
                          {shift ? shift.role : ''}
                        </center>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default Page;
