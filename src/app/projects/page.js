import Header from "../header"
import Footer from "../footer"
export default function Projects() {
    return (
        <main className="flex flex-col justify-between items-center place-content-center gap-x-8">
            <Header />
            <div>
                Project List
            </div>
            <Footer />
        </main>
    )
}