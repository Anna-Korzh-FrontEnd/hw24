const Title = ({ name,  type="normal" }) => {
    const className = type === "bold" ? "bold" : "";

    if (type === "bold") {
        return (
            <p className={className}>
                 {name}
            </p>
        );
    }

    return (
        <p className={className} >
             {name}
        </p>
    );
};

export default Title;
