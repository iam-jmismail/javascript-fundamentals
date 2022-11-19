/** Creating a function that returns a Promise  */
const getValueAfter2Seconds = (shouldReject = false) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!shouldReject) resolve([1, 2, 3, 4, 5]);
        else reject("Promise is rejected");
    }, 2000);
    });
}

// Using Then...Catch...Finally
getValueAfter2Seconds().then(results => {
    console.log('results', results)
}).catch((err) => {
    console.log('err', err)
}).finally(() => {
    console.log('Operation completed')
})


// Async Await 
async function main() {
    try {

        /** This Promose will be Resolved */
        const results = await getValueAfter2Seconds();
        console.log(">>> Result 1 :", results) 

        /** This Promise will be Rejected */
        const results2 = await getValueAfter2Seconds(true);
        console.log(">>> Result 2", results2) 
    } catch (error) {
        console.log("error", error) 
    }
    finally {
        console.log('Operation Completed')
    }
}

main()