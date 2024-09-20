import { useState } from 'react'

const WeatherSearch = (props) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        // Stop the default
        e.preventDefault();

        // Run the fetch function
props.fetchData(city)
        // Set the city
        setCity('')
    }

    return (
        <section>
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Enter a city</label>
                <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit"></button>
            </form>
        </section>
    );

}

export default WeatherSearch;