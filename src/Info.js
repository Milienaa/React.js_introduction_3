import Title from "./Title";
import Author from "./Author";
import Genre from "./Genre";
import Pages from "./Pages";

export default function Info() {
    return(
        <>
            <div className="info__description">
                <Title/>
                <Author/>
                <Genre/>
                <Pages/>
            </div>
        </>
    );
}