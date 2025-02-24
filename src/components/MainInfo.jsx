import Contact from "./Contact";
import { object, string } from 'prop-types';
import '../css/Skill.css'

function MainInfo({ language, data }) {

    function getAge(birthday) {
        let today = new Date();
        let age = today.getFullYear() - birthday.getFullYear();
        var m = today.getMonth() - birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }
        return age;
    }

    return (
        <>
            <div className="ed skill">
                <img src="/profile-photo.jpg" alt="Antonina Zdebska profile photo" width={100} />
                <h1>{data.profile.name[language]}</h1>
                <p>{data.profile.position[language]}, {getAge(new Date(data.profile.birthday))} {language == 'ua' ? "роки" : "y.o."}</p>
                <Contact type="linkedin" contacts={data.contacts} />
                <Contact type="github" contacts={data.contacts} />
                <Contact type="instagram" contacts={data.contacts} />
                <Contact type="facebook" contacts={data.contacts} />
            </div>
        </>
    );
}

MainInfo.propTypes = {
    language: string,
    data: object,
};

export default MainInfo;