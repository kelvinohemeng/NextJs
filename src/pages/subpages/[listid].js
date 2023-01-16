export const getStaticPaths = async ()=> {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();


    //telling next to find the specific data for which the page is going to be 
    //built on
    const paths = data.map(list =>{
        return {
            params: { listid: list.id.toString() }
        }
    })


    //returning the paths  from this function so we can use it to build
    // the pages
    return {
        paths,
        fallback: false
    }

}


export const getStaticProps = async (context) => {
    const id = context.params.listid;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()


    return{
        props: { listing: data }
    }
}



const Details = ({ listing }) => {
    
    return ( 
        <div>
            <h1>{ listing.name }</h1>
            <p>{ listing.email }</p>
            <p>{ listing.website }</p>
            <p>{ listing.address.city }</p>
        </div>
     );
}
 
export default Details;