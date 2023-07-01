/* eslint-disable react/prop-types */
import SearchBar from "../Search/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({onSearch}) {
    return (
        <div className={styles.containerNav}>
            <NavLink to={"/About"}>About</NavLink>
            <NavLink to={"/Home"}>Home</NavLink>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}