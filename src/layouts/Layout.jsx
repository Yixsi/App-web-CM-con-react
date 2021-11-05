import Header from "components/Header"
import Footer from "components/Footer"

function Layout ({children}) {
    return(

        <div className= "d-flex w-100 h-100 mx-auto flex-column">
            <Header/>        
                {children}       
            <Footer/>
        </div>
    )
}

export default Layout