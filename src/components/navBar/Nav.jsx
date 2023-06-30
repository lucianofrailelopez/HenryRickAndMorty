/* eslint-disable react/prop-types */
import SearchBar from "../Search/SearchBar";
import styles from "./Nav.module.css";

export default function Nav({onSearch}) {
    return (
        <div className={styles.containerNav}>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}