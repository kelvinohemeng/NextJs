import styles from  '../../styles/Listing.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: {listings: data}
    }
}



const SubPage = ({ listings }) => {
    return ( 
        <div className="listing">
            <h1>Listing</h1>
            {listings.map((list)=>(
                <Link key={list.id} href={`/subpages/${list.id}`}  className={styles.single}>
                    <h3>{list.name}</h3>
                </Link>
            ))}
        </div>
     );
}
 
export default SubPage;