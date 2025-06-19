import Banner from "../Banner"
import Card from "../Card"
import '../style/main.scss'

function Home() {
    return (
        <main className="content">
            <Banner imageSrc={'./src/assets/fond-nature.jpg'} title={"Chez vous, partout et ailleurs"}/>
            <Card />
        </main>
    )
}

export default Home