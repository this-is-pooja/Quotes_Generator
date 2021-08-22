import Navbar from "./navbar";
function Layout(props){
    return(
        <>
        <Navbar />
        {props.children}
        </>
    )
}
export default Layout