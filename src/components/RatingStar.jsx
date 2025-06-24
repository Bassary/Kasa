function RatingStar({note}) {
    const stars =[]
    for (let i = 0; i < 5; i++) {
        if (i < note) {
            stars.push(<img key={i} src="../src/assets/star-active.svg" alt="notation"/>)
        } else {
            stars.push(<img key={i} src="../src/assets/star-default.svg" alt="notation"/>)
        }
    }

    return <div className="star">{stars}</div>
}

export default RatingStar