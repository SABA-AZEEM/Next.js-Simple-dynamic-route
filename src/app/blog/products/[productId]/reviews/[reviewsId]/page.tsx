export default function review ({
    params ,
} : {
    params : {
        reviewsId: string,
        productId: string,
    };
}){
    return <h1>
        Review {params.reviewsId} for product {params.productId}
    </h1>
}