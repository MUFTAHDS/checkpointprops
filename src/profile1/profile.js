export default function Profile(prop) {
    return (
        <div className="App">

            <h1>ألأفندي مفتاح بالراس علي </h1>
            <img className="kk" src={prop.Photo} alt="img in src" />
            <div className="dd">
                <button onClick={prop.alert}>success</button>
            </div>

        </div >
    );
}
