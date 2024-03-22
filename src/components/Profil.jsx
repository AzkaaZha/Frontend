/* eslint-disable react/prop-types */
function Profil(props) {
    const { name, major } = props;
    return (
        <div>
            <h1>Nama saya adalah {name}</h1>
            <p>Saya adalah seorang {major}</p>
        </div>
    )
}

export default Profil;