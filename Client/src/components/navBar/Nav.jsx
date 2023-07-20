/* eslint-disable react/prop-types */
import SearchBar from "../Search/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({onSearch, out}) {
    return (
        <div className={styles.containerNavBar}>
            <div className={styles.containerNav}>
                <NavLink to={"/About"}>About</NavLink>
                <NavLink to={"/Home"}>Home</NavLink>
                <NavLink to={"/Favorite"}>Favorite</NavLink>
                <SearchBar onSearch={onSearch} />
                <button className={styles.buttonLogOut} onClick={out}>LOGOUT</button>
            </div>
        </div>
    );
}