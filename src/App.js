import Profile from "./profile1/profile.js";
import Photo from "./profile1/R.png";
import "./App.css";
export default function App() {
    var x = "imen soltani";
    const funprop = () => {
        return alert("أحذر هنالك خطر ");
    };
    return (
        <div className="App">
            <Profile OLI="MY MUFTAH66" Photo={Photo} alert={funprop} />
        </div>
    );
}
