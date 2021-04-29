import React, {useState, useEffect} from 'react';
import {Link } from 'react-router-dom'

function Home(props) {
    const [calendar, setCalendar] = useState([])
    const [searchString, setSearchString] = useState('')
  
        endpoint: '/search'
        
    }

    useEffect(() => {
        fetch("https://calendarific.com/api/v2/holidays?api_key=8c5d4ff71a10949e1ed38e697ff19bff2b603915&country=US&year=2019")
        .then((result) => result.json())

        .then((result) => {
            console.log(result)
            setCalendar(result.response.holidays);
            
        })

        .catch(console.error)
    
    }, []);

    // if(calendar.length === 0)
    // return (
    //     <p>Calendars</p>
        
    // )
    return (
        <div>
            <p>This is a searchable site for calander holidays.
                Use the search bar to search for holidays. 
                You can search by day, month, location, and type of holiday.
            </p>

            <section className="container">
          {calendar.map((holidays) => {
            return (
              <Link to={`/Main/${holidays.id}`} key={holidays.id}>
              </Link>
            );
          })}
        </section>

        </div>
    );
}

export default Home;