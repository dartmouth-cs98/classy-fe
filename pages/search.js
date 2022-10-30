import React, {useState} from "react"
import { H1 } from "../components/ui/typography"

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState("")
    const [tab, setTab] = useState("all")
    const tabs = ["all", "courses", "professors", "distribs"]

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    return (
        <div>
            <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={searchInput}
            />
            <h3>Recent Searches</h3>
            <H1>hello test</H1>
        </div>
    )
      
      // handle search query
    //   if (searchInput.length > 0) {
    //       countries.filter((country) => {
    //       return country.name.match(searchInput);
    //   })
}

const CourseCard = () => {

}

export default SearchPage