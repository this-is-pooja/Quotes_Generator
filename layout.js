import Navbar from "/navbar";
export default function Layout(props){
    return(
        <>
        <Navbar />
        {props.children}
        </>
    )
}
