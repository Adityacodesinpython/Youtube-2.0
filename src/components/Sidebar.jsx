import { Stack, colors } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = "New";

function Sidebar({ selectedCategory, setSelectedCategory }) {
    return(
        <Stack
            direction={"row"}
            sx={{
                overflowY:"auto", 
                flexDirection: {md : "column"},
                height: {sx: "auto", md: "95%" }
            }}
        >
        {categories.map((category, index)=>(
            <button 
            key={index}
            className="category-btn" 
            onClick={()=>{
                setSelectedCategory(category.name)
            }}
            style={{background: category.name === selectedCategory && "#FC1503",
             color:"white"}}
             >
                <span style={{color: category.name === selectedCategory ? "white": "red", 
                marginRight: "15px"}}>{category.icon}</span>
                <span style={{opacity: category.name === selectedCategory ? "1" : "0.8"}}>{category.name}</span>
            </button>
        ))}

        </Stack>
    )
}


export default Sidebar; 