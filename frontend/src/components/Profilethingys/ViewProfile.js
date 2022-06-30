import React, { useContext, useEffect, useState } from "react";
import { SellerIdContext } from "../../contexts/SellerIdContext";

const ViewProfile = () => {
    const {sellerId} = useContext(SellerIdContext);     // id of person logged into account, and has to sell something.
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:4000/ad-api/getAds/sellerId/' + sellerId);       // fetching posts on basis of his sellerId, i.e all those posts whcih he has already sold(or posted for selling)
            const hisPosts = await response.json();
            setPosts(hisPosts);
        }
        fetchPosts();
    }, []);

    return (
        <div>
            {posts && posts.map(post => <div key={post._id}>{post.pro_name}</div>)}
            {sellerId}+
        </div>
    );
}
 
export default ViewProfile;