function RatingStar({note}) {
    const stars =[]
    for (let i = 0; i < 5; i++) {
        if (i < note) {
            stars.push(<img src="../src/assets/star-active.svg"/>)
        } else {
            stars.push(<img src="../src/assets/star-default.svg"/>)
        }
    }

    return <div className="star">{stars}</div>
}

export default RatingStar