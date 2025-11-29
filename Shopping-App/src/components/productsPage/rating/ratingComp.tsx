import './ratingComp.css';

export function RatingComp({rating}) {
    var fullStarCount = parseInt(rating);
    var halfStarCount = rating % 1 !== 0 ? 1 : 0;
    var emptyStarCount = 5 - fullStarCount - halfStarCount;
    var fullStar =[];
    var halfStar=[];
    var emptyStar=[];
    for (let i = 0; i < fullStarCount; i++) {
        fullStar.push(<div key={i} className="fullStar"></div>)
    }
    for (let i = 0 ; i < emptyStarCount; i++)
    {
        emptyStar.push(<div key={i} className="emptyStar"></div>)
    }
    if (halfStarCount == 1) {
        halfStar.push(<div key="half" className="halfStar"></div>);
    }


    return(    
        <>
            <div className="ratingStarsContainer">
                {fullStar}
                {halfStar}
                {emptyStar}
            </div>
        </>
    )
}