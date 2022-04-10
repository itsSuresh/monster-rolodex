import { Component } from "react";
import "./search-box.styles.css";


class SearchBox extends Component{
    
    render(){
        const {onSearch}=this.props;
        return(
            <div>
                 <input className={`search-box`} type="search" placeholder="monster search" onChange={onSearch}  />

            </div>
        )
    }
}

export default SearchBox;