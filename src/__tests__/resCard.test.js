const { render ,screen} = require("@testing-library/react")
import Rescards from "../Components/ResCards"

it("Should render the resturant card component with props" , () => {
    render(<Rescards/>)
})