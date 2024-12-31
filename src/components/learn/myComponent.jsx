const Function = () => {
    // const a = "Hello World";
    // const a = 25;
    // const a = true;
    // const a = undefined;
    // const a = [1,2,3,4,5];
    const a = {
        name: 'Kirito Nguyen',
        age: 27
    }
    return (
        <>
            <div>{JSON.stringify(a)} Kirito Nguyen</div>
            <div>{console.log("Kirito, Ahihi")}</div>
            <div style={{borderRadius: "10px"}}>Tôi là 1 Developer</div>
        </>
    );
}

export default Function;