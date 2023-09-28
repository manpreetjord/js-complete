//Immedietly Invoked Function Expressions (IFFE)

(function gym(){ // This is a named IFFE
    console.log("DB CONNECTED");
})();


(()=>{
    // This is a unnamed IFFE
    console.log(`DB Connected two `);
})()

((name)=>{
    // This is a unnamed IFFE with parameters
    console.log(`DB Connected two ${name}`);
})("manpreet")

