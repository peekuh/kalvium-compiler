import "./index.scss"
import { RightComponent } from "./rightComponent";
export const HomeScreen = () => {
    return (
        <div className="home-container">
            <div className="left-container">
                <div className="items-container">
                    <img src="Kalvium-Logo-SVG.png" />
                    {/* <h2>code.compile.debug</h2> */}
                    <button>
                    <span class="material-icons">add</span>
                    <span>Create Folder</span>
                    </button>
                </div>
            </div>
            <RightComponent />
        </div>
    );
}