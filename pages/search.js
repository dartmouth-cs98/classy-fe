import React, {useState} from "react"
import { H1, H2, H3, H4, B1, B3, TextLabel, A } from "../components/ui/typography"

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState("")
    // const [tab, setTab] = useState("all")
    // const tabs = ["all", "courses", "professors", "distribs"]

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    return (
        <div>
            <input
            autoFocus
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={searchInput}
            />


            <H3>Recent Searches</H3>
            <A>See All</A>
            {/* Load course cards */}
            <CourseCard id="Cosc 98" title="Introductory Economics" distrib="TLA" quality="4.0" reviews="4" />

            <H3>Browse Departments</H3>
            {/* Load all departments */}
            <DepartmentCard name="Computer Science" id="COSC"/>


        </div>
    )
      
      // handle search query
    //   if (searchInput.length > 0) {
    //       countries.filter((country) => {
    //       return country.name.match(searchInput);
    //   })
}

const CourseCard = (props) => {
    return (
        <div>
            <TextLabel color="var(--dark-grey)">{props.distrib}</TextLabel>

            <div>
                <TextLabel color="var(--darkest-grey)">Quality</TextLabel>
                <H1 color="var(--dark-orange)">{props.quality}</H1>
                <B3 color="var(--dark-grey)">{props.reviews} Reviews</B3>
                
                <H4>{props.id}</H4>
                <B1>{props.name}</B1>
            </div>


        </div>
    )
}

const DepartmentCard = (props) => {
    return (
        <div>
            <H3 color="var(--dark-orange)">{props.name}</H3>
            <H2 color="var(--dark-orange)">{props.id}</H2>


        </div>
    )
}

export default SearchPage